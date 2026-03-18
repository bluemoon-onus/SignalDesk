import { Building2, Handshake, ShieldAlert, TimerReset } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief, Stakeholder, StakeholderRole, StakeholderStance } from "@/types";
import { cn } from "@/lib/utils";

const stanceStyles: Record<StakeholderStance, string> = {
  Supportive: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Neutral: "border-slate-200 bg-slate-100 text-slate-700",
  Resistant: "border-rose-200 bg-rose-50 text-rose-700"
};

const roleIcons: Record<StakeholderRole, React.ComponentType<{ className?: string }>> = {
  "Economic Buyer": Building2,
  Champion: Handshake,
  "Technical Evaluator": TimerReset,
  Blocker: ShieldAlert,
  "Operational Influencer": ShieldAlert
};

function StakeholderCard({ stakeholder }: { stakeholder: Stakeholder }) {
  const Icon = roleIcons[stakeholder.role as StakeholderRole] ?? Building2;

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white/95 p-5 shadow-sm shadow-slate-200/60">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <Icon className="h-4 w-4 text-slate-700" />
            {stakeholder.role}
          </div>
          <div className="text-xl font-semibold text-slate-950">{stakeholder.name}</div>
          <div className="text-sm text-slate-600">{stakeholder.title}</div>
        </div>
        <div className="space-y-2 text-right">
          <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", stanceStyles[stakeholder.stance])}>
            {stakeholder.stance}
          </span>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Influence: {stakeholder.influence}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Key concern</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{stakeholder.keyConcern}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Recommended approach</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{stakeholder.recommendedApproach}</p>
        </div>
      </div>
    </div>
  );
}

export function StrategyBrief({ brief }: { brief: AccountBrief }) {
  const { stakeholders, dealStrategy } = brief;

  return (
    <div className="space-y-6">
      {/* ── Stakeholder map ─────────────────────────────────────────── */}
      <Card className="border-white/80 bg-white/92">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Deal strategy</div>
          <CardTitle className="text-4xl text-slate-950">
            Who moves the deal, who validates it, and who can stall it
          </CardTitle>
          <CardDescription className="max-w-4xl text-base leading-7 text-slate-600">
            Know who can sign it, who can kill it, and who needs a different message before you walk in the room. This
            map covers the roles that determine whether the deal closes or stalls.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 xl:grid-cols-3">
            {stakeholders.map((s) => (
              <StakeholderCard key={s.name} stakeholder={s} />
            ))}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-lg shadow-slate-300/20">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Deal motion</div>
            <div className="mt-3 max-w-2xl text-2xl font-semibold">
              Anchor on fast operational value, not AI ambition.
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Win the economic buyer with a measurable outcome tied to the KPI they already own. Win the champion with
              signal quality and workflow fit that makes their job easier. Keep the technical evaluator from defining the
              entire conversation around integration risk.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── Objections + First meeting ──────────────────────────────── */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <Card className="border-white/80 bg-white/92">
          <CardHeader className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Likely objections</div>
            <CardTitle className="text-3xl text-slate-950">What they will push on and how to answer</CardTitle>
            <CardDescription className="text-base leading-7 text-slate-600">
              The goal is not to debate AI in the abstract. It is to show why this specific pilot is commercially safe,
              operationally credible, and worth executive time right now.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dealStrategy.objections.map((item) => (
              <div key={item.objection} className="grid gap-4 rounded-[26px] border border-slate-200 bg-slate-50/80 p-5">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Objection</div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{item.objection}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Suggested response</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.response}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/80 bg-slate-950 text-white">
          <CardHeader className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">First meeting agenda</div>
            <CardTitle className="text-3xl text-white">45-minute path to a real next step</CardTitle>
            <CardDescription className="text-base leading-7 text-slate-300">
              Built to leave the room with a confirmed scope, named owners, and a calendar path to pilot kickoff — not
              just a warm handshake and a follow-up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dealStrategy.agenda.map((item) => (
              <div key={`${item.time}-${item.topic}`} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-lg font-semibold text-white">{item.topic}</div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                    {item.time}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.outcome}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ── Message positioning ──────────────────────────────────────── */}
      <Card className="border-white/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <CardHeader className="space-y-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Message positioning</div>
          <CardTitle className="text-3xl text-white">The narrative that should carry this deal</CardTitle>
          <CardDescription className="text-base leading-7 text-slate-300">
            These three sentences are the core talk track for executive, technical, and commercial conversations.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-3">
          {dealStrategy.positioning.map((sentence, index) => (
            <div key={sentence} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Talk track {index + 1}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-200">{sentence}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
