import type { AccountBrief } from "@/types";
import { koData, type AccountI18n } from "@/data/i18n/ko";
export type { AccountI18n };

export type Lang = string;

/**
 * Returns a localized copy of the brief for the given language.
 * Falls back to English for any field without a translation.
 */
export function localizeBrief(brief: AccountBrief, accountId: string, lang: Lang): AccountBrief {
  if (lang === "en") return brief;

  const translation = lang === "ko" ? koData[accountId] : undefined;
  if (!translation) return brief;

  return applyKoTranslation(brief, translation);
}

function applyKoTranslation(brief: AccountBrief, t: AccountI18n): AccountBrief {
  // Deep merge: override each field if Korean translation exists, otherwise keep English.
  // For arrays (painPoints, triggers, objectives, opportunities, stakeholders):
  //   merge element-by-element, overriding only the fields present in the translation.
  return {
    ...brief,
    account: {
      ...brief.account,
      company: t.company,
      industry: t.industry,
      situation: t.situation ?? brief.account.situation,
      painPoints: t.painPoints
        ? brief.account.painPoints.map((pt, i) => ({
            ...pt,
            title: t.painPoints![i]?.title ?? pt.title,
            detail: t.painPoints![i]?.detail ?? pt.detail,
          }))
        : brief.account.painPoints,
      triggers: t.triggers
        ? brief.account.triggers.map((tr, i) => ({
            ...tr,
            dateLabel: t.triggers![i]?.dateLabel ?? tr.dateLabel,
            title: t.triggers![i]?.title ?? tr.title,
            detail: t.triggers![i]?.detail ?? tr.detail,
            impact: t.triggers![i]?.impact ?? tr.impact,
          }))
        : brief.account.triggers,
      objectives: t.objectives
        ? brief.account.objectives.map((obj, i) => ({
            ...obj,
            title: t.objectives![i]?.title ?? obj.title,
            targetKpi: t.objectives![i]?.targetKpi ?? obj.targetKpi,
            rationale: t.objectives![i]?.rationale ?? obj.rationale,
          }))
        : brief.account.objectives,
    },
    opportunities: t.opportunities
      ? brief.opportunities.map((opp, i) => ({
          ...opp,
          useCase: t.opportunities![i]?.useCase ?? opp.useCase,
          description: t.opportunities![i]?.description ?? opp.description,
        }))
      : brief.opportunities,
    stakeholders: t.stakeholders
      ? brief.stakeholders.map((s, i) => ({
          ...s,
          title: t.stakeholders![i]?.title ?? s.title,
          keyConcern: t.stakeholders![i]?.keyConcern ?? s.keyConcern,
          recommendedApproach:
            t.stakeholders![i]?.recommendedApproach ?? s.recommendedApproach,
        }))
      : brief.stakeholders,
    dealStrategy: t.dealStrategy
      ? {
          ...brief.dealStrategy,
          positioning: t.dealStrategy.positioning ?? brief.dealStrategy.positioning,
          objections: t.dealStrategy.objections
            ? brief.dealStrategy.objections.map((o, i) => ({
                ...o,
                objection: t.dealStrategy!.objections![i]?.objection ?? o.objection,
                response:  t.dealStrategy!.objections![i]?.response  ?? o.response,
              }))
            : brief.dealStrategy.objections,
          agenda: t.dealStrategy.agenda
            ? brief.dealStrategy.agenda.map((a, i) => ({
                ...a,
                topic:   t.dealStrategy!.agenda![i]?.topic   ?? a.topic,
                outcome: t.dealStrategy!.agenda![i]?.outcome ?? a.outcome,
              }))
            : brief.dealStrategy.agenda,
        }
      : brief.dealStrategy,
    pilotPlan: t.pilotPlan
      ? {
          ...brief.pilotPlan,
          scope: t.pilotPlan.scope ?? brief.pilotPlan.scope,
          phases: t.pilotPlan.phases
            ? brief.pilotPlan.phases.map((ph, i) => ({
                ...ph,
                name:         t.pilotPlan!.phases![i]?.name         ?? ph.name,
                objective:    t.pilotPlan!.phases![i]?.objective    ?? ph.objective,
                deliverables: t.pilotPlan!.phases![i]?.deliverables ?? ph.deliverables,
              }))
            : brief.pilotPlan.phases,
          roi: t.pilotPlan.roi
            ? { ...brief.pilotPlan.roi, ...t.pilotPlan.roi }
            : brief.pilotPlan.roi,
          executiveSummary: t.pilotPlan.executiveSummary ?? brief.pilotPlan.executiveSummary,
          followUpEmail: t.pilotPlan.followUpEmail
            ? { ...brief.pilotPlan.followUpEmail, ...t.pilotPlan.followUpEmail }
            : brief.pilotPlan.followUpEmail,
        }
      : brief.pilotPlan,
  };
}

/**
 * Returns the localized company name for display in navigation/headers.
 * Uses koData if available, otherwise returns the English name.
 */
export function localizeCompanyName(
  accountId: string,
  englishName: string,
  lang: Lang
): string {
  if (lang === "en") return englishName;
  if (lang === "ko") return koData[accountId]?.company ?? englishName;
  return englishName;
}

/**
 * Returns the localized industry name.
 */
export function localizeIndustry(industry: string, lang: Lang): string {
  if (lang === "en") return industry;
  if (lang === "ko") {
    const map: Record<string, string> = {
      Semiconductor: "반도체",
      "Consumer Electronics": "소비자가전",
      Automotive: "자동차",
      "Home Appliance & HVAC": "가전·공조",
      Telecom: "통신",
      "Energy & Power Equipment": "에너지·발전설비",
      "Power Utility": "전력",
      "Logistics & Fulfillment": "물류",
      Gaming: "게임",
      Banking: "은행",
      Securities: "증권",
      Robotics: "로보틱스",
    };
    return map[industry] ?? industry;
  }
  return industry;
}
