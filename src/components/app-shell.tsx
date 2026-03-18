"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BriefcaseBusiness, ChevronDown, Compass, Target } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { accountList, getAccount } from "@/data";
import { cn } from "@/lib/utils";

const navSections = [
  { key: "snapshot", label: "Snapshot", description: "Why this account, why now", icon: BarChart3 },
  { key: "opportunities", label: "Opportunities", description: "Where to open the conversation", icon: Target },
  { key: "strategy", label: "Strategy", description: "Stakeholders, objections, talk track", icon: Compass },
  { key: "pilot", label: "Pilot", description: "Scope, ROI, and the follow-up email", icon: BriefcaseBusiness }
] as const;

type AppShellProps = {
  accountId: string;
  children: React.ReactNode;
};

export function AppShell({ accountId, children }: AppShellProps) {
  const pathname = usePathname();
  const [switcherOpen, setSwitcherOpen] = useState(false);

  const currentBrief = getAccount(accountId);
  const currentAccount = accountList.find((a) => a.id === accountId) ?? accountList[0];

  return (
    <div className="min-h-screen bg-background bg-mesh-grid text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-6 p-4 lg:flex-row lg:p-6">
        {/* ── Sidebar ─────────────────────────────────────────────── */}
        <Card className="flex w-full flex-col justify-between border-white/70 bg-white/80 shadow-panel lg:w-[300px]">
          <div className="space-y-8 p-6">
            {/* Brand */}
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                SignalDesk
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">AI Deal Architect</h1>
                <p className="text-sm leading-6 text-slate-600">
                  From first signal to signed pilot — a full-cycle account brief built for enterprise AI sales.
                </p>
              </div>
            </div>

            {/* Account switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSwitcherOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors hover:bg-white"
              >
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Active account</div>
                  <div className="mt-0.5 truncate text-sm font-semibold text-slate-950">{currentAccount.company}</div>
                  <div className="truncate text-xs text-slate-500">{currentAccount.industry}</div>
                </div>
                <ChevronDown
                  className={cn("ml-2 h-4 w-4 shrink-0 text-slate-400 transition-transform", switcherOpen && "rotate-180")}
                />
              </button>

              {switcherOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                  {accountList.map((acct) => (
                    <Link
                      key={acct.id}
                      href={`/${acct.id}/snapshot`}
                      onClick={() => setSwitcherOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-slate-50",
                        acct.id === accountId ? "bg-slate-50" : ""
                      )}
                    >
                      <div className="min-w-0">
                        <div className={cn("font-semibold", acct.id === accountId ? "text-slate-950" : "text-slate-700")}>
                          {acct.company}
                        </div>
                        <div className="text-xs text-slate-500">{acct.industry}</div>
                      </div>
                      {acct.id === accountId && (
                        <span className="ml-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navSections.map(({ key, label, description, icon: Icon }) => {
                const href = `/${accountId}/${key}`;
                const isActive = pathname === href;

                return (
                  <Link
                    key={key}
                    href={href}
                    className={cn(
                      "group flex items-start gap-3 rounded-2xl border border-transparent px-4 py-3 transition-all",
                      isActive
                        ? "border-slate-200 bg-slate-950 text-white shadow-lg"
                        : "text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 rounded-xl p-2 transition-colors",
                        isActive ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold">{label}</div>
                      <div
                        className={cn(
                          "text-xs leading-5",
                          isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-600"
                        )}
                      >
                        {description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-slate-200/80 px-6 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Account brief</p>
            <p className="mt-2 text-sm text-slate-600">
              Pre-call to post-pilot — every section answers a question the customer is already asking.
            </p>
          </div>
        </Card>

        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col gap-4">
          <Card className="border-white/70 bg-white/80 px-5 py-4 shadow-panel">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Account focus</p>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{currentAccount.company}</h2>
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {currentAccount.industry}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {currentBrief?.pilotPlan.roi.projectedValue ?? "ROI in brief"}
              </div>
            </div>
          </Card>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
