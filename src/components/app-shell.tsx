"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BriefcaseBusiness, ChevronDown, Compass, Globe, Target } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { accountList, getAccount } from "@/data";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { GenerateModal } from "./generate-modal";

// ─── Industry color palette ──────────────────────────────────────────────────
type IndustryColor = { dot: string; badge: string; activeDot: string };

const industryColors: Record<string, IndustryColor> = {
  Semiconductor:               { dot: "bg-blue-500",    badge: "border-blue-200 bg-blue-50 text-blue-700",         activeDot: "bg-blue-400" },
  "Consumer Electronics":      { dot: "bg-violet-500",  badge: "border-violet-200 bg-violet-50 text-violet-700",   activeDot: "bg-violet-400" },
  Automotive:                  { dot: "bg-zinc-600",    badge: "border-zinc-200 bg-zinc-100 text-zinc-700",         activeDot: "bg-zinc-400" },
  "Home Appliance & HVAC":     { dot: "bg-teal-500",    badge: "border-teal-200 bg-teal-50 text-teal-700",         activeDot: "bg-teal-400" },
  Telecom:                     { dot: "bg-indigo-500",  badge: "border-indigo-200 bg-indigo-50 text-indigo-700",   activeDot: "bg-indigo-400" },
  "Energy & Power Equipment":  { dot: "bg-orange-500",  badge: "border-orange-200 bg-orange-50 text-orange-700",   activeDot: "bg-orange-400" },
  "Power Utility":             { dot: "bg-amber-500",   badge: "border-amber-200 bg-amber-50 text-amber-700",      activeDot: "bg-amber-400" },
  "Logistics & Fulfillment":   { dot: "bg-sky-500",     badge: "border-sky-200 bg-sky-50 text-sky-700",            activeDot: "bg-sky-400" },
  Gaming:                      { dot: "bg-purple-500",  badge: "border-purple-200 bg-purple-50 text-purple-700",   activeDot: "bg-purple-400" },
  Banking:                     { dot: "bg-emerald-600", badge: "border-emerald-200 bg-emerald-50 text-emerald-700",activeDot: "bg-emerald-400" },
  Securities:                  { dot: "bg-cyan-500",    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",         activeDot: "bg-cyan-400" },
  Robotics:                    { dot: "bg-rose-500",    badge: "border-rose-200 bg-rose-50 text-rose-700",         activeDot: "bg-rose-400" },
};

const defaultColor: IndustryColor = {
  dot: "bg-slate-400",
  badge: "border-slate-200 bg-slate-100 text-slate-600",
  activeDot: "bg-slate-400",
};

function getIndustryColor(industry: string): IndustryColor {
  return industryColors[industry] ?? defaultColor;
}

// ─── Industry groups ──────────────────────────────────────────────────────────
const industryOrder = [
  "Semiconductor", "Consumer Electronics", "Automotive", "Home Appliance & HVAC",
  "Telecom", "Energy & Power Equipment", "Power Utility", "Logistics & Fulfillment",
  "Gaming", "Banking", "Securities", "Robotics",
];

function buildGroups() {
  const map = new Map<string, typeof accountList>();
  for (const industry of industryOrder) {
    const accounts = accountList.filter((a) => a.industry === industry);
    if (accounts.length > 0) map.set(industry, accounts);
  }
  for (const acct of accountList) {
    if (!industryOrder.includes(acct.industry)) {
      const existing = map.get(acct.industry) ?? [];
      map.set(acct.industry, [...existing, acct]);
    }
  }
  return map;
}

const accountGroups = buildGroups();

// ─── Nav section keys ─────────────────────────────────────────────────────────
const navKeys = ["snapshot", "opportunities", "strategy", "pilot"] as const;
type NavKey = (typeof navKeys)[number];

const navIcons: Record<NavKey, React.ComponentType<{ className?: string }>> = {
  snapshot: BarChart3,
  opportunities: Target,
  strategy: Compass,
  pilot: BriefcaseBusiness,
};

// ─── Props ────────────────────────────────────────────────────────────────────
type AppShellProps = { accountId: string; children: React.ReactNode };

export function AppShell({ accountId, children }: AppShellProps) {
  const pathname = usePathname();
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const currentBrief = getAccount(accountId);
  const currentAccount = accountList.find((a) => a.id === accountId) ?? accountList[0];
  const currentColor = getIndustryColor(currentAccount.industry);

  return (
    <div className="min-h-screen bg-background bg-mesh-grid text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-5 p-4 lg:flex-row lg:p-6">

        {/* ── Sidebar ───────────────────────────────────────────────────── */}
        <Card className="flex w-full flex-col justify-between border-white/70 bg-white/80 shadow-panel lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-[288px] lg:shrink-0">
          <div className="space-y-7 overflow-y-auto p-6">

            {/* Brand */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                SignalDesk
              </div>
              <div className="space-y-1.5">
                <h1 className="text-xl font-semibold tracking-tight text-slate-950">AI Deal Architect</h1>
                <p className="text-xs leading-5 text-slate-500">{t("brand.tagline")}</p>
              </div>
            </div>

            {/* Account switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSwitcherOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors hover:bg-white focus:outline-none"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", currentColor.dot)} />
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-500">
                      {t("shell.active_account")}
                    </div>
                    <div className="mt-0.5 truncate text-sm font-semibold text-slate-950">{currentAccount.company}</div>
                    <div className="truncate text-xs text-slate-500">{currentAccount.industry}</div>
                  </div>
                </div>
                <ChevronDown className={cn("ml-2 h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200", switcherOpen && "rotate-180")} />
              </button>

              {switcherOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                  <div className="max-h-[480px] overflow-y-auto py-1">
                    {Array.from(accountGroups.entries()).map(([industry, accounts], groupIndex) => {
                      const color = getIndustryColor(industry);
                      return (
                        <div key={industry}>
                          {groupIndex > 0 && <div className="mx-3 my-1 border-t border-slate-100" />}
                          <div className="flex items-center gap-2 px-4 pb-1 pt-2">
                            <span className={cn("h-1.5 w-1.5 rounded-full", color.dot)} />
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">{industry}</span>
                          </div>
                          {accounts.map((acct) => (
                            <Link
                              key={acct.id}
                              href={`/${acct.id}/snapshot`}
                              onClick={() => setSwitcherOpen(false)}
                              className={cn(
                                "flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-slate-50",
                                acct.id === accountId ? "bg-slate-50" : ""
                              )}
                            >
                              <span className={cn("font-medium", acct.id === accountId ? "text-slate-950" : "text-slate-700")}>
                                {acct.company}
                              </span>
                              {acct.id === accountId && (
                                <span className={cn("ml-2 h-2 w-2 shrink-0 rounded-full", color.activeDot)} />
                              )}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="space-y-1.5">
              {navKeys.map((key) => {
                const href = `/${accountId}/${key}`;
                const isActive = pathname === href;
                const Icon = navIcons[key];

                return (
                  <Link
                    key={key}
                    href={href}
                    className={cn(
                      "group flex items-start gap-3 rounded-xl border border-transparent px-3.5 py-3 text-sm transition-all",
                      isActive
                        ? "border-slate-200 bg-slate-950 text-white shadow-md"
                        : "text-slate-600 hover:border-slate-100 hover:bg-slate-50 hover:text-slate-950"
                    )}
                  >
                    <div className={cn(
                      "mt-0.5 rounded-lg p-1.5 transition-colors",
                      isActive ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-slate-700"
                    )}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-semibold leading-tight">{t(`nav.${key}`)}</div>
                      <div className={cn(
                        "text-xs leading-4",
                        isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-500"
                      )}>
                        {t(`nav.${key}.desc`)}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar footer */}
          <div className="space-y-3 border-t border-slate-100 px-6 py-4">
            <GenerateModal />
            <p className="text-xs leading-5 text-slate-400">{t("shell.footer_note")}</p>
          </div>
        </Card>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col gap-4">

          {/* Top bar */}
          <Card className="border-white/70 bg-white/80 shadow-panel">
            <div className="flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
                  {t("shell.account_focus")}
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">{currentAccount.company}</h2>
                  <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold", currentColor.badge)}>
                    <span className={cn("h-1.5 w-1.5 rounded-full", currentColor.dot)} />
                    {currentAccount.industry}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* ROI badge */}
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50/60 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-800">
                    {currentBrief?.pilotPlan.roi.projectedValue ?? "ROI in brief"}
                  </span>
                  <span className="text-xs text-emerald-600">{t("shell.year1_value")}</span>
                </div>

                {/* Language toggle */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLangOpen((prev) => !prev)}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    <Globe className="h-3.5 w-3.5 text-slate-400" />
                    {lang === "en" ? "EN" : "KO"}
                    <ChevronDown className={cn("h-3 w-3 text-slate-400 transition-transform", langOpen && "rotate-180")} />
                  </button>
                  {langOpen && (
                    <div className="absolute right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                      {(["en", "ko"] as const).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => { setLang(l); setLangOpen(false); }}
                          className={cn(
                            "flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-slate-50",
                            lang === l ? "font-semibold text-slate-950" : "text-slate-600"
                          )}
                        >
                          {lang === l && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                          {l === "en" ? "English" : "한국어"}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
