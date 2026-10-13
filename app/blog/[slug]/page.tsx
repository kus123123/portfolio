import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Spark } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog-data";
import { pageMetadata, socialImageAlt, socialImageUrl } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";

type PostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function withInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) =>
    part.startsWith("`") && part.endsWith("`")
      ? <code key={index}>{part.slice(1, -1)}</code>
      : part,
  );
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  return {
    ...pageMetadata({ title: post.title, description: post.description, path }),
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | Kushagra Rohatgi`,
      description: post.description,
      url: `${siteUrl}${path}`,
      siteName: "Kushagra Rohatgi Portfolio",
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Kushagra Rohatgi"],
      images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: "Kushagra Rohatgi", url: `${siteUrl}/about` },
    publisher: { "@type": "Person", name: "Kushagra Rohatgi" },
    mainEntityOfPage: url,
    image: socialImageUrl,
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <article className="blog-article">
        <Link href="/blog" className="blog-back"><Arrow />All notes</Link>
        <header className="blog-article-header">
          <p className="eyebrow">{post.category} <span aria-hidden="true">/</span> {formatBlogDate(post.publishedAt)}</p>
          <h1>{post.title}</h1>
          <p>{withInlineCode(post.lead)}</p>
          <div className="blog-byline"><span className="blog-byline-mark"><Spark /></span><span>Kushagra Rohatgi<br /><small>{post.readMinutes} min read</small></span></div>
          <div className="blog-tags" aria-label="Topics">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        </header>
        <div className="blog-article-body">
          {post.sections.map((section, index) => (
            <section key={section.heading}>
              <span className="blog-section-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.heading}</h2>
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "code") return <figure className="blog-code" key={blockIndex}><figcaption>{block.filename}</figcaption><pre><code>{block.code}</code></pre></figure>;
                  if (block.type === "link") return <p className="blog-source" key={blockIndex}><a href={block.href} target="_blank" rel="noopener noreferrer">{block.label}<Arrow diagonal /></a></p>;
                  return <p key={blockIndex}>{withInlineCode(block.text)}</p>;
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="blog-article-end"><Spark /><p>Thanks for reading.</p><Link href="/projects" className="text-link">Explore the work<Arrow diagonal /></Link></div>
      </article>
    </PageShell>
  );
}
