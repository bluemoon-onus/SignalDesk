"use client";

import { useState, useEffect, useCallback } from "react";
import { BarChart3, BriefcaseBusiness, Compass, Loader2, Sparkles, Target, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief } from "@/types";
import { cn } from "@/lib/utils";
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

type Provider = "claude" | "openai";
type BriefTab = "snapshot" | "opportunities" | "strategy" | "pilot";

const briefTabs: { key: BriefTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "snapshot",      label: "Snapshot",     icon: BarChart3 },
  { key: "opportunities", label: "Opportunities", icon: Target },
  { key: "strategy",      label: "Strategy",      icon: Compass },
  { key: "pilot",         label: "Pilot & ROI",   icon: BriefcaseBusiness },
];

// ─── Snapshot tab content ─────────────────────────────────────────────────────
function GeneratedSnapshot({ brief }: { brief: AccountBrief }) {
  const { account, pilotPlan } = brief;

  const severityStyles = {
    High: { badge: "border-rose-200 bg-rose-50 text-rose-700",   dot: "bg-rose-500" },
    Med:  { badge: "border-amber-200 bg-amber-50 text-amber-700", dot: "bg-amber-500" },
    Low:  { badge: "border-sky-200 bg-sky-50 text-sky-700",       dot: "bg-sky-500" },
  } as const;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_420px]">
        <Card className="border-white/80 bg-white/92">
          <CardHeader className="space-y-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Account Snapshot</div>
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
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Commercial urgency</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                The window is open because of operational pressures the account is already feeling — not because of a future transformation mandate.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Pilot window</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {pilotPlan.weeks}-week pilot designed to prove value fast enough for the current operating review — not a future transformation budget cycle.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Financial upside</div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {pilotPlan.roi.projectedValue} anchored to measurable operational improvements — not a generic AI transformation story.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200/80 bg-gradient-to-br from-amber-50 via-amber-100/80 to-orange-100/70">
          <CardHeader className="space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-amber-800">Recent trigger events</div>
            <CardTitle className="text-3xl text-amber-950">Why the window is open right now</CardTitle>
            <CardDescription className="text-base leading-7 text-amber-900/80">
              Recent events that create commercial urgency — each one increases appetite for a pilot that shows operational value without waiting for a broader program.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {account.triggers.map((trigger) => (
              <div key={trigger.title} className="rounded-[24px] border border-amber-200/80 bg-white/65 p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700">{trigger.dateLabel}</div>
                <div className="mt-2 text-sm font-semibold text-amber-950">{trigger.title}</div>
                <p className="mt-2 text-sm leading-6 text-amber-900/80">{trigger.detail}</p>
                <div className="mt-3 rounded-xl border border-amber-200/80 bg-white/60 px-3 py-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-700">Commercial implication</div>
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
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Pain points</div>
            <CardTitle className="text-3xl text-slate-950">What they are actually losing sleep over right now</CardTitle>
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
                      {painPoint.severity}
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
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Business objectives</div>
            <CardTitle className="text-3xl text-white">What leadership will actually fund</CardTitle>
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
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [situation, setSituation] = useState("");
  const [provider, setProvider] = useState<Provider>("claude");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [brief, setBrief] = useState<AccountBrief | null>(null);
  const [activeTab, setActiveTab] = useState<BriefTab>("snapshot");

  // Load persisted preferences
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedProvider = localStorage.getItem("sd_provider") as Provider | null;
    const savedKey = localStorage.getItem("sd_apikey") ?? "";
    if (savedProvider) setProvider(savedProvider);
    if (savedKey) setApiKey(savedKey);
  }, []);

  const persistPrefs = useCallback((p: Provider, key: string) => {
    localStorage.setItem("sd_provider", p);
    if (key) localStorage.setItem("sd_apikey", key);
  }, []);

  const handleGenerate = async () => {
    if (!company.trim() || !apiKey.trim()) {
      setError("Company name and API key are required.");
      return;
    }
    setLoading(true);
    setError(null);
    persistPrefs(provider, apiKey);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: company.trim(), industry, situation: situation.trim(), provider, apiKey }),
      });
      const data = (await res.json()) as { brief?: AccountBrief; error?: string };
      if (!res.ok || data.error) throw new Error(data.error ?? `HTTP ${res.status}`);
      if (!data.brief) throw new Error("No brief returned from API.");
      setBrief(data.brief);
      setActiveTab("snapshot");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed. Check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(null);
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
    setActiveTab("snapshot");
  };

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3 text-left text-sm font-semibold text-white transition-all hover:from-slate-800 hover:to-slate-700"
      >
        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
        Generate new account
      </button>

      {/* Modal overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm lg:p-8">
          <div className="w-full max-w-5xl">
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-slate-400">AI Generation</div>
                <h2 className="text-xl font-semibold text-white">
                  {brief ? `${brief.account.company} — Generated brief` : "Generate a new account brief"}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {brief && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10"
                  >
                    Generate another
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

            {/* Form */}
            {!brief && (
              <Card className="border-white/10 bg-slate-900">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl text-white">Account details</CardTitle>
                  <CardDescription className="text-slate-400">
                    Provide context and the model will generate a full MEDDPICC-structured account brief — pain points, stakeholders, objections, pilot plan, and ROI in one pass.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-5 lg:grid-cols-2">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                        Company name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Kakao Corporation"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none focus:ring-0"
                      />
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Industry</label>
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
                      Situation context <span className="text-slate-500">(optional — the model generates if left blank)</span>
                    </label>
                    <textarea
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      placeholder="Describe the account situation, key initiatives, challenges, or anything you know about this prospect. The more context you provide, the more specific and accurate the brief will be."
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                    />
                  </div>

                  {/* Provider + API key */}
                  <div className="grid gap-5 lg:grid-cols-[200px_1fr]">
                    {/* Provider toggle */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Model</label>
                      <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
                        <button
                          type="button"
                          onClick={() => setProvider("claude")}
                          className={cn(
                            "flex-1 rounded-lg py-2 text-xs font-semibold transition-all",
                            provider === "claude"
                              ? "bg-white text-slate-950 shadow-sm"
                              : "text-slate-400 hover:text-white"
                          )}
                        >
                          Claude
                        </button>
                        <button
                          type="button"
                          onClick={() => setProvider("openai")}
                          className={cn(
                            "flex-1 rounded-lg py-2 text-xs font-semibold transition-all",
                            provider === "openai"
                              ? "bg-white text-slate-950 shadow-sm"
                              : "text-slate-400 hover:text-white"
                          )}
                        >
                          GPT-4o
                        </button>
                      </div>
                    </div>

                    {/* API key */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                        {provider === "claude" ? "Anthropic" : "OpenAI"} API key{" "}
                        <span className="text-rose-400">*</span>
                        <span className="ml-2 text-slate-500">— saved to localStorage</span>
                      </label>
                      <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder={provider === "claude" ? "sk-ant-..." : "sk-..."}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                      />
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
                    onClick={handleGenerate}
                    disabled={loading || !company.trim() || !apiKey.trim()}
                    className="w-full gap-2 bg-white text-slate-950 hover:bg-slate-100 disabled:opacity-40"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating brief — this takes 20–40 seconds…
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Generate account brief
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-slate-500">
                    Your API key is sent only to {provider === "claude" ? "Anthropic" : "OpenAI"} via your own server. It is never stored externally.
                  </p>
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
      )}
    </>
  );
}
