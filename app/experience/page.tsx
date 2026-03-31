import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience timeline for Kushagra Rohatgi across backend, cloud, and AI product roles.",
};

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <PageShell>
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <PageIntro
          eyebrow="Experience"
          title="A backend career shaped by APIs, cloud delivery, and AI product workflows"
          description="The common thread through each role is practical engineering: reduce latency, simplify operations, and keep systems understandable as the product grows."
        />
      </section>

      <div className="grid gap-6">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
          >
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
                  {item.role}
                </p>
                <h2 className="mt-3 font-display text-4xl text-black">
                  {item.company}
                </h2>
                <p className="mt-3 text-sm text-black/70">{item.location}</p>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-black/70">
                {item.period}
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {item.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.35rem] border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-7 text-black/80"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
