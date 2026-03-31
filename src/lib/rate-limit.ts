import { Redis } from "@upstash/redis";

export const DAILY_LIMIT = parseInt(process.env.DAILY_QUOTA ?? "2", 10);

// ─── Redis client (null if env vars not set) ──────────────────────────────────
function getClient(): Redis | null {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function todayMidnight(): number {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

// ─── Fallback in-memory store (used when Redis is not configured) ─────────────
const ipQuota = new Map<string, { count: number; resetAt: number }>();

// ─── Public API (async — Redis I/O) ──────────────────────────────────────────

export async function getQuota(ip: string): Promise<{
  allowed: boolean;
  remaining: number;
  limit: number;
  resetAt: number;
}> {
  const now     = Date.now();
  const resetAt = todayMidnight();
  const redis   = getClient();

  if (redis) {
    const key   = `sd:ratelimit:${ip}`;
    const entry = await redis.get<{ count: number; resetAt: number }>(key);

    if (!entry || now >= entry.resetAt) {
      return { allowed: true, remaining: DAILY_LIMIT, limit: DAILY_LIMIT, resetAt };
    }

    const remaining = Math.max(0, DAILY_LIMIT - entry.count);
    return { allowed: remaining > 0, remaining, limit: DAILY_LIMIT, resetAt: entry.resetAt };
  }

  // Fallback: in-memory
  const entry = ipQuota.get(ip);
  if (!entry || now >= entry.resetAt) {
    ipQuota.set(ip, { count: 0, resetAt });
    return { allowed: true, remaining: DAILY_LIMIT, limit: DAILY_LIMIT, resetAt };
  }

  const remaining = Math.max(0, DAILY_LIMIT - entry.count);
  return { allowed: remaining > 0, remaining, limit: DAILY_LIMIT, resetAt: entry.resetAt };
}

export async function consumeQuota(ip: string): Promise<void> {
  const now     = Date.now();
  const resetAt = todayMidnight();
  const redis   = getClient();

  if (redis) {
    const key     = `sd:ratelimit:${ip}`;
    const entry   = await redis.get<{ count: number; resetAt: number }>(key);
    const current = entry && now < entry.resetAt ? entry : { count: 0, resetAt };
    const ttl     = Math.ceil((resetAt - now) / 1000);
    await redis.set(key, { count: current.count + 1, resetAt }, { ex: ttl });
    return;
  }

  // Fallback: in-memory
  const entry = ipQuota.get(ip);
  if (!entry) {
    ipQuota.set(ip, { count: 1, resetAt });
  } else {
    entry.count += 1;
  }
}
