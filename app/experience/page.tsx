import type { Metadata } from "next";
import { Arrow } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Experience", description: "Kushagra Rohatgi's work across backend systems, cloud delivery, and AI products.", alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Experience / A few chapters" title="Built in the real world." description="Different teams, different challenges. The same care for useful products and systems that hold up under pressure." />
      <div className="career-timeline">{portfolioData.experience.map((item, index) => <Reveal key={item.company}><article className="career-entry"><div className="career-date"><span className="timeline-dot" /><span className="eyebrow">0{index + 1} / {item.period}</span><p>{item.location}</p></div><div><p className="eyebrow">{item.role}</p><h2>{item.company}</h2><ul>{item.highlights.map((text) => <li key={text}>{text}</li>)}</ul></div></article></Reveal>)}</div>
      <div className="resume-banner"><div><p className="eyebrow">Prefer the short version?</p><h2>The story, on paper.</h2></div><a href={portfolioData.person.resumeUrl} download className="button button-primary">Download resume<Arrow diagonal /></a></div>
    </PageShell>
  );
}
