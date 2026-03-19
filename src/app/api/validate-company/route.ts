import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // If no API key configured, assume company is valid (don't block the user)
  if (!apiKey || apiKey.startsWith("sk-ant-api03-replace")) {
    return NextResponse.json({ recognized: true, normalizedName: "", confidence: "high" });
  }

  try {
    const { company, lang } = (await request.json()) as { company: string; lang?: string };

    if (!company?.trim()) {
      return NextResponse.json({ recognized: false, normalizedName: "", confidence: "low" });
    }

    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 150,
      messages: [
        {
          role: "user",
          content: `Is "${company}" a real company, organization, or well-known brand?
Language context: "${lang ?? "en"}"

Reply with ONLY this JSON (no explanation):
{"recognized": true or false, "normalizedName": "canonical English or native name, or empty string if unrecognized", "confidence": "high or medium or low"}

Examples:
- "삼성전자" → {"recognized": true, "normalizedName": "삼성전자", "confidence": "high"}
- "Samaung" → {"recognized": false, "normalizedName": "Samsung", "confidence": "low"}
- "XYZ Corp 123!!" → {"recognized": false, "normalizedName": "", "confidence": "low"}
- "Kakao" → {"recognized": true, "normalizedName": "Kakao", "confidence": "high"}`,
        },
      ],
    });

    const text = (message.content[0] as { type: string; text: string }).text.trim();
    const result = JSON.parse(text) as {
      recognized: boolean;
      normalizedName: string;
      confidence: "high" | "medium" | "low";
    };

    return NextResponse.json(result);
  } catch {
    // Fail open — don't block generation
    return NextResponse.json({ recognized: true, normalizedName: "", confidence: "medium" });
  }
}
