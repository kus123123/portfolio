import type { MetadataRoute } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/projects", "/experience", "/blog", "/contact", "/extensions/resume-autofill"].map(
    (path) => ({ url: new URL(path, siteUrl).toString() }),
  );
  const posts = getAllPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(`${post.updated ?? post.date}T00:00:00Z`),
  }));
  const tags = getAllTags().map(({ slug }) => ({ url: new URL(`/blog/tag/${slug}`, siteUrl).toString() }));

  return [...pages, ...posts, ...tags];
}
