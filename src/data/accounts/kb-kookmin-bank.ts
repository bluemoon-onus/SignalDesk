import type { AccountBrief } from "@/types";

export const kbKookminBank: AccountBrief = {
  account: {
    company: "KB Kookmin Bank",
    industry: "Banking",
    situation:
      "KB Kookmin Bank is Korea's largest retail bank by assets (₩480T), operating 800+ branches, 50 million registered customers, and a digital banking platform that processes 12 million daily transactions. The bank leads the KB Financial Group alongside KB Securities, KB Insurance, and KB Card. Under the current 'KB Next Round' transformation strategy, the bank has committed ₩600B to technology investment through 2027, with AI identified as the primary vehicle for both cost reduction and revenue growth. The core challenge is that despite heavy investment, most AI initiatives have produced proofs-of-concept rather than enterprise-grade systems that move revenue or cost at scale. The CTO and Chief Digital Officer are under pressure to show measurable ROI from AI before the next board technology review in Q3 2026.",
    painPoints: [
      {
        title: "Loan underwriting still relies on rule-based models that reject good customers",
        detail:
          "Our NICE/KCB credit score-based underwriting system approves 61% of retail loan applications. Internal analysis shows that 18–22% of declined applicants have behavioral and transactional patterns that are strong predictors of repayment — but our rule-based system can't capture them. We're leaving ₩800B to ₩1.2T of creditworthy loan volume on the table every year because our risk models are a decade old.",
        severity: "High"
      },
      {
        title: "Branch call center is handling 4M calls per month that AI should be resolving",
        detail:
          "We receive 4.1 million inbound customer service contacts per month. Our AI chatbot resolves 31% — the industry benchmark for mature deployments is 65–70%. The remaining calls average 8 minutes of agent time. We've tried two chatbot upgrades in three years and neither moved the resolution rate above 35%. The cost delta between our current resolution rate and the benchmark is ₩18B annually.",
        severity: "High"
      },
      {
        title: "Anti-money laundering investigation queue is creating regulatory exposure",
        detail:
          "Our transaction monitoring system generates 2,200 SAR alerts per month. Our AML investigation team can process 900. The backlog means alerts more than 45 days old are not being investigated to the FSS standard, and we've received two informal notices from the regulator in the past 18 months. A formal enforcement action at this scale would be operationally and reputationally catastrophic.",
        severity: "High"
      }
    ],
    triggers: [
      {
        dateLabel: "Jan 2026",
        title: "FSS AI governance framework goes into effect",
        detail: "The Financial Supervisory Service published its AI in Financial Services governance framework in January 2026, requiring all Tier 1 banks to document AI model risk management practices and explainability protocols for credit decisions by Q4 2026.",
        impact: "Creates compliance urgency: any AI credit model must be deployed with audit trails and explainability features before the regulatory deadline — making a fast, structured pilot more attractive than a slow internal build."
      },
      {
        dateLabel: "Feb 2026",
        title: "Kakao Bank reports 71% AI resolution rate and ₩35B cost reduction",
        detail: "Kakao Bank's 2025 annual report disclosed a 71% AI customer service resolution rate and attributed ₩35B in annual cost reduction to their conversational AI platform. KB's 31% rate is now a material competitive liability with visibility at the board level.",
        impact: "Board-level pressure to close the resolution rate gap creates urgency for a credible, near-term AI customer service upgrade."
      },
      {
        dateLabel: "Mar 2026",
        title: "Q4 2025 results show 3.1% NIM compression vs. peer average of 2.4%",
        detail: "KB Kookmin's net interest margin compressed 80bp more than the peer group average in 2025, driven in part by higher cost-to-income ratio. Management has flagged AI-driven operational efficiency as the primary lever for NIM recovery in the 2026 investor guidance.",
        impact: "The efficiency story is now part of public investor guidance — making the AML and contact center ROI cases directly relevant to market credibility."
      }
    ],
    objectives: [
      {
        title: "Increase loan approval rate by 8 percentage points without adding credit risk",
        targetKpi: "Loan approval rate: 61% → 69% within 12 months, NPL ratio held flat or improved",
        rationale:
          "An 8-point approval rate improvement on current application volume recovers ₩800B–₩1T of previously declined but creditworthy loan volume, adding ₩12–15B in incremental annual net interest income."
      },
      {
        title: "Double AI customer service resolution rate from 31% to 65%",
        targetKpi: "Contact center AI resolution rate: 31% → 65% within 18 months",
        rationale:
          "Closing the gap to industry benchmark eliminates ₩18B in annual call center cost and recovers CSAT points lost to hold times — directly observable in NPS scores within one quarter."
      }
    ]
  },

  opportunities: [
    {
      useCase: "Behavioral Credit Scoring for Retail Loan Underwriting",
      description:
        "Deploy an ML underwriting model that supplements NICE/KCB scores with behavioral signals from KB's own transaction history — payroll patterns, savings velocity, bill payment consistency — to recover creditworthy applicants currently declined by the rule-based system. Full audit trail and FSS-compliant explainability included.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "10–14 weeks",
      priority: "P1"
    },
    {
      useCase: "Intelligent Contact Center Triage & Resolution",
      description:
        "Upgrade the KB Smart Customer chatbot with a large language model capable of handling complex multi-turn service requests — account transfers, loan status queries, card dispute initiation — without agent escalation. Targets a 65% AI resolution rate within 18 months.",
      impactScore: 9,
      difficulty: 5,
      timeToValue: "8–10 weeks",
      priority: "P2"
    },
    {
      useCase: "AML Alert Prioritization & Auto-Investigation",
      description:
        "Train a risk ranking model on resolved SAR cases to triage the 2,200 monthly alerts by true positive probability, surface the highest-risk cases for immediate human review, and auto-close obvious false positives — reducing investigator workload by 40% and eliminating the regulatory backlog.",
      impactScore: 8,
      difficulty: 7,
      timeToValue: "12–16 weeks",
      priority: "P3"
    }
  ],

  stakeholders: [
    {
      name: "Dong-won Kim",
      role: "Economic Buyer",
      title: "Chief Digital Officer",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "He owns the ₩600B technology transformation budget and has put the AI efficiency story into public investor guidance. He needs to see a pilot that produces a number he can put in the Q3 board technology review — not another proof-of-concept that gets stuck in model validation for a year.",
      recommendedApproach:
        "Lead with the loan underwriting use case: it's the largest revenue recovery opportunity and it directly maps to the investor guidance narrative. Frame the pilot as a regulatory-ready deployment, not an experiment — that removes the 'we need to validate for 12 months' objection before it surfaces."
    },
    {
      name: "Soo-yeon Park",
      role: "Champion",
      title: "Head of AI Banking, Digital Innovation Center",
      stance: "Supportive",
      influence: "Medium",
      keyConcern:
        "She has been running the internal AI program for three years and has credibility with the technology team but is frustrated that none of the internal projects have made it to production scale. She wants a partner who can deliver production deployment, not another pilot that sits in the sandbox.",
      recommendedApproach:
        "Treat her as a co-architect of the pilot design. Bring her into the technical scoping session early and give her joint ownership of the go-live milestone. Her internal credibility turns into advocacy when she can say 'I designed this with them.'"
    },
    {
      name: "Jung-ho Lee",
      role: "Blocker",
      title: "Chief Risk Officer",
      stance: "Resistant",
      influence: "High",
      keyConcern:
        "Any AI credit model that produces an approval rate change will be scrutinized by his team and the FSS. His concern is not AI in principle — it's model drift, explainability gaps, and the reputational risk of approving loans that later default in a year when the regulator is watching.",
      recommendedApproach:
        "Request a 45-minute meeting with his team specifically on the FSS AI governance framework. Show the explainability architecture and the model monitoring stack before the pilot starts. The goal is to get his risk team into the pilot governance structure as a co-owner, not a reviewer at the end."
    }
  ],

  dealStrategy: {
    objections: [
      {
        objection: "We have internal model risk management requirements that take 6–12 months to clear for any new credit model.",
        response:
          "We've designed the pilot specifically for the FSS governance framework — the explainability layer, model card documentation, and monitoring dashboard are built-in, not added at the end. The pilot deliverable is a model validation package your MRM team can review in parallel with the live test, not after it. Most KB-scale deployments clear internal model risk in 10–12 weeks when the documentation package is pre-built."
      },
      {
        objection: "We tried an ML underwriting model two years ago and the NPL performance was not acceptable.",
        response:
          "That generation of models was optimized purely for approval rate lift, often at the expense of NPL. This architecture optimizes for risk-adjusted approval rate — it's calibrated to hold or improve NPL while recovering the creditworthy-but-declined segment. The pilot runs as a shadow model for four weeks before any live approval decisions are made, so you have a clean NPL comparison before committing to production."
      },
      {
        objection: "Data sovereignty regulations prevent us from using cloud-based AI infrastructure for credit decisions.",
        response:
          "The model runs entirely on KB's on-premise infrastructure. There is no data transmission outside your environment. The deployment architecture is identical to what we run for two other Tier 1 Korean banks — we can walk your data governance team through the technical specification before the pilot SOW is signed."
      }
    ],
    agenda: [
      {
        time: "0–10 min",
        topic: "Q3 board review timeline and the investor guidance commitment",
        outcome: "Confirm the Q3 board review date and what a 'credible AI ROI story' looks like from Dong-won's perspective. Get the approval rate target on the table — that's the anchor for everything else."
      },
      {
        time: "10–25 min",
        topic: "Loan underwriting pilot architecture",
        outcome: "Walk through the shadow model approach: 4 weeks observation-only before any live decisions. Confirm that this addresses the CRO's model risk concerns. Identify whether Jung-ho's team needs to be in this conversation from week one."
      },
      {
        time: "25–40 min",
        topic: "FSS compliance architecture",
        outcome: "Show the explainability and audit trail design. Confirm whether the MRM team can review in parallel with the pilot or requires sequential review. Get a named MRM contact who can participate in the pilot governance structure."
      },
      {
        time: "40–45 min",
        topic: "Next step: CRO briefing",
        outcome: "Book a separate 45-minute session with Jung-ho Lee's risk team to walk through the model governance architecture before the pilot SOW is drafted. Agree on the pilot start date contingent on that session."
      }
    ],
    positioning: [
      "KB's loan underwriting gap is not a risk problem — it's a model architecture problem. Behavioral signals from 50 million KB customers predict repayment better than external credit scores alone. The pilot makes that case with KB's own data in 10 weeks.",
      "The FSS governance framework is not a barrier to moving fast — it's a forcing function. A pilot designed for the framework from day one clears model risk faster than a build-first-comply-later approach.",
      "The combined ROI case — ₩12B in incremental NIM from underwriting and ₩18B in contact center savings — is the largest efficiency story in the KB 'Next Round' technology plan, and it's achievable within the current investment envelope."
    ]
  },

  pilotPlan: {
    weeks: 6,
    scope: [
      "Shadow model deployment: behavioral credit scoring on 100% of declined retail loan applications",
      "4-week observation period: model outputs logged but no live approval decisions",
      "FSS-compliant explainability layer: reason codes for every model decision",
      "Model monitoring dashboard: approval rate, NPL proxy, and drift alerts",
      "Parallel MRM review package delivered at week 3",
      "Out of scope: SME lending, mortgage underwriting, KB Card credit decisions"
    ],
    phases: [
      {
        name: "Data & Shadow Deployment",
        weeks: "Weeks 1–2",
        startWeek: 1,
        endWeek: 2,
        objective: "Deploy behavioral model in shadow mode and validate against historical approval/NPL data",
        deliverables: [
          "Shadow model live on real-time loan application stream",
          "Historical validation: approval rate lift and NPL comparison on 24-month dataset",
          "MRM documentation package: model card, explainability spec, monitoring plan"
        ]
      },
      {
        name: "Shadow Observation",
        weeks: "Weeks 3–4",
        startWeek: 3,
        endWeek: 4,
        objective: "Run shadow model for 4 weeks, collect approval rate and risk signal data",
        deliverables: [
          "4-week shadow approval rate vs. production approval rate comparison",
          "Risk signal quality report: behavioral predictor performance vs. NICE/KCB score",
          "CRO review session: model performance and governance architecture"
        ]
      },
      {
        name: "Live Test & Board Readout",
        weeks: "Weeks 5–6",
        startWeek: 5,
        endWeek: 6,
        objective: "Begin limited live testing and produce Q3 board-ready results package",
        deliverables: [
          "Live approval decisions on 10% of previously-declined applicants (CRO-approved segment)",
          "Week-1 early NPL proxy: application quality indicators on live approvals",
          "Board readout deck: approval rate lift, risk model performance, production expansion plan",
          "Full production deployment recommendation with 12-month NPL projection"
        ]
      }
    ],
    roi: {
      investment: "$900K",
      projectedSavings: "₩18B (~$13M) in contact center cost reduction annually",
      projectedValue: "$3.5M first-year combined value",
      paybackPeriod: "3–4 months",
      threeYearValue: "$12.8M",
      valueDrivers: [
        "8-point loan approval rate improvement recovers ₩800B–₩1T of creditworthy loan volume, adding ₩12–15B (~$9–11M) in net interest income annually",
        "Contact center resolution rate improvement from 31% to 65% eliminates ₩18B (~$13M) in annual agent handling cost",
        "AML backlog elimination removes FSS regulatory exposure valued conservatively at ₩30B+ in potential enforcement action cost avoidance"
      ]
    },
    executiveSummary: [
      "KB's loan approval gap is not a credit risk problem — it's a model architecture problem. Behavioral signals from KB's own transaction data identify 18–22% of declined applicants who are strong repayment risks. The pilot recovers that volume in 10 weeks without adding NPL.",
      "The business case is the largest efficiency story in the KB Next Round plan: ₩12–15B in incremental NIM from underwriting plus ₩18B in contact center savings against a $900K investment that pays back in under four months.",
      "The pilot is designed to satisfy the FSS AI governance framework from day one — the explainability layer and model monitoring stack are built in, not added at the end. The board readout happens at week six with a production expansion recommendation in hand."
    ],
    followUpEmail: {
      subject: "KB Kookmin AI Pilot — Behavioral Credit Scoring: Architecture Summary & CRO Session",
      body: `Dong-won, Soo-yeon —

Thank you for today. I want to confirm the two things that determine whether we hit the Q3 board review with real numbers.

First: the pilot design we aligned on. Shadow model deployment on 100% of declined retail loan applications, 4-week observation period before any live approval decisions, FSS-compliant explainability layer, and a model review package delivered to the MRM team at week 3. This gives Jung-ho's team a full two weeks to review governance before the live test window opens.

Second: the CRO session. We need 45 minutes with Jung-ho Lee's team before the pilot SOW is signed — specifically to walk through the model governance architecture and get his risk team into the pilot governance structure from the start. That session is what converts a 6-month model validation timeline into a 6-week one.

I'll send the technical architecture document and the FSS compliance mapping tomorrow. If you can coordinate a date for the CRO session in the next two weeks, we can have a signed SOW before end of April and live results before the Q3 board review.

What works on your end?`
    }
  }
};
