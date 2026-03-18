import type { AccountBrief } from "@/types";

export const rainbowRobotics: AccountBrief = {
  account: {
    company: "Rainbow Robotics",
    industry: "Robotics",
    situation:
      "Rainbow Robotics is the fastest-growing collaborative robot (cobot) company in Korea — 180 employees, ₩35B in 2025 revenue (up 140% year-over-year), and a partnership with Samsung Electronics that positions them as the preferred automation supplier for Korea's next wave of smart factory deployments. Their RB cobot line is technically competitive with Universal Robots and FANUC on core specs, and significantly cheaper in the Korean market. The growth constraint is not product — it's the surrounding intelligence layer. Customers buy the hardware, struggle to program it, escalate to Rainbow's small field engineering team, and either churn or plateau at low automation coverage. The company has 12 field engineers supporting 400+ customer deployments. That ratio doesn't scale. The CEO has publicly committed to embedding AI into every cobot sold by Q4 2026 — making every hardware sale an AI software sale.",
    painPoints: [
      {
        title: "Field engineering is the bottleneck between sale and customer value",
        detail:
          "We sold 340 cobots last year. Every one of them needed field engineering support to reach production-ready programming. Our 12 field engineers handled 340 deployments — averaging 6 deployments per engineer in a year where each deployment should take 2–3 weeks on site. The math doesn't work. We're choosing between shipping hardware that customers can't fully use and hiring field engineers faster than we can train them.",
        severity: "High"
      },
      {
        title: "Customers plateau at 30–40% automation coverage because reprogramming is too hard",
        detail:
          "The typical Rainbow customer automates one or two processes, gets stuck when the production line changes, and waits for a field engineer visit. The average wait time for a field engineer is 3–4 weeks. During that window, customers are either running the process manually or not running it at all. We have data showing that customers who get reprogramming support within a week double their automation coverage within six months. The ones who wait never expand.",
        severity: "High"
      },
      {
        title: "Software monetization is near zero on a hardware-heavy revenue base",
        detail:
          "₩33B of our ₩35B in 2025 revenue was hardware. Our software and services revenue was ₩2B. Publicly traded cobot companies with strong software attach rates trade at 8–12× revenue. We're not in that conversation yet because we don't have a software product that justifies a recurring revenue line — which directly affects our Series C valuation conversation.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "Jan 2026",
        title: "Samsung partnership expands to include 5 Pyeongtaek fab lines",
        detail: "Samsung Electronics confirmed expansion of the Rainbow Robotics strategic partnership to cover five additional semiconductor fab production lines at the Pyeongtaek P3 campus. Estimated hardware revenue: ₩18B over 18 months. Deployment complexity: significantly higher than previous factory floor installations.",
        impact: "The Samsung expansion is the largest single deployment in Rainbow's history — and the one most likely to expose the field engineering bottleneck at a scale that damages the relationship."
      },
      {
        dateLabel: "Feb 2026",
        title: "Series C fundraising process opens with AI software attach rate as key diligence item",
        detail: "Rainbow Robotics' lead investor and new Series C prospects have indicated that software and recurring revenue attach rate is the primary valuation driver for the round. The current ₩2B software revenue on ₩35B hardware is a material discount factor.",
        impact: "AI software revenue attach is now a Series C prerequisite — making a production AI product a fundraising milestone, not just a product initiative."
      },
      {
        dateLabel: "Mar 2026",
        title: "Doosan Robotics announces AI programming assistant in Q2 2026 roadmap",
        detail: "Doosan Robotics announced an AI-powered cobot programming assistant at the Korea Robot Week conference in March 2026, with a Q2 beta and a Q3 commercial launch. Rainbow has a 6-month window before the feature parity gap closes.",
        impact: "Competitive urgency: the AI programming differentiation that Rainbow has been planning becomes a catch-up play if Doosan ships first."
      }
    ],
    objectives: [
      {
        title: "Ship an AI programming assistant that enables self-service cobot deployment",
        targetKpi: "Customer self-service deployment rate: 5% → 40% within 12 months; field engineer support calls per deployment reduced by 60%",
        rationale:
          "A self-service deployment capability turns the field engineering bottleneck from a growth constraint into a scale advantage — and it's the software product that justifies the Series C software revenue narrative."
      },
      {
        title: "Build a recurring software revenue line to ₩8B by end of 2026",
        targetKpi: "Software & services ARR: ₩2B → ₩8B by December 2026",
        rationale:
          "₩8B in software ARR at 70%+ gross margin transforms the revenue profile and the valuation multiple conversation in the Series C process."
      }
    ]
  },

  opportunities: [
    {
      useCase: "AI Cobot Programming Assistant (Natural Language to Motion)",
      description:
        "Build a natural language programming interface that lets factory operators describe a task in plain Korean or English — 'pick the part from conveyor A and place it in bin B' — and automatically generates the cobot motion program, validates against the physical workspace, and runs a simulation before deployment. Eliminates the need for field engineer programming support for 80% of standard tasks.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "10–14 weeks",
      priority: "P1"
    },
    {
      useCase: "Predictive Maintenance Alerts for Deployed Cobots",
      description:
        "Connect telemetry from the RB cobot fleet to a predictive health model that flags joint wear, torque anomalies, and calibration drift before they cause unplanned downtime. Delivered as a monthly fleet health report and a real-time alert layer — the core of a recurring software subscription offer.",
      impactScore: 8,
      difficulty: 4,
      timeToValue: "6–8 weeks",
      priority: "P2"
    },
    {
      useCase: "Automated Deployment Readiness Audit",
      description:
        "AI-powered pre-deployment checklist that analyzes the customer's workspace data (dimensions, lighting, obstacle proximity) against the planned cobot task and flags configuration issues before a field engineer visit — reducing on-site deployment time by 40% and eliminating the most common causes of failed first deployments.",
      impactScore: 7,
      difficulty: 3,
      timeToValue: "4–6 weeks",
      priority: "P3"
    }
  ],

  stakeholders: [
    {
      name: "Sang-baek Han",
      role: "Economic Buyer",
      title: "CEO & Co-Founder",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "He has publicly committed to 'AI in every cobot by Q4 2026' and is running a Series C process where software revenue is the key valuation driver. He needs a production-ready AI product, not a pilot that lives in demo mode. Speed and tangible revenue impact are the only metrics that matter to him right now.",
      recommendedApproach:
        "Open with the Series C framing. The AI programming assistant is the product that converts hardware sales into software ARR — position it as the revenue architecture conversation, not a feature conversation. Give him a production deployment timeline that lands before the Series C close."
    },
    {
      name: "Ji-hoon Kwon",
      role: "Champion",
      title: "Head of Software Engineering",
      stance: "Supportive",
      influence: "Medium",
      keyConcern:
        "His team has been building the AI programming assistant internally for 18 months and has a working prototype that handles simple tasks. He is supportive of acceleration but needs to know that the external solution integrates with their existing RB SDK and doesn't displace his team's work.",
      recommendedApproach:
        "Frame the engagement as accelerating what his team has already built, not replacing it. The integration spec conversation should happen in the first technical session — show him that his team's SDK knowledge is an input into the system architecture, not a constraint to work around."
    },
    {
      name: "Young-soo Lim",
      role: "Technical Evaluator",
      title: "Lead Field Applications Engineer",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "He is the most skeptical person in the room. Field engineers have seen 'AI that programs cobots' before and it never works outside a controlled demo. He will probe hard on edge cases, unusual workpiece geometries, and what happens when the natural language instruction is ambiguous.",
      recommendedApproach:
        "Put him in the pilot design. Let him write the test cases. Give him the hardest real-world programming tasks from his most difficult recent deployments and show him what the system does with them. If he becomes a believer, he becomes the most credible internal reference for the Samsung deployment."
    }
  ],

  dealStrategy: {
    objections: [
      {
        objection: "We've been building this internally for 18 months. Why would we bring in a vendor now?",
        response:
          "The internal prototype handles simple pick-and-place tasks. The production gap — complex multi-step tasks, ambiguous natural language, workspace collision validation, RB SDK integration — is a 12–18 month engineering problem at your current team size. The Doosan announcement makes that timeline a competitive risk. The pilot is designed to accelerate the prototype your team has already built, not replace it. Ji-hoon's SDK work is the foundation — we build on top of it."
      },
      {
        objection: "We're a startup. We can't take on a vendor engagement that adds complexity to our roadmap.",
        response:
          "The engagement model is designed for a startup operating pace: a six-week pilot with a named deliverable (working AI programming assistant on 5 standard RB tasks), a fixed price, and a clear go/no-go decision at week six. If it doesn't work, you've spent six weeks and a contained budget. If it does, you have a production-ready software product before the Series C closes."
      },
      {
        objection: "Our Samsung partnership gives us all the deployment learning we need — we don't need external AI help.",
        response:
          "The Samsung P3 deployment is the highest-stakes deployment Rainbow has ever done. The programming complexity is 3× a standard factory floor. If the field engineering bottleneck shows up on that deployment at that scale, it creates a reputational risk with your most important customer. The pilot runs on the Samsung use cases specifically — Young-soo's hardest deployment scenarios — so the AI assistant is proven on Pyeongtaek conditions before the deployment begins."
      }
    ],
    agenda: [
      {
        time: "0–10 min",
        topic: "Series C timeline and software revenue requirement",
        outcome: "Get the Series C timeline and the software ARR target on the table. Confirm that the AI programming assistant is the primary product the investors are asking about. Establish that the pilot timeline is anchored to the fundraising milestone."
      },
      {
        time: "10–25 min",
        topic: "Internal prototype review with Ji-hoon",
        outcome: "Let Ji-hoon show what the internal prototype does. Identify the exact gap between current capability and production-ready. Establish that the external engagement accelerates the prototype rather than replacing it — Ji-hoon should leave the room feeling like a co-architect, not a skeptic."
      },
      {
        time: "25–40 min",
        topic: "Samsung Pyeongtaek use case walkthrough with Young-soo",
        outcome: "Have Young-soo walk through the 3 most complex programming tasks in the Samsung deployment. Confirm that those become the pilot test cases. The AI assistant needs to pass Young-soo's test — not a demo script."
      },
      {
        time: "40–45 min",
        topic: "Pilot structure and Series C alignment",
        outcome: "Agree on pilot scope: 5 Samsung deployment task types, Ji-hoon's SDK as the integration layer, 6-week timeline. Confirm that a successful pilot result constitutes the 'production-ready AI product' milestone for the Series C diligence package."
      }
    ],
    positioning: [
      "Rainbow has the hardware advantage, the Samsung relationship, and the market timing. The AI programming assistant is the product that converts a hardware sale into a software subscription — and it's the difference between a hardware company valuation and a robotics software platform valuation.",
      "The pilot runs on Pyeongtaek deployment conditions — the hardest programming scenarios from the Samsung expansion — because that's the customer situation where the AI assistant has to work, not a controlled lab. If Young-soo's test cases pass, the Samsung deployment risk goes from 'potential bottleneck' to 'proof point.'",
      "Six weeks. Five Samsung use cases. One binary outcome: does the AI programming assistant handle production-grade cobot tasks without field engineer intervention? That's the question the Series C investors are really asking, and the pilot answers it with data instead of a roadmap slide."
    ]
  },

  pilotPlan: {
    weeks: 6,
    scope: [
      "5 Samsung Pyeongtaek task types: pick-and-place, conveyor tracking, precision insertion, bin sorting, dual-arm coordination",
      "Natural language interface: Korean and English input, RB SDK output",
      "Workspace collision validation: point cloud integration with existing RB simulation environment",
      "Ji-hoon's internal SDK as the integration layer — no displacement of existing team work",
      "Deployment readiness audit: pre-deployment checklist for all 5 task types",
      "Out of scope: Doosan, FANUC, or non-RB cobot hardware; custom gripper end-effectors"
    ],
    phases: [
      {
        name: "SDK Integration & Task Baseline",
        weeks: "Weeks 1–2",
        startWeek: 1,
        endWeek: 2,
        objective: "Integrate with RB SDK and establish performance baseline on 5 Samsung task types",
        deliverables: [
          "RB SDK integration confirmed with Ji-hoon's team",
          "Baseline: current field engineer programming time per task type",
          "Natural language parsing validated on 25 instruction variants per task"
        ]
      },
      {
        name: "AI Assistant Build & Internal Test",
        weeks: "Weeks 3–4",
        startWeek: 3,
        endWeek: 4,
        objective: "Build and internally test the AI programming assistant on Young-soo's Samsung use cases",
        deliverables: [
          "Working AI assistant: natural language → validated RB motion program for all 5 task types",
          "Young-soo test case results: success rate and failure mode analysis",
          "Collision validation: workspace safety check on Samsung Pyeongtaek floor dimensions"
        ]
      },
      {
        name: "Live Demo & Series C Package",
        weeks: "Weeks 5–6",
        startWeek: 5,
        endWeek: 6,
        objective: "Live demonstration on Samsung hardware and produce Series C-ready documentation",
        deliverables: [
          "Live demo: operator programs cobot in natural language with no field engineer present",
          "Performance report: programming time reduction vs. baseline, task success rate",
          "Series C diligence package: AI product specification, deployment timeline, ARR model",
          "Production deployment plan: Samsung P3 rollout with AI assistant integration"
        ]
      }
    ],
    roi: {
      investment: "$280K",
      projectedSavings: "₩4B in field engineering cost reduction annually at 2026 deployment volume",
      projectedValue: "$800K first-year value",
      paybackPeriod: "4–5 months",
      threeYearValue: "$3.2M",
      valueDrivers: [
        "Field engineering capacity: 60% reduction in support calls per deployment allows 12 engineers to support 2× deployment volume without headcount addition (₩3B annual cost avoided)",
        "Software ARR: AI programming assistant subscription at ₩3M per cobot per year on 400 deployed units = ₩1.2B recurring revenue by year 1; ₩6B by year 3 at current growth rate",
        "Series C valuation uplift: ₩8B software ARR at 8× revenue multiple adds ₩64B to the equity story — the ROI of the pilot is the Series C, not just the efficiency gains"
      ]
    },
    executiveSummary: [
      "Rainbow has the hardware, the Samsung relationship, and the market timing — the missing piece is a software product that converts a cobot sale into a recurring revenue subscription. The AI programming assistant is that product, and the pilot proves it in six weeks on Samsung's actual deployment conditions.",
      "The business case is unconventional for a pilot at this scale: the primary ROI is not cost reduction but Series C valuation. ₩8B in software ARR at an 8× revenue multiple adds ₩64B to the equity story — against a $280K pilot investment.",
      "The pilot is designed around Young-soo's hardest Samsung use cases, not a demo script. If the AI assistant passes the Pyeongtaek test, it's production-ready for the Samsung expansion and it's the proof point that closes the Series C diligence conversation."
    ],
    followUpEmail: {
      subject: "Rainbow Robotics AI Pilot — Programming Assistant: Samsung Use Cases & Series C Timeline",
      body: `Sang-baek, Ji-hoon —

Great conversation today. I want to confirm the two things that make the timeline work.

First: the pilot scope. Five Samsung Pyeongtaek task types. Young-soo's test cases. RB SDK as the integration layer — Ji-hoon's team is a co-architect, not a bystander. Six weeks from kickoff to a live demo on real Samsung hardware. The deliverable at the end is a Series C-ready product specification, not just a pilot report.

Second: the Series C alignment. If the live demo shows an operator programming a cobot in natural language without field engineer support, that's the 'production-ready AI product' milestone your investors are asking about. I'd like to understand your Series C timeline so we can back-plan the pilot start date — if your diligence process opens in Q3, we need to be starting the pilot in the next 3–4 weeks.

The one thing I need before the end of the week: a 60-minute technical session with Ji-hoon to review the RB SDK and confirm the integration spec. Everything else in the pilot design depends on that session.

Can we find time next week?`
    }
  }
};
