import type { AccountBrief } from "@/types";

export const doosanEnerbility: AccountBrief = {
  account: {
    company: "Doosan Enerbility",
    industry: "Energy & Power Equipment",
    situation:
      "Doosan Enerbility's gas turbine service and maintenance business represents 60% of total revenue, making asset uptime the single most important commercial variable in the P&L. Unplanned turbine outages cost utility clients an average of $500K per day in replacement power and contract penalties, and each event directly threatens contract renewal. The EPC bid team is producing 80+ technical proposals annually, each requiring 3–4 weeks of engineering coordination that creates margin drag and limits the number of bids the business can pursue. Leadership has approved a 2026 AI investment program targeting predictive maintenance, turbine performance optimization, and proposal automation as the three priority use cases.",
    painPoints: [
      {
        title: "An unplanned turbine outage doesn't just cost us a service call — it costs us the contract renewal",
        detail:
          "When a utility client's turbine goes down unexpectedly, they're paying $500K a day in replacement power while we're doing root cause analysis. We can predict many of these failures from vibration and thermal sensor data — the patterns are visible in hindsight every time. What we don't have is a model that surfaces them 30 days out when there's still time to intervene without an emergency mobilization.",
        severity: "High"
      },
      {
        title: "Our EPC bid team is spending 3–4 weeks per proposal on work that is 60% precedent-based and should take days",
        detail:
          "Every new bid requires pulling equipment specs, thermal performance curves, site condition adjustments, and commercial terms from previous proposals across different formats and systems. The engineering team that should be differentiating the technical approach is spending the majority of their time assembling documents. We're leaving bids on the table because we can't respond fast enough.",
        severity: "High"
      },
      {
        title: "We have vibration and thermal sensor data on 200+ turbines and we're still doing condition assessments on quarterly site visit cycles",
        detail:
          "The data exists. We collect it continuously on every turbine under service contract. But our analysis workflow is manual, happens on a fixed calendar, and doesn't trigger until a threshold is crossed. By the time the threshold fires, we're already in reactive mode.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "November 2025",
        title: "Three unplanned turbine outages in Q3 generated $4.2M in client penalty exposure and one contract non-renewal",
        detail:
          "Service leadership presented a root cause analysis to the CEO showing that all three outage precursor signatures were visible in sensor data 3–6 weeks before each event.",
        impact:
          "Creates undeniable business case for predictive maintenance — the loss is quantified, the prevention window is identified, and the CEO is the sponsor. This is a mandate, not a concept."
      },
      {
        dateLabel: "January 2026",
        title: "EPC bid team missed four mid-market opportunities due to response time — total contract value estimated at $38M",
        detail:
          "Bid pipeline review revealed that proposal cycle time is directly limiting bid volume. Four opportunities closed before Doosan could complete their technical response.",
        impact:
          "Opens the proposal automation conversation with a specific revenue impact number attached — $38M in missed bids creates a compelling ROI anchor for any system that cuts cycle time in half."
      },
      {
        dateLabel: "February 2026",
        title: "Digital twin feasibility study approved for the gas turbine service fleet as a 2026 priority investment",
        detail:
          "Board approved a feasibility study for turbine digital twin capability, with an expectation of a vendor recommendation and pilot plan by Q2 2026.",
        impact:
          "The digital twin initiative creates a formal vendor evaluation process that is already open — the question is which vendor gets the pilot slot before the Q2 recommendation deadline."
      }
    ],
    objectives: [
      {
        title: "Prevent unplanned turbine outages by surfacing failure signals 30+ days in advance",
        targetKpi: "Zero unplanned outages on pilot turbine set during the 12-month post-pilot period",
        rationale:
          "The $4.2M Q3 penalty exposure establishes the financial reference. A predictive maintenance model that prevents one comparable event on pilot assets generates ROI that covers the full program investment."
      },
      {
        title: "Cut EPC bid cycle time from 3–4 weeks to under 10 days",
        targetKpi: "60% reduction in proposal preparation time per bid",
        rationale:
          "Faster bid cycle time directly increases the number of opportunities Doosan can pursue. A 60% reduction in cycle time on a team producing 80+ proposals annually creates compounding revenue upside from bids currently being missed."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Turbine Predictive Maintenance",
      description:
        "Uses vibration, thermal, and operational sensor data from 200+ service contract turbines to identify failure precursor patterns 30+ days in advance — before an emergency mobilization is the only option.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "6–8 weeks",
      priority: "P1"
    },
    {
      useCase: "EPC Proposal Generation AI",
      description:
        "Assembles equipment specs, thermal performance data, site condition adjustments, and commercial terms from prior proposals to produce a first-draft bid in 2–3 days — freeing engineers for technical differentiation.",
      impactScore: 9,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P2"
    },
    {
      useCase: "Turbine Performance Digital Twin",
      description:
        "Creates a continuously updated digital model of each turbine's operating state to identify performance degradation before it crosses a threshold and enable proactive dispatch decisions.",
      impactScore: 9,
      difficulty: 8,
      timeToValue: "10–12 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Seong-il Kang",
      role: "Economic Buyer",
      title: "EVP, Gas Turbine Service & Maintenance",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a predictive maintenance pilot that prevents the Q3 outage pattern from repeating — it's the metric with CEO visibility and a direct connection to contract renewal rates.",
      recommendedApproach:
        "Lead with the Q3 outage analysis. Show how the failure precursor signatures from those three events would have been flagged 30+ days earlier by the predictive model. The story tells itself."
    },
    {
      name: "Ji-young Hwang",
      role: "Champion",
      title: "VP, Digital Innovation & Smart Services",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a pilot that produces a replicable digital service architecture — not a standalone predictive model that only works for one turbine model or one client configuration.",
      recommendedApproach:
        "Position the predictive maintenance and digital twin work as the first layer of a scalable turbine intelligence platform. Ji-young needs to be able to present a product roadmap to the CEO, not just a pilot result."
    },
    {
      name: "Byung-ho Cho",
      role: "Technical Evaluator",
      title: "Director, Turbine Engineering & Field Services",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "Will challenge any model that generates false-positive failure flags — unnecessary planned outages cost clients money and damage Doosan's credibility just as much as unplanned ones.",
      recommendedApproach:
        "Lead with the precision story. The model is calibrated to the specific failure signatures of the turbine models in the pilot set — not a generic anomaly detector. Show Byung-ho the Q3 cases and walk through how the model would have scored them."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "Every turbine is different. A predictive model that works on one configuration won't generalize to the fleet.",
        response:
          "The model is trained by turbine model and service history — not across an undifferentiated fleet. The pilot is scoped to a defined set of turbines with shared configuration profiles. Generalization happens after the first cohort proves precision, not before."
      },
      {
        objection:
          "False-positive maintenance flags could cost our clients more in planned downtime than the outages we're trying to prevent.",
        response:
          "Precision is the primary design constraint. The model requires multiple concurrent signal types before generating a flag — not a single threshold breach. During the pilot, every flag is reviewed by Byung-ho's engineering team before any client communication is triggered."
      },
      {
        objection:
          "Our proposal process has proprietary technical content. We can't feed it into an AI system without understanding the IP and data governance implications.",
        response:
          "Proposal generation uses only content your team explicitly designates as training material — prior approved proposals, equipment specs, and standard commercial terms. The model runs in your environment. No proprietary content leaves your infrastructure."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "Q3 outage root cause analysis and what the sensor data showed in hindsight",
        outcome: "Align on the specific failure signatures that were visible before each outage and what an earlier flag would have changed operationally."
      },
      {
        time: "5–15 min",
        topic: "Current condition monitoring process and the gap between data collection and analyst action",
        outcome: "Confirm what sensor data is available, how it's currently reviewed, and where the detection-to-intervention lag comes from."
      },
      {
        time: "15–25 min",
        topic: "EPC bid cycle breakdown and where the 3–4 week timeline is spent",
        outcome: "Identify which proposal sections are repetitive vs. technically differentiated and where AI automation would have the largest time impact."
      },
      {
        time: "25–35 min",
        topic: "Pilot turbine set selection and proposal automation scope definition",
        outcome: "Agree on the turbine cohort, sensor data access plan, and the proposal types included in the generation AI pilot."
      },
      {
        time: "35–45 min",
        topic: "Q2 digital twin board recommendation timeline and pilot deliverable alignment",
        outcome: "Confirm that the pilot produces a deliverable that supports the Q2 digital twin vendor recommendation to the board."
      }
    ],
    positioning: [
      "The predictive maintenance pilot is designed around the Q3 outage signatures — those three events are the proof of concept that failure precursors are visible in your data. The pilot proves the intervention window exists and quantifies what acting on it is worth.",
      "The proposal automation pilot addresses a revenue problem, not a productivity problem — $38M in missed bids is the number. A 60% cycle time reduction means Doosan pursues more bids, not just faster ones.",
      "If the predictive maintenance pilot prevents one outage-equivalent event and the proposal pilot demonstrates material cycle time reduction, Doosan exits with a $2.0M ROI case and the content for a compelling Q2 digital twin board recommendation."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "Predictive maintenance on a defined cohort of gas turbines under service contract — failure risk scoring from vibration, thermal, and operational sensor data.",
      "EPC proposal generation AI on a defined category of bid type — first-draft assembly from prior approved proposals, equipment specs, and standard commercial terms.",
      "Integration with existing sensor data infrastructure and proposal document systems — no new data collection required.",
      "Weekly readouts: failure flags generated and engineering review outcomes; proposal cycle time comparison vs. baseline."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Calibrate the predictive model to the pilot turbine cohort's historical sensor signatures and define the proposal training corpus.",
        deliverables: [
          "Pilot turbine set confirmed; Q3 outage sensor histories ingested and used for model calibration",
          "Proposal training corpus defined: prior approved bids, equipment specs, and commercial term templates",
          "Alert review workflow and proposal acceptance criteria agreed with Byung-ho's engineering team"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run predictive failure scoring on live turbine data and generate first-draft proposals on active bids — measure flag precision and time savings against baseline.",
        deliverables: [
          "Turbine failure flags generated and reviewed by engineering; precision rate tracked against Q3 outage reference cases",
          "AI-drafted proposals completed for active bids; engineering review time measured vs. standard cycle",
          "Weekly report: flag review outcomes, proposal quality scores, and time savings"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Calculate avoided outage value, proposal cycle time reduction, and produce the Q2 digital twin board recommendation input.",
        deliverables: [
          "Predictive maintenance precision summary; avoided outage value projected for full service fleet",
          "Proposal cycle time reduction: actual vs. 60% target; bid capacity increase estimate",
          "Q2 board recommendation input: digital twin pilot scope, investment case, and 12-month roadmap"
        ]
      }
    ],
    roi: {
      investment: "$800K — pilot plus first-wave rollout",
      projectedSavings: "$2.0M projected first-year gross savings",
      projectedValue: "$2.0M projected 12-month net ROI",
      paybackPeriod: "Under 6 months after scaled deployment",
      threeYearValue: "$5.8M projected 3-year value",
      valueDrivers: [
        "Preventing one unplanned turbine outage on the service fleet generates penalty avoidance and contract renewal protection equivalent to the full pilot investment.",
        "EPC proposal cycle time reduction of 60% increases bid capacity — directly addressable against the $38M in missed opportunities from Q3 response time failures.",
        "Turbine performance digital twin creates a continuous asset intelligence capability that differentiates Doosan's service offering and supports premium contract pricing."
      ]
    },
    executiveSummary: [
      "The Q3 outage root cause analysis already proved that predictive maintenance is possible — the sensor signatures were there. The pilot translates that hindsight into a live 30-day early warning system on the service fleet contracts that matter most to revenue.",
      "The pilot runs two use cases in parallel: predictive failure scoring on a defined turbine cohort, and AI-assisted proposal generation on active EPC bids — six weeks, existing sensor infrastructure, no platform dependency.",
      "If the pilot prevents an outage-equivalent event and delivers a 60% proposal cycle time reduction, Doosan exits with a $2.0M ROI case, the content for the Q2 digital twin board recommendation, and a service AI architecture that protects the 60% of revenue that depends on turbine uptime."
    ],
    followUpEmail: {
      subject: "Doosan Enerbility Turbine AI Pilot — Proposed Scope and Next Steps",
      body: "Hi Seong-il,\n\nThank you for the time today. The Q3 outage analysis was the most important part of the conversation — all three failure signatures were visible in your sensor data before each event. That's not a data problem. It's an intervention workflow problem, and that's exactly what the pilot addresses.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — predictive failure scoring on a defined turbine cohort calibrated to the Q3 event signatures, and AI-assisted proposal generation on a defined bid category. Both tracks use your existing sensor data infrastructure and proposal systems.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the pilot turbine cohort — prioritize the units with the highest client penalty exposure\n— Provide the Q3 outage sensor histories for model calibration with Byung-ho's engineering team\n— Define the proposal training corpus with Ji-young's team: the bid types, equipment categories, and commercial term templates in scope\n\nIf it would help, we can bring a preliminary ROI model and a draft Q2 digital twin board recommendation framework to the next session.\n\nI will follow up by end of week with a proposed pilot scope document. Let me know if the framing needs to change.\n\nBest regards,\nScott"
    }
  }
};
