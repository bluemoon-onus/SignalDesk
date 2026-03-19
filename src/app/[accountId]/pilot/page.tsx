"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { PilotBrief } from "@/components/pilot-brief";
import { getBrief } from "@/lib/brief-store";
import { useLanguage } from "@/contexts/language-context";
import type { AccountBrief } from "@/types";

export default function PilotPage() {
  const params = useParams();
  const accountId = params.accountId as string;
  const { t } = useLanguage();

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

  return <PilotBrief brief={brief} />;
}
