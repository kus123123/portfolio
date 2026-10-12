import Link from "next/link";
import { Arrow, Spark } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Meet Kushagra Rohatgi, a senior backend and full-stack developer in Noida. Explore his approach to APIs, cloud systems, AI workflows, and product engineering.",
  path: "/about",
});

const { person } = portfolioData;
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/about#person`,
    name: person.name,
    jobTitle: person.role,
    description: person.summary,
    url: `${siteUrl}/about`,
    homeLocation: { "@type": "Place", name: person.location },
    sameAs: [person.linkedinUrl, "https://github.com/kus123123"],
    knowsAbout: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Cloud automation", "AI workflows"],
  },
};

export default function AboutPage() {
  const { capabilities, principles, education, skillGroups } = portfolioData;
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageIntro eyebrow="The person behind the work" title="Curious by nature. Engineer by practice." description={person.introduction} />
      <section className="about-intro"><div className="about-monogram" aria-hidden="true"><Spark /><span>kr.</span><p>Interfaces. Systems. Everything between.</p></div><div className="about-story"><p className="eyebrow">Based in {person.location}</p><h2>The whole product matters.</h2><p>{person.summary}</p><p>{person.currentFocus}</p><Link href="/projects" className="text-link">See what that looks like<Arrow diagonal /></Link></div></section>
      <Reveal><section><div className="section-heading"><div><p className="eyebrow">What I bring to the table</p><h2>Depth behind the details.</h2></div></div><div className="capability-grid">{capabilities.map((item, index) => <article key={item.title}><span className="project-index">0{index + 1} / {item.focus}</span><h3>{item.title}</h3><p>{item.description}</p><div className="tag-list">{item.stack.map((skill) => <Tag key={skill} label={skill} />)}</div></article>)}</div></section></Reveal>
      <Reveal><section className="principles-section"><p className="eyebrow">A few things I believe</p><div className="principle-grid">{principles.map((item) => <article key={item.title}><Spark /><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section></Reveal>
      <Reveal><section className="about-foundations"><div><p className="eyebrow">The toolkit</p><h2>Tools with a purpose.</h2>{skillGroups.map((group) => <div className="skill-row" key={group.label}><h3>{group.label}</h3><p>{group.items.join(" / ")}</p></div>)}</div><div><p className="eyebrow">Education</p><h2>Where it started.</h2>{education.map((item) => <article className="education-item" key={item.degree}><span className="eyebrow">{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p><span>{item.detail}</span></article>)}</div></section></Reveal>
    </PageShell>
  );
}
