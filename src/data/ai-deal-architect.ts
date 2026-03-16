import type { AIDealArchitectBrief } from "@/types";

export const aiDealArchitectMockData: AIDealArchitectBrief = {
  account: {
    company: "SK Hynix",
    industry: "Semiconductor",
    situation:
      "SK Hynix is modernizing fab operations with AI-driven yield optimization and defect detection, and is evaluating intelligent process control and predictive maintenance across HBM4 production lines to protect ramp schedules, reduce excursion risk, and improve output quality at the point where every incremental yield gain has outsized revenue impact.",
    painPoints: [
      "Yield loss analysis still requires engineers to reconcile inspection, metrology, equipment, and process data across separate systems, which slows root-cause identification when line conditions begin to drift.",
      "HBM4 ramp pressure is increasing the cost of missed defects, unplanned tool downtime, and process excursions because the downstream impact compounds across tightly coupled production steps.",
      "Process control decisions are supported by strong engineering expertise, but many intervention points remain reactive, creating variability in how quickly the line responds to early defect signatures.",
      "Maintenance teams have historical equipment data, yet planning is still too dependent on threshold-based alerts and manual judgment to consistently prevent failures on critical tools."
    ],
    whyNow: [
      "HBM4 capacity expansion raises the business value of even small improvements in line stability, cycle time, and defect containment, which makes operational AI a board-level leverage point rather than a narrow factory experiment.",
      "The data foundation for a pilot already exists across MES, APC, inspection, and equipment telemetry, which lowers the barrier to proving value within one line segment instead of waiting for a full smart-factory transformation.",
      "Executive leadership needs a practical path to scale AI in the fab with measurable operational benefit, especially in areas where faster intervention can directly protect yield and shipment commitments."
    ],
    triggers: [
      "HBM4 line performance has become strategically visible because production readiness, yield learning, and customer delivery confidence are now linked more tightly than in prior memory ramps.",
      "Fab and digital manufacturing leaders are aligned on the need for an AI operating layer that can sit above current systems rather than forcing another multi-year platform replacement program.",
      "Recent internal reviews have elevated defect escape risk, tool interruption exposure, and excursion response time as issues that deserve targeted investment before scale-up."
    ]
  },
  opportunities: [
    {
      useCase:
        "AI-driven yield excursion detection that correlates inspection results, metrology drift, and tool behavior to flag wafer lots at elevated risk before losses propagate downstream.",
      impactScore: 10,
      difficulty: 7,
      timeToValue: "5-7 weeks",
      priority: "P1"
    },
    {
      useCase:
        "Intelligent process control recommendations that surface parameter adjustments and operating windows for critical HBM4 steps when the line begins to move outside optimal yield conditions.",
      impactScore: 9,
      difficulty: 8,
      timeToValue: "6-8 weeks",
      priority: "P1"
    },
    {
      useCase:
        "Predictive maintenance models for high-value tools that combine equipment telemetry, historical failure patterns, and production context to prevent avoidable downtime on constrained assets.",
      impactScore: 9,
      difficulty: 6,
      timeToValue: "4-6 weeks",
      priority: "P2"
    },
    {
      useCase:
        "AI-assisted defect classification and engineering workbench workflows that prioritize the most commercially relevant defect signatures and shorten escalation time between yield, process, and equipment teams.",
      impactScore: 8,
      difficulty: 5,
      timeToValue: "4-5 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      role: "EVP, Manufacturing Operations",
      stance: "Champion",
      influence: "High",
      objections: [
        "Will sponsor the pilot only if it is scoped to deliver operational value within the current HBM4 ramp window rather than becoming a long-horizon innovation program.",
        "Needs confidence that recommendations are interpretable enough for fab leadership to trust them in yield and uptime reviews."
      ]
    },
    {
      role: "VP, Yield Engineering",
      stance: "Supportive",
      influence: "High",
      objections: [
        "Will want proof that the models improve engineering signal quality instead of creating another dashboard layer with too many false positives.",
        "Needs a defensible method for connecting model output to actual wafer-level yield actions and measurable defect reduction."
      ]
    },
    {
      role: "SVP, Digital Manufacturing and Smart Factory",
      stance: "Supportive",
      influence: "High",
      objections: [
        "Needs the pilot positioned as a reusable factory intelligence layer that can extend beyond one HBM4 module if value is proven.",
        "Will expect clean integration boundaries with existing MES, APC, and data engineering environments."
      ]
    },
    {
      role: "Director, Equipment Engineering and Maintenance",
      stance: "Cautious",
      influence: "Medium",
      objections: [
        "Will push back if predictive maintenance recommendations create additional planned downtime without a credible case that failure risk is materially reduced.",
        "Needs the pilot to respect tool-specific operating realities instead of assuming generic maintenance logic can be applied across assets."
      ]
    },
    {
      role: "General Manager, HBM4 Business Unit",
      stance: "Skeptical",
      influence: "High",
      objections: [
        "Will judge the initiative on whether it protects shipment confidence and margin, not on model sophistication or technical novelty.",
        "Needs a concise business case showing how yield uplift, reduced scrap, and lower downtime translate into revenue and customer delivery benefits."
      ]
    }
  ],
  pilotPlan: {
    scope: [
      "Focus the pilot on one HBM4 production segment with a defined set of critical tools, process steps, and inspection checkpoints.",
      "Ingest existing process, metrology, inspection, and equipment telemetry needed to score excursion risk, tool health, and likely yield impact.",
      "Stand up two operational workflows: yield excursion detection for engineering teams and predictive maintenance prioritization for equipment leaders.",
      "Deliver weekly operating reviews that quantify model signal quality, intervention value, downtime avoidance, and scale-up readiness."
    ],
    weeks: 6,
    successMetrics: [
      "Reduce time to identify likely root cause for priority defect excursions by at least 35 percent during the pilot window.",
      "Demonstrate measurable improvement in early defect detection precision on the selected HBM4 process segment.",
      "Prevent or mitigate at least one meaningful unplanned downtime event through predictive maintenance recommendations on pilot tools.",
      "Show that engineering teams can act on AI recommendations within existing operating reviews without disrupting established fab controls.",
      "Leave SK Hynix with a line-level scale-up plan covering the next production areas, data requirements, and expected financial upside."
    ],
    roi: {
      projectedValue: "$2.5M projected 12-month ROI",
      paybackPeriod: "Under 7 months after scaled deployment",
      valueDrivers: [
        "Incremental yield improvement on a high-value HBM4 production line where small percentage gains carry disproportionate financial impact.",
        "Reduced scrap and faster excursion containment when defect patterns are surfaced earlier in the process window.",
        "Lower unplanned downtime on constrained equipment through better maintenance timing and earlier failure prediction."
      ],
      assumptions: [
        "Pilot outcomes are extended to additional HBM4 tool groups and one adjacent high-value line segment within 12 months.",
        "The scaled solution captures modest but repeatable yield lift rather than depending on a single step-change event.",
        "At least two avoidable downtime or excursion scenarios are prevented over the first year of broader production rollout."
      ]
    },
    executiveSummary:
      "Run a six-week pilot inside the HBM4 production ramp to prove that SK Hynix can use AI to improve yield responsiveness and equipment reliability without interrupting existing fab governance. The objective is to show that an operational AI layer can identify excursions sooner, prioritize maintenance more intelligently, and create a credible scale-up case anchored to $2.5M in projected annual ROI."
  }
};

export default aiDealArchitectMockData;
