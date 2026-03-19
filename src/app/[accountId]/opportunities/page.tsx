"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { OpportunityBoard } from "@/components/opportunity-board";
import { getBrief } from "@/lib/brief-store";
import { localizeBrief } from "@/lib/locale";
import { useLanguage } from "@/contexts/language-context";
import type { AccountBrief } from "@/types";

export default function OpportunitiesPage() {
  const params = useParams();
  const accountId = params.accountId as string;
  const { t, lang } = useLanguage();

  const [brief, setBrief] = useState<AccountBrief | null>(() => getBrief(accountId) ?? null);

  useEffect(() => {
    const b = getBrief(accountId);
    if (b) setBrief(b);
  }, [accountId]);

  if (!brief) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-slate-400">{t("gen.loading")}</p>
      </div>
    );
  }

  const localBrief = localizeBrief(brief, accountId, lang);
  return <OpportunityBoard brief={localBrief} />;
}
