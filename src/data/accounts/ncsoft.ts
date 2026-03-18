import type { AccountBrief } from "@/types";

export const ncsoft: AccountBrief = {
  account: {
    company: "NCSoft",
    industry: "Gaming",
    situation:
      "NCSoft is Korea's largest MMORPG publisher — Lineage, Blade & Soul, Aion — with over 4,000 employees and live operations across Korea, Taiwan, Japan, and North America. Revenue peaked at ₩2.5T in 2021 and has contracted three consecutive years since as the core Lineage franchise ages out and TL (Throne and Liberty) underperformed analyst expectations in its global launch. The company is betting its next chapter on two things: AI-accelerated content production to reduce the time from concept to live update, and smarter LiveOps monetization to extend lifetime value on the remaining Lineage base. Both initiatives are live in pilot form but have not yet produced a measurable inflection in either KPI.",
    painPoints: [
      {
        title: "Live update cadence is falling behind player expectations",
        detail:
          "Our content production pipeline averages 14 weeks from design brief to live patch. Competing titles are shipping meaningful updates every four to six weeks. By the time a new dungeon or PvP balance patch ships, the vocal player segment has already churned. We lose the re-engagement window every single cycle.",
        severity: "High"
      },
      {
        title: "Lineage churn is running ahead of our retention model",
        detail:
          "Month-3 retention on Lineage M is 22 points below the cohort model we built in 2022. Our LiveOps team can see churn coming in the behavioral data but our current tooling takes 3–4 days to build and deploy a targeted re-engagement campaign. By the time it goes live, 60% of the at-risk segment has already left.",
        severity: "High"
      },
      {
        title: "QA bottleneck is forcing us to delay patches or ship with known issues",
        detail:
          "We have 80 QA engineers running regression suites that take 48–72 hours per patch cycle. We routinely ship with a known list of low-severity bugs because the alternative is missing the update window entirely. Three of the last five major patches launched with player-visible issues that drove negative community sentiment within 24 hours.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "Jan 2026",
        title: "TL global revenue miss prompts strategic review",
        detail: "Throne and Liberty North America and Europe ARPU came in 35% below the internal launch model after 90 days. The board has mandated a strategic review of the global IP roadmap and all major content investment decisions are on hold pending outcomes.",
        impact: "Leadership pressure to demonstrate AI-driven efficiency gains before the next investor day in Q2 2026."
      },
      {
        dateLabel: "Feb 2026",
        title: "New CTO joins with explicit mandate to accelerate AI adoption",
        detail: "NCSoft appointed a new CTO from Kakao Games with a track record of shipping AI-assisted content tools. He has publicly stated that generative AI will be integrated into the content pipeline within 12 months and has budget authority to move fast.",
        impact: "Executive sponsor in place with both the mandate and the budget to run a visible pilot."
      },
      {
        dateLabel: "Mar 2026",
        title: "Lineage M 7th anniversary update underperforms DAU targets",
        detail: "The anniversary event — historically the biggest DAU spike of the year — came in 18% below target. Post-event analysis confirmed that content volume and freshness were the primary churn drivers cited by departing players in exit surveys.",
        impact: "Urgency around content production speed is now tied directly to the most commercially important title in the portfolio."
      }
    ],
    objectives: [
      {
        title: "Compress the live update pipeline from 14 weeks to 6",
        targetKpi: "Content production cycle time: 14 weeks → 6 weeks within 12 months",
        rationale:
          "Matching competitor cadence is a competitive survival requirement. Every week shaved from the pipeline is a re-engagement opportunity that currently gets missed."
      },
      {
        title: "Reduce month-3 churn by 15 points on the Lineage base",
        targetKpi: "M3 retention: 22-point deficit → 7-point deficit within 18 months",
        rationale:
          "The Lineage franchise still generates 60% of NCSoft revenue. Each percentage point of M3 retention recovered is worth approximately ₩8B in annualized incremental revenue."
      }
    ]
  },

  opportunities: [
    {
      useCase: "LiveOps Churn Prediction & Campaign Automation",
      description:
        "Deploy ML churn scoring on behavioral telemetry to identify at-risk players 7–10 days before likely departure and trigger personalized re-engagement campaigns automatically — item grants, challenge offers, social nudges — without LiveOps analyst intervention.",
      impactScore: 9,
      difficulty: 4,
      timeToValue: "6–8 weeks",
      priority: "P1"
    },
    {
      useCase: "AI-Assisted Content & Quest Generation",
      description:
        "Build a generative pipeline that produces first-draft quest narratives, NPC dialogue, and world event scripts from design briefs. Writers review and approve rather than write from scratch, targeting a 60% reduction in narrative production time per patch.",
      impactScore: 8,
      difficulty: 6,
      timeToValue: "10–14 weeks",
      priority: "P2"
    },
    {
      useCase: "Automated Regression QA Triage",
      description:
        "Train a classifier on historical bug reports and patch diffs to auto-triage regression results, flag high-severity issues requiring human review, and mark safe-to-ship changes automatically — compressing the 72-hour QA cycle to under 24 hours.",
      impactScore: 7,
      difficulty: 5,
      timeToValue: "8–10 weeks",
      priority: "P3"
    }
  ],

  stakeholders: [
    {
      name: "Hyun-woo Jang",
      role: "Economic Buyer",
      title: "Chief Technology Officer",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs to show the board a credible AI roadmap before the Q2 investor day. His mandate is clear and his timeline is real — but he will not back a vendor who can't move at startup speed inside a large organization.",
      recommendedApproach:
        "Open with the content pipeline opportunity because it maps directly to his 12-month public commitment. Show a 6-week pilot design that produces a live demo by investor day. Give him something to put in front of the board."
    },
    {
      name: "Ji-young Oh",
      role: "Champion",
      title: "Head of LiveOps, Lineage Division",
      stance: "Supportive",
      influence: "Medium",
      keyConcern:
        "Her team is sitting on a churn signal they can't act on fast enough. She knows the data is there — she just needs the tooling to close the loop between signal and campaign in hours, not days.",
      recommendedApproach:
        "Build the pilot around her Lineage M use case. Give her team a working prototype within the first two weeks so she has something concrete to show her division GM. She will become a vocal internal advocate if the speed improvement is real."
    },
    {
      name: "Seung-min Bae",
      role: "Technical Evaluator",
      title: "Principal ML Engineer, AI Platform",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "NCSoft has an internal ML platform team that has been building bespoke models for two years. He needs to understand why a third-party solution is better than extending what the team already has, and whether it creates a long-term vendor dependency.",
      recommendedApproach:
        "Acknowledge the internal platform work explicitly — position the solution as an accelerator that runs on top of their existing data infrastructure, not a replacement. Offer a clear integration spec in week one of the pilot."
    }
  ],

  dealStrategy: {
    objections: [
      {
        objection: "We already have an internal ML team building these capabilities.",
        response:
          "The internal team is building foundational infrastructure — that work doesn't go away. What we bring is a pre-trained behavioral model trained on billions of game telemetry events across dozens of live titles, plus a campaign execution layer your team would take 12–18 months to build from scratch. The pilot proves whether we accelerate the roadmap or duplicate it. We'd rather earn that answer in six weeks than debate it for six months."
      },
      {
        objection: "Our player data is sensitive and we can't share it with a third-party model.",
        response:
          "The model runs inside your infrastructure — your data never leaves your environment. The pilot is architected specifically to operate on anonymized behavioral telemetry with no PII exposure. We can walk your security team through the data architecture in a single technical review session."
      },
      {
        objection: "We've tried personalization campaigns before and the lift was marginal.",
        response:
          "The gap between marginal lift and 15+ point retention improvement is almost always execution speed, not model quality. If you're deploying campaigns 72 hours after the churn signal fires, you're reaching players who have already made the decision. The pilot specifically tests same-day activation. The benchmark we're confident in is 12–18 point M3 retention lift when campaigns fire within 24 hours of the trigger."
      }
    ],
    agenda: [
      {
        time: "0–10 min",
        topic: "Align on the investor day constraint",
        outcome: "Confirm that the pilot needs to produce a visible result — ideally a live demo — before the Q2 investor day. Get that date on the table so the pilot timeline is anchored to a real deadline."
      },
      {
        time: "10–25 min",
        topic: "Lineage M churn data walkthrough",
        outcome: "Have Ji-young walk through the current signal-to-campaign latency. Identify the specific behavioral events that predict churn 7–10 days out. Leave the session with agreement on which data feeds the pilot needs access to."
      },
      {
        time: "25–40 min",
        topic: "Pilot scope and success definition",
        outcome: "Agree on a single title (Lineage M), a single retention cohort (months 2–4), and a target lift figure (15 points M3 retention) that would constitute a clear win. Name the internal ML platform owner who needs to be in the room for the technical integration session."
      },
      {
        time: "40–45 min",
        topic: "Next step: technical scoping session",
        outcome: "Book a 90-minute technical session with Seung-min Bae's team within the next two weeks. Leave with a confirmed date and a named internal owner for the data access request."
      }
    ],
    positioning: [
      "NCSoft's content and retention challenge is not a data problem — the data exists and it's rich. It's an execution speed problem, and that's exactly the gap this solution closes.",
      "The pilot is designed to produce a live result — a working re-engagement campaign running on Lineage M behavioral data — within six weeks, fast enough to demonstrate ROI before the Q2 investor day.",
      "Every component in the pilot runs inside NCSoft's existing infrastructure. There is no data sovereignty risk, no PII exposure, and no displacement of the internal ML platform team — this accelerates what they're already building."
    ]
  },

  pilotPlan: {
    weeks: 6,
    scope: [
      "Single title: Lineage M behavioral telemetry (90-day active cohort)",
      "Churn prediction model trained on NCSoft's own event data",
      "Automated campaign trigger engine integrated with existing push notification infrastructure",
      "A/B test framework: AI-triggered vs. control group (20% of at-risk segment)",
      "LiveOps dashboard: real-time churn risk scoring with campaign status",
      "Out of scope: Lineage W, TL, or any title outside Lineage M"
    ],
    phases: [
      {
        name: "Data & Integration",
        weeks: "Weeks 1–2",
        startWeek: 1,
        endWeek: 2,
        objective: "Connect behavioral telemetry pipeline and validate churn signal quality",
        deliverables: [
          "Data access confirmed for 90-day Lineage M cohort",
          "Churn signal validation report (precision/recall on historical data)",
          "Integration spec signed off by ML platform team"
        ]
      },
      {
        name: "Model & Campaign Build",
        weeks: "Weeks 3–4",
        startWeek: 3,
        endWeek: 4,
        objective: "Train churn model, build campaign trigger logic, and configure A/B test",
        deliverables: [
          "Churn prediction model live on Lineage M telemetry",
          "3 re-engagement campaign templates loaded in notification system",
          "A/B test group defined and locked"
        ]
      },
      {
        name: "Live Test & Readout",
        weeks: "Weeks 5–6",
        startWeek: 5,
        endWeek: 6,
        objective: "Run live re-engagement campaigns and measure retention lift vs. control",
        deliverables: [
          "Live campaign results: treatment vs. control retention delta",
          "7-day and 14-day retention lift report",
          "Investor day demo deck: live dashboard walkthrough",
          "Scale expansion recommendation with full-title ROI model"
        ]
      }
    ],
    roi: {
      investment: "$650K",
      projectedSavings: "$900K in LiveOps analyst hours annually",
      projectedValue: "$1.2M first-year value",
      paybackPeriod: "6–7 months",
      threeYearValue: "$4.1M",
      valueDrivers: [
        "15-point M3 retention improvement on Lineage M = ₩12B (~$9M) incremental annual revenue at current DAU",
        "$900K reduction in LiveOps campaign build cost through automation (4 analysts × 40% time recaptured)",
        "Content pipeline acceleration: 8-week reduction in patch cycle creates 2 additional major update windows per year"
      ]
    },
    executiveSummary: [
      "NCSoft has the data to predict churn 7–10 days before it happens — the missing piece is an execution layer that closes the loop in hours, not days. The pilot proves that in six weeks on Lineage M.",
      "The business case is conservative: a 15-point M3 retention lift on the Lineage base represents ₩12B in incremental annual revenue, against a $650K pilot investment that pays back in under seven months.",
      "Every component runs inside NCSoft's infrastructure. There is no data sovereignty risk, no displacement of the internal ML platform, and the live results will be ready before the Q2 investor day."
    ],
    followUpEmail: {
      subject: "NCSoft AI Pilot — Lineage M Churn Recovery: Scoping Summary & Next Step",
      body: `Hyun-woo, Ji-young —

Thank you for the time today. A few things I want to confirm while they're fresh:

The pilot scope we aligned on: Lineage M, 90-day active cohort, churn prediction + automated campaign activation, A/B tested against a 20% control group. Six weeks from kickoff to live results — timed to produce a working demo before the Q2 investor day.

The number we're holding ourselves to: 15-point improvement in month-3 retention on the treatment group. If we don't hit that, we'll tell you why and what it would take to get there. If we do, the full-title ROI model makes the expansion decision straightforward.

The one thing I need from your side to keep the timeline: a confirmed date for the technical scoping session with Seung-min's team. The data access request runs through that meeting, and every week we delay on the integration spec pushes the live results closer to investor day.

I'll send over the pilot architecture document and the data requirements spec tomorrow morning so Seung-min's team can review ahead of the session.

Would the week of [DATE] work for the technical session?

Looking forward to it.`
    }
  }
};
