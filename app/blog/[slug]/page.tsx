import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Spark } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { formatBlogDate, getAdjacentPosts, getAllPosts, getPost, tagSlug } from "@/lib/blog";
import { renderMdx } from "@/lib/mdx";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";

type PostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const base = pageMetadata({ title: post.title, description: post.description, path });
  // Social images come from the sibling opengraph-image.tsx file convention.
  return {
    ...base,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}${path}`,
      siteName: "Kushagra Rohatgi Portfolio",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [`${siteUrl}/about`],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
    robots: post.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content, toc } = await renderMdx(post.body);
  const { newer, older } = getAdjacentPosts(post.slug);
  const url = `${siteUrl}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Kushagra Rohatgi", url: `${siteUrl}/about` },
    publisher: { "@type": "Person", name: "Kushagra Rohatgi" },
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <article className="blog-article">
        <Link href="/blog" className="blog-back"><Arrow />All notes</Link>
        <header className="blog-article-header">
          <p className="eyebrow">
            {post.category} <span aria-hidden="true">/</span> <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            {post.updated && <> <span aria-hidden="true">/</span> Updated <time dateTime={post.updated}>{formatBlogDate(post.updated)}</time></>}
          </p>
          <h1>{post.title}</h1>
          <p>{post.lead ?? post.description}</p>
          <div className="blog-byline">
            <span className="blog-byline-mark"><Spark /></span>
            <span>Kushagra Rohatgi<br /><small>{post.readMinutes} min read</small></span>
            {post.tags.length > 0 && (
              <ul className="blog-article-tags" aria-label="Topics">
                {post.tags.map((tag) => <li key={tag}><Link href={`/blog/tag/${tagSlug(tag)}`}>{tag}</Link></li>)}
              </ul>
            )}
          </div>
        </header>

        <div className={`blog-article-layout${toc.length >= 3 ? " has-toc" : ""}`}>
          {toc.length >= 3 && (
            <nav className="blog-toc" aria-label="On this page">
              <p className="eyebrow">On this page</p>
              <ol>{toc.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol>
            </nav>
          )}
          <div className="prose">{content}</div>
        </div>

        <div className="blog-article-end"><Spark /><p>Thanks for reading.</p><Link href="/projects" className="text-link">Explore the work<Arrow diagonal /></Link></div>

        {(newer || older) && (
          <nav className="blog-pager" aria-label="More notes">
            {older ? <Link href={`/blog/${older.slug}`} rel="prev"><span className="eyebrow">Previous note</span><strong>{older.title}</strong></Link> : <span />}
            {newer ? <Link href={`/blog/${newer.slug}`} rel="next" className="blog-pager-next"><span className="eyebrow">Next note</span><strong>{newer.title}</strong></Link> : <span />}
          </nav>
        )}
      </article>
    </PageShell>
  );
}
