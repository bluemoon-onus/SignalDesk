import { notFound } from "next/navigation";

import { PilotBrief } from "@/components/pilot-brief";
import { getAccount } from "@/data";

type Props = { params: Promise<{ accountId: string }> };

export default async function PilotPage({ params }: Props) {
  const { accountId } = await params;
  const brief = getAccount(accountId);

  if (!brief) notFound();

  return <PilotBrief brief={brief} />;
}
