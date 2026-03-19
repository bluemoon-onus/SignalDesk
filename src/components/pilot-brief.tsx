"use client";

import { CheckCircle2, Download, Mail, TimerReset } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief } from "@/types";
import { useLanguage } from "@/contexts/language-context";

export function PilotBrief({ brief }: { brief: AccountBrief }) {
  const { pilotPlan, account } = brief;
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("pilot.label")}</div>
            <CardTitle className="text-4xl text-slate-950">
              {t("pilot.title", { weeks: String(pilotPlan.weeks) })}
            </CardTitle>
            <CardDescription className="max-w-4xl text-base leading-7 text-slate-600">
              {t("pilot.desc")}
            </CardDescription>
          </div>
          <Button type="button" className="gap-2 bg-slate-950 text-white hover:bg-slate-900">
            <Download className="h-4 w-4" />
            {t("pilot.download")}
          </Button>
        </CardHeader>
      </Card>

      {/* ── Executive summary ────────────────────────────────────────── */}
      <Card className="border-white/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">{t("pilot.exec_summary.label")}</div>
          <CardTitle className="text-3xl text-white">{t("pilot.exec_summary.title")}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {pilotPlan.executiveSummary.map((sentence, index) => (
            <div key={sentence} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                {t("pilot.key_message")} {index + 1}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-200">{sentence}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ── Pilot scope ──────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("pilot.scope.label")}</div>
          <CardTitle className="text-3xl text-slate-950">{t("pilot.scope.title")}</CardTitle>
          <CardDescription className="max-w-3xl text-base leading-7 text-slate-600">
            {t("pilot.scope.desc")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pilotPlan.scope.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-slate-50/80 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Gantt ────────────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
            {t("pilot.timeline.label", { weeks: String(pilotPlan.weeks) })}
          </div>
          <CardTitle className="text-3xl text-slate-950">{t("pilot.timeline.title")}</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-600">
            {t("pilot.timeline.desc", { company: account.company })}
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="min-w-[860px] space-y-4">
            <div className="grid grid-cols-[220px_repeat(6,minmax(0,1fr))] gap-3">
              <div />
              {Array.from({ length: pilotPlan.weeks }, (_, index) => (
                <div
                  key={`week-${index + 1}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                >
                  {t("pilot.week")} {index + 1}
                </div>
              ))}
            </div>

            {pilotPlan.phases.map((phase) => (
              <div key={phase.name} className="grid grid-cols-[220px_repeat(6,minmax(0,1fr))] gap-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <TimerReset className="h-4 w-4 text-slate-700" />
                    {phase.weeks}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">{phase.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{phase.objective}</p>
                </div>

                {Array.from({ length: pilotPlan.weeks }, (_, index) => {
                  const week = index + 1;
                  const active = week >= phase.startWeek && week <= phase.endWeek;

                  return (
                    <div
                      key={`${phase.name}-${week}`}
                      className={`rounded-[24px] border px-4 py-4 ${
                        active
                          ? "border-slate-900 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      {active ? (
                        <div className="space-y-3">
                          <div className="text-sm font-semibold">{t("pilot.deliverables")}</div>
                          <ul className="space-y-2 text-xs leading-5 text-slate-200">
                            {phase.deliverables.map((deliverable) => (
                              <li key={`${phase.name}-${deliverable}`}>{deliverable}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="h-full min-h-[120px]" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── ROI ──────────────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-slate-950 text-white">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">{t("pilot.roi.label")}</div>
          <CardTitle className="text-3xl text-white">{t("pilot.roi.title")}</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-400">{t("pilot.roi.desc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{t("pilot.roi.investment")}</div>
              <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.investment}</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{t("pilot.roi.savings")}</div>
              <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.projectedSavings}</div>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{t("pilot.roi.payback")}</div>
              <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.paybackPeriod}</div>
            </div>
            <div className="rounded-[22px] border border-emerald-400/20 bg-emerald-400/10 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{t("pilot.roi.3yr")}</div>
              <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.threeYearValue}</div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{t("pilot.roi.year1")}</div>
            <div className="mt-2 text-2xl font-semibold text-white">{pilotPlan.roi.projectedValue}</div>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              {pilotPlan.roi.valueDrivers.map((driver) => (
                <div key={driver} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p>{driver}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Follow-up email ──────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
            <Mail className="h-4 w-4 text-slate-700" />
            {t("pilot.email.label")}
          </div>
          <CardTitle className="text-3xl text-slate-950">{t("pilot.email.title")}</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-600">{t("pilot.email.desc")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{t("pilot.email.subject")}</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{pilotPlan.followUpEmail.subject}</div>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{t("pilot.email.body")}</div>
            <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{pilotPlan.followUpEmail.body}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
