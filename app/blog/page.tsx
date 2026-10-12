import Link from "next/link";
import { Arrow, Spark } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Build notes by Kushagra Rohatgi on backend systems, product engineering, browser tools, and practical AI workflows.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell>
      <header className="blog-hero">
        <div>
          <p className="eyebrow">Journal / Ideas in progress</p>
          <h1>Notes from <span>the build.</span></h1>
          <p>Project pages show what shipped. These notes are about the decisions underneath: the trade-offs, the rough edges, and the patterns worth keeping.</p>
        </div>
        <div className="blog-hero-mark" aria-hidden="true"><Spark /><span>kr.</span><small>Thinking in systems.<br />Building for people.</small></div>
      </header>

      <Reveal>
        <section className="blog-list" aria-labelledby="blog-list-title">
          <div className="section-heading"><div><p className="eyebrow">The journal / {String(blogPosts.length).padStart(2, "0")} note{blogPosts.length === 1 ? "" : "s"}</p><h2 id="blog-list-title">Latest writing.</h2></div></div>
          {blogPosts.map((post, index) => (
            <Link className="blog-entry" href={`/blog/${post.slug}`} key={post.slug}>
              <span className="blog-entry-number">{String(index + 1).padStart(2, "0")} / {post.category}</span>
              <span className="blog-entry-copy"><span className="blog-entry-meta">{formatBlogDate(post.publishedAt)} <i aria-hidden="true">/</i> {post.readMinutes} min read</span><strong>{post.title}</strong><span>{post.description}</span></span>
              <span className="blog-entry-arrow" aria-hidden="true"><Arrow diagonal /></span>
            </Link>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="blog-next">
          <div><p className="eyebrow">On the desk</p><h2>More useful notes are on their way.</h2></div>
          <div><p>Backend architecture, browser products, and AI workflows are the threads I&apos;ll keep pulling on. Have a topic you&apos;d like me to unpack?</p><a className="text-link" href="mailto:kushagra746@gmail.com?subject=Blog%20topic%20idea">Suggest a topic<Arrow diagonal /></a></div>
        </section>
      </Reveal>
    </PageShell>
  );
}
