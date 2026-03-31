import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected backend, AI, and platform projects by Kushagra Rohatgi.",
};

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <PageShell>
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <PageIntro
          eyebrow="Projects"
          title="Case studies focused on API design, infrastructure, and production outcomes"
          description="These projects are written to be easy to scan: what the product did, what backend problem it solved, and why the implementation mattered."
        />
      </section>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
          >
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/70">
                  {project.type}
                </p>
                <h2 className="mt-3 font-display text-4xl text-black">
                  {project.name}
                </h2>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-black transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Visit live project
                </a>
              ) : null}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-base leading-8 text-black/80">{project.summary}</p>
              </div>
              <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
                  Outcome
                </p>
                <p className="mt-3 text-sm leading-7 text-black/85">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
