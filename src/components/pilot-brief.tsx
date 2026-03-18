import { CheckCircle2, Download, Mail, TimerReset } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief } from "@/types";

export function PilotBrief({ brief }: { brief: AccountBrief }) {
  const { pilotPlan, account } = brief;

  return (
    <div className="space-y-6">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Pilot and ROI brief</div>
            <CardTitle className="text-4xl text-slate-950">
              A {pilotPlan.weeks}-week path to prove value and earn expansion
            </CardTitle>
            <CardDescription className="max-w-4xl text-base leading-7 text-slate-600">
              Designed to give an executive sponsor and delivery team the same answer: what the pilot does,
              what success looks like, and why the economics justify moving now rather than next quarter.
            </CardDescription>
          </div>
          <Button type="button" className="gap-2 bg-slate-950 text-white hover:bg-slate-900">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </CardHeader>
      </Card>

      {/* ── Executive summary ────────────────────────────────────────── */}
      <Card className="border-white/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Executive summary</div>
          <CardTitle className="text-3xl text-white">Three sentences a C-level sponsor can repeat internally</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {pilotPlan.executiveSummary.map((sentence, index) => (
            <div key={sentence} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Key message {index + 1}</div>
              <p className="mt-3 text-sm leading-7 text-slate-200">{sentence}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ── Pilot scope ──────────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Pilot scope</div>
          <CardTitle className="text-3xl text-slate-950">
            What is in and what is deliberately out
          </CardTitle>
          <CardDescription className="max-w-3xl text-base leading-7 text-slate-600">
            A focused scope protects the pilot from scope creep and gives the economic buyer a clear line
            between the pilot commitment and a full-scale expansion decision.
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
            {pilotPlan.weeks}-week pilot timeline
          </div>
          <CardTitle className="text-3xl text-slate-950">From kickoff to scale decision</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-600">
            Every phase has a defined objective and named deliverables — tight enough to fit inside the
            current {account.company} engagement, clear enough to hold up in an executive operating review.
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
                          <div className="text-sm font-semibold">Deliverables</div>
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
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">ROI model</div>
          <CardTitle className="text-3xl text-white">Economic case for moving forward</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-400">
            Conservative estimates based on publicly available benchmark data for comparable enterprise deployments
            in this sector.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">3-year value</div>
              <div className="mt-2 text-lg font-semibold text-white">{pilotPlan.roi.threeYearValue}</div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Projected first-year return</div>
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
            Follow-up email draft
          </div>
          <CardTitle className="text-3xl text-slate-950">Ready-to-send note after the first meeting</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-600">
            Reinforces the commercial logic, names the next step, and keeps the momentum from the room
            alive before the next calendar opens.
          </CardDescription>
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
