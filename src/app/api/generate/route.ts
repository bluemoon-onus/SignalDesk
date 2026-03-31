import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getQuota, consumeQuota } from "@/lib/rate-limit";

// ─── Language name map ────────────────────────────────────────────────────────
// Extensible: add more codes here to support future languages
const LANG_NAMES: Record<string, string> = {
  en: "English",
  ko: "Korean",
  ja: "Japanese",
  zh: "Chinese (Simplified)",
  es: "Spanish",
  fr: "French",
  de: "German",
  vi: "Vietnamese",
  th: "Thai",
};

// ─── System prompt ────────────────────────────────────────────────────────────
function buildSystemPrompt(lang: string): string {
  const langName = LANG_NAMES[lang] ?? "English";

  return `You are a senior enterprise AI sales strategist with 15 years of experience closing complex B2B deals. You write account briefs that a VP of Sales would forward to their CEO without editing. Every word must sound like a senior AE who knows this account, not a consultant summarizing a Wikipedia page.

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

LANGUAGE REQUIREMENT: Generate ALL text content (titles, descriptions, pain points, stakeholder notes, emails, summaries — everything) in ${langName}. Company names, technical acronyms (e.g. MEDDPICC, ROI, KPI), and currency symbols may remain in their original form. Do not mix languages.

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
  };
}`;
}

// ─── Request body type ─────────────────────────────────────────────────────────
interface GenerateRequest {
  company: string;
  industry: string;
  situation: string;
  lang?: string;
}

export async function POST(request: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "127.0.0.1";

  const quota = await getQuota(ip);
  if (!quota.allowed) {
    return NextResponse.json(
      { error: "Daily generation limit reached. Try again tomorrow.", remaining: 0 },
      { status: 429 }
    );
  }

  // ── API key ────────────────────────────────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey.startsWith("sk-ant-api03-replace")) {
    return NextResponse.json(
      { error: "Server API key not configured. Set ANTHROPIC_API_KEY in .env.local." },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as GenerateRequest;
    const { company, industry, situation, lang = "en" } = body;

    if (!company || !industry) {
      return NextResponse.json({ error: "Missing required fields: company, industry" }, { status: 400 });
    }

    const userPrompt = `Generate a complete AccountBrief JSON for the following account.

Company: ${company}
Industry: ${industry}
Situation: ${situation || `${company} is a company in the ${industry} industry. Generate realistic account context based on what you know about this type of company.`}

Return ONLY the raw JSON object. No markdown formatting, no code blocks, no explanation.`;

    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 16000,
      system: buildSystemPrompt(lang),
      messages: [{ role: "user", content: userPrompt }],
    });

    const content = message.content[0];
    if (content.type !== "text") throw new Error("Unexpected response type from Claude");

    // Strip markdown code fences if model wrapped the output
    const cleaned = content.text
      .replace(/^```(?:json)?\n?/i, "")
      .replace(/\n?```$/i, "")
      .trim();

    let brief;
    try {
      brief = JSON.parse(cleaned);
    } catch (parseErr) {
      const pos = cleaned.length;
      const hint = pos > 7500 ? " (response may have been truncated — retrying with a shorter prompt may help)" : "";
      throw new Error(`Invalid JSON from model${hint}: ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`);
    }

    // Consume quota only on success
    await consumeQuota(ip);
    const updatedQuota = await getQuota(ip);

    return NextResponse.json({ brief, remaining: updatedQuota.remaining });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/generate]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
