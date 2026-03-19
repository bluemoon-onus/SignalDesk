"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  BarChart3,
  BriefcaseBusiness,
  Bookmark,
  BookmarkCheck,
  Compass,
  Loader2,
  Sparkles,
  Target,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { OpportunityBoard } from "./opportunity-board";
import { StrategyBrief } from "./strategy-brief";
import { PilotBrief } from "./pilot-brief";

// ─── Industry options ─────────────────────────────────────────────────────────
const INDUSTRIES = [
  "Semiconductor",
  "Consumer Electronics",
  "Automotive",
  "Home Appliance & HVAC",
  "Telecom",
  "Energy & Power Equipment",
  "Power Utility",
  "Logistics & Fulfillment",
  "Gaming",
  "Banking",
  "Securities",
  "Robotics",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Software & SaaS",
  "E-Commerce",
  "Insurance",
  "Real Estate",
  "Media & Entertainment",
  "Other",
];

// ─── Provider definitions ─────────────────────────────────────────────────────
const PROVIDERS = [
  { key: "claude",  label: "Claude",  enabled: true  },
  { key: "openai",  label: "GPT-4o",  enabled: false },
  { key: "gemini",  label: "Gemini",  enabled: false },
] as const;

type Provider = (typeof PROVIDERS)[number]["key"];

// ─── Saved account helpers ────────────────────────────────────────────────────
export interface SavedAccount {
  id: string;
  company: string;
  industry: string;
  savedAt: number;
  brief: AccountBrief;
}

export function loadSavedAccounts(): SavedAccount[] {
  try {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("sd_saved_accounts") ?? "[]") as SavedAccount[];
  } catch {
    return [];
  }
}

function persistSavedAccount(brief: AccountBrief): string {
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
  // Notify AppShell to refresh its saved accounts list
  window.dispatchEvent(new Event("sd:accounts-updated"));
  return id;
}

// ─── Tab types ────────────────────────────────────────────────────────────────
type BriefTab = "snapshot" | "opportunities" | "strategy" | "pilot";

// ─── Snapshot view ────────────────────────────────────────────────────────────
function GeneratedSnapshot({ brief }: { brief: AccountBrief }) {
  const { account, pilotPlan } = brief;
  const { t } = useLanguage();

  const severityStyles = {
    High: { badge: "border-rose-200 bg-rose-50 text-rose-700",   dot: "bg-rose-500" },
    Med:  { badge: "border-amber-200 bg-amber-50 text-amber-700", dot: "bg-amber-500" },
    Low:  { badge: "border-sky-200 bg-sky-50 text-sky-700",       dot: "bg-sky-500" },
  } as const;

  const severityLabel = { High: t("severity.high"), Med: t("severity.med"), Low: t("severity.low") };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_420px]">
        <Card className="border-white/80 bg-white/92">
          <CardHeader className="space-y-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("snapshot.label")}</div>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <CardTitle className="text-5xl text-slate-950">{account.company}</CardTitle>
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600">
                  {account.industry}
                </span>
              </div>
              <CardDescription className="max-w-4xl text-lg leading-8 text-slate-600">
                {account.situation}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{t("snapshot.commercial_urgency")}</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{t("snapshot.commercial_urgency.body")}</p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{t("snapshot.pilot_window")}</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {t("snapshot.pilot_window.body", { weeks: String(pilotPlan.weeks) })}
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{t("snapshot.financial_upside")}</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {t("snapshot.financial_upside.body", { value: pilotPlan.roi.projectedValue })}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200/80 bg-gradient-to-br from-amber-50 via-amber-100/80 to-orange-100/70">
          <CardHeader className="space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-800">{t("snapshot.triggers.label")}</div>
            <CardTitle className="text-3xl text-amber-950">{t("snapshot.triggers.title")}</CardTitle>
            <CardDescription className="text-base leading-7 text-amber-900/80">{t("snapshot.triggers.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {account.triggers.map((trigger) => (
              <div key={trigger.title} className="rounded-[24px] border border-amber-200/80 bg-white/65 p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700">{trigger.dateLabel}</div>
                <div className="mt-2 text-sm font-semibold text-amber-950">{trigger.title}</div>
                <p className="mt-2 text-sm leading-6 text-amber-900/80">{trigger.detail}</p>
                <div className="mt-3 rounded-xl border border-amber-200/80 bg-white/60 px-3 py-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-700">{t("snapshot.triggers.implication")}</div>
                  <p className="mt-1 text-xs leading-5 text-amber-900">{trigger.impact}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <Card className="border-white/80 bg-white/92">
          <CardHeader className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("snapshot.pain.label")}</div>
            <CardTitle className="text-3xl text-slate-950">{t("snapshot.pain.title")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {account.painPoints.map((painPoint) => {
              const style = severityStyles[painPoint.severity];
              return (
                <div key={painPoint.title} className="rounded-[26px] border border-slate-200 bg-slate-50/70 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-slate-950">{painPoint.title}</div>
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}>
                      <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                      {severityLabel[painPoint.severity]}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{painPoint.detail}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="border-white/80 bg-slate-950 text-white">
          <CardHeader className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">{t("snapshot.objectives.label")}</div>
            <CardTitle className="text-3xl text-white">{t("snapshot.objectives.title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {account.objectives.map((objective) => (
              <div key={objective.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="max-w-[75%] text-lg font-semibold text-white">{objective.title}</div>
                  <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {objective.targetKpi}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{objective.rationale}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ─── Main modal component ─────────────────────────────────────────────────────
export function GenerateModal() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [situation, setSituation] = useState("");
  const [provider] = useState<Provider>("claude"); // Claude only for now
  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [brief, setBrief] = useState<AccountBrief | null>(null);
  const [activeTab, setActiveTab] = useState<BriefTab>("snapshot");
  const [quota, setQuota] = useState<{ remaining: number; limit: number } | null>(null);
  const [needsConfirm, setNeedsConfirm] = useState(false);
  const [suggestedName, setSuggestedName] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Listen for external "open with brief" events (triggered from saved accounts in sidebar)
  useEffect(() => {
    const handler = (e: Event) => {
      const externalBrief = (e as CustomEvent<AccountBrief>).detail;
      setBrief(externalBrief);
      setOpen(true);
      setActiveTab("snapshot");
      setSavedId(null);
    };
    window.addEventListener("sd:open-brief", handler);
    return () => window.removeEventListener("sd:open-brief", handler);
  }, []);

  // Fetch quota whenever modal opens
  useEffect(() => {
    if (!open) return;
    fetch("/api/quota")
      .then((r) => r.json())
      .then((data: { remaining: number; limit: number }) =>
        setQuota({ remaining: data.remaining, limit: data.limit })
      )
      .catch(() => {});
  }, [open]);

  const handleValidateAndGenerate = useCallback(async () => {
    if (!company.trim()) {
      setError(lang === "ko" ? "회사명을 입력해 주세요." : "Company name is required.");
      return;
    }
    setError(null);
    setNeedsConfirm(false);
    setSuggestedName(null);

    // Step 1: Validate company name
    setValidating(true);
    try {
      const res = await fetch("/api/validate-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: company.trim(), lang }),
      });
      const data = (await res.json()) as {
        recognized: boolean;
        normalizedName: string;
        confidence: "high" | "medium" | "low";
      };

      if (data.confidence === "low") {
        setSuggestedName(data.normalizedName || null);
        setValidating(false);
        setNeedsConfirm(true);
        return;
      }

      // Auto-correct if model returned a cleaner name
      if (data.normalizedName && data.normalizedName !== company.trim()) {
        setCompany(data.normalizedName);
      }
    } catch {
      // Validation failed silently — proceed
    } finally {
      setValidating(false);
    }

    await doGenerate(company.trim());
  }, [company, industry, situation, lang]); // eslint-disable-line

  const doGenerate = useCallback(
    async (companyName: string) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: companyName,
            industry,
            situation: situation.trim(),
            lang,
          }),
        });
        const data = (await res.json()) as {
          brief?: AccountBrief;
          remaining?: number;
          error?: string;
        };
        if (!res.ok || data.error) throw new Error(data.error ?? `HTTP ${res.status}`);
        if (!data.brief) throw new Error("No brief returned from API.");

        setBrief(data.brief);
        setActiveTab("snapshot");
        setSavedId(null);
        if (data.remaining !== undefined) {
          setQuota((prev) => (prev ? { ...prev, remaining: data.remaining! } : null));
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : lang === "ko"
            ? "생성 실패. 잠시 후 다시 시도해 주세요."
            : "Generation failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [industry, situation, lang]
  );

  const handleConfirmProceed = useCallback(async () => {
    setNeedsConfirm(false);
    await doGenerate(company.trim());
  }, [company, doGenerate]);

  const handleSave = useCallback(() => {
    if (!brief || savedId) return;
    const id = persistSavedAccount(brief);
    setSavedId(id);
  }, [brief, savedId]);

  const handleClose = () => {
    setOpen(false);
    setError(null);
    setNeedsConfirm(false);
    setSuggestedName(null);
    if (!brief) {
      setCompany("");
      setSituation("");
    }
  };

  const handleReset = () => {
    setBrief(null);
    setCompany("");
    setSituation("");
    setError(null);
    setNeedsConfirm(false);
    setSuggestedName(null);
    setSavedId(null);
    setActiveTab("snapshot");
  };

  const briefTabs: {
    key: BriefTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { key: "snapshot",      label: t("nav.snapshot"),      icon: BarChart3 },
    { key: "opportunities", label: t("nav.opportunities"), icon: Target },
    { key: "strategy",      label: t("nav.strategy"),      icon: Compass },
    { key: "pilot",         label: t("nav.pilot"),         icon: BriefcaseBusiness },
  ];

  // ── Quota badge ────────────────────────────────────────────────────────────
  const QuotaBadge = () => {
    if (!quota) return (
      <span className="ml-auto text-xs text-slate-500">{t("gen.tickets.unknown")}</span>
    );
    if (quota.remaining === 0) return (
      <span className="ml-auto rounded-full border border-rose-300/60 bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600">
        {t("gen.tickets.zero")}
      </span>
    );
    return (
      <span className={cn(
        "ml-auto rounded-full border px-2 py-0.5 text-xs font-semibold",
        quota.remaining === 1
          ? "border-amber-300/60 bg-amber-50 text-amber-700"
          : "border-emerald-300/60 bg-emerald-50 text-emerald-700"
      )}>
        {t("gen.tickets", { count: String(quota.remaining) })}
      </span>
    );
  };

  const modalContent = open ? (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm lg:p-8">
      <div className="w-full max-w-5xl">

        {/* Modal header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-400">
              {t("gen.label")}
            </div>
            <h2 className="text-xl font-semibold text-white">
              {brief
                ? t("gen.title.result", { company: brief.account.company })
                : t("gen.title")}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {brief && !savedId && (
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-1.5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-400/20"
              >
                <Bookmark className="h-3.5 w-3.5" />
                {t("gen.save")}
              </button>
            )}
            {savedId && (
              <span className="flex items-center gap-1.5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                <BookmarkCheck className="h-3.5 w-3.5" />
                {t("gen.saved")}
              </span>
            )}
            {brief && (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10"
              >
                {t("gen.another")}
              </button>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Form ── */}
        {!brief && (
          <Card className="border-white/10 bg-slate-900">

            {/* Company confirmation overlay */}
            {needsConfirm && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-slate-900/95 backdrop-blur-sm">
                <div className="max-w-md space-y-5 p-8 text-center">
                  <div className="text-3xl">🤔</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{t("gen.confirm.title")}</h3>
                    <p className="text-sm leading-6 text-slate-400">
                      {t("gen.confirm.body", { company })}
                    </p>
                    {suggestedName && (
                      <p className="text-sm font-semibold text-emerald-400">
                        {t("gen.confirm.suggest", { name: suggestedName })}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setNeedsConfirm(false);
                        if (suggestedName) setCompany(suggestedName);
                      }}
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10"
                    >
                      {t("gen.confirm.edit")}
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmProceed}
                      className="flex-1 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                    >
                      {t("gen.confirm.proceed")}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <CardHeader className="space-y-2">
              <div className="flex items-center gap-3">
                <CardTitle className="text-2xl text-white">{t("gen.form.title")}</CardTitle>
                <QuotaBadge />
              </div>
              <CardDescription className="text-slate-400">{t("gen.form.desc")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Company */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                    {t("gen.company")} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !loading && !validating && handleValidateAndGenerate()}
                    placeholder={t("gen.company.placeholder")}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">{t("gen.industry")}</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-white/30 focus:outline-none"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className="bg-slate-800 text-white">{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Situation */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  {t("gen.situation")} <span className="text-slate-500">{t("gen.situation.opt")}</span>
                </label>
                <textarea
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  placeholder={t("gen.situation.placeholder")}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                />
              </div>

              {/* Provider toggle */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">{t("gen.model")}</label>
                <div className="flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                  {PROVIDERS.map(({ key, label, enabled }) => (
                    <div key={key} className="relative flex-1" title={!enabled ? t("gen.model.coming_soon") : undefined}>
                      <button
                        type="button"
                        disabled={!enabled}
                        className={cn(
                          "w-full rounded-lg py-2 text-xs font-semibold transition-all",
                          key === provider && enabled
                            ? "bg-white text-slate-950 shadow-sm"
                            : enabled
                            ? "text-slate-400 hover:text-white"
                            : "cursor-not-allowed text-slate-600 opacity-50"
                        )}
                      >
                        {label}
                        {!enabled && (
                          <span className="ml-1 rounded-full border border-slate-700 px-1 py-px text-[9px] font-normal text-slate-500">
                            {t("gen.model.coming_soon")}
                          </span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
                  {error}
                </div>
              )}

              {/* Generate button */}
              <Button
                type="button"
                onClick={handleValidateAndGenerate}
                disabled={loading || validating || (quota !== null && quota.remaining === 0)}
                className="w-full gap-2 bg-white text-slate-950 hover:bg-slate-100 disabled:opacity-40"
              >
                {validating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("gen.validating")}
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t("gen.loading")}
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    {t("gen.submit")}
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-slate-500">{t("gen.footer")}</p>
            </CardContent>
          </Card>
        )}

        {/* Generated brief */}
        {brief && (
          <div className="space-y-4">
            {/* Tab navigation */}
            <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5">
              {briefTabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all",
                    activeTab === key
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div>
              {activeTab === "snapshot"      && <GeneratedSnapshot brief={brief} />}
              {activeTab === "opportunities" && <OpportunityBoard brief={brief} />}
              {activeTab === "strategy"      && <StrategyBrief brief={brief} />}
              {activeTab === "pilot"         && <PilotBrief brief={brief} />}
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3 text-left text-sm font-semibold text-white transition-all hover:from-slate-800 hover:to-slate-700"
      >
        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
        {t("gen.title")}
      </button>

      {/* Modal rendered via portal to avoid sidebar stacking context */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
