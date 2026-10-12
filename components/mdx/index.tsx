import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { CodeBlock } from "./code-block";
import { Mermaid } from "./mermaid";

/* ---------- Links ---------- */

function MdxLink({ href = "", children, ...rest }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/") && !href.startsWith("//")) return <Link href={href} {...rest}>{children}</Link>;
  if (href.startsWith("#") || href.startsWith("mailto:")) return <a href={href} {...rest}>{children}</a>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/* ---------- Media ---------- */

/** Markdown images: `![Alt text](/blog/my-post/shot.png "Optional caption")` */
function MdxImage({ src, alt = "", title }: ComponentPropsWithoutRef<"img">) {
  if (typeof src !== "string") return null;
  return (
    <figure className="mdx-figure">
      {/* eslint-disable-next-line @next/next/no-img-element -- markdown images have unknown dimensions */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  );
}

/** Optimised image with known dimensions: `<Figure src="/blog/x.png" alt="" width={1600} height={900} caption="..." />` */
function Figure({ src, alt, width, height, caption, priority }: { src: string; alt: string; width: number; height: number; caption?: ReactNode; priority?: boolean }) {
  return (
    <figure className="mdx-figure">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 100vw, 840px" priority={priority} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Self-hosted or remote video file: `<Video src="/blog/x/demo.mp4" poster="/blog/x/poster.jpg" caption="..." />` */
function Video({ src, poster, caption, autoPlay = false }: { src: string; poster?: string; caption?: ReactNode; autoPlay?: boolean }) {
  return (
    <figure className="mdx-figure">
      <video src={src} poster={poster} controls playsInline preload="metadata" autoPlay={autoPlay} muted={autoPlay} loop={autoPlay} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Any iframe embed (CodeSandbox, Figma, Loom, StackBlitz...). `title` is required for screen readers. */
function Embed({ src, title, caption, aspect = "16 / 9", height }: { src: string; title: string; caption?: ReactNode; aspect?: string; height?: number }) {
  return (
    <figure className="mdx-figure">
      <div className="mdx-embed" style={height ? { height } : { aspectRatio: aspect }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** `<YouTube id="dQw4w9WgXcQ" title="Talk title" />` — uses the privacy-enhanced domain. */
function YouTube({ id, title, caption, start }: { id: string; title: string; caption?: ReactNode; start?: number }) {
  const query = start ? `?start=${start}` : "";
  return <Embed src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}${query}`} title={title} caption={caption} />;
}

/* ---------- Text helpers ---------- */

const calloutLabels = { note: "Note", tip: "Tip", warning: "Watch out" } as const;

/** `<Callout type="warning" title="Optional">Body</Callout>` */
function Callout({ type = "note", title, children }: { type?: keyof typeof calloutLabels; title?: string; children: ReactNode }) {
  return (
    <aside className={`mdx-callout mdx-callout-${type}`}>
      <p className="eyebrow">{title ?? calloutLabels[type]}</p>
      <div>{children}</div>
    </aside>
  );
}

function Table(props: ComponentPropsWithoutRef<"table">) {
  return <div className="mdx-table"><table {...props} /></div>;
}

export const mdxComponents = {
  a: MdxLink,
  img: MdxImage,
  pre: CodeBlock,
  table: Table,
  Figure,
  Video,
  Embed,
  YouTube,
  Mermaid,
  Callout,
};
