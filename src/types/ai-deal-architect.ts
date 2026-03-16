export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type OpportunityPriority = "P1" | "P2" | "P3" | "P4";

export type StakeholderStance =
  | "Champion"
  | "Supportive"
  | "Neutral"
  | "Cautious"
  | "Skeptical";

export type InfluenceLevel = "High" | "Medium" | "Low";

export interface Account {
  company: string;
  industry: string;
  situation: string;
  painPoints: string[];
  whyNow: string[];
  triggers: string[];
}

export interface Opportunity {
  useCase: string;
  impactScore: Score;
  difficulty: Score;
  timeToValue: string;
  priority: OpportunityPriority;
}

export interface Stakeholder {
  role: string;
  stance: StakeholderStance;
  influence: InfluenceLevel;
  objections: string[];
}

export interface RoiModel {
  projectedValue: string;
  paybackPeriod: string;
  valueDrivers: string[];
  assumptions: string[];
}

export interface PilotPlan {
  scope: string[];
  weeks: number;
  successMetrics: string[];
  roi: RoiModel;
  executiveSummary: string;
}

export interface AIDealArchitectBrief {
  account: Account;
  opportunities: Opportunity[];
  stakeholders: Stakeholder[];
  pilotPlan: PilotPlan;
}
