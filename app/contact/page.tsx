import type { Metadata } from "next";
import { Arrow, Spark } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Kushagra Rohatgi about full-stack development, backend systems, and collaborations.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const { person } = portfolioData;
  return (
    <PageShell>
      <PageIntro eyebrow="A conversation is a good start" title="Something worth building?" description="A product idea, an engineering challenge, or a chance to work together. I'd like to hear about it." />
      <section className="contact-layout"><div className="contact-links"><a className="contact-row contact-email" href={`mailto:${person.email}`}><span className="eyebrow">01 / Email me</span><span>{person.email}<Arrow diagonal /></span></a><a className="contact-row" href={person.linkedinUrl} target="_blank" rel="noreferrer"><span className="eyebrow">02 / Find me on LinkedIn</span><span>{person.linkedinLabel}<Arrow diagonal /></span></a><a className="contact-row" href={person.resumeUrl} download><span className="eyebrow">03 / The one-page introduction</span><span>Download my resume<Arrow diagonal /></span></a></div><aside className="contact-note"><Spark /><h2>Good work starts<br />with a hello.</h2><p>Based in {person.location}.</p><p>Interfaces, APIs, and all the interesting things in between.</p></aside></section>
    </PageShell>
  );
}
