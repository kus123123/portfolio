import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  const { person, impactMetrics, projects, experience, principles } = portfolioData;
  const featuredProjects = projects.slice(0, 2);
  const currentExperience = experience[0];

  return (
    <PageShell>
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <PageIntro
            eyebrow={person.status}
            title={person.lead}
            description={person.summary}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={person.resumeUrl}
              download
              className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Download resume
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-black transition hover:border-slate-300 hover:bg-slate-50"
            >
              View projects
            </Link>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-black transition hover:border-slate-300 hover:bg-slate-50"
            >
              Contact me
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,247,237,0.92))] p-8 shadow-[0_20px_60px_rgba(148,163,184,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
            Current Focus
          </p>
          <h2 className="mt-4 font-display text-3xl text-black">
            {person.currentFocus}
          </h2>
          <div className="mt-6 space-y-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/65">
                  {principle.title}
                </p>
                <p className="mt-3 text-base leading-7 text-black/85">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {impactMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          >
            <p className="font-display text-4xl text-black">{metric.value}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/70">
              {metric.label}
            </p>
            <p className="mt-3 text-sm leading-7 text-black/80">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
                Featured Projects
              </p>
              <h2 className="mt-3 font-display text-3xl text-black">
                Selected backend work
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-black/80 transition hover:text-black"
            >
              See all
            </Link>
          </div>
          <div className="mt-6 grid gap-5">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/85 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/65">
                  {project.type}
                </p>
                <h3 className="mt-3 font-display text-2xl text-black">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/80">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Experience Snapshot
            </p>
            <h2 className="mt-3 font-display text-3xl text-black">
              {currentExperience.role} at {currentExperience.company}
            </h2>
            <p className="mt-3 text-sm text-black/70">
              {currentExperience.period} · {currentExperience.location}
            </p>
            <div className="mt-6 space-y-3">
              {currentExperience.highlights.slice(0, 3).map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.3rem] border border-slate-200/80 bg-slate-50/85 px-4 py-3 text-sm leading-7 text-black/80"
                >
                  {highlight}
                </div>
              ))}
            </div>
            <Link
              href="/experience"
              className="mt-6 inline-flex text-sm font-semibold text-black/80 transition hover:text-black"
            >
              View full timeline
            </Link>
          </article>

          <article className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(240,253,250,0.92),rgba(248,250,252,0.96))] p-8 shadow-[0_20px_60px_rgba(45,212,191,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Stack Snapshot
            </p>
            <h2 className="mt-3 font-display text-3xl text-black">
              Core tools I reach for
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {portfolioData.skillGroups
                .slice(0, 3)
                .flatMap((group) => group.items.slice(0, 3))
                .map((item) => (
                  <Tag key={item} label={item} />
                ))}
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-black/80 transition hover:text-black"
            >
              Learn more about my approach
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
