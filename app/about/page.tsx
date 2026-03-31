import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Backend engineering approach, technical strengths, and education for Kushagra Rohatgi.",
};

export default function AboutPage() {
  const { person, capabilities, education } = portfolioData;

  return (
    <PageShell>
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <PageIntro
          eyebrow="About"
          title="Clean architecture, readable systems, and backend work that earns trust"
          description={person.summary}
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/70">
                  {capability.title}
                </p>
                <h2 className="mt-3 font-display text-3xl text-black">
                  {capability.headline}
                </h2>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-black/60">
                {capability.focus}
              </p>
            </div>
            <p className="mt-4 text-base leading-8 text-black/80">
              {capability.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {capability.stack.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-slate-100 shadow-[0_20px_70px_rgba(15,23,42,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-300">
            Working Style
          </p>
          <pre className="mt-5 overflow-x-auto font-mono text-sm leading-7 text-slate-200">
            <code>{person.codeSnippet}</code>
          </pre>
        </article>

        <article className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl text-black">
            Formal grounding in cloud and systems thinking
          </h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <article
                key={`${item.degree}-${item.school}`}
                className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black/65">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl text-black">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-black/85">{item.school}</p>
                <p className="mt-2 text-sm text-black/70">{item.detail}</p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </PageShell>
  );
}
