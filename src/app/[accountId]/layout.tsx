import { notFound } from "next/navigation";

import { AppShell } from "@/components/app-shell";
import { LanguageProvider } from "@/contexts/language-context";
import { getAccount } from "@/data";

type AccountLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ accountId: string }>;
};

export default async function AccountLayout({ children, params }: AccountLayoutProps) {
  const { accountId } = await params;
  const brief = getAccount(accountId);

  if (!brief) {
    notFound();
  }

  return (
    <LanguageProvider>
      <AppShell accountId={accountId}>{children}</AppShell>
    </LanguageProvider>
  );
}
