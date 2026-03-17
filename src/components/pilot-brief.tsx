import { CheckCircle2, Download, Mail, TimerReset } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AIDealArchitectBrief } from "@/types";

export function PilotBrief({ brief }: { brief: AIDealArchitectBrief }) {
  const { pilotPlan } = brief;

  return (
    <div className="space-y-6">
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Pilot and ROI brief</div>
            <CardTitle className="text-4xl text-slate-950">A six-week path to prove value and earn expansion</CardTitle>
            <CardDescription className="max-w-4xl text-base leading-7 text-slate-600">
              This page is meant to give an executive sponsor and delivery team the same answer: what the pilot does,
              what it needs, how success will be measured, and why the economics justify moving now.
            </CardDescription>
          </div>
          <Button type="button" className="gap-2 bg-slate-950 text-white hover:bg-slate-900">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </CardHeader>
      </Card>

      <Card className="border-white/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Executive summary</div>
          <CardTitle className="text-3xl text-white">Three sentences a C-level sponsor can repeat internally</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {pilotPlan.executiveSummary.map((sentence, index) => (
            <div key={sentence} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Pitch {index + 1}</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">{sentence}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">6-week pilot scope</div>
          <CardTitle className="text-3xl text-slate-950">Timeline and gantt view</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-600">
            The pilot is intentionally time-boxed to show whether SK Hynix should move from concept to scale.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="min-w-[860px] space-y-4">
            <div className="grid grid-cols-[220px_repeat(6,minmax(0,1fr))] gap-3">
              <div />
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={`week-${index + 1}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                >
                  Week {index + 1}
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

                {Array.from({ length: 6 }, (_, index) => {
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
                          <div className="text-sm font-semibold">Active phase</div>
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

      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Card className="border-white/80 bg-white/92">
          <CardHeader className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Required data and resources</div>
            <CardTitle className="text-3xl text-slate-950">What the pilot needs on day one</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pilotPlan.requiredResources.map((resource) => (
              <div key={resource.item} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-slate-950">{resource.item}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{resource.detail}</p>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Owner: {resource.owner}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="border-white/80 bg-white/92">
            <CardHeader className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Success metrics</div>
              <CardTitle className="text-3xl text-slate-950">Targets that justify scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pilotPlan.successMetrics.map((metric) => (
                <div key={metric.metric} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="text-lg font-semibold text-slate-950">{metric.metric}</div>
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {metric.target}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{metric.businessMeaning}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-slate-950 text-white">
            <CardHeader className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">ROI calculator</div>
              <CardTitle className="text-3xl text-white">Economic case for moving forward</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Investment</div>
                  <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.investment}</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Projected savings</div>
                  <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.projectedSavings}</div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Payback period</div>
                  <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.paybackPeriod}</div>
                </div>
                <div className="rounded-[22px] border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">3-year value</div>
                  <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.threeYearValue}</div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Projected first-year return</div>
                <div className="mt-2 text-2xl font-semibold text-white">{pilotPlan.roi.projectedValue}</div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {pilotPlan.roi.valueDrivers.map((driver) => (
                    <p key={driver}>{driver}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
            <Mail className="h-4 w-4 text-slate-700" />
            Follow-up email draft
          </div>
          <CardTitle className="text-3xl text-slate-950">Ready-to-send note after the meeting</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Subject</div>
            <div className="mt-2 text-sm font-semibold text-slate-950">{pilotPlan.followUpEmail.subject}</div>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Body</div>
            <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{pilotPlan.followUpEmail.body}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
