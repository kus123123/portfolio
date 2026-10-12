import Link from "next/link";
import { Arrow, Spark } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { ProjectPreview } from "@/components/project-preview";
import { Reveal } from "@/components/reveal";
import { StackGame } from "@/components/stack-game";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  const { person, home, projects, experience, impactMetrics } = portfolioData;
  const featured = home.featured.flatMap((slug) => projects.filter((project) => project.slug === slug));

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" />{person.displayRole} <span className="eyebrow-separator">/</span> {person.location}</p>
          <h1 className="hero-title"><span>{home.headline[0]}</span><span className="accent">{home.headline[1]}</span><span>{home.headline[2]}<svg className="hero-scribble" viewBox="0 0 90 80" aria-hidden="true"><path d="m10 34 30 9M30 8l17 25M63 5l-2 26" /></svg></span></h1>
          <p className="hero-description">{person.introduction}</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work<Arrow diagonal /></a><a className="text-link" href={person.resumeUrl} download>Download resume<Arrow diagonal /></a></div>
        </div>
        <div className="hero-play"><StackGame /></div>
      </section>

      <div className="stack-strip"><p>From the first click to the last query.</p><div>{home.stackLine.map((item) => <span key={item}>{item}</span>)}</div></div>

      <section id="work" className="work-section">
        <Reveal><div className="section-heading"><div><p className="eyebrow">Selected work / 01&ndash;04</p><h2>{home.workTitle}</h2></div><Link className="text-link" href="/projects">View all projects<Arrow diagonal /></Link></div></Reveal>
        <div className="featured-grid">
          {featured.map((project, index) => (
            <Reveal key={project.slug} className="project-showcase">
              <article>
                <Link href={`/projects#${project.slug}`} className="preview-link" aria-label={`Explore ${project.name}`}><ProjectPreview project={project} /><span className="preview-open"><Arrow diagonal /></span></Link>
                <div className="project-caption"><span className="project-index">0{index + 1}</span><div><Link href={`/projects#${project.slug}`}><h3>{project.name}</h3></Link><p>{project.shortDescription}</p></div><Link href={`/projects#${project.slug}`} className="project-arrow" aria-label={`Read about ${project.name}`}><Arrow diagonal /></Link></div>
                <p className="project-tools">{project.stack.slice(0, 3).join(" / ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="approach-section">
          <div className="approach-heading"><p className="eyebrow">The way I build</p><h2>{home.approachTitle}</h2><Spark className="approach-spark" /></div>
          <div className="approach-copy"><p>{home.approachDescription}</p><p>{person.currentFocus}</p><Link className="text-link" href="/about">A bit more about me<Arrow diagonal /></Link></div>
          <div className="impact-row">{impactMetrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        </section>
      </Reveal>

      <Reveal>
        <section className="home-experience">
          <div className="section-heading"><div><p className="eyebrow">Where I&apos;ve made an impact</p><h2>A few chapters.</h2></div><Link className="text-link" href="/experience">The full story<Arrow diagonal /></Link></div>
          <div>{experience.map((item, i) => <Link href="/experience" key={item.company} className="experience-preview"><span className="project-index">0{i + 1}</span><h3>{item.company}</h3><span>{item.role}</span><span className="experience-period">{item.period}</span><Arrow diagonal /></Link>)}</div>
        </section>
      </Reveal>
    </PageShell>
  );
}
