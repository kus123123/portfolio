import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information, resume access, and structured profile endpoints for Kushagra Rohatgi.",
};

export default function ContactPage() {
  const { person, skillGroups } = portfolioData;

  return (
    <PageShell>
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <PageIntro
          eyebrow="Contact"
          title="Simple ways to reach me for backend, platform, or AI infrastructure work"
          description="This page keeps the contact layer minimal and readable: email, LinkedIn, resume, and the structured JSON endpoints behind the site."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          <a
            href={`mailto:${person.email}`}
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Email
            </p>
            <p className="mt-3 font-display text-3xl text-black">
              {person.email}
            </p>
          </a>
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              LinkedIn
            </p>
            <p className="mt-3 font-display text-3xl text-black">
              {person.linkedinLabel}
            </p>
          </a>
          <a
            href={person.resumeUrl}
            download
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Resume
            </p>
            <p className="mt-3 font-display text-3xl text-black">
              Download PDF
            </p>
          </a>
        </div>

        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Structured Access
            </p>
            <h2 className="mt-3 font-display text-3xl text-black">
              Portfolio data is also exposed as JSON
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/api/profile"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-black transition hover:border-slate-300 hover:bg-slate-50"
              >
                Open profile JSON
              </a>
              <a
                href="/api/projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-black transition hover:border-slate-300 hover:bg-slate-50"
              >
                Open projects JSON
              </a>
            </div>
          </article>

          <article className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,250,252,0.95))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
              Technical Snapshot
            </p>
            <h2 className="mt-3 font-display text-3xl text-black">
              A concise view of the stack behind the work
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {skillGroups.slice(0, 4).map((group) => (
                <article
                  key={group.label}
                  className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-black/65">
                    {group.label}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.slice(0, 4).map((item) => (
                      <Tag key={`${group.label}-${item}`} label={item} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
