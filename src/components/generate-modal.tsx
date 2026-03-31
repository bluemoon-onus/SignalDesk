"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Loader2,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { saveBrief } from "@/lib/brief-store";
import type { AccountBrief } from "@/types";

// ─── Industry options ─────────────────────────────────────────────────────────
const INDUSTRIES = [
  "Semiconductor", "Consumer Electronics", "Automotive", "Home Appliance & HVAC",
  "Telecom", "Energy & Power Equipment", "Power Utility", "Logistics & Fulfillment",
  "Gaming", "Banking", "Securities", "Robotics", "Healthcare", "Retail",
  "Manufacturing", "Software & SaaS", "E-Commerce", "Insurance",
  "Real Estate", "Media & Entertainment", "Other",
];

// ─── Provider definitions ─────────────────────────────────────────────────────
const PROVIDERS = [
  { key: "claude", label: "Claude",  enabled: true  },
  { key: "openai", label: "GPT-4o",  enabled: false },
  { key: "gemini", label: "Gemini",  enabled: false },
] as const;

type Provider = (typeof PROVIDERS)[number]["key"];

// ─── Main modal component ─────────────────────────────────────────────────────
export function GenerateModal({ variant = "sidebar" }: { variant?: "sidebar" | "header" }) {
  const { t, lang } = useLanguage();
  const router      = useRouter();
  const [open, setOpen]           = useState(false);
  const [mounted, setMounted]     = useState(false);
  const [company, setCompany]     = useState("");
  const [industry, setIndustry]   = useState(INDUSTRIES[0]);
  const [situation, setSituation] = useState("");
  const [provider]                = useState<Provider>("claude");
  const [loading, setLoading]     = useState(false);
  const [validating, setValidating] = useState(false);
  const [progressIdx, setProgressIdx] = useState(0);
  const [error, setError]         = useState<string | null>(null);
  const [quota, setQuota]         = useState<{ remaining: number; limit: number } | null>(null);
  const [needsConfirm, setNeedsConfirm] = useState(false);
  const [suggestedName, setSuggestedName] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Progress step cycling during generation
  const progressSteps = lang === "ko"
    ? [
        "회사 정보 조사 중...",
        "페인 포인트 분석 중...",
        "이해관계자 맵 구성 중...",
        "반론 및 대응 전략 작성 중...",
        "미팅 어젠다 설계 중...",
        "파일럿 플랜 수립 중...",
        "ROI 모델 산출 중...",
        "임원 요약 및 후속 이메일 작성 중...",
        "브리프 최종 검토 중...",
      ]
    : [
        "Researching company profile...",
        "Identifying pain points...",
        "Building stakeholder map...",
        "Drafting objection responses...",
        "Designing meeting agenda...",
        "Structuring pilot plan...",
        "Calculating ROI model...",
        "Writing executive summary & email...",
        "Finalizing brief...",
      ];

  useEffect(() => {
    if (!loading) { setProgressIdx(0); return; }
    const interval = setInterval(() => {
      setProgressIdx((prev) => (prev + 1) % progressSteps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [loading, progressSteps.length]);

  // Fetch quota when modal opens
  useEffect(() => {
    if (!open) return;
    fetch("/api/quota")
      .then((r) => r.json())
      .then((data: { remaining: number; limit: number }) => setQuota(data))
      .catch(() => {});
  }, [open]);

  const doGenerate = useCallback(
    async (companyName: string) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company: companyName, industry, situation: situation.trim(), lang }),
        });
        const data = (await res.json()) as {
          brief?: AccountBrief;
          remaining?: number;
          error?: string;
        };
        if (!res.ok || data.error) throw new Error(data.error ?? `HTTP ${res.status}`);
        if (!data.brief) throw new Error("No brief returned from API.");

        // Auto-save locally and persist to server-side KV
        const savedAt = Date.now();
        const genId = saveBrief(data.brief);
        fetch("/api/accounts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: genId,
            company: data.brief.account.company,
            industry: data.brief.account.industry,
            savedAt,
            brief: data.brief,
          }),
        }).catch(() => {});

        if (data.remaining !== undefined) {
          setQuota((prev) => prev ? { ...prev, remaining: data.remaining! } : null);
        }
        setOpen(false);
        setCompany("");
        setSituation("");
        router.push(`/${genId}/snapshot`);
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
    [industry, situation, lang, router]
  );

  const handleValidateAndGenerate = useCallback(async () => {
    if (!company.trim()) {
      setError(lang === "ko" ? "회사명을 입력해 주세요." : "Company name is required.");
      return;
    }
    setError(null);
    setNeedsConfirm(false);
    setSuggestedName(null);

    // Validate company name
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

      if (data.normalizedName && data.normalizedName !== company.trim()) {
        setCompany(data.normalizedName);
      }
    } catch {
      // Validation failed silently — proceed
    } finally {
      setValidating(false);
    }

    await doGenerate(company.trim());
  }, [company, lang, doGenerate]);

  const handleConfirmProceed = useCallback(async () => {
    setNeedsConfirm(false);
    await doGenerate(company.trim());
  }, [company, doGenerate]);

  const handleClose = () => {
    if (loading || validating) return;
    setOpen(false);
    setError(null);
    setNeedsConfirm(false);
    setSuggestedName(null);
  };

  // ── Quota badge ────────────────────────────────────────────────────────────
  const QuotaBadge = () => {
    if (!quota) return <span className="ml-auto text-xs text-slate-500">{t("gen.tickets.unknown")}</span>;
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm lg:p-8">
      <div className="w-full max-w-2xl">

        {/* Modal header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-400">{t("gen.label")}</div>
            <h2 className="text-xl font-semibold text-white">{t("gen.title")}</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            disabled={loading || validating}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form card */}
        <Card className="relative border-white/10 bg-slate-900">

          {/* Company confirmation overlay */}
          {needsConfirm && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-slate-900/95 backdrop-blur-sm">
              <div className="max-w-md space-y-5 p-8 text-center">
                <div className="text-3xl">🤔</div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{t("gen.confirm.title")}</h3>
                  <p className="text-sm leading-6 text-slate-400">{t("gen.confirm.body", { company })}</p>
                  {suggestedName && (
                    <p className="text-sm font-semibold text-emerald-400">
                      {t("gen.confirm.suggest", { name: suggestedName })}
                    </p>
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => { setNeedsConfirm(false); if (suggestedName) setCompany(suggestedName); }}
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
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
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
                <><Loader2 className="h-4 w-4 animate-spin" />{t("gen.validating")}</>
              ) : loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" />{t("gen.loading")}</>
              ) : (
                <><Sparkles className="h-4 w-4" />{t("gen.submit")}</>
              )}
            </Button>

            {/* Real-time progress steps shown while generating */}
            {loading && (
              <div className="space-y-3">
                <div className="h-0.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400/60 transition-all duration-[3200ms] ease-linear"
                    style={{ width: `${((progressIdx + 1) / progressSteps.length) * 100}%` }}
                  />
                </div>
                <p className="text-center text-xs text-slate-400 transition-opacity duration-500">
                  {progressSteps[progressIdx]}
                </p>
              </div>
            )}

            <p className="text-center text-xs text-slate-500">{t("gen.footer")}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ) : null;

  return (
    <>
      {variant === "header" ? (
        /* ── Header CTA banner ── */
        <>
          <style>{`
            @keyframes ctaBreathe {
              0%, 100% { background-color: #0f172a; box-shadow: 0 0 0 0 rgba(15,23,42,0); }
              50% { background-color: #475569; box-shadow: 0 0 0 6px rgba(15,23,42,0.08); }
            }
            .cta-breathe { animation: ctaBreathe 2.2s ease-in-out infinite; }
          `}</style>
          <div className="flex flex-col items-center gap-2.5 border-b border-slate-100 px-5 py-4 text-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900">
                {lang === "ko"
                  ? "영업이 필요한 회사를 입력하고 무료로 전략분석을 받아보세요"
                  : "Get a free AI strategy brief for any target account"}
              </p>
              <p className="text-xl text-slate-400">
                {lang === "ko"
                  ? "AI가 즉시 분석합니다 · 하루 5회 무료"
                  : "AI-generated in seconds · 5 free analyses per day"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="cta-breathe mt-1 flex items-center gap-2 rounded-2xl px-8 py-3 text-base font-bold text-white"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              {lang === "ko" ? "지금 생성하기" : "Generate Now"}
            </button>
          </div>
        </>
      ) : (
        /* ── Sidebar trigger button ── */
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3 text-left text-sm font-semibold text-white transition-all hover:from-slate-800 hover:to-slate-700"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          {t("gen.title")}
        </button>
      )}

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
