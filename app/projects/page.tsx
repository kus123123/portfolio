import { Arrow } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { ProjectPreview } from "@/components/project-preview";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { portfolioData } from "@/lib/portfolio-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Explore Kushagra Rohatgi's projects: a file-aware chatbot, Chrome extensions, a QR contact app, n8n automation, and backend platforms.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Selected work / The collection" title="Ideas turned into things that work." description="Browser tools, AI products, reliable APIs, and a few useful automations. Here's what I've been building." />
      <nav className="project-jump-links" aria-label="Jump to a project">{portfolioData.projects.map((project, index) => <a key={project.slug} href={`#${project.slug}`}><span>0{index + 1}</span>{project.name}</a>)}</nav>
      <div className="project-collection">
        {portfolioData.projects.map((project, index) => (
          <Reveal key={project.slug}>
            <article id={project.slug} className="project-case">
              <ProjectPreview project={project} />
              <div className="case-copy"><p className="eyebrow">0{index + 1} / {project.type}</p><h2>{project.name}</h2><p className="case-intro">{project.shortDescription}</p><p>{project.summary}</p>
                <div className="tag-list">{project.stack.map((item) => <Tag key={item} label={item} />)}</div>
                <details className="case-details"><summary>Behind the build<span aria-hidden="true">+</span></summary><p>{project.outcome}</p></details>
                <div className="case-links">
                  {project.liveUrl && <a className="button button-primary button-small" href={project.liveUrl} target="_blank" rel="noreferrer">Visit project<Arrow diagonal /></a>}
                  {project.repoUrl && <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">View source<Arrow diagonal /></a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
