import type { AccountBrief } from "@/types";

export const lgElectronics: AccountBrief = {
  account: {
    company: "LG Electronics",
    industry: "Home Appliance & HVAC",
    situation:
      "LG Electronics' Changwon Smart Factory complex — the largest home appliance production site in the world — is running a compressor production line with a 12% rework rate that has persisted through two internal improvement cycles. The process parameter space is too complex for conventional SPC to optimize: 40+ interacting variables, non-linear behavior, and ambient condition sensitivity. In parallel, energy consumption at Changwon is approaching ₩180B annually, and the operations team has no reliable model for predicting consumption spikes or optimizing utility dispatch. The Chief Manufacturing Officer approved a 2026 AI roadmap with ₩65B allocated — compressor quality and energy optimization are the two anchor programs.",
    painPoints: [
      {
        title: "We've run two Lean initiatives on the compressor line and the rework rate is still 12% — the problem isn't the discipline, it's the complexity",
        detail:
          "Our engineers know the 40+ process variables that affect compressor output quality. What they can't do is model how those variables interact in real time. The interactions are non-linear, they shift with ambient conditions, and by the time our SPC alerts fire, we've already produced a rework batch.",
        severity: "High"
      },
      {
        title: "Energy is our second-largest operating cost and we can't predict where the spikes come from until they've already hit the bill",
        detail:
          "At ₩180B annually across the Changwon complex, a 5% improvement in energy dispatch efficiency is a meaningful number. But our current monitoring is descriptive — it tells us what happened, not what's about to happen. We have no model for proactive utility load management.",
        severity: "High"
      },
      {
        title: "Customer complaint data sits in a CRM that our quality engineers almost never look at",
        detail:
          "We get thousands of structured and unstructured customer complaints per quarter. The signal about which compressor batches or assembly variations are driving field failures is in that data — but the feedback loop to production quality is weeks long and manual. By the time quality engineering sees a pattern, we've already shipped more units with the same issue.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "November 2025",
        title: "CMO approved ₩65B AI manufacturing roadmap with compressor quality and energy as the anchor programs",
        detail:
          "Internal RFP process expected to begin Q1 2026 with vendor selection targeted by June. Two other vendors are already in conversation.",
        impact:
          "Budget is approved and earmarked — this is a vendor selection timeline. The conversation is about who can start fastest and prove the first use case before H2 planning lock."
      },
      {
        dateLabel: "January 2026",
        title: "Q4 compressor rework rate came in at 12.4% — the highest in three years",
        detail:
          "Quality board review concluded that conventional SPC has reached the limit of what it can achieve for the current process complexity. Two Lean programs were formally closed without hitting the rework target.",
        impact:
          "Creates explicit mandate for AI-based parameter optimization. The limitation of the existing approach is formally acknowledged — this is not an exploratory conversation."
      },
      {
        dateLabel: "February 2026",
        title: "Changwon energy audit identified ₩9.2B in avoidable utility spend from unmanaged demand spikes",
        detail:
          "External audit recommended predictive energy management as the highest-ROI operational investment available, with a specific savings target and baseline established.",
        impact:
          "CFO has attached a ₩9.2B savings target to the energy program. Any pilot that can demonstrate a credible path to that number has CFO sponsorship already in place."
      }
    ],
    objectives: [
      {
        title: "Reduce compressor line rework rate from 12% to below 7%",
        targetKpi: "5+ percentage point reduction in compressor rework rate",
        rationale:
          "This target survived two Lean programs. Closing the gap with AI parameter optimization is the specific mandate the CMO approved — and the number the quality board will use to evaluate vendor performance at the six-week review."
      },
      {
        title: "Achieve ₩9B+ annual energy savings through predictive utility management",
        targetKpi: "₩9B reduction in avoidable energy spend at Changwon",
        rationale:
          "The ₩9.2B savings figure came from an external audit with CFO visibility. A pilot that demonstrates a credible path to that number has pre-existing executive sponsorship from finance — not just manufacturing."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Compressor Process Parameter AI",
      description:
        "Models the non-linear interactions between 40+ process variables in real time and recommends parameter adjustments before quality drift produces a rework batch — solving the problem two Lean cycles could not.",
      impactScore: 10,
      difficulty: 7,
      timeToValue: "6–8 weeks",
      priority: "P1"
    },
    {
      useCase: "Predictive Energy Management",
      description:
        "Forecasts production-driven energy load patterns and recommends utility dispatch adjustments to eliminate avoidable demand spikes — calibrated to the ₩9.2B avoidable spend baseline identified in the external audit.",
      impactScore: 8,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P2"
    },
    {
      useCase: "Customer Quality Feedback Loop",
      description:
        "Mines structured and unstructured customer complaint data to surface field failure patterns and route them to production quality in near-real-time — closing the feedback loop that currently takes weeks.",
      impactScore: 7,
      difficulty: 4,
      timeToValue: "3–5 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Ji-hyeon Kwon",
      role: "Economic Buyer",
      title: "VP, Smart Factory Operations",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that closes the compressor rework gap — it's the metric that has survived two improvement cycles and has a specific CMO-level target attached. Everything else is secondary.",
      recommendedApproach:
        "Lead with the compressor parameter optimization use case. Show how the AI model addresses the non-linear parameter interaction problem that SPC cannot solve — that's the argument that lands with the CMO when Ji-hyeon presents the pilot results."
    },
    {
      name: "Sang-woo Oh",
      role: "Champion",
      title: "Director, Quality Engineering",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants real-time parameter recommendations that engineers can understand and trace — not a black box that tells the line to change settings without explanation.",
      recommendedApproach:
        "Lead with explainability. Every parameter recommendation is accompanied by a ranked explanation of which variable interactions drove it. Engineers approve changes before they affect the line. The model learns from their feedback."
    },
    {
      name: "Eun-ji Choi",
      role: "Technical Evaluator",
      title: "Director, Energy & Utility Operations",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "Will need proof that the energy model can generalize across the Changwon utility grid — not just show good numbers for the compressor line in isolation.",
      recommendedApproach:
        "Scope the energy pilot to the compressor line utility feeds first — it's the highest-spend area and produces a focused ROI number. Frame this as the foundation for site-wide deployment, not a one-line experiment."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "We've tried parameter optimization before and engineers don't trust models they can't trace back to root cause.",
        response:
          "Every parameter recommendation from the AI model is accompanied by a ranked explanation of which variable interactions drove it — the same language Sang-woo's process engineers already use. The model adds predictive power on top of the process knowledge that already exists on the team."
      },
      {
        objection:
          "Energy management is handled by our facility operations team. An AI layer creates a governance and accountability question.",
        response:
          "The predictive energy model is a recommendation system, not a control override. Utility dispatch decisions stay with Eun-ji's team — the model gives them a 4-hour forward view of predicted demand spikes so they can act proactively instead of reactively against the ₩9.2B savings target."
      },
      {
        objection:
          "Our compressor line has specific process characteristics that a generic AI model won't capture accurately enough to trust.",
        response:
          "We're not deploying a generic model. The first two weeks of the pilot are data ingestion and model calibration against your actual process parameter history. The model is trained on your line, your variables, and your defect signatures — not on an industry average."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "Compressor rework rate history and what two Lean cycles didn't solve",
        outcome: "Align on why the 12% problem is a non-linear complexity problem, not a process discipline problem."
      },
      {
        time: "5–15 min",
        topic: "Current SPC setup, process variables in scope, and where parameter interactions drive quality drift",
        outcome: "Confirm the parameter space, data availability, and the specific failure modes the AI model needs to address."
      },
      {
        time: "15–25 min",
        topic: "Energy consumption profile and the ₩9.2B avoidable spend breakdown",
        outcome: "Understand which demand spike patterns the energy audit identified and what the utility dispatch decision window looks like."
      },
      {
        time: "25–35 min",
        topic: "Pilot scope — compressor line segment, parameter variables, energy feed data access",
        outcome: "Agree on the specific production cell, variable set, and utility telemetry access for a 6-week pilot start."
      },
      {
        time: "35–45 min",
        topic: "Success metric definition and alignment with CMO roadmap milestones",
        outcome: "Define what the pilot result needs to show at week six for Ji-hyeon to take it to the CMO vendor review."
      }
    ],
    positioning: [
      "Two Lean cycles didn't close the rework gap because the problem is non-linear parameter complexity — that's exactly what AI process optimization is designed to solve, and it's a problem SPC cannot address no matter how well it's implemented.",
      "The energy pilot is scoped to the compressor line utility feeds first, producing a specific ₩ savings number tied to the external audit baseline before any commitment to site-wide deployment.",
      "If both pilots deliver, LG Changwon exits with a combined ROI case across quality and energy, a scale model for the other product lines in the complex, and a vendor relationship that grows with the CMO's ₩65B 2026 roadmap."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "Compressor line parameter AI on one production cell — recommendations in supervised mode, reviewed and approved by process engineers before affecting the line.",
      "Predictive energy management on compressor line utility feeds — demand spike forecasting and dispatch recommendations for Eun-ji's team.",
      "Integration with existing process historian, MES, and utility telemetry — no new data infrastructure.",
      "Weekly quality and energy readouts comparing AI-recommended outcomes versus the Q4 rework rate and ₩9.2B avoidable spend baselines."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Ingest process parameter history, calibrate the model to compressor-specific variable interactions, and connect to utility telemetry for energy baseline.",
        deliverables: [
          "Process historian data ingested; 40+ parameter variables mapped and prioritized",
          "Model calibrated to compressor line defect signatures and rework event history",
          "Utility feed access confirmed; Q4 demand spike baseline established for energy track"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run parameter optimization recommendations in supervised mode and energy forecasting in advisory mode — measure impact against baseline each week.",
        deliverables: [
          "Parameter recommendations reviewed by process engineers daily; acceptance rate and outcome tracked",
          "Energy demand forecasts generated 4 hours ahead of peak periods; utility dispatch decisions recorded",
          "Weekly quality update: rework rate on pilot cell vs. non-pilot cell as control"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Measure rework rate improvement, calculate energy savings projection, and build the CMO roadmap scale case.",
        deliverables: [
          "Rework rate comparison: pilot cell vs. Q4 baseline vs. 7% target",
          "Energy savings projection extrapolated to full Changwon complex from pilot track data",
          "CMO review package: ROI summary, scale-up scope, and vendor selection recommendation"
        ]
      }
    ],
    roi: {
      investment: "$620K — pilot plus first-wave rollout",
      projectedSavings: "$1.5M projected first-year gross savings",
      projectedValue: "$1.5M projected 12-month net ROI",
      paybackPeriod: "Under 6 months after scaled deployment",
      threeYearValue: "$4.2M projected 3-year value",
      valueDrivers: [
        "Compressor rework rate reduction directly lowers material, labor, and scheduling cost on the highest-volume production line in the Changwon complex.",
        "Predictive energy dispatch reduces avoidable demand spikes against the ₩9.2B baseline identified in the external audit — with CFO visibility already attached to that target.",
        "Customer complaint intelligence closes the quality feedback loop that currently takes weeks, reducing field failure rates on units already in the market."
      ]
    },
    executiveSummary: [
      "LG's compressor rework problem survived two Lean cycles because it isn't a process discipline problem — it's a parameter complexity problem that SPC cannot solve, and the AI parameter optimization pilot addresses it at that level.",
      "The pilot runs two AI use cases in parallel — parameter optimization and predictive energy management — on one production cell, six weeks, using existing process data and utility telemetry. No new infrastructure.",
      "If the pilot closes the rework gap and hits the energy savings trajectory, LG exits with a $1.5M ROI case, a model the CMO can scale across the Changwon complex, and a clear answer to whether AI delivers on the ₩65B manufacturing roadmap."
    ],
    followUpEmail: {
      subject: "LG Changwon AI Pilot — Proposed Scope and Next Steps",
      body: "Hi Ji-hyeon,\n\nThank you for the time today. The conversation made clear that the 12% rework problem isn't a Lean execution gap — it's a non-linear parameter complexity problem that the current SPC toolset was never designed to handle. That's a solvable problem, and the pilot scope we discussed addresses it directly.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — AI parameter optimization on one compressor production cell, and predictive energy management on the compressor line utility feeds. Both tracks use your existing process historian, MES, and utility telemetry. No new infrastructure and no disruption to the current production cadence.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the production cell and the process parameter variables in scope with Sang-woo's quality engineering team\n— Identify the process historian data owner and confirm access to the Q4 rework event history\n— Align with Eun-ji's team on the utility telemetry feeds and the demand spike baseline from the external audit\n\nIf it would help accelerate the process, we can bring a draft pilot scorecard and a preliminary ROI model calibrated to the Q4 rework rate and ₩9.2B energy baseline to the next session.\n\nI will follow up by end of week with a proposed scope document for the CMO review calendar. Let me know if the framing needs to change.\n\nBest regards,\nScott"
    }
  }
};
