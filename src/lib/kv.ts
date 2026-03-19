/**
 * kv.ts — Upstash Redis wrapper for server-side account persistence.
 *
 * Required env vars (set in Vercel dashboard + .env.local):
 *   UPSTASH_REDIS_REST_URL   — e.g. https://xxx.upstash.io
 *   UPSTASH_REDIS_REST_TOKEN — Upstash REST token
 *
 * Falls back gracefully when env vars are not set (returns empty list).
 * This lets the app run locally without Redis configured.
 */

import { Redis } from "@upstash/redis";
import type { AccountBrief } from "@/types";

// ─── Stored account shape ─────────────────────────────────────────────────────
export interface StoredAccount {
  id: string;
  company: string;
  industry: string;
  savedAt: number;
  brief: AccountBrief;
}

// ─── Redis key ────────────────────────────────────────────────────────────────
const ACCOUNTS_KEY = "sd:generated_accounts";

// ─── Lazy Redis client (only instantiated if env vars are present) ────────────
function getClient(): Redis | null {
  const url   = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// ─── Public helpers ───────────────────────────────────────────────────────────

export async function kvGetAccounts(): Promise<StoredAccount[]> {
  const redis = getClient();
  if (!redis) return [];
  try {
    const raw = await redis.get<StoredAccount[]>(ACCOUNTS_KEY);
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

export async function kvSaveAccount(account: StoredAccount): Promise<void> {
  const redis = getClient();
  if (!redis) return;
  const accounts = await kvGetAccounts();
  // Replace if same ID already exists, otherwise append
  const updated = accounts.filter((a) => a.id !== account.id);
  updated.push(account);
  await redis.set(ACCOUNTS_KEY, updated);
}

export async function kvDeleteAccount(id: string): Promise<void> {
  const redis = getClient();
  if (!redis) return;
  const accounts = await kvGetAccounts();
  const updated = accounts.filter((a) => a.id !== id);
  await redis.set(ACCOUNTS_KEY, updated);
}

export function kvAvailable(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  );
}
