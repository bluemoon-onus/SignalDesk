// ─── Primitive enums ──────────────────────────────────────────────────────────
export type Severity = "High" | "Med" | "Low";
export type Priority = "P1" | "P2" | "P3";
export type StakeholderRole =
  | "Economic Buyer"
  | "Champion"
  | "Technical Evaluator"
  | "Blocker"
  | "Operational Influencer";
export type StakeholderStance = "Supportive" | "Neutral" | "Resistant";
export type InfluenceLevel = "High" | "Medium" | "Low";

// ─── Account snapshot ─────────────────────────────────────────────────────────
export interface PainPoint {
  title: string;
  detail: string;
  severity: Severity;
}

export interface TriggerEvent {
  dateLabel: string;
  title: string;
  detail: string;
  impact: string;
}

export interface Objective {
  title: string;
  targetKpi: string;
  rationale: string;
}

// ─── Opportunities ────────────────────────────────────────────────────────────
export interface Opportunity {
  useCase: string;
  description: string;
  impactScore: number;
  difficulty: number;
  timeToValue: string;
  priority: Priority;
}

// ─── Stakeholders ─────────────────────────────────────────────────────────────
export interface Stakeholder {
  name: string;
  role: StakeholderRole;
  title: string;
  stance: StakeholderStance;
  influence: InfluenceLevel;
  keyConcern: string;
  recommendedApproach: string;
}

// ─── Deal strategy ────────────────────────────────────────────────────────────
export interface ObjectionResponse {
  objection: string;
  response: string;
}

export interface AgendaItem {
  time: string;
  topic: string;
  outcome: string;
}

export interface DealStrategy {
  objections: ObjectionResponse[];
  agenda: AgendaItem[];
  positioning: string[];
}

// ─── Pilot plan ───────────────────────────────────────────────────────────────
export interface PilotPhase {
  name: string;
  weeks: string;
  startWeek: number;
  endWeek: number;
  objective: string;
  deliverables: string[];
}

export interface RoiModel {
  investment: string;
  projectedSavings: string;
  projectedValue: string;
  paybackPeriod: string;
  threeYearValue: string;
  valueDrivers: string[];
}

export interface FollowUpEmail {
  subject: string;
  body: string;
}

export interface PilotPlan {
  weeks: number;
  scope: string[];
  phases: PilotPhase[];
  roi: RoiModel;
  executiveSummary: string[];
  followUpEmail: FollowUpEmail;
}

// ─── Top-level brief ──────────────────────────────────────────────────────────
export interface AccountBrief {
  account: {
    company: string;
    industry: string;
    situation: string;
    painPoints: PainPoint[];
    triggers: TriggerEvent[];
    objectives: Objective[];
  };
  opportunities: Opportunity[];
  stakeholders: Stakeholder[];
  dealStrategy: DealStrategy;
  pilotPlan: PilotPlan;
}

// ─── Account registry entry ───────────────────────────────────────────────────
export interface AccountMeta {
  id: string;
  company: string;
  industry: string;
}
