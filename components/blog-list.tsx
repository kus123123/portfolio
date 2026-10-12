import Link from "next/link";
import { Arrow } from "@/components/icons";
import { formatBlogDate, type PostMeta } from "@/lib/blog";

export function BlogList({ posts }: { posts: PostMeta[] }) {
  return (
    <ol className="blog-entries">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <Link className="blog-entry" href={`/blog/${post.slug}`}>
            <span className="blog-entry-number">{String(posts.length - index).padStart(2, "0")} / {post.category}</span>
            <span className="blog-entry-copy">
              <span className="blog-entry-meta">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time> <i aria-hidden="true">/</i> {post.readMinutes} min read
                {post.draft && <b className="blog-draft-badge">Draft</b>}
              </span>
              <strong>{post.title}</strong>
              <span className="blog-entry-desc">{post.description}</span>
              {post.tags.length > 0 && <span className="blog-entry-tags">{post.tags.map((tag) => <em key={tag}>{tag}</em>)}</span>}
            </span>
            <span className="blog-entry-arrow" aria-hidden="true"><Arrow diagonal /></span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function TagNav({ tags, active }: { tags: { tag: string; slug: string; count: number }[]; active?: string }) {
  if (tags.length === 0) return null;
  return (
    <nav className="blog-tags" aria-label="Filter posts by topic">
      <Link href="/blog" aria-current={!active ? "page" : undefined}>All</Link>
      {tags.map(({ tag, slug, count }) => (
        <Link key={slug} href={`/blog/tag/${slug}`} aria-current={active === slug ? "page" : undefined}>
          {tag}<span>{count}</span>
        </Link>
      ))}
    </nav>
  );
}
