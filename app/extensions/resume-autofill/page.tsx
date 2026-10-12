import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Resume Autofill Privacy Policy",
  description:
    "Privacy policy and data handling details for the Resume Autofill Chrome extension.",
  alternates: {
    canonical: "/extensions/resume-autofill",
  },
};

export default function ResumeAutofillPolicyPage() {
  return (
    <PageShell>
      <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
          Resume Autofill
        </p>
        <h1 className="mt-4 font-display text-4xl text-black">
          Privacy policy
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-black/80">
          This page describes what the Resume Autofill Chrome extension stores,
          what it sends to third parties when specific features are enabled, and
          how users can control that data.
        </p>
      </section>

      <section className="grid gap-6">
        <PolicyCard
          title="What the extension stores"
          items={[
            "Profile fields, learned answers, and settings in Chrome Sync.",
            "Resume file bytes, OpenAI API key, and Google sign-in state only in local extension storage on the current device.",
          ]}
        />

        <PolicyCard
          title="How data is used"
          items={[
            "Profile data and learned answers are used only to fill forms when the user triggers extension actions.",
            "The stored resume file is used only to upload into resume fields when the user triggers extension actions.",
            "Google sign-in is used only to import missing identity fields such as name and email.",
          ]}
        />

        <PolicyCard
          title="Third-party services"
          items={[
            "OpenAI is contacted only when the user enables AI drafting and explicitly asks the extension to draft a response.",
            "Google account data is requested only when the user explicitly signs in with Google through the extension.",
          ]}
        />

        <PolicyCard
          title="User controls"
          items={[
            "Users can edit or delete saved profile data and learned answers at any time.",
            "Users can remove the stored resume, remove the stored OpenAI API key, or sign out of Google from extension settings.",
          ]}
        />

        <section className="rounded-[2rem] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,251,235,0.95),rgba(255,247,237,0.92))] p-8 shadow-[0_20px_60px_rgba(148,163,184,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/70">
            Contact
          </p>
          <p className="mt-4 text-base leading-8 text-black/80">
            Replace this section with your support email or contact page before
            publishing the extension to the Chrome Web Store.
          </p>
        </section>
      </section>
    </PageShell>
  );
}

function PolicyCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <h2 className="font-display text-3xl text-black">{title}</h2>
      <ul className="mt-5 space-y-4 text-base leading-8 text-black/80">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-[1.3rem] border border-slate-200/80 bg-slate-50/85 px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
