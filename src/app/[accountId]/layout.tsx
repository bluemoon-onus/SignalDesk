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

  // Generated accounts (gen-*) live in localStorage — resolved client-side.
  // Static accounts must exist in the registry.
  const isGenerated = accountId.startsWith("gen-");
  const brief = isGenerated ? null : getAccount(accountId);

  if (!isGenerated && !brief) {
    notFound();
  }

  return (
    <LanguageProvider>
      <AppShell accountId={accountId}>{children}</AppShell>
    </LanguageProvider>
  );
}
