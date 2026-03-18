import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";

// ─── System prompt ────────────────────────────────────────────────────────────
// Encodes MEDDPICC, Value Selling, and Challenger Sale frameworks
const SYSTEM_PROMPT = `You are a senior enterprise AI sales strategist with 15 years of experience closing complex B2B deals. You write account briefs that a VP of Sales would forward to their CEO without editing. Every word must sound like a senior AE who knows this account, not a consultant summarizing a Wikipedia page.

You follow three frameworks simultaneously:
- MEDDPICC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion, Competition) — every section of the brief must satisfy at least one MEDDPICC element.
- Value Selling — pain points are quantified, ROI is anchored to the customer's own KPIs, pilot scope is designed to produce a measurable number fast.
- Challenger Sale — you teach (insight the customer doesn't have), tailor (to the economic buyer's agenda), and take control (propose a specific next step, not a vague follow-up).

CRITICAL copy standards:
- Pain points must read like direct customer quotes or internal frustrations — first-person voice, specific numbers, operational detail
- Executive summaries must be three sentences a C-level sponsor can repeat internally without modification
- ROI figures must be realistic for the industry and company size (Korean enterprise = $500K–$5M range; startups = $300K–$1.5M range)
- Follow-up email must be ready to send — named contacts, specific commitments, a concrete ask
- No generic AI transformation language. No "leverage cutting-edge AI." Write like someone who has sat in the room with this customer.
- Korean won figures where appropriate for Korean companies (format: ₩XB or ₩XT)
- Stakeholder names must sound realistic for Korean companies (Korean names for Korean companies, western names for others)

OUTPUT FORMAT: Return ONLY a valid JSON object matching this exact TypeScript type. No markdown, no explanation, no code block wrapper — just the raw JSON.

interface AccountBrief {
  account: {
    company: string;
    industry: string;
    situation: string; // 3–5 sentences, executive-level context
    painPoints: Array<{
      title: string; // 8–12 words, customer-voice, specific
      detail: string; // 60–100 words, first-person operational detail with numbers
      severity: "High" | "Med" | "Low";
    }>; // exactly 3 pain points
    triggers: Array<{
      dateLabel: string; // "Jan 2026" format
      title: string; // 6–10 words
      detail: string; // 40–60 words
      impact: string; // 20–35 words, commercial implication
    }>; // exactly 3 trigger events, dated within the last 6 months
    objectives: Array<{
      title: string; // 8–14 words
      targetKpi: string; // current state → target state within timeframe
      rationale: string; // 30–50 words, why this KPI matters commercially
    }>; // exactly 2 objectives
  };
  opportunities: Array<{
    useCase: string; // 4–7 words
    description: string; // 50–80 words
    impactScore: number; // 1–10
    difficulty: number; // 1–10
    timeToValue: string; // "X–Y weeks" format
    priority: "P1" | "P2" | "P3"; // P1 = do first, P2 = strong bet, P3 = sequence next
  }>; // exactly 3 opportunities: one P1, one P2, one P3
  stakeholders: Array<{
    name: string; // realistic name for company's country/culture
    role: "Economic Buyer" | "Champion" | "Technical Evaluator" | "Blocker" | "Operational Influencer";
    title: string; // realistic job title
    stance: "Supportive" | "Neutral" | "Resistant";
    influence: "High" | "Medium" | "Low";
    keyConcern: string; // 30–50 words, specific to their role and the deal
    recommendedApproach: string; // 30–50 words, actionable
  }>; // exactly 3 stakeholders: Economic Buyer, Champion, and one of Technical Evaluator or Blocker
  dealStrategy: {
    objections: Array<{
      objection: string; // 10–20 words, realistic objection
      response: string; // 50–80 words, Challenger Sale reframe — not a feature pitch
    }>; // exactly 3 objections
    agenda: Array<{
      time: string; // "0–10 min" format
      topic: string; // 4–8 words
      outcome: string; // 25–45 words, specific outcome not a general goal
    }>; // exactly 4 agenda items totaling 45 minutes
    positioning: string[]; // exactly 3 sentences: executive, technical, commercial
  };
  pilotPlan: {
    weeks: number; // 6 or 8
    scope: string[]; // exactly 6 scope bullets: 5 in-scope, 1 "Out of scope: ..."
    phases: Array<{
      name: string;
      weeks: string; // "Weeks X–Y" format
      startWeek: number;
      endWeek: number;
      objective: string; // 10–20 words
      deliverables: string[]; // exactly 3 deliverables
    }>; // exactly 3 phases covering all weeks
    roi: {
      investment: string; // "$XK" or "$XM" format
      projectedSavings: string; // specific annual figure
      projectedValue: string; // "$XM first-year value" format
      paybackPeriod: string; // "X–Y months" format
      threeYearValue: string; // "$XM" format
      valueDrivers: string[]; // exactly 3 value driver sentences with specific numbers
    };
    executiveSummary: string[]; // exactly 3 sentences for C-level consumption
    followUpEmail: {
      subject: string; // professional email subject line
      body: string; // 150–250 words, ready to send, ends with a specific ask
    };
  };
}`;

// ─── Request body type ─────────────────────────────────────────────────────────
interface GenerateRequest {
  company: string;
  industry: string;
  situation: string;
  provider: "claude" | "openai";
  apiKey: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GenerateRequest;
    const { company, industry, situation, provider, apiKey } = body;

    if (!company || !industry || !apiKey) {
      return NextResponse.json({ error: "Missing required fields: company, industry, apiKey" }, { status: 400 });
    }

    const userPrompt = `Generate a complete AccountBrief JSON for the following account.

Company: ${company}
Industry: ${industry}
Situation: ${situation || `${company} is a company in the ${industry} industry. Generate realistic account context based on what you know about this type of company.`}

Return ONLY the raw JSON object. No markdown formatting, no code blocks, no explanation.`;

    let jsonText: string;

    if (provider === "claude") {
      const client = new Anthropic({ apiKey });
      const message = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }],
      });
      const content = message.content[0];
      if (content.type !== "text") throw new Error("Unexpected response type from Claude");
      jsonText = content.text;
    } else {
      const client = new OpenAI({ apiKey });
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        max_tokens: 8000,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      });
      jsonText = completion.choices[0]?.message?.content ?? "";
    }

    // Strip markdown code fences if model wrapped the output
    const cleaned = jsonText
      .replace(/^```(?:json)?\n?/i, "")
      .replace(/\n?```$/i, "")
      .trim();

    const brief = JSON.parse(cleaned);
    return NextResponse.json({ brief });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/generate]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
