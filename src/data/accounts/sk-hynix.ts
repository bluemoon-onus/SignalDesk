import type { AccountBrief } from "@/types";

export const skHynix: AccountBrief = {
  account: {
    company: "SK Hynix",
    industry: "Semiconductor",
    situation:
      "SK Hynix is scaling HBM4 production across its Icheon and Cheongju fabs at a pace where yield stability and excursion response time have become executive-level KPIs. Micron is closing the HBM performance gap and TSMC's advanced packaging capabilities are creating new competitive pressure on the substrate-to-die interface. Manual defect classification is losing an average of three days per wafer lot, and process control on critical deposition and etch steps remains reactive. Leadership has mandated an operational AI layer that sits on top of current MES, APC, and inspection infrastructure — not a replacement platform.",
    painPoints: [
      {
        title: "We're losing the intervention window before we can even triage the problem",
        detail:
          "By the time my engineers reconcile inspection, metrology, and tool data across three separate systems, the window for early action is already closing. We're not catching excursions early — we're doing forensics after the line has already taken the hit.",
        severity: "High"
      },
      {
        title: "At HBM4 ASPs, one missed excursion doesn't just hurt yield — it puts a customer commitment at risk",
        detail:
          "We can't absorb the defect signatures we once tolerated on DRAM. At HBM4 volumes and price points, a single bad lot carries both a financial hit and a delivery consequence. Every yield percentage point has board-level visibility now.",
        severity: "High"
      },
      {
        title: "We have more tool data than we know what to do with — and we're still getting caught off-guard",
        detail:
          "The logs, alarms, and service history exist for every critical asset. But our maintenance decisions still run on threshold alerts and experienced judgment. During a ramp, finding out a tool is in trouble from the output data is already too late.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "January 2026",
        title: "HBM4 ramp review elevated yield stability to an executive KPI",
        detail:
          "Production leadership linked yield learning speed, customer delivery confidence, and ramp economics more tightly than in any prior memory introduction. Excursion response time was called out by name.",
        impact:
          "Creates budget air cover for a pilot that can show measurable line-level benefit within the current ramp — the problem is named at the top."
      },
      {
        dateLabel: "February 2026",
        title: "Operations review flagged tool interruption exposure on constrained HBM4 assets",
        detail:
          "Recent downtime analysis identified recurring failure patterns on high-value deposition and etch tools where stoppage timing directly affects lot throughput and recovery cost.",
        impact:
          "Opens the predictive maintenance conversation tied to avoided downtime cost, not a generic modernization pitch."
      },
      {
        dateLabel: "March 2026",
        title: "Digital manufacturing team was asked to define a reusable AI operating layer",
        detail:
          "Leadership wants AI to sit on top of current fab systems and operating reviews — not trigger another multi-year platform replacement program.",
        impact:
          "Favors vendors who can show a fast pilot path and a credible scale model simultaneously. The RFP window is open now."
      }
    ],
    objectives: [
      {
        title: "Protect the HBM4 yield ramp during scale-up",
        targetKpi: "+0.8 to 1.2 yield points on the pilot segment",
        rationale:
          "The first objective is not abstract transformation. It is measurable yield protection on the line segment where every incremental gain carries outsized revenue impact."
      },
      {
        title: "Shorten defect excursion response time",
        targetKpi: "35% faster root-cause isolation",
        rationale:
          "Leadership wants engineering teams acting on earlier signals so losses are contained before they spread across downstream process steps."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Yield Excursion Detection",
      description:
        "Flags at-risk wafer lots by correlating inspection, metrology, and tool drift before losses propagate downstream. Engineers get ranked alerts inside the existing operating review cadence.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "4–6 weeks",
      priority: "P1"
    },
    {
      useCase: "Predictive Maintenance Prioritization",
      description:
        "Ranks high-value tools by failure risk and production impact so maintenance teams intervene before constrained HBM4 assets go unplanned-down during a ramp week.",
      impactScore: 9,
      difficulty: 6,
      timeToValue: "5–7 weeks",
      priority: "P2"
    },
    {
      useCase: "Defect Classification Copilot",
      description:
        "Prioritizes the most commercially relevant defect signatures and shortens handoff time between yield, process, and equipment teams — cutting the 3-day manual classification cycle.",
      impactScore: 8,
      difficulty: 4,
      timeToValue: "3–5 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Min-jae Kim",
      role: "Economic Buyer",
      title: "EVP, Manufacturing Operations",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that protects HBM4 yield and uptime within the current operating cadence — not a transformation program that drifts into next year's budget cycle.",
      recommendedApproach:
        "Lead with economic impact. Contain scope to one production segment. Show how the pilot produces executive-ready operating reviews in six weeks — a result he can take to the board."
    },
    {
      name: "Soo-jin Lee",
      role: "Champion",
      title: "VP, Yield Engineering",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants earlier excursion visibility without adding another noisy analytics surface that engineers ignore after the first month.",
      recommendedApproach:
        "Show how alert precision, explainability, and workflow fit improve signal quality instead of adding dashboard burden. She needs to be able to defend the recommendation quality to Min-jae."
    },
    {
      name: "Jae-ho Park",
      role: "Technical Evaluator",
      title: "SVP, Digital Manufacturing & Smart Factory",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "Will evaluate whether the solution can sit cleanly on top of MES, APC, inspection, and equipment data without forcing a rip-and-replace architecture decision.",
      recommendedApproach:
        "Position the solution as a thin operational intelligence layer with clear integration boundaries and no dependency on a new platform rollout. His yes means the pilot can start."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "We already have analytics and dashboards across the fab. Why do we need another AI layer?",
        response:
          "This is not another reporting layer. It is an operating layer that helps yield, equipment, and manufacturing teams intervene sooner — turning existing fab data into ranked actions inside the current HBM4 ramp, not a new dashboard they have to check separately."
      },
      {
        objection:
          "If engineers don't trust the recommendations, the pilot creates noise instead of value.",
        response:
          "The pilot is explicitly designed around transparent, human-in-the-loop workflows. Every recommendation is tied to explainable signals, reviewed in existing operating forums, and measured against action quality — not model novelty."
      },
      {
        objection:
          "We can't let a pilot disrupt the HBM4 production schedule or create hidden integration work.",
        response:
          "The six-week scope stays inside one production segment, uses current MES, APC, inspection, and equipment feeds, and runs as a contained decision-support layer. The line measures value without operational disruption."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "HBM4 business context and why now",
        outcome: "Align on the operational stakes behind yield, uptime, and shipment confidence."
      },
      {
        time: "5–15 min",
        topic: "Current excursion and downtime pain points",
        outcome: "Confirm where the current workflow loses time, confidence, or economic value."
      },
      {
        time: "15–25 min",
        topic: "Pilot line segment and data readiness",
        outcome:
          "Agree on the one production segment, tool set, and data sources that make the best pilot scope."
      },
      {
        time: "25–35 min",
        topic: "Success metrics, ROI guardrails, and executive reporting",
        outcome:
          "Define what the customer would need to see in six weeks to justify internal sponsorship for scale."
      },
      {
        time: "35–45 min",
        topic: "Next steps and technical workshop owners",
        outcome:
          "Leave with named owners, data access requests, and a calendar path to pilot kickoff."
      }
    ],
    positioning: [
      "This is not another fab analytics experiment — it is a line-level operating layer that helps SK Hynix intervene earlier on yield excursions and constrained-tool risk during the HBM4 ramp.",
      "The proposed six-week pilot works on top of current MES, APC, inspection, metrology, and equipment data so leadership can measure real line impact without waiting for a broader platform program.",
      "If the pilot proves faster excursion response, lower downtime, and defensible economics, SK Hynix exits with a scale-ready model for expanding AI operations across additional high-value production flows."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "One HBM4 production segment with a defined set of critical tools, process steps, and inspection checkpoints.",
      "Ingest existing process, metrology, inspection, and equipment telemetry to score excursion risk, tool health, and likely yield impact.",
      "Two operational AI workflows: yield excursion detection for engineering teams, predictive maintenance prioritization for equipment leads.",
      "Weekly operating reviews quantifying model signal quality, intervention value, and scale-up readiness."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Confirm scope, connect the minimum viable data streams, and agree on how pilot recommendations will be reviewed by fab teams.",
        deliverables: [
          "Pilot line segment, tool set, and owner alignment",
          "Data access: MES, APC, inspection, metrology, equipment telemetry",
          "Alert thresholds, governance rules, and weekly review cadence confirmed"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run yield excursion detection and predictive maintenance prioritization in supervised mode — measure signal quality inside live operating reviews.",
        deliverables: [
          "Ranked excursion alerts and recommended interventions delivered to yield team",
          "Tool-risk scoring for constrained assets reviewed by equipment engineering",
          "Weekly readouts: response time, action quality, and intervention outcomes"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Quantify operational impact, validate the economic case, and decide whether the line is ready for scale-up.",
        deliverables: [
          "Pilot outcome review with fab leadership and EVP sponsor",
          "ROI case with scale-up assumptions and next-line candidates identified",
          "Recommendation: rollout, defer, or redesign — with supporting data"
        ]
      }
    ],
    roi: {
      investment: "$900K — pilot plus first-wave rollout",
      projectedSavings: "$3.4M projected first-year gross savings",
      projectedValue: "$2.5M projected 12-month net ROI",
      paybackPeriod: "Under 7 months after scaled deployment",
      threeYearValue: "$8.9M projected 3-year value",
      valueDrivers: [
        "Incremental yield improvement on HBM4 lines where each 0.1-point gain carries direct revenue consequence at current ASPs.",
        "Reduced scrap and faster excursion containment when defect patterns are surfaced earlier in the process window.",
        "Lower unplanned downtime on constrained deposition and etch equipment through better maintenance timing and earlier failure prediction."
      ]
    },
    executiveSummary: [
      "SK Hynix is at a point in the HBM4 ramp where every yield point and every unplanned downtime hour carries direct revenue consequence — this is the right window to prove an operational AI layer that protects both before the ramp curve steepens.",
      "The pilot is deliberately contained: one production segment, two AI workflows, measurable outcomes on top of existing fab infrastructure — designed to produce a scale decision in six weeks, not a proof of concept that requires a follow-on study to mean anything.",
      "If the numbers hold, SK Hynix exits the pilot with a $2.5M first-year ROI case, a repeatable operating model, and a credible path to rolling the same architecture across additional high-value lines — the kind of outcome worth taking to the CFO."
    ],
    followUpEmail: {
      subject: "SK Hynix HBM4 AI Pilot — Proposed Scope and Next Steps",
      body: "Hi Min-jae,\n\nThank you for the time today. The conversation confirmed what we suspected going in: the urgency around yield stability and constrained-tool exposure is real, it is tied directly to HBM4 ramp economics, and the data foundation to act on it is already in place.\n\nBased on what we discussed, we are proposing a 6-week pilot scoped to one production segment — yield excursion detection and predictive maintenance prioritization running on top of your existing MES, APC, inspection, and equipment telemetry. No new platform. No integration project.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the production segment and critical tool set for the initial scope\n— Identify the data owners for MES, APC, inspection, metrology, and equipment telemetry\n— Align on a technical workshop date to agree on success metrics, alert governance, and the weekly operating review format\n\nIf it would help accelerate the process, we can bring a draft pilot scorecard, a sample executive review template, and an ROI model calibrated to whichever line segment you select to the next session.\n\nI will follow up by end of week with a proposed workshop agenda. Let me know if the scope framing needs to change before then.\n\nBest regards,\nScott"
    }
  }
};
