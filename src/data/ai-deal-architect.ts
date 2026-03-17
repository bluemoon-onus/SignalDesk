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
      name: "Min-jae Kim",
      role: "Economic Buyer",
      title: "EVP, Manufacturing Operations",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that protects HBM4 yield and uptime within the current operating cadence, not a transformation program that drifts into next year.",
      recommendedApproach:
        "Lead with economic impact, contain scope to one production segment, and show how the pilot produces executive-ready operating reviews in six weeks.",
      objections: [
        "We cannot fund another AI initiative unless it creates measurable line-level value inside the HBM4 ramp.",
        "Any recommendation engine has to be explainable enough for fab leadership to trust in a weekly operating review."
      ]
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
        "Show how alert precision, explainability, and engineer workflow fit improve signal quality instead of creating another dashboard burden.",
      objections: [
        "The models have to improve engineering signal quality, not just surface more alerts.",
        "We need a defensible way to connect model output to real yield actions and measurable defect reduction."
      ]
    },
    {
      name: "Jae-ho Park",
      role: "Technical Evaluator",
      title: "SVP, Digital Manufacturing and Smart Factory",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "Will evaluate whether the solution can sit cleanly on top of MES, APC, inspection, and equipment data without forcing a rip-and-replace architecture decision.",
      recommendedApproach:
        "Position the solution as a thin operational intelligence layer with clear integration boundaries, fast deployment, and no dependency on a new platform rollout.",
      objections: [
        "We do not want another pilot that only works because it bypasses existing MES and APC environments.",
        "If this becomes a hidden platform replacement project, it will lose sponsorship quickly."
      ]
    },
    {
      name: "Dong-wook Choi",
      role: "Blocker",
      title: "Director, Equipment Engineering and Maintenance",
      stance: "Resistant",
      influence: "Medium",
      keyConcern:
        "Pushes back on predictive maintenance claims that create extra planned downtime or override hard-earned tool-level engineering judgment.",
      recommendedApproach:
        "Frame predictive maintenance as a ranking and decision-support workflow with human approval, not an automated trigger that takes tools offline.",
      objections: [
        "We cannot accept recommendations that create more scheduled downtime than the failures they are supposed to prevent.",
        "Tool behavior is highly specific; a generic maintenance model will not survive first contact with the line."
      ]
    },
    {
      name: "Hye-jin Han",
      role: "Operational Influencer",
      title: "General Manager, HBM4 Business Unit",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "Needs proof that the pilot improves shipment confidence and gross margin protection, not just internal process metrics.",
      recommendedApproach:
        "Connect every pilot success metric to delivery confidence, customer commitments, and the economics of HBM4 line performance.",
      objections: [
        "The business case has to translate yield uplift, scrap reduction, and lower downtime into shipment confidence and margin.",
        "Technical novelty is not enough if the pilot cannot show how it protects the HBM4 business."
      ]
    }
  ],
  dealStrategy: {
    likelyObjections: [
      {
        objection:
          "We already have analytics and dashboards across the fab. Why do we need another AI layer now?",
        response:
          "This proposal is not another reporting layer. It is an operating layer that helps yield, equipment, and manufacturing teams intervene sooner by turning existing fab data into ranked actions inside the current HBM4 ramp."
      },
      {
        objection:
          "If engineers do not trust the recommendations, the pilot will create noise instead of value.",
        response:
          "The pilot is explicitly designed around transparent, human-in-the-loop workflows. Every recommendation is tied to explainable signals, reviewed in existing operating forums, and measured against action quality rather than model novelty."
      },
      {
        objection:
          "We cannot let a pilot disrupt the HBM4 production schedule or create hidden integration work.",
        response:
          "The six-week scope stays inside one production segment, uses current MES/APC/inspection/equipment feeds, and runs as a contained decision-support layer so the line can measure value without operational disruption."
      },
      {
        objection:
          "ROI needs to be hard-dollar and operational, not a generic innovation story.",
        response:
          "The business case is anchored to concrete line economics: incremental yield protection, avoided scrap, downtime reduction on constrained assets, and a time-bounded path to scale if the first pilot proves out."
      }
    ],
    firstMeetingAgenda: [
      {
        time: "0-5 min",
        topic: "HBM4 business context and why now",
        outcome: "Align on the operational stakes behind yield, uptime, and shipment confidence."
      },
      {
        time: "5-15 min",
        topic: "Current excursion and downtime pain points",
        outcome: "Confirm where the current workflow loses time, confidence, or economic value."
      },
      {
        time: "15-25 min",
        topic: "Pilot line segment and data readiness",
        outcome: "Agree on the one production segment, tool set, and data sources that make the best pilot scope."
      },
      {
        time: "25-35 min",
        topic: "Success metrics, ROI guardrails, and executive reporting",
        outcome: "Define what the customer would need to see in six weeks to justify internal sponsorship."
      },
      {
        time: "35-45 min",
        topic: "Next steps and technical workshop owners",
        outcome: "Leave the meeting with named owners, data requests, and a calendar path to pilot kickoff."
      }
    ],
    messagePositioning: [
      "This is not another fab analytics experiment; it is a line-level operating layer that helps SK Hynix intervene earlier on yield excursions and constrained-tool risk during the HBM4 ramp.",
      "The proposed six-week pilot works on top of current MES, APC, inspection, metrology, and equipment data so leadership can measure real line impact without waiting for a broader platform program.",
      "If the pilot proves faster excursion response, lower downtime, and defensible economic value, SK Hynix leaves with a scale-ready model for expanding AI operations across additional high-value production flows."
    ]
  },
  pilotPlan: {
    scope: [
      "Focus the pilot on one HBM4 production segment with a defined set of critical tools, process steps, and inspection checkpoints.",
      "Ingest existing process, metrology, inspection, and equipment telemetry needed to score excursion risk, tool health, and likely yield impact.",
      "Stand up two operational workflows: yield excursion detection for engineering teams and predictive maintenance prioritization for equipment leaders.",
      "Deliver weekly operating reviews that quantify model signal quality, intervention value, downtime avoidance, and scale-up readiness."
    ],
    weeks: 6,
    phases: [
      {
        name: "Setup",
        weeks: "Week 1-2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Confirm scope, connect the minimum viable data streams, and agree on how pilot recommendations will be reviewed by fab teams.",
        deliverables: [
          "Pilot line segment, tool set, and owner alignment",
          "Data access for MES, APC, inspection, metrology, and equipment telemetry",
          "Alert thresholds, governance rules, and weekly review cadence"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3-4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run yield excursion detection and predictive maintenance prioritization in supervised mode and measure signal quality inside live operating reviews.",
        deliverables: [
          "Ranked excursion alerts and recommended interventions",
          "Tool-risk scoring for constrained assets",
          "Weekly readouts on response time, action quality, and intervention outcomes"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5-6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Quantify operational impact, validate the economic case, and decide whether the line is ready for scale-up.",
        deliverables: [
          "Pilot outcome review with fab leadership",
          "ROI case with scale-up assumptions and next-line candidates",
          "Recommendation on rollout, defer, or redesign"
        ]
      }
    ],
    requiredResources: [
      {
        item: "MES and APC history for the pilot segment",
        detail: "Recent process context and control data across the selected HBM4 flow.",
        owner: "Smart Factory Platform Team"
      },
      {
        item: "Inspection and metrology data",
        detail: "Historical defect signatures and current-state line quality signals for pilot lots.",
        owner: "Yield Engineering"
      },
      {
        item: "Equipment telemetry and maintenance logs",
        detail: "Tool events, alarms, and service history for constrained assets in scope.",
        owner: "Equipment Engineering"
      },
      {
        item: "Dedicated fab SMEs for weekly review",
        detail: "One yield lead, one maintenance lead, and one operations owner to evaluate recommendations.",
        owner: "Manufacturing Operations"
      },
      {
        item: "Executive sponsor for pilot governance",
        detail: "A leadership owner who can align success criteria and unblock scale decisions quickly.",
        owner: "EVP Manufacturing Operations"
      }
    ],
    successMetrics: [
      {
        metric: "Excursion root-cause isolation time",
        target: "35% reduction",
        businessMeaning: "Proves the pilot can help engineers intervene before losses spread across downstream process steps."
      },
      {
        metric: "Priority alert precision",
        target: "At least 70% on high-risk signals",
        businessMeaning: "Confirms the system is improving decision quality rather than creating extra noise."
      },
      {
        metric: "Unplanned downtime on pilot assets",
        target: "15% reduction",
        businessMeaning: "Shows predictive maintenance recommendations are translating into real equipment availability."
      },
      {
        metric: "Incremental yield improvement",
        target: "+0.8 to 1.2 yield points",
        businessMeaning: "Links pilot value to the line economics leadership actually cares about during the HBM4 ramp."
      }
    ],
    roi: {
      investment: "$900K estimated pilot plus first-wave rollout investment",
      projectedSavings: "$3.4M projected first-year gross savings",
      projectedValue: "$2.5M projected 12-month ROI",
      paybackPeriod: "Under 7 months after scaled deployment",
      threeYearValue: "$8.9M projected 3-year value",
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
    executiveSummary: [
      "SK Hynix can use this pilot to protect HBM4 yield and uptime at the exact moment when small operational gains have outsized financial impact.",
      "The six-week scope is intentionally tight: one production segment, two AI workflows, and measurable outcomes delivered on top of current fab systems without disrupting line governance.",
      "If the pilot proves faster excursion response, lower downtime, and credible economics, leadership gets a scale-ready operating model backed by $2.5M in projected first-year ROI."
    ],
    followUpEmail: {
      subject: "Next steps on the SK Hynix HBM4 AI operations pilot",
      body:
        "Hi team,\n\nThank you again for the discussion today. We aligned on three priorities for the HBM4 line: earlier excursion detection, more targeted intervention on constrained assets, and a pilot design that produces measurable operational value without disrupting current fab controls.\n\nAs a next step, we recommend a 6-week pilot scoped to one production segment. The immediate actions would be:\n- confirm the pilot line segment and tool set\n- identify the MES, APC, inspection, metrology, and equipment data owners\n- schedule a technical workshop to define success metrics, alert thresholds, and weekly operating review participants\n\nIf helpful, we can come to the next session with a draft pilot scorecard, a sample executive review format, and a more detailed ROI model based on the line segment you select.\n\nBest,\nSignalDesk"
    }
  }
};

export default aiDealArchitectMockData;
