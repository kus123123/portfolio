import Image from "next/image";
import { Spark } from "@/components/icons";
import type { portfolioData } from "@/lib/portfolio-data";

type Project = (typeof portfolioData.projects)[number];

export function ProjectPreview({ project }: { project: Project }) {
  const isScreenshot = project.previewKind === "screenshot";
  return (
    <figure className={`project-preview tone-${project.tone} preview-${project.previewKind}`}>
      <div className="preview-label"><span>{project.type}</span><Spark /></div>
      {isScreenshot ? (
        <div className="browser-frame">
          <div className="browser-chrome" aria-hidden="true"><span className="window-dots"><i /><i /><i /></span><span>{project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span><span>&#8599;</span></div>
          <Image src={project.imageUrl} alt={project.imageAlt} width={1280} height={720} sizes="(min-width: 1440px) 680px, (min-width: 800px) 50vw, 100vw" />
        </div>
      ) : project.previewKind === "workflow" ? (
        <div className="workflow-art" aria-label="Workflow overview: schedule, write with OpenRouter, generate an image with Gemini, publish to LinkedIn">
          <p>One idea.<br /><strong>Working on autopilot.</strong></p>
          <div className="workflow-nodes">{[["01", "Schedule"], ["02", "Write"], ["03", "Visualize"], ["04", "Publish"]].map(([n, label]) => <div className="workflow-node" key={n}><span>{n}</span><strong>{label}</strong></div>)}</div>
          <div className="workflow-platforms"><span>n8n</span><span>OpenRouter</span><span>Gemini</span><span>LinkedIn</span></div>
        </div>
      ) : project.previewKind === "notes" ? (
        <div className="notes-art">
          <div className="notes-paper"><span className="eyebrow">A little room to think.</span><h3>The next<br />good idea<span>.</span></h3><div className="note-lines"><i /><i /><i /></div><div className="note-flow"><span>Think</span><span>&#8594;</span><span>Connect</span><span>&#8594;</span><span>Build</span></div></div>
          <span className="notes-sticker">Keep it<br />close.</span>
        </div>
      ) : (
        <div className="abstract-art"><span className="abstract-symbol" aria-hidden="true">{project.slug === "natural-language-sql" ? "{ query }" : project.slug === "resume-autofill" ? "[ autofill ]" : "{ secure }"}</span><p>{project.shortDescription}</p><div className="abstract-line" aria-hidden="true"><i /><span /><i /><span /><i /></div></div>
      )}
      <figcaption>{isScreenshot ? project.slug === "pdf-ai-helper" ? "Product screenshot / sign-in screen" : "Product screenshot" : project.previewKind === "workflow" ? "Workflow overview" : "Concept illustration"}</figcaption>
    </figure>
  );
}
