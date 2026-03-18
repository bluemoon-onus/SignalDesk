import type { AccountBrief } from "@/types";

export const skTelecom: AccountBrief = {
  account: {
    company: "SK Telecom",
    industry: "Telecom",
    situation:
      "SK Telecom's 5G subscriber base has reached a saturation point where ARPU is declining 4% year-over-year while network CAPEX continues to grow. The combination of shrinking per-subscriber revenue and rising infrastructure cost is compressing margins faster than the business development team can offset through new service revenue. High-value subscriber churn — the top 15% of subscribers by ARPU — has emerged as the most material near-term revenue risk. Simultaneously, the call center handles over 18 million contacts annually, 40% of which are repeat contacts on the same issue. The AI strategy team has a mandate to demonstrate measurable EBITDA impact from AI by Q3 2026.",
    painPoints: [
      {
        title: "Our best subscribers are leaving and we're finding out three months after the churn signal first appeared in their usage pattern",
        detail:
          "High-value subscribers show measurable behavioral signals — reduced data consumption, declining service engagement, increased support contacts — an average of 90 days before they port out. We're not acting on those signals because they're spread across four separate systems and nobody owns the early-intervention workflow.",
        severity: "High"
      },
      {
        title: "Network traffic prediction is still manual enough that we're over-provisioning in one cell cluster while the adjacent one is congested",
        detail:
          "Our current resource allocation model runs on 24-hour planning cycles. 5G traffic patterns change in 15-minute windows during commute peaks, sports events, and congestion events. We're spending on capacity we don't need in one area while degrading the experience for high-ARPU subscribers in another.",
        severity: "High"
      },
      {
        title: "Forty percent of call center contacts are repeat calls on issues we already resolved — the first time wasn't actually a resolution",
        detail:
          "When a customer calls twice about the same issue within 30 days, it means the first contact didn't solve the problem — it just closed the ticket. We have enough interaction data to predict which resolutions are likely to fail and which customers are at churn risk post-contact, but we're not using it.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "January 2026",
        title: "Q4 ARPU report confirmed a fourth consecutive quarter of 5G revenue per subscriber decline",
        detail:
          "CFO presented to the board with a margin compression timeline that makes EBITDA recovery from network efficiency and churn reduction a 2026 imperative, not a 2027 initiative.",
        impact:
          "Creates board-level urgency for revenue-protection AI with a specific EBITDA improvement target attached — the business case is already accepted, the debate is now about which use cases to start with."
      },
      {
        dateLabel: "February 2026",
        title: "Internal analysis revealed that top-15% ARPU subscribers represent 58% of total churn revenue loss",
        detail:
          "Customer analytics team segmented churn impact by subscriber value tier for the first time. The concentration of revenue risk in the top tier made early-intervention targeting a priority investment.",
        impact:
          "Focuses the churn prevention conversation on a defined, high-value segment — not a mass-market intervention. A targeted pilot with demonstrable lift has a faster path to executive approval."
      },
      {
        dateLabel: "March 2026",
        title: "AI strategy team issued a mandate to demonstrate EBITDA impact from AI by Q3 2026",
        detail:
          "CEO review set a specific timeline: at least one AI use case with measurable EBITDA contribution in production before the Q3 board update.",
        impact:
          "Creates a hard delivery window that favors vendors who can scope a credible six-week pilot and show operating results — not a twelve-month transformation program."
      }
    ],
    objectives: [
      {
        title: "Reduce high-value subscriber churn by acting on early behavioral signals",
        targetKpi: "15% reduction in top-ARPU-tier churn rate",
        rationale:
          "The top 15% of subscribers by ARPU represent 58% of churn revenue impact. A 15% churn reduction in that segment moves the EBITDA needle more than a broad-base intervention at twice the coverage."
      },
      {
        title: "Improve network resource allocation efficiency to reduce congestion-related ARPU degradation",
        targetKpi: "12% reduction in peak congestion events on priority cell clusters",
        rationale:
          "Network-driven experience degradation is the most frequently cited reason for high-value churn. Reducing congestion on priority clusters protects ARPU in the segment that matters most to the margin story."
      }
    ]
  },
  opportunities: [
    {
      useCase: "High-Value Subscriber Churn Prediction",
      description:
        "Identifies top-tier subscribers showing early churn behavioral signals — across usage, support, and service engagement data — and routes them to a targeted retention workflow 90 days before port-out risk peaks.",
      impactScore: 10,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P1"
    },
    {
      useCase: "Dynamic Network Traffic Allocation",
      description:
        "Forecasts 15-minute traffic demand by cell cluster and recommends real-time resource reallocation to eliminate over-provisioning in low-demand areas while preventing congestion in high-ARPU coverage zones.",
      impactScore: 9,
      difficulty: 7,
      timeToValue: "7–9 weeks",
      priority: "P2"
    },
    {
      useCase: "Contact Center Resolution Intelligence",
      description:
        "Predicts which issue resolutions are likely to fail and which post-contact customers are at elevated churn risk — triggering proactive outreach before the repeat contact window opens.",
      impactScore: 7,
      difficulty: 4,
      timeToValue: "3–5 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Hyun-soo Yim",
      role: "Economic Buyer",
      title: "EVP, Customer Strategy & Revenue Management",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that demonstrates measurable EBITDA contribution from AI before the Q3 board update — not a proof of concept that produces insights without a revenue line attached.",
      recommendedApproach:
        "Lead with high-value churn prevention. It has the tightest connection between AI output and revenue impact, the fastest time to a measurable result, and the clearest story for a board-level EBITDA update."
    },
    {
      name: "Min-kyung Seo",
      role: "Champion",
      title: "VP, AI Business Development",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a pilot that produces a replicable AI operating pattern — not a one-off model that the data science team has to rebuild from scratch for every new use case.",
      recommendedApproach:
        "Position the churn prediction and network allocation models as the first two layers of a shared subscriber intelligence platform — so Min-kyung can present a scale architecture to the CEO, not just a pilot result."
    },
    {
      name: "Joon-ho Lee",
      role: "Technical Evaluator",
      title: "Director, Network AI & Operations",
      stance: "Neutral",
      influence: "High",
      keyConcern:
        "Will evaluate whether the network allocation model can integrate with the existing OSS/BSS architecture and produce recommendations on a 15-minute cycle without creating operational complexity for the NOC team.",
      recommendedApproach:
        "Scope the network pilot to a defined set of high-priority cell clusters. Show a clean integration path with OSS that produces recommendations the NOC team can act on without changing their operating process."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "We have our own data science team running churn models. Why do we need a vendor for this?",
        response:
          "The internal team is running models — the gap is the early-intervention workflow that converts model output into a retention action before the churn signal becomes a port-out request. The pilot adds the operational layer between prediction and outcome, which is where the revenue impact lives."
      },
      {
        objection:
          "Network resource allocation touches live infrastructure. We can't run a pilot that creates operational risk for the NOC.",
        response:
          "The network allocation pilot runs in recommendation mode — the NOC team reviews every proposed reallocation before it is executed. No autonomous actions, no live infrastructure risk. The pilot measures how many recommendations the NOC accepts and what the congestion reduction looks like when they do."
      },
      {
        objection:
          "AI-driven retention campaigns can damage the relationship with high-value subscribers if the targeting is wrong.",
        response:
          "The model is designed for precision, not coverage. It only surfaces subscribers showing a minimum of three concurrent behavioral signals — not single-signal flags that produce noisy outreach. The pilot measures both lift and false-positive rate so the retention team can set their own precision threshold."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "Q3 EBITDA mandate and which AI use cases are closest to a measurable revenue result",
        outcome: "Align on the Q3 timeline and confirm that high-value churn prevention is the right pilot anchor."
      },
      {
        time: "5–15 min",
        topic: "Current churn model setup and where the early-intervention workflow breaks down",
        outcome: "Confirm the behavioral signal data available and the gap between model output and retention action."
      },
      {
        time: "15–25 min",
        topic: "Network traffic allocation process and NOC operating rhythm",
        outcome: "Understand the current planning cycle, NOC decision workflow, and what a 15-minute recommendation cadence would require operationally."
      },
      {
        time: "25–35 min",
        topic: "Pilot design — churn prediction scope, target subscriber tier, and network cluster selection",
        outcome: "Agree on the top-ARPU subscriber segment, the behavioral signal set, and the priority cell cluster for the network pilot."
      },
      {
        time: "35–45 min",
        topic: "Q3 reporting format and EBITDA attribution methodology",
        outcome: "Define how the pilot result will be measured, attributed, and presented at the Q3 board update."
      }
    ],
    positioning: [
      "The churn prediction pilot is designed to demonstrate measurable revenue impact before the Q3 board update — not to build a model, but to operationalize one that converts early subscriber signals into retention actions with a clear ARPU protection story.",
      "The network allocation model is scoped to a defined set of priority cell clusters and runs in recommendation mode — no live infrastructure risk, no NOC process change required to start measuring impact.",
      "If the churn pilot delivers a 15% reduction in top-tier churn and the network pilot demonstrates peak congestion reduction, SKT exits with a combined EBITDA case and a subscriber intelligence architecture that scales to every AI use case on the 2026 roadmap."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "Churn prediction model operating on top-15% ARPU subscribers — behavioral signals from usage, support, and service engagement data.",
      "Dynamic network allocation recommendations on a defined set of high-priority cell clusters — 15-minute cycle, NOC review before execution.",
      "Integration with existing CRM, OSS/BSS, and subscriber analytics platforms — no new data infrastructure.",
      "Weekly EBITDA attribution readouts: churn interventions made, retention outcomes tracked, congestion events avoided."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Connect to subscriber behavioral data and network telemetry, define the target churn cohort, and establish the early-intervention workflow with the retention team.",
        deliverables: [
          "Top-ARPU subscriber cohort defined; behavioral signal data confirmed across CRM and usage systems",
          "Priority cell cluster selection confirmed with Joon-ho's NOC team",
          "Churn intervention workflow: trigger criteria, retention action types, and tracking mechanism"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run churn predictions in live mode with retention team acting on high-confidence alerts, and network recommendations in NOC review mode.",
        deliverables: [
          "Churn alerts surfaced to retention team; actions taken and subscriber outcomes tracked",
          "Network allocation recommendations reviewed by NOC daily; accepted vs. dismissed and congestion outcome recorded",
          "Weekly impact report: ARPU at risk protected, congestion events vs. baseline"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Calculate ARPU protection, quantify network efficiency gains, and build the Q3 board EBITDA contribution case.",
        deliverables: [
          "Churn lift calculation: intervention cohort vs. control group; ARPU protected annualized",
          "Network congestion reduction: pilot clusters vs. baseline; OPEX savings projection",
          "Q3 board package: EBITDA contribution summary and 12-month scale investment case"
        ]
      }
    ],
    roi: {
      investment: "$720K — pilot plus first-wave rollout",
      projectedSavings: "$1.8M projected first-year gross savings",
      projectedValue: "$1.8M projected 12-month net ROI",
      paybackPeriod: "Under 6 months after scaled deployment",
      threeYearValue: "$5.0M projected 3-year value",
      valueDrivers: [
        "High-value subscriber churn prevention protects ARPU in the segment that represents 58% of total churn revenue loss — with a measurable lift signal inside the Q3 board window.",
        "Dynamic network resource allocation reduces over-provisioning cost while improving experience quality for high-ARPU subscribers in congested coverage zones.",
        "Contact center resolution intelligence reduces repeat contact rates and post-contact churn risk — lowering operating cost and improving the most visible touchpoint for at-risk subscribers."
      ]
    },
    executiveSummary: [
      "SKT's ARPU decline and rising CAPEX are a margin compression problem that AI can address directly — not in 18 months, but with a measurable EBITDA contribution inside the Q3 board window if the pilot is scoped correctly.",
      "The pilot is focused on two use cases with the fastest path to a revenue number: high-value churn prevention on the top-ARPU subscriber tier, and dynamic network allocation on priority cell clusters — six weeks, existing data infrastructure, no OSS disruption.",
      "If the pilot delivers a 15% reduction in top-tier churn and demonstrable congestion reduction, SKT exits with a $1.8M annual ROI case and a subscriber intelligence architecture that supports every AI use case on the 2026 strategy roadmap."
    ],
    followUpEmail: {
      subject: "SK Telecom Churn Prevention Pilot — Proposed Scope and Next Steps",
      body: "Hi Hyun-soo,\n\nThank you for the time today. The conversation confirmed the urgency: the Q3 EBITDA mandate is real, the high-value subscriber churn concentration is the most direct lever, and the behavioral signal data to act on it is already in your systems — it's the intervention workflow that's missing.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — churn prediction and early intervention on the top-15% ARPU subscriber tier, and dynamic network allocation recommendations on a defined set of priority cell clusters. Both tracks use your existing CRM, usage data, and OSS/BSS. No new infrastructure.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the behavioral signal data sources and the target subscriber cohort definition with Min-kyung's team\n— Identify the priority cell clusters with Joon-ho's NOC team and confirm the recommendation review workflow\n— Align on the churn intervention action types (outbound call, offer trigger, service escalation) with the retention team\n\nIf it would help, we can bring a draft Q3 EBITDA attribution model and a pilot scorecard to the next session.\n\nI will follow up by end of week with a proposed scope document. Let me know if the framing needs to change.\n\nBest regards,\nScott"
    }
  }
};
