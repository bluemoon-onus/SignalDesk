import type { AIDealArchitectBrief } from "@/types";

export const aiDealArchitectMockData: AIDealArchitectBrief = {
  account: {
    company: "Hyundai Rotem",
    industry: "Aerospace & Defense",
    situation:
      "Hyundai Rotem is migrating a legacy on-premise DevOps estate to a cloud-native platform and is actively evaluating AI-powered testing and deployment automation to improve release confidence, reduce manual engineering effort, and establish a repeatable software delivery model for defense-grade programs.",
    painPoints: [
      "Release readiness still depends on environment-specific scripts, manual validation gates, and tribal knowledge spread across platform engineering, QA, and program delivery teams.",
      "Regression coverage is broad but inconsistent, which pushes high-risk integration testing late in the cycle and makes defect discovery more expensive than it should be.",
      "The move to cloud-native delivery is creating tooling overlap across Jenkins, custom test harnesses, ticketing workflows, and security approvals, without a single operational layer to coordinate them.",
      "Leadership wants faster software deployment, but only if traceability, auditability, and rollback discipline remain strong enough for a defense-oriented operating model."
    ],
    whyNow: [
      "The cloud migration already forces a platform decision, which makes this the right moment to redesign software delivery instead of recreating legacy operating patterns in a new environment.",
      "AI-assisted testing and deployment automation is now mature enough to demonstrate measurable value within one program increment rather than requiring a long transformation cycle before results show up.",
      "Upcoming release commitments increase the executive visibility of deployment risk, making delay reduction and quality assurance a near-term business priority rather than a technical nice-to-have."
    ],
    triggers: [
      "Budget is already allocated to modernize the DevOps stack and consolidate legacy delivery tooling into a cloud-native control plane.",
      "Recent release retrospectives highlighted escaped defects, rollback effort, and manual deployment coordination as operational risks that need structural improvement.",
      "Platform leadership has been asked to define a scalable software factory pattern that can be reused across future aerospace and defense programs."
    ]
  },
  opportunities: [
    {
      useCase:
        "AI-assisted regression design that expands test coverage around code changes, API contracts, and integration dependencies before release candidates move into formal validation.",
      impactScore: 9,
      difficulty: 6,
      timeToValue: "6-8 weeks",
      priority: "P1"
    },
    {
      useCase:
        "Pipeline failure triage and root-cause clustering across build, test, security, and deployment events to cut manual investigation time and accelerate engineering response.",
      impactScore: 8,
      difficulty: 5,
      timeToValue: "4-6 weeks",
      priority: "P1"
    },
    {
      useCase:
        "Policy-aware deployment orchestration that recommends release sequencing, approval routing, and rollback plays for cloud-native environments with strict governance requirements.",
      impactScore: 9,
      difficulty: 7,
      timeToValue: "8-12 weeks",
      priority: "P2"
    },
    {
      useCase:
        "Automated release intelligence that turns pipeline data, defect trends, and deployment evidence into executive-ready deployment summaries and program risk reporting.",
      impactScore: 7,
      difficulty: 3,
      timeToValue: "3-5 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      role: "VP, Platform Engineering",
      stance: "Champion",
      influence: "High",
      objections: [
        "Will support the pilot only if the AI layer can sit on top of the migration roadmap without creating a second modernization effort for the team to own.",
        "Needs evidence that automation recommendations are explainable enough for engineering leaders to trust in production release conversations."
      ]
    },
    {
      role: "Director, Quality Engineering",
      stance: "Supportive",
      influence: "High",
      objections: [
        "Concerned that AI-generated tests may increase noise unless the pilot proves measurable lift in defect detection and meaningful reduction in manual regression effort.",
        "Wants a clear audit trail showing why test cases were proposed, selected, and promoted into the validation workflow."
      ]
    },
    {
      role: "Chief Digital Officer",
      stance: "Supportive",
      influence: "High",
      objections: [
        "Needs the pilot framed as a reusable software factory capability, not a narrow tooling experiment tied to one team.",
        "Will ask for a crisp value story connecting engineering efficiency gains to faster program delivery and lower operational risk."
      ]
    },
    {
      role: "Program Delivery Executive",
      stance: "Skeptical",
      influence: "Medium",
      objections: [
        "Worries that introducing AI into the release process during migration could jeopardize milestone commitments if the rollout is not tightly scoped.",
        "Will push back unless the pilot avoids disruption to the current release cadence and shows practical benefit within the same quarter."
      ]
    },
    {
      role: "Head of DevSecOps Governance",
      stance: "Cautious",
      influence: "High",
      objections: [
        "Needs clarity on model provenance, data handling boundaries, approval logging, and human override controls before supporting broader rollout.",
        "Will expect the pilot to preserve policy enforcement and change-management discipline rather than bypass existing governance gates."
      ]
    }
  ],
  pilotPlan: {
    scope: [
      "Instrument one cloud-native release train that is already part of the Hyundai Rotem DevOps migration program.",
      "Deploy AI-assisted regression design for a defined set of high-change services, integration points, and deployment workflows.",
      "Stand up pipeline triage and deployment recommendation workflows for engineering leads and QA managers, without replacing existing approval controls.",
      "Produce weekly executive summaries showing release quality, time saved, risk trends, and readiness for scale-out."
    ],
    weeks: 6,
    successMetrics: [
      "Reduce manual regression design and execution effort by at least 30 percent for the pilot release train.",
      "Cut mean time to identify likely root cause for failed pipelines and deployment exceptions by 40 percent or more.",
      "Improve pre-production defect detection enough to prevent at least one material release delay scenario during the pilot window.",
      "Demonstrate complete auditability for AI-driven recommendations, including human approval steps and rollback rationale.",
      "Leave Hyundai Rotem with a board-ready scale-up case that identifies the next two program areas for rollout."
    ],
    roi: {
      projectedValue: "$1.2M projected 12-month ROI",
      paybackPeriod: "Under 9 months after production rollout",
      valueDrivers: [
        "Lower manual QA and release engineering effort across recurring deployments.",
        "Reduced downtime and rework associated with failed releases and late-stage defect discovery.",
        "Faster migration stabilization, which shortens the time required to retire legacy on-premise tooling and support overhead."
      ],
      assumptions: [
        "Pilot results scale into two production release trains within the first year.",
        "Manual regression effort declines by roughly one-third after initial adoption and workflow tuning.",
        "At least one high-cost delay or rollback event is avoided across the first 12 months of broader deployment."
      ]
    },
    executiveSummary:
      "Run a six-week pilot inside the ongoing cloud migration to prove that Hyundai Rotem can accelerate software delivery without weakening governance. The pilot is designed to show measurable efficiency gains in testing and deployment operations, produce an auditable path for AI-assisted decisioning, and build a credible scale-up business case anchored to $1.2M in projected annual ROI."
  }
};

export default aiDealArchitectMockData;
