import type { AccountBrief } from "@/types";

export const hyundaiMotor: AccountBrief = {
  account: {
    company: "Hyundai Motor",
    industry: "Automotive",
    situation:
      "Hyundai's E-GMP platform is scaling to cover more than 10 EV models by 2026, and the quality and manufacturing disciplines that worked for ICE production are under pressure at scale. Battery pack assembly in Ulsan and Asan involves more than 400 weld joints per unit, and the current optical inspection process does not catch variance early enough to prevent downstream defects from reaching end-of-line testing. Stamping press downtime has increased as aging assets are pushed harder to meet EV body-in-white volumes. Leadership has named AI visual inspection, predictive maintenance, and supplier risk intelligence as the three manufacturing AI priorities for 2026, with ₩80B allocated.",
    painPoints: [
      {
        title: "We're finding battery pack weld defects at end-of-line when rework costs 10x what early detection would have",
        detail:
          "Our current optical inspection covers only the final assembly check. By the time a variance shows up at end-of-line testing, it has already passed through multiple assembly steps. The rework cost at that stage — or worse, the warranty cost after shipment — is not acceptable at the volumes we're running on E-GMP.",
        severity: "High"
      },
      {
        title: "Our stamping presses are running harder than they were designed for, and we're still on fixed-interval maintenance",
        detail:
          "E-GMP body structure requires press utilization rates we haven't sustained before. We're scheduling maintenance on calendar intervals set when EV volumes were a fraction of today's. We know an unplanned press failure during a ramp week is a customer delivery problem, not just a line problem.",
        severity: "High"
      },
      {
        title: "We're qualifying new battery and power electronics vendors faster than our supplier risk process can keep up",
        detail:
          "We have 14 new tier-1 and tier-2 suppliers in qualification for E-GMP components. Our existing supplier risk scoring is backwards-looking — we find out there's a quality problem when it shows up in incoming inspection, not before it ships from the supplier.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "December 2025",
        title: "IONIQ 5 and IONIQ 6 end-of-line battery pack defect rate exceeded the Q4 threshold",
        detail:
          "Quality leadership presented to COO with a hard target to halve end-of-line rejection rate before the H1 2026 capacity expansion in Ulsan.",
        impact:
          "Creates board-level urgency for AI visual inspection — the failure rate is named, the deadline is set, and the COO is the sponsor. This is a vendor selection conversation, not a budget discovery."
      },
      {
        dateLabel: "February 2026",
        title: "Unplanned stamping press failure in Asan caused a 4-day production stoppage on the IONIQ 9 line",
        detail:
          "Root cause traced to a bearing degradation pattern that was visible in sensor data 11 days before the failure.",
        impact:
          "Opens the predictive maintenance conversation with a recent, real financial impact that equipment engineering leadership cannot dismiss as theoretical."
      },
      {
        dateLabel: "March 2026",
        title: "Corporate manufacturing AI initiative formalized with ₩80B budget allocation for 2026–2027",
        detail:
          "Three priority use cases named at the executive level: vision-based quality inspection, predictive maintenance, and supply chain intelligence.",
        impact:
          "Budget is approved and earmarked. The conversation is about which vendor can start fastest and prove the first use case before H2 planning — not whether to invest."
      }
    ],
    objectives: [
      {
        title: "Halve end-of-line battery pack defect rate before the H1 2026 capacity expansion",
        targetKpi: "50% reduction in end-of-line battery pack rejection rate",
        rationale:
          "This is the metric the COO is tracking for H1. A 50% reduction is the specific number quality leadership committed to — any pilot result that moves this KPI earns immediate scale budget."
      },
      {
        title: "Eliminate avoidable stamping press stoppages on E-GMP body production lines",
        targetKpi: "Zero unplanned press stoppages exceeding 8 hours on pilot assets",
        rationale:
          "The Asan stoppage established a clear financial reference point. Predictive maintenance that prevents one comparable event on pilot assets pays for the entire pilot investment."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Battery Pack Weld Quality Vision",
      description:
        "Deploys computer vision inspection at mid-process weld stations to catch variance before it reaches end-of-line, dramatically reducing rework cost and COO-tracked rejection rate.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "6–8 weeks",
      priority: "P1"
    },
    {
      useCase: "Stamping Press Predictive Maintenance",
      description:
        "Uses press sensor data, bearing vibration, and maintenance history to predict failure windows on E-GMP body assets and recommend interventions before unplanned stoppages occur.",
      impactScore: 9,
      difficulty: 5,
      timeToValue: "5–7 weeks",
      priority: "P2"
    },
    {
      useCase: "Supplier Risk Intelligence",
      description:
        "Scores new and existing E-GMP suppliers on quality trend signals, incoming inspection data, and external risk indicators so sourcing teams get earlier warning before a defect ships from the vendor.",
      impactScore: 7,
      difficulty: 6,
      timeToValue: "8–10 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Sung-kyu Cho",
      role: "Economic Buyer",
      title: "EVP, Manufacturing Quality & Operations",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs the pilot to move the end-of-line defect rate — that's the metric COO is watching for H1. Everything else is secondary to delivering that number before the capacity expansion.",
      recommendedApproach:
        "Lead with the battery pack vision inspection use case and anchor the ROI to rejection rate reduction and avoided rework cost at current E-GMP volumes. Everything else supports that headline."
    },
    {
      name: "In-sung Bae",
      role: "Champion",
      title: "VP, Smart Factory & Intelligent Manufacturing",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a vendor who can deploy on Hyundai's existing vision hardware and integrate with the current MES without triggering a parallel infrastructure build.",
      recommendedApproach:
        "Lead with the integration story — confirm compatibility with existing camera hardware and MES data feeds in the first technical session. His sponsorship unlocks the fast pilot path."
    },
    {
      name: "Kyung-min Yoon",
      role: "Technical Evaluator",
      title: "Director, Equipment Engineering",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "Skeptical of predictive maintenance claims that don't account for the specific operating behavior of Hyundai's stamping assets and create unnecessary planned downtime.",
      recommendedApproach:
        "Frame the pilot as supervised decision-support — equipment engineers review every flag before any maintenance action is taken. The model learns from their feedback. It improves their judgment, it doesn't override it."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "We already have optical inspection on the final assembly line. Why add another system mid-process?",
        response:
          "End-of-line inspection catches defects after rework cost has already been incurred. The mid-process vision layer catches variance at the point where correction costs a fraction of what it costs at end-of-line — or what warranty costs after shipment."
      },
      {
        objection:
          "Predictive maintenance models always overpredict failures and create more planned downtime than they save.",
        response:
          "The pilot is explicitly designed around human-in-the-loop validation. Every failure prediction is reviewed by Kyung-min's equipment engineers before any maintenance action is triggered. The model improves precision from engineer feedback — it doesn't bypass judgment."
      },
      {
        objection:
          "Our new supplier base is too diverse for a single risk scoring model to handle fairly.",
        response:
          "The supplier intelligence model is not a single score applied uniformly. It's a configurable risk layer that weights incoming inspection data, delivery performance, and capacity signals differently for battery vs. power electronics vs. structural components — scoped to the highest-risk new qualifications first."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "H1 battery pack quality target and current end-of-line defect profile",
        outcome: "Align on the specific rejection rate target the COO is tracking and where in the assembly process variance is being introduced."
      },
      {
        time: "5–15 min",
        topic: "Current vision inspection coverage and the mid-process gap",
        outcome: "Confirm which weld stations are uncovered today and what a mid-process detection capability would change operationally."
      },
      {
        time: "15–25 min",
        topic: "Stamping press maintenance history and sensor data environment",
        outcome: "Understand what sensor data is already available and what the Asan failure pattern looked like in hindsight."
      },
      {
        time: "25–35 min",
        topic: "Pilot scope — one assembly line, defined weld stations, success metric alignment",
        outcome: "Agree on the specific line segment, camera coverage, and MES integration path for a 6-week pilot start."
      },
      {
        time: "35–45 min",
        topic: "Budget and timeline alignment with the ₩80B AI manufacturing initiative",
        outcome: "Confirm that the pilot fits inside the approved budget envelope and the H1 quality review calendar."
      }
    ],
    positioning: [
      "The battery pack vision inspection pilot addresses the exact metric the COO is tracking for H1 — end-of-line rejection rate — and it does it at the process step where intervention is cheapest, not after the damage is done.",
      "Both use cases — quality inspection and predictive maintenance — are designed to run on top of Hyundai's existing hardware and MES environment. There is no parallel infrastructure project and no new platform dependency.",
      "If the pilot proves a 50% reduction in end-of-line rejection and eliminates the stamping press stoppage pattern, Hyundai exits with a $2.2M ROI case and a quality architecture that scales to every E-GMP production site."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "One battery pack assembly line in Ulsan — vision inspection model deployed at three mid-process weld stations.",
      "One stamping press cell in Asan — predictive maintenance scoring on bearing, vibration, and hydraulic sensor data.",
      "Integration with existing MES, vision hardware, and press sensor feeds — no new infrastructure.",
      "Weekly operational reviews comparing AI defect catch rate and press health signals against Q4 baseline."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Integrate with existing camera hardware and MES, ingest maintenance history, and set detection thresholds with Yoon's engineering team.",
        deliverables: [
          "Vision model calibrated to target weld station defect signatures",
          "Press sensor data ingested; baseline failure rate and maintenance schedule confirmed",
          "Alert governance and weekly review format agreed with Quality and Equipment Engineering"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run vision inspection in production mode and predictive maintenance in supervised mode — capture defect catch rate and press health predictions daily.",
        deliverables: [
          "Mid-process defect flags logged and compared to end-of-line results for same lots",
          "Press failure risk scores reviewed daily by equipment engineering team",
          "Weekly readout: defects caught early vs. baseline, press flags acted on vs. dismissed"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Quantify rejection rate improvement, calculate avoided rework cost, and build the H1 capacity expansion scale case.",
        deliverables: [
          "End-of-line rejection rate comparison: pilot segment vs. Q4 baseline",
          "Press downtime avoidance calculation tied to Asan stoppage cost reference",
          "H2 scale recommendation: line expansion scope, investment case, and COO review format"
        ]
      }
    ],
    roi: {
      investment: "$780K — pilot plus first-wave rollout",
      projectedSavings: "$2.2M projected first-year gross savings",
      projectedValue: "$2.2M projected 12-month net ROI",
      paybackPeriod: "Under 6 months after scaled deployment",
      threeYearValue: "$6.1M projected 3-year value",
      valueDrivers: [
        "Mid-process weld defect detection reduces end-of-line rejection rate and rework cost on E-GMP battery pack assembly against the COO-tracked H1 target.",
        "Predictive maintenance on stamping presses eliminates avoidable production stoppages at E-GMP body volume — calibrated to the Asan 4-day stoppage as the financial reference event.",
        "Supplier risk intelligence reduces incoming quality failures from newly qualified battery and power electronics vendors as the E-GMP supplier base scales."
      ]
    },
    executiveSummary: [
      "Hyundai's E-GMP scale-up has surfaced two manufacturing quality problems that are already costing real money — battery pack weld defects reaching end-of-line, and stamping press failures that were visible in sensor data 11 days before they stopped the line.",
      "The pilot addresses both in parallel: vision inspection on one Ulsan assembly line, predictive maintenance on one Asan press cell, six weeks, existing hardware and MES infrastructure — no new platform, no integration project.",
      "If the pilot delivers the end-of-line rejection improvement the COO is tracking for H1, Hyundai exits with a $2.2M first-year ROI case and a repeatable AI quality architecture for every E-GMP production site."
    ],
    followUpEmail: {
      subject: "Hyundai E-GMP Quality Pilot — Proposed Scope and Next Steps",
      body: "Hi Sung-kyu,\n\nThank you for the time today. The conversation confirmed the urgency on both fronts: the end-of-line battery pack rejection rate is a COO-tracked number with a hard H1 deadline, and the Asan press stoppage made predictive maintenance a real financial conversation — not a future initiative.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — vision inspection at mid-process weld stations on one Ulsan assembly line, and predictive maintenance on one Asan press cell using existing sensor data. No new infrastructure. Both tracks run on top of your current hardware and MES environment.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the target assembly line and specific weld stations for the vision inspection scope\n— Identify the press sensor data owner and confirm access to bearing, vibration, and hydraulic feeds for the Asan cell\n— Align on the baseline rejection rate metric and the weekly review format with In-sung's Smart Factory team\n\nIf it would help, we can bring a draft pilot scorecard calibrated to the Q4 rejection rate baseline and a preliminary ROI model to the next session.\n\nI will follow up by end of week with a proposed scope document. Let me know if anything needs to change before then.\n\nBest regards,\nScott"
    }
  }
};
