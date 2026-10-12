import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/projects", "/experience", "/blog", "/contact", "/extensions/resume-autofill"].map(
    (path) => ({ url: new URL(path, siteUrl).toString() }),
  );
  const posts = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
  }));

  return [...pages, ...posts];
}
