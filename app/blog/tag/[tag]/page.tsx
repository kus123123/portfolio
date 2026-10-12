import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { BlogList, TagNav } from "@/components/blog-list";
import { PageShell } from "@/components/page-shell";
import { getAllPosts, getAllTags, tagSlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type TagPageProps = { params: Promise<{ tag: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }));
}

function findTag(slug: string) {
  return getAllTags().find((tag) => tag.slug === slug);
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tag = findTag((await params).tag);
  if (!tag) notFound();
  return pageMetadata({
    title: `${tag.tag} notes`,
    description: `Posts by Kushagra Rohatgi about ${tag.tag}.`,
    path: `/blog/tag/${tag.slug}`,
  });
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = findTag((await params).tag);
  if (!tag) notFound();
  const posts = getAllPosts().filter((post) => post.tags.some((t) => tagSlug(t) === tag.slug));

  return (
    <PageShell>
      <section className="blog-list blog-tag-page" aria-labelledby="tag-title">
        <Link href="/blog" className="blog-back"><Arrow />All notes</Link>
        <div className="section-heading blog-list-heading">
          <div><p className="eyebrow">Topic / {String(posts.length).padStart(2, "0")} note{posts.length === 1 ? "" : "s"}</p><h1 id="tag-title">{tag.tag}</h1></div>
        </div>
        <TagNav tags={getAllTags()} active={tag.slug} />
        <BlogList posts={posts} />
      </section>
    </PageShell>
  );
}
