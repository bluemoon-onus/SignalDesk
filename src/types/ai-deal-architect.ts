export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type OpportunityPriority = "P1" | "P2" | "P3" | "P4";
export type SeverityLevel = "High" | "Med" | "Low";
export type StakeholderRole =
  | "Economic Buyer"
  | "Champion"
  | "Technical Evaluator"
  | "Blocker"
  | "Operational Influencer";

export type StakeholderStance = "Supportive" | "Neutral" | "Resistant";

export type InfluenceLevel = "High" | "Medium" | "Low";

export interface PainPoint {
  title: string;
  detail: string;
  severity: SeverityLevel;
}

export interface WhyNowSignal {
  title: string;
  detail: string;
}

export interface TriggerEvent {
  dateLabel: string;
  title: string;
  detail: string;
  impact: string;
}

export interface BusinessObjective {
  title: string;
  targetKpi: string;
  rationale: string;
}

export interface Account {
  company: string;
  industry: string;
  situation: string;
  painPoints: PainPoint[];
  whyNow: WhyNowSignal[];
  triggers: TriggerEvent[];
  businessObjectives: BusinessObjective[];
}

export interface Opportunity {
  useCase: string;
  description: string;
  impactScore: Score;
  difficulty: Score;
  timeToValue: string;
  priority: OpportunityPriority;
}

export interface Stakeholder {
  name: string;
  role: string;
  title: string;
  stance: StakeholderStance;
  influence: InfluenceLevel;
  keyConcern: string;
  recommendedApproach: string;
  objections: string[];
}

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
  likelyObjections: ObjectionResponse[];
  firstMeetingAgenda: AgendaItem[];
  messagePositioning: string[];
}

export interface RoiModel {
  investment: string;
  projectedSavings: string;
  projectedValue: string;
  paybackPeriod: string;
  threeYearValue: string;
  valueDrivers: string[];
  assumptions: string[];
}

export interface SuccessMetric {
  metric: string;
  target: string;
  businessMeaning: string;
}

export interface ResourceChecklistItem {
  item: string;
  detail: string;
  owner: string;
}

export interface PilotPhase {
  name: string;
  weeks: string;
  startWeek: number;
  endWeek: number;
  objective: string;
  deliverables: string[];
}

export interface FollowUpEmail {
  subject: string;
  body: string;
}

export interface PilotPlan {
  scope: string[];
  weeks: number;
  phases: PilotPhase[];
  requiredResources: ResourceChecklistItem[];
  successMetrics: SuccessMetric[];
  roi: RoiModel;
  executiveSummary: string[];
  followUpEmail: FollowUpEmail;
}

export interface AIDealArchitectBrief {
  account: Account;
  opportunities: Opportunity[];
  stakeholders: Stakeholder[];
  dealStrategy: DealStrategy;
  pilotPlan: PilotPlan;
}
