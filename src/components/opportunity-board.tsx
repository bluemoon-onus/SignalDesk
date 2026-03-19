"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { AccountBrief, Opportunity, Priority } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

type OpportunityBoardProps = { brief: AccountBrief };
type OpportunityView = "board" | "matrix";

type PriorityMeta = {
  labelKey: string;
  colDescKey: string;
  badgeClassName: string;
  panelClassName: string;
};

const priorityMeta: Record<Priority, PriorityMeta> = {
  P1: {
    labelKey: "opp.p1.label",
    colDescKey: "opp.p1.col_desc",
    badgeClassName: "border-emerald-200 bg-emerald-50 text-emerald-700",
    panelClassName: "border-emerald-100 bg-emerald-50/70",
  },
  P2: {
    labelKey: "opp.p2.label",
    colDescKey: "opp.p2.col_desc",
    badgeClassName: "border-blue-200 bg-blue-50 text-blue-700",
    panelClassName: "border-blue-100 bg-blue-50/70",
  },
  P3: {
    labelKey: "opp.p3.label",
    colDescKey: "opp.p3.col_desc",
    badgeClassName: "border-violet-200 bg-violet-50 text-violet-700",
    panelClassName: "border-violet-100 bg-violet-50/70",
  },
};

const priorityOrder: Priority[] = ["P1", "P2", "P3"];

function ScoreDots({ value, tone }: { value: number; tone: "impact" | "difficulty" }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 10 }, (_, index) => {
        const filled = index < value;
        return (
          <span
            key={`${tone}-${index}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full border",
              tone === "impact"
                ? filled ? "border-emerald-500 bg-emerald-500" : "border-emerald-200 bg-white"
                : filled ? "border-slate-900 bg-slate-900" : "border-slate-300 bg-white"
            )}
          />
        );
      })}
    </div>
  );
}

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const { t } = useLanguage();
  const meta = priorityMeta[opportunity.priority];

  return (
    <Card className="border-white/80 bg-white/95 shadow-sm">
      <CardHeader className="space-y-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t(meta.labelKey)}</div>
            <CardTitle className="text-xl text-slate-950">{opportunity.useCase}</CardTitle>
          </div>
          <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", meta.badgeClassName)}>
            {t(meta.labelKey)}
          </span>
        </div>
        <CardDescription className="text-sm leading-6 text-slate-600">{opportunity.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 text-sm text-slate-700">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>{t("opp.impact")}</span>
            <span>{opportunity.impactScore}/10</span>
          </div>
          <ScoreDots value={opportunity.impactScore} tone="impact" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>{t("opp.difficulty")}</span>
            <span>{opportunity.difficulty}/10</span>
          </div>
          <ScoreDots value={opportunity.difficulty} tone="difficulty" />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t("opp.time_to_value")}</div>
          <div className="mt-1 text-base font-semibold text-slate-900">{opportunity.timeToValue}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function OpportunityMatrix({ opportunities }: { opportunities: Opportunity[] }) {
  const { t } = useLanguage();

  return (
    <Card className="border-white/80 bg-white/95">
      <CardHeader className="space-y-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("opp.matrix.label")}</div>
        <CardTitle className="text-3xl text-slate-950">{t("opp.matrix.title")}</CardTitle>
        <CardDescription className="max-w-3xl text-base leading-7 text-slate-600">
          {t("opp.matrix.desc")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-6">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="border-b border-r border-slate-200/90 bg-emerald-50/60" />
            <div className="border-b border-slate-200/90 bg-blue-50/60" />
            <div className="border-r border-slate-200/90 bg-white" />
            <div className="bg-amber-50/40" />
          </div>
          <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {t("opp.matrix.quick_wins")}
          </div>
          <div className="pointer-events-none absolute right-6 top-6 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {t("opp.matrix.strategic_bets")}
          </div>
          <div className="pointer-events-none absolute bottom-6 left-6 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {t("opp.matrix.incremental")}
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 rounded-full border border-amber-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
            {t("opp.matrix.defer")}
          </div>
          <div className="relative h-[560px]">
            <div className="absolute inset-y-8 left-0 flex items-center">
              <div className="-rotate-90 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("opp.impact")}</div>
            </div>
            <div className="absolute inset-x-16 bottom-0 flex justify-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("opp.difficulty")}</div>
            </div>
            <div className="absolute inset-x-16 inset-y-10">
              {opportunities.map((opportunity) => {
                const left = 8 + ((opportunity.difficulty - 1) / 9) * 84;
                const top = 92 - ((opportunity.impactScore - 1) / 9) * 84;
                const meta = priorityMeta[opportunity.priority];
                return (
                  <div
                    key={`matrix-${opportunity.useCase}`}
                    className="absolute w-[220px] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg shadow-slate-200/60">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold text-slate-950">{opportunity.useCase}</div>
                        <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold", meta.badgeClassName)}>
                          {t(meta.labelKey)}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-600">{opportunity.description}</p>
                      <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        <span>{t("opp.impact")} {opportunity.impactScore}</span>
                        <span>{t("opp.difficulty")} {opportunity.difficulty}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-10 left-16 right-0 border-b border-l border-slate-300/90" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function OpportunityBoard({ brief }: OpportunityBoardProps) {
  const [view, setView] = useState<OpportunityView>("board");
  const { t } = useLanguage();

  const opportunityGroups = priorityOrder.map((priority) => ({
    priority,
    opportunities: brief.opportunities.filter((o) => o.priority === priority),
  }));

  return (
    <div className="space-y-6">
      <Card className="border-white/80 bg-white/90">
        <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">{t("opp.board.label")}</div>
            <div className="space-y-3">
              <CardTitle className="max-w-4xl text-4xl text-slate-950">
                {t("opp.board.title", { company: brief.account.company })}
              </CardTitle>
              <CardDescription className="max-w-3xl text-base leading-7 text-slate-600">
                {t("opp.board.desc")}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
            <Button
              type="button"
              variant={view === "board" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("board")}
              className={cn(view === "board" ? "bg-slate-950 text-white hover:bg-slate-900" : "text-slate-600")}
            >
              {t("opp.board.btn")}
            </Button>
            <Button
              type="button"
              variant={view === "matrix" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("matrix")}
              className={cn(view === "matrix" ? "bg-slate-950 text-white hover:bg-slate-900" : "text-slate-600")}
            >
              {t("opp.board.matrix_btn")}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {view === "board" ? (
        <div className="grid gap-6 xl:grid-cols-3">
          {opportunityGroups.map(({ priority, opportunities }) => {
            const meta = priorityMeta[priority];
            return (
              <Card key={priority} className={cn("border-white/80", meta.panelClassName)}>
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl text-slate-950">{t(meta.labelKey)}</CardTitle>
                    <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", meta.badgeClassName)}>
                      {opportunities.length}
                    </span>
                  </div>
                  <CardDescription className="text-sm leading-6 text-slate-600">{t(meta.colDescKey)}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {opportunities.length > 0 ? (
                    opportunities.map((opportunity) => (
                      <OpportunityCard key={opportunity.useCase} opportunity={opportunity} />
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4 text-sm text-slate-500">
                      {t("opp.no_cases")}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <OpportunityMatrix opportunities={brief.opportunities} />
      )}
    </div>
  );
}
