import type { AccountBrief } from "@/types";

export const miraeAsset: AccountBrief = {
  account: {
    company: "Mirae Asset Securities",
    industry: "Securities",
    situation:
      "Mirae Asset Securities is Korea's largest securities firm by total assets (₩70T AUM), operating Korea's most active retail brokerage platform alongside a fast-growing global investment banking business spanning 13 countries. The firm handled 1.4 billion equity trades in 2025 and manages over 2.8 million active retail accounts. The core growth thesis is internationalization: pushing beyond domestic equities into global ETF, US stock, and alternative asset distribution to a retail base that is increasingly sophisticated. The challenge is infrastructure — the research production pipeline, compliance review process, and retail advisory touchpoints are all sized for the 2019 business, not the 2026 one. The Head of Digital and Head of Research have both flagged AI as the primary enabler of the next operating model, and the firm has allocated ₩80B in technology investment for 2026 with AI as the largest single line item.",
    painPoints: [
      {
        title: "Research production can't keep up with coverage demand",
        detail:
          "Our institutional research team publishes 1,200 reports annually. Global fund managers expect weekly updates on every position. We cover 180 Korean equities in depth but have thin or no coverage on 40% of the global names our HNW clients are actively trading. We're losing institutional mandates to firms that can produce faster, broader coverage — not because our analysis is worse but because we can't scale the publication volume.",
        severity: "High"
      },
      {
        title: "Compliance review creates a 48-hour lag on every client communication",
        detail:
          "Every research note, investment commentary, and client-facing market update goes through a compliance review process that averages 48 hours. In a market-moving week, that lag makes the content obsolete before it's distributed. Our compliance team is not the problem — the manual review workflow is. We have 12 compliance officers reviewing 200+ documents per week, and 70% of those reviews are simple format and disclosure checks that a rule-based system should handle.",
        severity: "High"
      },
      {
        title: "HNW client retention is declining as robo-advisor alternatives improve",
        detail:
          "We lost 8,400 accounts in the ₩100M–₩500M segment in 2025 — our most profitable retail tier. Exit surveys show 61% cited 'not enough personalized guidance on global portfolio allocation' as the primary reason. Our advisors average 180 clients each. At that ratio, a meaningful personalized rebalancing conversation happens twice a year, not quarterly. The accounts that need the most attention are getting the least.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "Jan 2026",
        title: "FSC approves AI-generated investment research with disclosure requirements",
        detail: "The Financial Services Commission issued guidance in January 2026 allowing securities firms to publish AI-assisted research under a mandatory disclosure framework. The guidance explicitly permits AI draft generation with analyst review and sign-off.",
        impact: "Regulatory clarity removes the primary blocker for AI research production — firms that move fast now will establish a coverage breadth advantage before the market normalizes."
      },
      {
        dateLabel: "Feb 2026",
        title: "Samsung Securities announces 3× research volume increase using AI tooling",
        detail: "Samsung Securities disclosed in its investor day presentation that it increased research publication volume by 3× in H2 2025 using an AI-assisted drafting workflow, while reducing research team headcount by 12%.",
        impact: "Competitive pressure is now quantified and public. The coverage breadth gap between Mirae Asset and the first mover is widening every month without action."
      },
      {
        dateLabel: "Mar 2026",
        title: "Mirae Asset Global Investments targets 5 new country market entries in 2026",
        detail: "The global investment banking division has announced market entry plans for Vietnam, Indonesia, and three other ASEAN markets in 2026. Each entry requires local market research coverage to support client onboarding and institutional business development.",
        impact: "The research scaling problem becomes a market expansion blocker — the global growth thesis cannot execute without a solution to the coverage gap."
      }
    ],
    objectives: [
      {
        title: "Triple research publication volume without adding analyst headcount",
        targetKpi: "Research publications: 1,200 → 3,600 annually within 12 months",
        rationale:
          "Matching Samsung Securities' benchmark and establishing Mirae Asset as the broadest-coverage securities firm in Korea creates a durable institutional mandate advantage and supports the global expansion coverage requirement."
      },
      {
        title: "Reduce compliance review cycle from 48 hours to 4 hours",
        targetKpi: "Average compliance review time: 48 hours → 4 hours within 9 months",
        rationale:
          "A 4-hour review cycle transforms research from a delayed recap into a live market commentary capability — the product category that institutional clients and HNW retail clients consistently rate as highest value."
      }
    ]
  },

  opportunities: [
    {
      useCase: "AI-Assisted Research Drafting & Coverage Expansion",
      description:
        "Deploy an AI drafting layer that generates earnings preview and post-results research templates from financial data feeds, consensus estimates, and previous analyst notes. Analysts review, edit, and publish — transforming from writers to editors and expanding coverage capacity 3× without headcount growth.",
      impactScore: 9,
      difficulty: 4,
      timeToValue: "6–8 weeks",
      priority: "P1"
    },
    {
      useCase: "Automated Compliance Pre-Screening",
      description:
        "Build a compliance review assistant that performs automatic disclosure checking, format validation, and regulatory language flagging before documents reach the compliance team — reducing manual review volume by 70% and cutting average review time from 48 hours to under 4 hours.",
      impactScore: 8,
      difficulty: 3,
      timeToValue: "4–6 weeks",
      priority: "P2"
    },
    {
      useCase: "Personalized Portfolio Rebalancing Alerts",
      description:
        "Generate proactive, personalized portfolio commentary for each HNW client based on their actual holdings, recent market events, and stated risk profile — delivered as advisor-ready talking points rather than generic market updates. Moves advisor client coverage from 180 accounts to 400 without adding advisory headcount.",
      impactScore: 7,
      difficulty: 5,
      timeToValue: "10–12 weeks",
      priority: "P3"
    }
  ],

  stakeholders: [
    {
      name: "Jae-hun Choi",
      role: "Economic Buyer",
      title: "Head of Digital Strategy & Innovation",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "He owns the ₩80B technology budget and has personally championed AI in the firm's investor day presentation. He needs a vendor who can deliver a live production deployment in 2026, not another pilot that gets stuck in IT procurement for six months.",
      recommendedApproach:
        "Lead with compliance automation as the first deliverable — it's the fastest path to a visible production win and it removes the primary bottleneck for every other AI initiative. The research drafting pilot follows immediately after, timed to coincide with the ASEAN market entry coverage requirement."
    },
    {
      name: "Min-kyung Yoon",
      role: "Champion",
      title: "Head of Equity Research",
      stance: "Supportive",
      influence: "Medium",
      keyConcern:
        "Her team is the most affected by the coverage breadth gap and she is intellectually supportive of AI drafting — but she has a non-negotiable: analyst names stay on the reports, AI is in the workflow, not in the byline. She is worried about analyst morale if the narrative becomes 'AI is replacing research.'",
      recommendedApproach:
        "Position the workflow explicitly: AI generates the data scaffold, the analyst adds the investment thesis and the conviction call. The byline stays with the analyst. Bring examples of how peer firms have managed the analyst communication — she will be the internal champion if the framing is right."
    },
    {
      name: "Byung-chul Kwon",
      role: "Technical Evaluator",
      title: "Chief Compliance Officer",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "The FSC guidance is clear but he is responsible for the first enforcement action if an AI-generated report contains a disclosure error. He needs to understand the error rate of the pre-screening system and what the human review backstop looks like before he signs off on any production deployment.",
      recommendedApproach:
        "Make the compliance automation pilot his pilot. Give his team full visibility into the pre-screening logic, let them define the test cases, and build the error rate report around their acceptance criteria. The goal is to get him from gatekeeper to co-owner of the compliance workflow."
    }
  ],

  dealStrategy: {
    objections: [
      {
        objection: "Our research has a reputation premium — we can't risk a quality drop from AI-generated content.",
        response:
          "The workflow is analyst-edited, not AI-published. The AI generates the data scaffold — earnings variance, consensus positioning, sector comps — and the analyst writes the investment thesis and the conviction call. The byline and the reputation stay with the analyst. What changes is that the analyst spends time on insight, not data formatting. Samsung Securities ran the same concern through the same analysis and shipped 3× volume with higher analyst NPS scores."
      },
      {
        objection: "The FSC disclosure requirements are still new and we don't want to be the first firm to get an enforcement action.",
        response:
          "The compliance automation pilot is specifically designed to make Byung-chul's team the most confident compliance operation in the industry, not the most exposed. The pre-screening layer catches disclosure errors before they reach the review queue. The FSC guidance is explicit — the risk of being the second mover is a coverage breadth gap that is already widening, not a regulatory one."
      },
      {
        objection: "We've had procurement and IT security delays on every major software vendor engagement in the past two years.",
        response:
          "The compliance pre-screening pilot can be deployed on Mirae Asset's existing infrastructure in three weeks — there is no new cloud environment to provision and no data leaves your network. The IT security review is a standard document check, not an architecture evaluation. We'll provide the security documentation package before the SOW is signed so procurement runs in parallel with the pilot design."
      }
    ],
    agenda: [
      {
        time: "0–10 min",
        topic: "ASEAN expansion and the coverage requirement",
        outcome: "Confirm which markets are entering in 2026 and the research coverage requirement for each. Establish that the research scaling use case is directly tied to the expansion timeline — not a standalone IT project."
      },
      {
        time: "10–25 min",
        topic: "Compliance automation pilot design",
        outcome: "Walk through the pre-screening architecture. Confirm that Byung-chul's team can define the test cases and acceptance criteria. Establish that this pilot can be live in 4 weeks with no new IT infrastructure."
      },
      {
        time: "25–40 min",
        topic: "Research drafting workflow and analyst communication plan",
        outcome: "Align on the 'analyst as editor' framing with Min-kyung. Confirm that bylines stay with analysts and that the AI workflow is positioned as a coverage capacity tool, not a headcount reduction tool. Agree on how to communicate the pilot to the research team."
      },
      {
        time: "40–45 min",
        topic: "Parallel pilot structure and timeline",
        outcome: "Agree that compliance automation starts immediately (4 weeks to live) and research drafting begins in parallel at week 3. Name the internal pilot owners for each workstream and confirm the first steering committee meeting date."
      }
    ],
    positioning: [
      "Mirae Asset's research quality is not the constraint — research capacity is. AI as an analyst productivity tool, not a content generator, triples coverage breadth without touching the analyst brand or the research franchise.",
      "The compliance automation case is the fastest path to a visible production win: 4 weeks to deployment, 70% reduction in manual review volume, 44-hour improvement in content velocity — and it makes every other AI initiative in the firm easier to approve.",
      "The combined ROI case — ₩8B in research revenue from expanded institutional mandates and ₩6B in compliance cost reduction — pays back the full investment in under five months and positions Mirae Asset as the coverage-breadth leader before the ASEAN market entries land."
    ]
  },

  pilotPlan: {
    weeks: 6,
    scope: [
      "Compliance pre-screening: 100% of research documents and client-facing materials",
      "AI research drafting: 20 earnings season reports (Korean mid-cap equities, analyst-edited)",
      "Disclosure error rate benchmark: pre-screening vs. manual review comparison",
      "Research turnaround time: before/after comparison on 20 pilot reports",
      "Analyst workflow integration: drafting assistant embedded in existing authoring tools",
      "Out of scope: HNW portfolio personalization (Phase 2), international market coverage (Phase 3)"
    ],
    phases: [
      {
        name: "Compliance Automation",
        weeks: "Weeks 1–2",
        startWeek: 1,
        endWeek: 2,
        objective: "Deploy compliance pre-screening on 100% of research document flow",
        deliverables: [
          "Pre-screening system live on all outbound research documents",
          "Disclosure error rate: AI pre-screening vs. manual review comparison",
          "False positive rate report (compliance team acceptance criteria)"
        ]
      },
      {
        name: "Research Drafting Pilot",
        weeks: "Weeks 3–4",
        startWeek: 3,
        endWeek: 4,
        objective: "Deploy AI drafting assistant for earnings season coverage",
        deliverables: [
          "20 pilot reports: AI-drafted scaffold + analyst-edited output",
          "Turnaround time comparison: pilot reports vs. standard production",
          "Analyst satisfaction survey: workflow experience and output quality"
        ]
      },
      {
        name: "Measurement & Scale Plan",
        weeks: "Weeks 5–6",
        startWeek: 5,
        endWeek: 6,
        objective: "Measure pilot results and design full-scale deployment",
        deliverables: [
          "Compliance: 6-week error rate and review time comparison report",
          "Research: coverage expansion model — 1,200 → 3,600 annual publications plan",
          "Institutional client response: pilot report quality vs. standard report feedback",
          "Full deployment plan with ASEAN market coverage integration timeline"
        ]
      }
    ],
    roi: {
      investment: "$550K",
      projectedSavings: "₩8B (~$6M) in compliance cost and research production efficiency",
      projectedValue: "$1.4M first-year value",
      paybackPeriod: "4–5 months",
      threeYearValue: "$5.2M",
      valueDrivers: [
        "Coverage breadth expansion from 180 to 500+ equity names attracts ₩5–8B in new institutional mandates annually (est. 3–5% mandate win rate improvement at target firms)",
        "Compliance review cost reduction: 70% reduction in manual review volume = ₩4B annually in compliance team capacity recaptured for higher-value work",
        "HNW client retention: personalized portfolio commentary targets recovery of 30% of the 8,400 churned accounts (₩2B in annual commission revenue)"
      ]
    },
    executiveSummary: [
      "The research and compliance bottleneck is not a quality problem — it's a throughput problem. AI as an analyst productivity tool triples coverage capacity without changing the research brand or the analyst team composition.",
      "The compliance automation pilot is the fastest win in the stack: 4 weeks to production, 70% manual review reduction, 44-hour improvement in content velocity — and it removes the primary bottleneck for every downstream AI initiative.",
      "The combined three-year value of ₩19B across research revenue expansion, compliance cost reduction, and HNW retention pays back the $550K investment in under five months and positions Mirae Asset as Korea's coverage-breadth leader before the ASEAN expansion begins."
    ],
    followUpEmail: {
      subject: "Mirae Asset AI Pilot — Compliance & Research: Parallel Workstream Design",
      body: `Jae-hun, Min-kyung —

Thank you for the conversation today. I want to confirm the parallel structure we discussed, because getting both workstreams started together is what makes the 6-week timeline work.

Workstream 1 — Compliance pre-screening: Live on all outbound research documents within two weeks. Byung-chul's team defines the acceptance criteria in week one. The error rate report is the deliverable that determines production sign-off.

Workstream 2 — Research drafting: Starts at week three, runs against 20 earnings season reports. Min-kyung's team selects the reports. Analysts retain full editorial control and byline. The turnaround time comparison is the deliverable that determines the coverage expansion plan.

The thing I need from your side before the week is out: confirmation that Byung-chul can join a 60-minute technical session to define the compliance pre-screening acceptance criteria. That session is the critical path for the entire pilot.

I'll send the pilot architecture document and the IT security package tomorrow so your procurement team can start the parallel review.

What's Byung-chul's availability next week?`
    }
  }
};
