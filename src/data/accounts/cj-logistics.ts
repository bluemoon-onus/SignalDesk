import type { AccountBrief } from "@/types";

export const cjLogistics: AccountBrief = {
  account: {
    company: "CJ Logistics",
    industry: "Logistics & Fulfillment",
    situation:
      "CJ Logistics is absorbing a 25% year-over-year increase in e-commerce fulfillment volume while facing a worsening labor shortage that makes headcount-based scaling no longer viable. Fulfillment cost per order has risen 18% over the past two years despite lean initiatives, and last-mile delivery route efficiency has declined as urban density and traffic patterns become more complex. Three major fulfillment centers are running robotic picking systems from different vendors, but coordination between robotic and human picking workflows is still largely manual — the systems don't share a common orchestration layer. Leadership has approved a 2026 AI fulfillment roadmap targeting inventory pre-positioning, route optimization, and robotic orchestration as the three anchor investments.",
    painPoints: [
      {
        title: "We're pre-positioning inventory based on demand models that don't reflect what customers in each micro-zone are actually buying this week",
        detail:
          "Our demand forecasting model runs on monthly regional aggregates. E-commerce purchasing behavior shifts on a 48–72 hour cycle based on promotions, weather, and social commerce. When inventory is in the wrong fulfillment center for a demand spike, we're either expressing it at cost or promising a delivery window we can't keep.",
        severity: "High"
      },
      {
        title: "Last-mile delivery efficiency is declining as our route planning tool can't keep up with real-world complexity",
        detail:
          "Our current route optimization runs a static algorithm that doesn't account for real-time traffic, delivery attempt failure patterns by zone, or driver behavior differences that affect actual completion rates. The gap between planned route time and actual delivery time has grown to 22% on average — that gap is pure cost.",
        severity: "High"
      },
      {
        title: "We have robotics in three fulfillment centers but the human and robot picking workflows are still coordinated manually by shift supervisors",
        detail:
          "Each robotic system has its own task queue and the human pickers fill in whatever the robots can't handle — but there's no AI layer deciding in real time which SKUs go to robots, which go to humans, and how to balance the workload when order velocity spikes. We're running expensive robotics at 60–70% efficiency because the orchestration is a spreadsheet and a walkie-talkie.",
        severity: "Med"
      }
    ],
    triggers: [
      {
        dateLabel: "December 2025",
        title: "Q4 peak season fulfillment cost per order reached a new high — 18% above the two-year average",
        detail:
          "COO review identified demand forecast accuracy and route efficiency as the two largest cost drivers. A task force was formed to identify AI investments that could close the gap before Q4 2026.",
        impact:
          "Creates named executive accountability for fulfillment cost reduction — the problem is quantified, the owner is identified, and the Q4 2026 deadline is explicit."
      },
      {
        dateLabel: "January 2026",
        title: "Labor shortage triggered a hiring freeze that makes volume growth through headcount expansion no longer viable",
        detail:
          "Logistics operations leadership confirmed that the 2026 volume plan cannot be executed with the current labor model. AI-driven productivity improvements are now a strategic requirement, not an efficiency initiative.",
        impact:
          "Changes the AI conversation from cost optimization to operational necessity. Any solution that increases throughput per picker or improves robotic utilization has a direct path to funding."
      },
      {
        dateLabel: "February 2026",
        title: "Board approved a ₩45B AI fulfillment modernization investment with a mandate to demonstrate ROI by Q4 2026",
        detail:
          "Three use cases named: demand-driven inventory pre-positioning, AI route optimization, and robotic picking orchestration. Vendor selection process initiated.",
        impact:
          "Budget is approved and the use cases are named. This is a competitive vendor selection — the question is which vendor can prove the fastest path to a measurable result before the Q4 board review."
      }
    ],
    objectives: [
      {
        title: "Reduce fulfillment cost per order by improving inventory positioning accuracy",
        targetKpi: "12% reduction in fulfillment cost per order",
        rationale:
          "The 18% cost increase over two years is the boardroom number. A 12% reduction targets the largest controllable cost driver — inventory misalignment — and produces a result that directly reverses the trend the COO presented."
      },
      {
        title: "Close the 22% gap between planned and actual last-mile delivery time",
        targetKpi: "15% improvement in on-time delivery completion rate",
        rationale:
          "The 22% plan-vs-actual gap is pure operational cost. Every percentage point of improvement in completion rate reduces re-attempt costs and improves customer satisfaction scores that drive repeat purchase rates."
      }
    ]
  },
  opportunities: [
    {
      useCase: "Demand-Driven Inventory Pre-Positioning",
      description:
        "Forecasts SKU-level demand by fulfillment zone on a 72-hour rolling horizon using purchase patterns, promotion calendars, and external signals — reducing misalignment between inventory location and order origin.",
      impactScore: 10,
      difficulty: 6,
      timeToValue: "5–7 weeks",
      priority: "P1"
    },
    {
      useCase: "AI Last-Mile Route Optimization",
      description:
        "Replaces the static routing algorithm with a dynamic model incorporating real-time traffic, zone-level delivery attempt patterns, and driver performance data — closing the 22% plan-vs-actual gap.",
      impactScore: 9,
      difficulty: 5,
      timeToValue: "4–6 weeks",
      priority: "P2"
    },
    {
      useCase: "Robotic Picking Orchestration",
      description:
        "Deploys an AI orchestration layer across all three fulfillment center robotic systems to dynamically allocate SKUs between robot and human pickers based on order velocity, SKU characteristics, and real-time workload.",
      impactScore: 8,
      difficulty: 7,
      timeToValue: "8–10 weeks",
      priority: "P3"
    }
  ],
  stakeholders: [
    {
      name: "Tae-hyun Jung",
      role: "Economic Buyer",
      title: "EVP, Fulfillment Operations & Technology",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Needs a pilot that demonstrates measurable fulfillment cost reduction before the Q4 board review — the 12% target is the number the task force was chartered to deliver.",
      recommendedApproach:
        "Lead with demand-driven inventory pre-positioning — it's the use case with the most direct connection to the cost-per-order metric and the fastest path to a number Tae-hyun can take to the COO."
    },
    {
      name: "Eun-kyung Nam",
      role: "Champion",
      title: "VP, Last-Mile Delivery & Fleet Operations",
      stance: "Supportive",
      influence: "High",
      keyConcern:
        "Wants a routing solution that improves actual completion rates — not one that optimizes on paper but doesn't account for how real drivers navigate real routes.",
      recommendedApproach:
        "Show how the route optimization model incorporates driver behavior data and zone-level completion rates from historical delivery data — not just traffic and distance. Eun-kyung needs to believe the model understands the operational reality, not just the map."
    },
    {
      name: "Min-ho Kwak",
      role: "Technical Evaluator",
      title: "Director, Fulfillment Center Technology",
      stance: "Neutral",
      influence: "Medium",
      keyConcern:
        "Will evaluate whether the robotic orchestration layer can integrate across three different vendor systems without requiring custom API development for each one.",
      recommendedApproach:
        "Lead with the integration architecture in the first technical session. Show that the orchestration layer uses a common abstraction above each vendor's API — Min-ho needs to know this isn't a multi-system custom build that his team has to maintain."
    }
  ],
  dealStrategy: {
    objections: [
      {
        objection:
          "Our demand patterns are too volatile and promotion-driven for an AI forecast model to outperform our current planning team.",
        response:
          "The model is designed for exactly that environment. It ingests promotion calendars, external demand signals, and 72-hour behavioral patterns — the variables that make the monthly aggregate model fail. The pilot runs the AI forecast alongside the current model for six weeks. The data decides which approach is more accurate."
      },
      {
        objection:
          "Route optimization tools have disappointed us before because they don't account for how our drivers actually work.",
        response:
          "The routing model is trained on your drivers' actual delivery completion data by zone — not on a generic traffic model. Driver behavior, zone-level attempt failure patterns, and time-of-day completion rates are all inputs. The model improves from your operational data, not from benchmark averages."
      },
      {
        objection:
          "We have three different robotic vendors. An orchestration layer that requires custom integration with each one is a project we can't take on right now.",
        response:
          "The orchestration layer uses a common abstraction API that translates task assignments to each vendor's native format. Your team doesn't write custom integrations — we deliver the connector layer. Min-ho's team configures the SKU routing rules on top of a single interface, not three separate ones."
      }
    ],
    agenda: [
      {
        time: "0–5 min",
        topic: "Q4 2025 fulfillment cost per order findings and the 2026 cost reduction target",
        outcome: "Align on the 12% cost reduction target and which use case has the most direct connection to that metric."
      },
      {
        time: "5–15 min",
        topic: "Current demand forecasting model and where inventory misalignment creates cost",
        outcome: "Confirm the forecast cycle, the data inputs, and the specific scenarios where misalignment drove elevated cost or missed SLAs in Q4."
      },
      {
        time: "15–25 min",
        topic: "Last-mile route efficiency and the 22% plan-vs-actual gap breakdown",
        outcome: "Understand which route segments and zones drive the largest share of the gap and what data is available for the route optimization pilot."
      },
      {
        time: "25–35 min",
        topic: "Robotic system vendor landscape and current orchestration workflow",
        outcome: "Understand the three vendor APIs, the current task allocation process, and what Min-ho's team would need from an orchestration integration."
      },
      {
        time: "35–45 min",
        topic: "Pilot scope, Q4 board review timeline, and success metric definition",
        outcome: "Agree on which two use cases start in the pilot and what result the COO task force needs to see at week six."
      }
    ],
    positioning: [
      "The demand pre-positioning and route optimization pilots address the two largest contributors to the 18% cost-per-order increase — and both can produce a measurable result against that baseline within the Q4 board review window.",
      "Neither pilot requires new infrastructure — demand forecasting uses existing order history and promotion data; route optimization uses existing fleet telemetry and delivery completion records. Both run alongside current operations for six weeks before any process change is required.",
      "If the pilots deliver a 12% cost reduction trajectory and the route efficiency improvement, CJ Logistics exits with a $1.6M annual ROI case and a fulfillment AI architecture that scales to handle the volume growth the current labor model cannot."
    ]
  },
  pilotPlan: {
    weeks: 6,
    scope: [
      "Demand-driven inventory pre-positioning on a defined SKU set across two fulfillment centers — forecast running in parallel to current model, inventory allocation recommendations reviewed by operations team.",
      "AI route optimization on one delivery zone — dynamic routing running alongside current algorithm, completion rates compared daily.",
      "Integration with existing order management, warehouse management, and fleet telemetry systems — no new data infrastructure.",
      "Weekly cost and completion rate readouts against Q4 2025 baseline — tied to the 12% cost reduction target and 15% on-time delivery improvement."
    ],
    phases: [
      {
        name: "Setup",
        weeks: "Week 1–2",
        startWeek: 1,
        endWeek: 2,
        objective:
          "Connect to order history, inventory, and fleet telemetry data, calibrate the demand forecast model to the pilot SKU set, and define the route optimization test zone.",
        deliverables: [
          "Pilot SKU set and fulfillment center pair confirmed; Q4 demand history ingested for model calibration",
          "Route optimization test zone selected; driver completion rate history and zone delivery patterns ingested",
          "Parallel-run governance: current model continues to drive decisions during weeks 1–4; AI recommendations tracked for accuracy comparison"
        ]
      },
      {
        name: "Pilot Run",
        weeks: "Week 3–4",
        startWeek: 3,
        endWeek: 4,
        objective:
          "Run demand forecasting and route optimization in parallel advisory mode — measure accuracy against current approach on every daily cycle.",
        deliverables: [
          "Demand forecast: AI model vs. current model accuracy on daily order volume by SKU and zone",
          "Route optimization: AI-planned routes vs. actual driver routes; completion rate and time comparison",
          "Weekly cost impact estimate: inventory misalignment events avoided; re-attempt reduction on optimized routes"
        ]
      },
      {
        name: "Evaluation",
        weeks: "Week 5–6",
        startWeek: 5,
        endWeek: 6,
        objective:
          "Calculate cost-per-order reduction trajectory, measure delivery completion improvement, and build the Q4 board ROI case.",
        deliverables: [
          "Fulfillment cost per order: AI-optimized vs. baseline; 12% target progress assessment",
          "On-time delivery completion: AI-routed zone vs. baseline; re-attempt cost reduction estimate",
          "Q4 board package: ROI summary, scale-up scope for full network, and robotic orchestration integration roadmap"
        ]
      }
    ],
    roi: {
      investment: "$680K — pilot plus first-wave rollout",
      projectedSavings: "$1.6M projected first-year gross savings",
      projectedValue: "$1.6M projected 12-month net ROI",
      paybackPeriod: "Under 6 months after scaled deployment",
      threeYearValue: "$4.5M projected 3-year value",
      valueDrivers: [
        "Inventory pre-positioning accuracy improvement reduces express shipment and missed SLA costs — directly addressing the largest component of the 18% fulfillment cost per order increase.",
        "Route optimization completion rate improvement reduces delivery re-attempt costs and driver time waste — closing the 22% plan-vs-actual gap that has grown consistently over two years.",
        "Robotic picking orchestration increases utilization across the three fulfillment center robotic systems from 60–70% toward 90%+ — improving throughput without additional labor."
      ]
    },
    executiveSummary: [
      "CJ Logistics' fulfillment cost problem is driven by two variables that AI can address directly: inventory that isn't in the right place when demand spikes, and delivery routes that don't account for how the real world actually works.",
      "The pilot runs both use cases in parallel advisory mode — demand pre-positioning on a defined SKU set, route optimization on one delivery zone — six weeks, existing order management and fleet systems, no operational disruption.",
      "If the pilot delivers a 12% cost-per-order reduction trajectory and measurable on-time delivery improvement, CJ Logistics exits with a $1.6M annual ROI case, a fulfillment AI architecture that scales to the full network, and a response to the volume growth challenge that the current labor model cannot solve."
    ],
    followUpEmail: {
      subject: "CJ Logistics Fulfillment AI Pilot — Proposed Scope and Next Steps",
      body: "Hi Tae-hyun,\n\nThank you for the time today. The conversation confirmed the urgency: Q4 2025 set a new high-water mark on fulfillment cost per order, the labor model can't scale, and the board review window for demonstrating AI ROI is fixed at Q4 2026. There isn't time for a multi-phase exploration.\n\nBased on what we discussed, we are proposing a 6-week pilot with two parallel tracks — demand-driven inventory pre-positioning on a defined SKU set across two fulfillment centers, and AI route optimization on one delivery zone. Both tracks run in advisory mode alongside your current operations for four weeks before any operational change is required. Both use your existing order management, warehouse management, and fleet telemetry data.\n\nTo define the pilot properly, we need three things from your side:\n— Confirm the pilot SKU set and fulfillment center pair with Eun-kyung's operations team; provide Q4 order history for model calibration\n— Identify the delivery zone for route optimization with Eun-kyung's fleet team and provide driver completion rate data by zone\n— Align on the parallel-run governance with Min-ho's fulfillment technology team — how AI recommendations are tracked without overriding current decisions during weeks 1–4\n\nIf it would help, we can bring a draft Q4 board ROI model calibrated to the 18% cost-per-order baseline to the next session.\n\nI will follow up by end of week with a proposed scope document. Let me know if the framing needs to change.\n\nBest regards,\nScott"
    }
  }
};
