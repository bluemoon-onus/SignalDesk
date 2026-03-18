import type { AccountBrief } from "@/types";

export const kepco: AccountBrief = {
  account: {
    company: "KEPCO",
    industry: "Power Utility",
    situation:
      "Korea Electric Power Corporation operates the national grid with a government mandate to integrate 40GW of renewable capacity by 2030. Solar and wind penetration has already reached a level where grid stability events — voltage deviations, frequency fluctuations, and unplanned balancing actions — are occurring at twice the pre-2023 rate. The current load forecasting model was built for a predominantly baseload grid and does not accurately account for solar intermittency and wind variability at regional scale. In parallel, KEPCO operates 23 million transformer assets, and transformer failures are the leading cause of outage events that do not self-resolve within 4 hours. The Ministry of Trade, Industry and Energy has attached AI grid modernization as a condition of the 2026 grid investment subsidy.",
    painPoints: [
      {
        title: "Our load forecasting model was built for a baseload grid and it's running on a grid that no longer behaves like one",
        detail:
          "At 15% renewable penetration, our 24-hour ahead load forecast is producing errors that require expensive real-time balancing actions. The forecast model doesn't account for regional solar panel capacity that came online in the last 18 months or for the correlation between wind ramp events and demand peaks in coastal industrial zones. Every unplanned balancing action has a cost.",
        severity: "High"
      },
      {
        title: "Transformer failures are our leading cause of extended outages, and our condition monitoring is still age-based, not behavior-based",
        detail:
          "We have vibration, temperature, and dissolved gas analysis data on transformers across the network. But our replacement and inspection schedules are driven by asset age and manufacturer service intervals — not by actual operating condition. We're over-servicing low-risk assets and under-monitoring units showing early degradation signals.",
        severity: "High"
      },
      {
        title: "When a major outage occurs, root cause analysis takes 48–72 hours and the findings rarely make it back into prevention workflows",
        detail:
          "Our outage investigation process is thorough, but it runs in a silo. The root cause analysis completed after an event doesn't systematically update the risk scoring on similar assets in the network. We're doing the same investigation twice on similar failure modes because the learning doesn't flow back into operations.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "December 2025",
        title: "Grid stability events doubled in H2 2025 versus H2 2024 as renewable capacity additions accelerated",
        detail:
          "Transmission operations leadership presented to the board with a grid stability risk assessment showing that the current forecasting and balancing infrastructure is inadequate for the 2026 renewable integration targets.",
        impact:
          "Creates ministerial-level urgency for AI load forecasting — grid stability is now a regulatory compliance issue, not just an operational efficiency question."
      },
      {
        dateLabel: "January 2026",
        title: "Ministry of Trade, Industry and Energy attached AI grid modernization as a condition of the ₩2.1T 2026 grid investment subsidy",
        detail:
          "The subsidy framework specifically names AI-powered load forecasting and transformer health monitoring as qualifying investments. KEPCO must demonstrate active pilots by Q3 to maintain eligibility.",
        impact:
          "The budget case is already made — this is a compliance and timing conversation. KEPCO needs pilots in the ground before Q3 or risks subsidy eligibility."
      },
      {
        dateLabel: "February 2026",
        title: "Three major transformer failures in the Seoul metropolitan area caused ₩18B in compensation claims and infrastructure repair costs",
        detail:
          "Post-incident analysis identified early degradation signals in DGA data on all three units, visible 60–90 days before failure.",
        impact:
          "Creates direct financial accountability for transformer health monitoring. The ₩18B claims figure is the ROI anchor — any prevention capability that addresses that failure profile has a self-evident investment case."
      }
    ],
    objectives: [
      {
        title: "Reduce renewable integration grid instability events by improving load forecast accuracy",
        targetKpi: "40% reduction in unplanned real-time balancing actions",
        rationale:
          "Each unplanned balancing action has a direct cost. A 40% reduction in balancing frequency on the renewable-heavy regional grid demonstrates AI forecast value in a metric the Ministry will recognize and the grid operator can defend."
      },
      {
        title: "Shift transformer maintenance from age-based schedules to condition-based intervention",
        targetKpi: "25% reduction in transformer-related extended outages",
        rationale:
          "The three Seoul failures established a clear financial reference point. Condition-based monitoring that prevents comparable events on priority assets pays for the program from the first avoided incident."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Renewable-Integrated Load Forecasting",
      description:
        "Replaces the baseload forecasting model with a regional AI model that incorporates solar irradiance, wind ramp patterns, and real-time demand signals — reducing unplanned balancing actions from renewable variability.",
      impactScore: 10,
      difficulty: 7,
      timeToValue: "7–9 weeks",
      priority: "P1"
    },
    {
      useCase: "Transformer Health Monitoring",
      description:
        "Analyzes DGA, temperature, and vibration data across the transformer fleet to identify early degradation signatures 60–90 days before failure — replacing calendar-based inspection schedules with condition-driven intervention.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "6–8 weeks",
      priority: "P2"
    },
    {
      useCase: "Automated Outage Root Cause Analysis",
      description:
        "Accelerates outage investigation from 48–72 hours to under 6 hours by correlating sensor events, weather conditions, and asset history — and routes findings back into the fleet risk model automatically.",
      impactScore: 7,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Young-jae Lim",
      role: "Economic Buyer",
      title: "EVP, Grid Operations & Smart Transmission",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs pilots that qualify for the Ministry subsidy by Q3 and demonstrate measurable grid stability improvement — the subsidy eligibility deadline is the hard constraint that drives everything.",
      recommendedApproach:
        "Lead with subsidy eligibility framing. Both the load forecasting and transformer monitoring pilots qualify as named AI grid modernization investments. Frame the pilot timeline against the Q3 Ministry demonstration requirement."
    },
    {
      name: "Soo-hyun Park",
      role: "Champion",
      title: "VP, Digital Grid Technology",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a vendor who can integrate with KEPCO's SCADA and GIS infrastructure without requiring a parallel data platform build — the existing grid data is already there.",
      recommendedApproach:
        "Lead with the integration story. Show a clean SCADA and GIS integration path in the first technical session. Soo-hyun's buy-in unlocks the data access that makes both pilots viable."
    },
    {
      name: "Dong-hyun Kim",
      role: "Technical Evaluator",
      title: "Director, Transmission Planning & Reliability",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "Will evaluate whether the load forecasting model performs better than the current system on historical renewable variability events — not just on average accuracy, but on the specific spike patterns that caused the 2025 stability events.",
      recommendedApproach:
        "Propose a backtesting exercise using the H2 2025 stability events as the validation set. If the AI model outperforms the current forecast on those specific events, Dong-hyun has the technical evidence he needs to approve the live pilot."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "Our grid infrastructure is mission-critical. We can't run an AI pilot that introduces any risk to real-time grid operations.",
        response:
          "The load forecasting model runs as an advisory layer alongside the current system — grid operators see both forecasts and make balancing decisions. There is no autonomous control action. The AI model is evaluated for accuracy for six weeks before any operational dependency is created."
      },
      {
        objection:
          "We have 23 million transformer assets. A pilot on a small subset won't prove that the model scales to the full fleet.",
        response:
          "The pilot is designed to prove model precision on a defined, high-risk transformer cohort — specifically the units with DGA profiles similar to the three Seoul failures. Scale architecture is demonstrated in the pilot, not deferred to a second phase."
      },
      {
        objection:
          "KEPCO operates under regulatory oversight. Any AI system affecting grid operations needs formal approval before deployment.",
        response:
          "The Q3 Ministry subsidy framework explicitly names AI load forecasting and transformer monitoring as qualifying investments — the regulatory pathway is already open. The pilot is structured to produce the documentation required for formal Ministry review alongside the performance results."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "Q3 Ministry subsidy eligibility timeline and which AI pilots qualify",
        outcome: "Confirm that both load forecasting and transformer monitoring qualify as named investments and align on the demonstration format required."
      },
      {
        time: "5–15 min",
        topic: "H2 2025 grid stability events — specific scenarios where forecast accuracy drove balancing cost",
        outcome: "Identify the 3–5 highest-impact events to use as the AI model backtesting and validation set."
      },
      {
        time: "15–25 min",
        topic: "Seoul transformer failures — DGA profile and what the data showed before each event",
        outcome: "Confirm that the pre-failure signal was present in the data and agree on the transformer cohort for the condition monitoring pilot."
      },
      {
        time: "25–35 min",
        topic: "SCADA/GIS integration path and pilot data access",
        outcome: "Agree on the data feeds, access protocols, and IT governance process for pilot onboarding."
      },
      {
        time: "35–45 min",
        topic: "Pilot timeline, Ministry documentation requirements, and success metric definition",
        outcome: "Lock the pilot start date against the Q3 subsidy deadline and agree on the Ministry demonstration format."
      }
    ],
    positioning: [
      "The Ministry's Q3 subsidy requirement is already naming these two use cases. The pilot timeline is not driven by internal urgency — it's driven by a compliance deadline that is fixed. Moving now is not optional.",
      "Both pilots use KEPCO's existing SCADA and GIS data. There is no new data platform, no new sensor infrastructure, and no real-time grid control dependency during the pilot period.",
      "If the load forecasting and transformer monitoring pilots deliver against the Q3 Ministry timeline, KEPCO exits with a $4.0M annual ROI case, subsidy eligibility confirmed, and an AI grid architecture that scales to the 40GW renewable integration mandate."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "Renewable-integrated load forecasting on a defined regional grid zone with high solar and wind penetration — advisory mode alongside current forecast, balancing actions compared.",
      "Transformer health monitoring on a cohort of assets with DGA profiles similar to the three Seoul failure units — condition scoring updated weekly.",
      "Integration with existing SCADA, GIS, and DGA data infrastructure — no new sensors or data collection required.",
      "Weekly performance readouts: forecast accuracy vs. current model on renewable variability events; transformer condition score movements."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Connect to SCADA and DGA data infrastructure, define the pilot regional zone and transformer cohort, and run the H2 2025 backtesting exercise.",
        deliverables: [
          "Pilot regional zone confirmed; H2 2025 stability events used for load forecasting model backtesting",
          "Transformer cohort confirmed: units with DGA profiles matching Seoul failure precursor signatures",
          "SCADA/GIS integration path approved by IT governance; data access confirmed"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run AI load forecasting in advisory mode and transformer condition scoring live — measure forecast accuracy and condition signal quality weekly.",
        deliverables: [
          "AI forecast vs. current forecast: accuracy comparison on daily renewable variability events",
          "Transformer condition scores updated and reviewed by Dong-hyun's reliability team",
          "Weekly report: balancing action count vs. forecast-implied baseline; condition score movements on monitored cohort"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Quantify forecast accuracy improvement, calculate balancing cost reduction, and produce the Q3 Ministry demonstration package.",
        deliverables: [
          "Load forecast accuracy comparison: AI model vs. current on renewable variability events; balancing cost reduction estimate",
          "Transformer cohort condition report: degradation signals detected; Seoul failure comparison analysis",
          "Ministry Q3 demonstration package: AI investment documentation, performance evidence, and subsidy eligibility filing"
        ]
      }
    ],
    roi: {
      investment: "$1.1M — pilot plus first-wave rollout",
      projectedSavings: "$4.0M projected first-year gross savings",
      projectedValue: "$4.0M projected 12-month net ROI",
      paybackPeriod: "Under 4 months after scaled deployment",
      threeYearValue: "$11.2M projected 3-year value",
      valueDrivers: [
        "Load forecast accuracy improvement reduces unplanned real-time balancing actions on the renewable-heavy regional grid — each avoided action has a direct energy balancing cost attached.",
        "Transformer condition monitoring prevents extended outage events in the Seoul metropolitan network — calibrated to the ₩18B claims and repair cost from the three Q3 failures.",
        "Automated outage root cause analysis reduces investigation time from 48–72 hours to under 6 hours, and routes findings back into fleet risk scoring to prevent repeat failures on similar assets."
      ]
    },
    executiveSummary: [
      "KEPCO's grid stability challenge is not a future problem — renewable penetration has already reached the level where the current load forecasting model is producing errors that cost money on every balancing event. The pilot addresses that directly.",
      "Both pilots — load forecasting and transformer health monitoring — use existing SCADA and DGA data, run in advisory mode with no autonomous grid control dependency, and are structured to produce the Ministry Q3 subsidy demonstration package as a deliverable.",
      "If the pilot delivers forecast accuracy improvement and transformer condition detection equivalent to the Seoul failure precursor profile, KEPCO exits with a $4.0M annual ROI case, Q3 subsidy eligibility confirmed, and an AI grid architecture built for the 40GW renewable integration mandate."
    ],
    followUpEmail: {
      subject: "KEPCO AI Grid Pilot — Proposed Scope and Q3 Ministry Timeline",
      body: "Hi Young-jae,\n\nThank you for the time today. The conversation confirmed two things: the Q3 Ministry subsidy deadline is a fixed constraint that makes the pilot start date non-negotiable, and the H2 2025 stability events plus the Seoul transformer failures give us exactly the validation data we need to calibrate both AI models before going live.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — renewable-integrated load forecasting on a defined regional grid zone, and transformer health monitoring on a cohort of assets matching the Seoul failure DGA profile. Both tracks use your existing SCADA, GIS, and DGA data. No new sensors, no new data infrastructure, no real-time grid control dependency during the pilot period.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the pilot regional zone with Dong-hyun's transmission planning team and provide the H2 2025 stability event data for backtesting\n— Confirm the transformer cohort with Soo-hyun's digital grid team and provide the Seoul failure DGA histories for model calibration\n— Align on the IT governance and SCADA/GIS data access protocol with the infrastructure security team\n\nIf it would help, we can bring a draft Ministry Q3 demonstration framework and a preliminary ROI model to the next session.\n\nI will follow up by end of week with a proposed scope document aligned to the Q3 timeline. Let me know if anything needs to change.\n\nBest regards,\nScott"
    }
  }
};
