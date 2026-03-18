import type { AccountBrief } from "@/types";

export const samsungElectronics: AccountBrief = {
  account: {
    company: "Samsung Electronics",
    industry: "Consumer Electronics",
    situation:
      "Samsung's Galaxy S-series launch cadence has compressed to under 8 months, and validating performance parity across 200+ carrier configurations — different RF bands, OS localizations, and pre-installed software stacks — is now the single biggest bottleneck between design freeze and commercial release. Component procurement decisions are being made on demand curves that are already three weeks stale, creating late-stage cost exposure when allocation windows close. The Advanced Test & Quality group is evaluating AI to cut validation cycle time, sharpen procurement signal accuracy, and build a scalable regression framework for Galaxy AI features as on-device capabilities expand each launch cycle.",
    painPoints: [
      {
        title: "Two hundred carrier configurations is not a QA problem anymore — it's a capacity problem",
        detail:
          "Each carrier variant requires a unique validation pass. We can't fully parallelize it, we can't skip it, and the window between design freeze and launch commitment keeps shrinking. We're shipping against a schedule that was built for a world where we had twice the time.",
        severity: "High"
      },
      {
        title: "We're locking in component buys six months out based on demand data that's already three weeks stale",
        detail:
          "By the time regional demand signals reach our procurement model, the allocation window for critical components has already moved. When the forecast is off by 10%, we either over-commit inventory or miss the initial sell-through window — either way, it's a cost problem that shows up in the P&L.",
        severity: "High"
      },
      {
        title: "Galaxy AI adds new on-device features every cycle, and our regression framework wasn't built for behavioral validation",
        detail:
          "We know how to validate whether a function works. We don't have a clean way to validate whether an AI-driven feature behaves consistently across hardware variants, OS versions, and regional configurations. Every new Galaxy AI surface creates a QA coverage gap we're not fully equipped to close.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "January 2026",
        title: "Galaxy S25 post-launch review flagged carrier validation as the primary cause of 11-day schedule compression",
        detail:
          "Internal task force formed with an explicit mandate to reduce validation cycle time by 30% before the S26 planning lock.",
        impact:
          "Creates a named budget mandate for test automation — the problem has executive visibility, an owner, and a deadline attached."
      },
      {
        dateLabel: "February 2026",
        title: "Procurement absorbed $42M in late-stage inventory exposure on OLED panel buys",
        detail:
          "Demand forecasting model failed to capture early trade-down signals in two key markets. CFO review followed.",
        impact:
          "CFO has approved exploratory investment in demand intelligence systems — the conversation is now about which vendor, not whether to invest."
      },
      {
        dateLabel: "March 2026",
        title: "Galaxy AI S26 roadmap adds 14 new on-device capabilities requiring behavioral validation",
        detail:
          "Current regression framework covers functional pass/fail but has no mechanism for behavioral consistency scoring across hardware and regional variants.",
        impact:
          "Opens the door to a pilot that addresses test automation and AI validation in a single motion — both problems share the same root cause."
      }
    ],
    objectives: [
      {
        title: "Cut carrier validation cycle time by 30% before S26 launch planning lock",
        targetKpi: "30% reduction in validation hours per carrier configuration",
        rationale:
          "The schedule compression problem is already named at the executive level. A 30% cycle reduction is the specific number the task force was chartered to deliver — any pilot that moves that metric earns expansion budget."
      },
      {
        title: "Reduce late-stage inventory exposure from demand forecast misses",
        targetKpi: "Forecast accuracy to ±6% at the 90-day horizon",
        rationale:
          "The $42M OLED exposure created CFO-level sponsorship. A demand intelligence model that can demonstrate improved accuracy at the 90-day horizon has a direct path to procurement adoption."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Carrier Validation Sequencing AI",
      description:
        "Uses historical failure pattern data to prioritize and sequence carrier validation runs — highest-risk configurations first, redundant passes eliminated — so the team ships the same coverage in 30% less time.",
      impactScore: 9,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P1"
    },
    {
      useCase: "Demand Forecast Intelligence",
      description:
        "Ingests regional sales velocity, carrier channel signals, and component lead-time data to sharpen procurement timing and reduce allocation misses at the 90-day horizon.",
      impactScore: 9,
      difficulty: 6,
      timeToValue: "6–8 weeks",
      priority: "P2"
    },
    {
      useCase: "Galaxy AI Behavioral Regression",
      description:
        "Establishes a consistency scoring framework for on-device AI features across hardware variants and regional configurations, replacing manual behavioral spot-checks with a defensible pass/fail signal.",
      impactScore: 7,
      difficulty: 7,
      timeToValue: "8–10 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Ji-won Park",
      role: "Economic Buyer",
      title: "EVP, Mobile Experience Product",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that demonstrably shortens the time between design freeze and commercial launch without adding integration risk to the current S26 schedule.",
      recommendedApproach:
        "Lead with carrier validation cycle savings — it's the pain with the most recent executive visibility and the clearest path to a ROI number he can defend to the SVP of MX."
    },
    {
      name: "Yoon-seo Kim",
      role: "Champion",
      title: "VP, Advanced Test & Quality",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a system that reduces the manual overhead of test planning and sequencing — not just a dashboard showing which tests passed.",
      recommendedApproach:
        "Show how the AI sequencing layer integrates into current test management workflows and reduces the time his team spends on triage and prioritization before a single test runs."
    },
    {
      name: "Dae-jung Lee",
      role: "Technical Evaluator",
      title: "Director, Component Procurement Intelligence",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "Will push back unless the forecast model can be validated against historical allocation decisions and shown to outperform the current methodology before any commitment is made.",
      recommendedApproach:
        "Frame the demand intelligence pilot as a parallel run against the current model — the numbers make the case without asking him to replace his existing process or accept delivery risk."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "Our validation infrastructure has been custom-built over 15 years. An AI layer can't understand its complexity.",
        response:
          "The pilot doesn't need to understand the full infrastructure. It needs carrier failure pattern history and validation run sequencing data — both of which already exist. We're optimizing the sequencing logic on top of what your team has already built."
      },
      {
        objection:
          "Galaxy AI is a competitive differentiator. We can't risk behavioral validation gaps on AI features.",
        response:
          "The behavioral regression framework is explicitly designed to reduce validation gaps, not accept them. The pilot adds a consistency scoring layer on top of existing pass/fail gates — it makes the validation more defensible to Ji-won, not less."
      },
      {
        objection:
          "Procurement has its own systems and governance. A demand intelligence tool creates a process conflict.",
        response:
          "We're proposing a parallel-run pilot, not a system replacement. The model runs alongside current procurement decisions for six weeks. If it outperforms, there's a conversation to be had. If not, nothing changes — and Dae-jung gets credit for due diligence."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "S25 post-launch review findings and S26 timeline exposure",
        outcome: "Align on the specific schedule pressure that makes the carrier validation problem urgent now."
      },
      {
        time: "5–15 min",
        topic: "Current test sequencing process and where validation time is lost",
        outcome: "Confirm the manual steps in carrier configuration prioritization that AI sequencing can eliminate."
      },
      {
        time: "15–25 min",
        topic: "Demand forecasting methodology and where the OLED allocation miss happened",
        outcome: "Understand the data inputs and decision timeline that created the $42M exposure."
      },
      {
        time: "25–35 min",
        topic: "Pilot design — carrier validation scope and parallel-run structure",
        outcome: "Agree on the device model, carrier set, and parallel-run governance for the test sequencing pilot."
      },
      {
        time: "35–45 min",
        topic: "Success metrics and S26 planning calendar alignment",
        outcome: "Define what a 6-week pilot result needs to show for Ji-won to take it to the S26 launch review."
      }
    ],
    positioning: [
      "This is not a replacement of Samsung's test infrastructure — it is a sequencing intelligence layer that gets the highest-risk validation runs done first, inside a launch window that is no longer negotiable.",
      "The demand intelligence pilot runs in parallel to the current procurement model for six weeks. The only commitment required is sharing historical allocation data — Samsung decides whether the accuracy improvement justifies adoption.",
      "If the carrier validation pilot proves a 30% cycle reduction, Samsung enters S26 planning with a defensible case for expanding AI across the full device validation workflow — not just a one-time fix tied to a single launch."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "One Galaxy device model's carrier validation workflow across a defined set of high-failure-rate carrier configurations.",
      "AI sequencing model running on top of existing test management data to reduce total validation time and eliminate redundant passes.",
      "Demand intelligence model running in parallel to current procurement decisions on a defined component category.",
      "Weekly readouts on test sequence efficiency, predicted failure rates, and time savings versus the S25 baseline."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Define pilot scope, establish baseline validation metrics, and connect to test management and procurement data.",
        deliverables: [
          "Target device model, carrier set, and failure pattern data confirmed",
          "Test sequencing baseline: current hours per carrier configuration",
          "Demand model data access: historical allocation decisions and actual outcomes"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run AI test sequencing in supervised mode and demand model in parallel-run mode — measure performance against baseline each week.",
        deliverables: [
          "AI-sequenced validation runs completed; time savings measured per carrier",
          "Demand model forecasts generated alongside current procurement decisions",
          "Weekly comparison report: AI sequence vs. standard sequence outcomes"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Measure cycle time reduction, forecast accuracy delta, and build the S26 expansion case.",
        deliverables: [
          "Carrier validation time reduction: actual vs. 30% target",
          "Demand forecast accuracy: AI model vs. current methodology comparison",
          "S26 pilot expansion recommendation with scope and investment case"
        ]
      }
    ],
    roi: {
      investment: "$850K — pilot plus first-wave rollout",
      projectedSavings: "$3.0M projected first-year gross savings",
      projectedValue: "$3.0M projected 12-month net ROI",
      paybackPeriod: "Under 5 months after scaled deployment",
      threeYearValue: "$7.8M projected 3-year value",
      valueDrivers: [
        "Carrier validation cycle reduction translates directly to launch schedule recovery and avoided post-launch defect remediation cost.",
        "Demand forecast accuracy improvement on component procurement reduces late-stage inventory exposure against the $42M OLED miss as baseline.",
        "Galaxy AI behavioral regression scales across S-series and foldable lines without rebuilding the test infrastructure for each new capability."
      ]
    },
    executiveSummary: [
      "Samsung's Galaxy launch cycle is compressed to a point where carrier validation throughput is no longer a QA problem — it is a competitive timeline problem, and AI test sequencing is the most direct lever available inside the current S26 window.",
      "The pilot is scoped to one device model, one carrier validation workflow, and a parallel-run demand intelligence track — six weeks, existing data infrastructure, zero disruption to the S26 production schedule.",
      "If the pilot proves a 30% validation cycle reduction, Samsung enters S26 planning with a $3.0M annual savings case and a validation architecture that scales to every new device line without rebuilding the test infrastructure from scratch."
    ],
    followUpEmail: {
      subject: "Samsung Galaxy Validation Pilot — Proposed Scope and Next Steps",
      body: "Hi Ji-won,\n\nThank you for the time today. The conversation confirmed what the S25 post-launch review surfaced: carrier validation throughput is a launch schedule problem now, not just a QA process problem, and the window to address it before S26 planning lock is shorter than it looks.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — AI-sequenced carrier validation on one device model, and a demand intelligence model running alongside your current procurement decisions on a defined component category. No new test infrastructure. No disruption to the current S26 schedule.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the target device model and the carrier configuration set for the validation sequencing scope\n— Identify the test management data owner and confirm access to S25 failure pattern history\n— Align with Dae-jung's team on the component category and historical allocation data for the parallel-run demand model\n\nIf it would help move faster, we can bring a draft pilot scorecard and a preliminary ROI model calibrated to your S25 validation baseline to the next session.\n\nI will follow up by end of week with a proposed scope document. Let me know if the framing needs to change before then.\n\nBest regards,\nScott"
    }
  }
};
