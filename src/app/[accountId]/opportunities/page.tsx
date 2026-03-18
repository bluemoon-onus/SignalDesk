import { notFound } from "next/navigation";

import { OpportunityBoard } from "@/components/opportunity-board";
import { getAccount } from "@/data";

type Props = { params: Promise<{ accountId: string }> };

export default async function OpportunitiesPage({ params }: Props) {
  const { accountId } = await params;
  const brief = getAccount(accountId);

  if (!brief) notFound();

  return <OpportunityBoard brief={brief} />;
}
