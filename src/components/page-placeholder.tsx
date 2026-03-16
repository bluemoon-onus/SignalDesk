import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)]">
      <Card className="border-white/70 bg-white/85">
        <CardHeader className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">{eyebrow}</div>
          <CardTitle className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950">
            {title}
          </CardTitle>
          <CardDescription className="max-w-2xl text-base leading-7 text-slate-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-slate-200 bg-slate-50/80 p-6">
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">Placeholder</p>
              <p className="text-sm text-slate-600">
                This page is ready for the next layer of business content, cards, and decision support.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/70 bg-slate-950 text-white">
        <CardHeader className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">Working frame</div>
          <CardTitle className="text-2xl font-semibold text-white">Executive board style</CardTitle>
          <CardDescription className="text-sm leading-7 text-slate-300">
            The interface is intentionally opinionated: concise, board-like, and built to guide a deal narrative.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Clean information hierarchy for leadership review.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            No chatbot patterns, only strategic work surfaces.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Ready for mock data and outcome-oriented modules.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
