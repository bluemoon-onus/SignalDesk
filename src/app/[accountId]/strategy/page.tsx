import { notFound } from "next/navigation";

import { StrategyBrief } from "@/components/strategy-brief";
import { getAccount } from "@/data";

type Props = { params: Promise<{ accountId: string }> };

export default async function StrategyPage({ params }: Props) {
  const { accountId } = await params;
  const brief = getAccount(accountId);

  if (!brief) notFound();

  return <StrategyBrief brief={brief} />;
}
