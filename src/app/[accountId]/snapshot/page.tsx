import { notFound } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccount } from "@/data";

const severityStyles = {
  High: {
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    dot: "bg-rose-500"
  },
  Med: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    dot: "bg-amber-500"
  },
  Low: {
    badge: "border-sky-200 bg-sky-50 text-sky-700",
    dot: "bg-sky-500"
  }
} as const;

type Props = { params: Promise<{ accountId: string }> };

export default async function SnapshotPage({ params }: Props) {
  const { accountId } = await params;
  const brief = getAccount(accountId);

  if (!brief) notFound();

  const { account, pilotPlan } = brief;

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
            <CardDescription className="text-base leading-7 text-slate-600">
              These are not generic modernization issues. These are live operational pressures — tied to costs, timelines, and risks the account is already managing.
            </CardDescription>
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
            <CardDescription className="text-base leading-7 text-slate-300">
              Tie every AI conversation directly to the KPIs this account will defend in operating reviews — not to AI capability in the abstract.
            </CardDescription>
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
