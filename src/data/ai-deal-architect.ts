import type { AIDealArchitectBrief } from "@/types";

export const aiDealArchitectMockData: AIDealArchitectBrief = {
  account: {
    company: "SK Hynix",
    industry: "Semiconductor",
    situation:
      "SK Hynix is modernizing fab operations with AI-driven yield optimization and defect detection, and is evaluating intelligent process control and predictive maintenance across HBM4 production lines to protect ramp schedules, reduce excursion risk, and improve output quality at the point where every incremental yield gain has outsized revenue impact.",
    painPoints: [
      {
        title: "Fragmented yield diagnosis slows intervention",
        detail:
          "Yield engineers still have to reconcile inspection, metrology, tool, and process data across separate systems before they can isolate the most likely source of drift. That delay turns early warning signals into downstream yield loss.",
        severity: "High"
      },
      {
        title: "HBM4 ramp economics magnify each missed defect",
        detail:
          "As HBM4 volumes scale, the cost of excursions, scrap, and shipment risk compounds quickly. Small defects that would once have been tolerated now have disproportionate financial and customer impact.",
        severity: "High"
      },
      {
        title: "Process control remains too reactive at critical steps",
        detail:
          "Engineering teams know where variability shows up, but intervention often happens after conditions have already moved outside the optimal operating window. The line needs earlier, more confident recommendations.",
        severity: "Med"
      },
      {
        title: "Maintenance planning is data-rich but not predictive enough",
        detail:
          "Historical tool data exists, yet maintenance decisions still lean on threshold alerts and manual judgment. That leaves constrained assets exposed to avoidable downtime during a high-stakes production ramp.",
        severity: "Low"
      }
    ],
    whyNow: [
      {
        title: "HBM4 economics make incremental yield gains board-relevant",
        detail:
          "SK Hynix does not need a moonshot improvement to justify engagement. Even modest gains in yield stability, excursion response, and uptime create meaningful upside on HBM4 lines."
      },
      {
        title: "The data foundation is ready enough to prove value now",
        detail:
          "MES, APC, inspection, metrology, and equipment telemetry already provide enough signal to run a focused pilot without waiting for another multi-year data platform program."
      },
      {
        title: "Leadership wants one pilot that scales beyond a single module",
        detail:
          "The current mandate is not to fund isolated analytics experiments. It is to prove an operational AI layer that can become a reusable pattern across high-value fab workflows."
      }
    ],
    triggers: [
      {
        dateLabel: "January 2026",
        title: "HBM4 ramp review elevated yield stability to an executive KPI",
        detail:
          "Production leadership linked yield learning speed, customer delivery confidence, and ramp economics more tightly than in prior memory introductions.",
        impact: "Creates budget air cover for a pilot that can show measurable line-level benefit within the current ramp."
      },
      {
        dateLabel: "February 2026",
        title: "Operations review flagged tool interruption exposure on constrained assets",
        detail:
          "Recent downtime analysis highlighted recurring interruption patterns on high-value tools where failure timing directly affects throughput and recovery effort.",
        impact: "Opens the door for predictive maintenance discussions tied to avoided downtime rather than generic AI modernization."
      },
      {
        dateLabel: "March 2026",
        title: "Digital manufacturing team was asked to define a reusable AI operating layer",
        detail:
          "Leadership wants AI to sit on top of current fab systems and operating reviews, not trigger another platform replacement effort.",
        impact: "Favors vendors who can show a fast pilot path and a credible scale model at the same time."
      }
    ],
    businessObjectives: [
      {
        title: "Protect the HBM4 yield ramp during scale-up",
        targetKpi: "+0.8 to 1.2 yield points on the pilot segment",
        rationale:
          "The first objective is not abstract transformation. It is measurable yield protection on the line segment where incremental gains matter most."
      },
      {
        title: "Shorten defect excursion response time",
        targetKpi: "35% faster root-cause isolation",
        rationale:
          "Leadership wants engineering teams acting on earlier signals so losses are contained before they spread across downstream process steps."
      },
      {
        title: "Reduce downtime on constrained production assets",
        targetKpi: "15% fewer unplanned downtime hours on pilot tools",
        rationale:
          "Predictive maintenance only matters if it keeps high-value tools available during ramp periods when recovery time is expensive."
      },
      {
        title: "Leave with a scale-ready fab AI model",
        targetKpi: "2 next-line rollout candidates approved by pilot close",
        rationale:
          "A successful conversation must end with a repeatable operating pattern, not a one-off analytics win."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Yield Excursion Detection",
      description:
        "Flags at-risk wafer lots by correlating inspection, metrology, and tool drift before losses propagate downstream.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "4-6 weeks",
      priority: "P1"
    },
    {
      useCase: "Predictive Maintenance Prioritization",
      description:
        "Ranks high-value tools by failure risk and production impact so maintenance teams intervene before constrained assets go down.",
      impactScore: 9,
      difficulty: 6,
      timeToValue: "5-7 weeks",
      priority: "P2"
    },
    {
      useCase: "Defect Classification Copilot",
      description:
        "Prioritizes the most commercially relevant defect signatures and shortens handoff time between yield, process, and equipment teams.",
      impactScore: 8,
      difficulty: 4,
      timeToValue: "3-5 weeks",
      priority: "P3"
    },
    {
      useCase: "Intelligent Process Control",
      description:
        "Recommends parameter adjustments and operating windows for critical HBM4 steps when the line begins to move outside optimal yield conditions.",
      impactScore: 10,
      difficulty: 9,
      timeToValue: "10-12 weeks",
      priority: "P4"
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
