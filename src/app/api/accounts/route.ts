/**
 * /api/accounts — CRUD for generated (AI-created) accounts.
 *
 * GET    /api/accounts           → list all saved accounts
 * POST   /api/accounts           → save a new account { id, company, industry, savedAt, brief }
 * DELETE /api/accounts?id=gen-xx → delete a specific account
 */

import { NextRequest, NextResponse } from "next/server";
import { kvGetAccounts, kvSaveAccount, kvDeleteAccount, kvAvailable, type StoredAccount } from "@/lib/kv";

// ── GET ───────────────────────────────────────────────────────────────────────
export async function GET() {
  if (!kvAvailable()) {
    return NextResponse.json({ accounts: [], kvAvailable: false });
  }
  try {
    const accounts = await kvGetAccounts();
    return NextResponse.json({ accounts, kvAvailable: true });
  } catch (err) {
    console.error("[/api/accounts GET]", err);
    return NextResponse.json({ accounts: [], kvAvailable: false });
  }
}

// ── POST ──────────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  if (!kvAvailable()) {
    return NextResponse.json({ ok: false, reason: "kv_not_configured" });
  }
  try {
    const account = (await request.json()) as StoredAccount;
    if (!account?.id || !account?.brief) {
      return NextResponse.json({ ok: false, reason: "invalid_payload" }, { status: 400 });
    }
    await kvSaveAccount(account);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/accounts POST]", err);
    return NextResponse.json({ ok: false, reason: String(err) }, { status: 500 });
  }
}

// ── DELETE ────────────────────────────────────────────────────────────────────
export async function DELETE(request: NextRequest) {
  if (!kvAvailable()) {
    return NextResponse.json({ ok: false, reason: "kv_not_configured" });
  }
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ ok: false, reason: "missing_id" }, { status: 400 });
    }
    await kvDeleteAccount(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/accounts DELETE]", err);
    return NextResponse.json({ ok: false, reason: String(err) }, { status: 500 });
  }
}
