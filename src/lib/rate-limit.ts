// ─── In-memory rate limiter ───────────────────────────────────────────────────
// Resets on server restart — acceptable for a demo deployment.
// For production, swap this Map with Redis or similar.

const ipQuota = new Map<string, { count: number; resetAt: number }>();

export const DAILY_LIMIT = parseInt(process.env.DAILY_QUOTA ?? "2", 10);

function todayMidnight(): number {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

export function getQuota(ip: string): {
  allowed: boolean;
  remaining: number;
  limit: number;
  resetAt: number;
} {
  const now = Date.now();
  const resetAt = todayMidnight();

  const entry = ipQuota.get(ip);

  if (!entry || now >= entry.resetAt) {
    // First request today — initialise (don't consume yet)
    ipQuota.set(ip, { count: 0, resetAt });
    return { allowed: true, remaining: DAILY_LIMIT, limit: DAILY_LIMIT, resetAt };
  }

  const remaining = Math.max(0, DAILY_LIMIT - entry.count);
  return { allowed: remaining > 0, remaining, limit: DAILY_LIMIT, resetAt: entry.resetAt };
}

export function consumeQuota(ip: string): void {
  const entry = ipQuota.get(ip);
  if (!entry) {
    ipQuota.set(ip, { count: 1, resetAt: todayMidnight() });
  } else {
    entry.count += 1;
  }
}
