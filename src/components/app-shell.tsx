"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BriefcaseBusiness, Compass, Target } from "lucide-react";

import { Card } from "@/components/ui/card";
import { aiDealArchitectMockData } from "@/data";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    href: "/snapshot",
    label: "Snapshot",
    description: "Company signal",
    icon: BarChart3
  },
  {
    href: "/opportunities",
    label: "Opportunities",
    description: "AI opportunity map",
    icon: Target
  },
  {
    href: "/strategy",
    label: "Strategy",
    description: "Deal motion",
    icon: Compass
  },
  {
    href: "/pilot",
    label: "Pilot",
    description: "Execution plan",
    icon: BriefcaseBusiness
  }
] as const;

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const {
    account: { company, industry }
  } = aiDealArchitectMockData;

  return (
    <div className="min-h-screen bg-background bg-mesh-grid bg-mesh-grid text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-6 p-4 lg:flex-row lg:p-6">
        <Card className="flex w-full flex-col justify-between border-white/70 bg-white/80 shadow-panel lg:w-[300px]">
          <div className="space-y-8 p-6">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                SignalDesk
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Enterprise AI Narrative
                </h1>
                <p className="text-sm leading-6 text-slate-600">
                  Executive workflow from company signal to pilot plan, built for strategic B2B selling.
                </p>
              </div>
            </div>

            <nav className="space-y-2">
              {navigationItems.map(({ href, label, description, icon: Icon }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "group flex items-start gap-3 rounded-2xl border border-transparent px-4 py-3 transition-all",
                      isActive
                        ? "border-slate-200 bg-slate-950 text-white shadow-lg"
                        : "text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 rounded-xl p-2 transition-colors",
                        isActive ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-white"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold">{label}</div>
                      <div
                        className={cn(
                          "text-xs leading-5",
                          isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-600"
                        )}
                      >
                        {description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-slate-200/80 px-6 py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Strategic view
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Every screen is framed as a business decision, not a conversation.
            </p>
          </div>
        </Card>

        <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col gap-4">
          <Card className="border-white/70 bg-white/80 px-5 py-4 shadow-panel">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  Account focus
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{company}</h2>
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {industry}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Executive briefing mode
              </div>
            </div>
          </Card>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
