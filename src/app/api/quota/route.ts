import { NextRequest, NextResponse } from "next/server";
import { getQuota } from "@/lib/rate-limit";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "127.0.0.1";

  const quota = getQuota(ip);
  return NextResponse.json({
    remaining: quota.remaining,
    limit: quota.limit,
    resetAt: quota.resetAt,
  });
}
