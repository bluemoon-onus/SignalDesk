/**
 * brief-store.ts
 *
 * Hybrid account-brief resolver.
 * Checks the static in-memory registry first, then falls back to
 * localStorage for AI-generated accounts (id prefix: "gen-").
 */

import { getAccount } from "@/data";
import type { AccountBrief } from "@/types";

export type { AccountBrief };

export interface SavedAccount {
  id: string;
  company: string;
  industry: string;
  savedAt: number;
  brief: AccountBrief;
}

// ─── localStorage helpers ─────────────────────────────────────────────────────

export function loadSavedAccounts(): SavedAccount[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(
      localStorage.getItem("sd_saved_accounts") ?? "[]"
    ) as SavedAccount[];
  } catch {
    return [];
  }
}

export function saveBrief(brief: AccountBrief): string {
  const id = `gen-${Date.now()}`;
  const accounts = loadSavedAccounts();
  accounts.push({
    id,
    company: brief.account.company,
    industry: brief.account.industry,
    savedAt: Date.now(),
    brief,
  });
  localStorage.setItem("sd_saved_accounts", JSON.stringify(accounts));
  window.dispatchEvent(new Event("sd:accounts-updated"));
  return id;
}

export function deleteSavedAccount(id: string): void {
  const updated = loadSavedAccounts().filter((a) => a.id !== id);
  localStorage.setItem("sd_saved_accounts", JSON.stringify(updated));
  window.dispatchEvent(new Event("sd:accounts-updated"));
}

// ─── Primary resolver ─────────────────────────────────────────────────────────

export function getBrief(id: string): AccountBrief | undefined {
  const staticBrief = getAccount(id);
  if (staticBrief) return staticBrief;

  if (typeof window !== "undefined") {
    return loadSavedAccounts().find((a) => a.id === id)?.brief;
  }

  return undefined;
}
