import "server-only";

import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import { parse as parseYaml } from "yaml";
import readingTime from "reading-time";

/**
 * Blog content lives in `content/blog/*.mdx`. Each file starts with YAML
 * frontmatter (see `content/blog/README.md`). Drafts are hidden in production
 * builds but visible in `next dev`, so you can preview before publishing.
 */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  category: string;
  lead?: string;
  draft: boolean;
  readMinutes: number;
  sortKey: number;
};

export type Post = PostMeta & { body: string };

function parseDate(value: unknown, field: string, file: string): Date {
  // YAML parses unquoted dates into Date objects; quoted ones stay strings.
  // A time is optional ("2026-10-12T21:00:00+05:30") and only orders same-day posts.
  const raw = String(value);
  const date = value instanceof Date ? value : new Date(raw.includes("T") ? raw : `${raw}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) throw new Error(`${file}: invalid "${field}" date (use YYYY-MM-DD)`);
  return date;
}

function toISODate(value: unknown, field: string, file: string): string {
  const raw = String(value);
  if (!(value instanceof Date) && /^\d{4}-\d{2}-\d{2}/.test(raw)) {
    parseDate(value, field, file);
    return raw.slice(0, 10);
  }
  return parseDate(value, field, file).toISOString().slice(0, 10);
}

function splitFrontmatter(source: string, fileName: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) throw new Error(`${fileName}: missing --- frontmatter --- block`);
  const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
  return { data, content: source.slice(match[0].length) };
}

function readPostFile(fileName: string): Post {
  const file = path.join(BLOG_DIR, fileName);
  const { data, content } = splitFrontmatter(fs.readFileSync(file, "utf8"), fileName);

  for (const field of ["title", "description", "date"]) {
    if (!data[field]) throw new Error(`${fileName}: missing required frontmatter field "${field}"`);
  }

  const slug = String(data.slug ?? fileName.replace(/\.mdx?$/, ""));
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`${fileName}: slug "${slug}" must be kebab-case`);

  const tags: string[] = Array.isArray(data.tags) ? data.tags.map(String) : [];

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: toISODate(data.date, "date", fileName),
    updated: data.updated ? toISODate(data.updated, "updated", fileName) : undefined,
    tags,
    category: String(data.category ?? tags[0] ?? "Notes"),
    lead: data.lead ? String(data.lead) : undefined,
    draft: data.draft === true,
    sortKey: parseDate(data.date, "date", fileName).getTime(),
    readMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    body: content,
  };
}

const showDrafts = process.env.NODE_ENV !== "production";

/** Post files: `.md`/`.mdx`, excluding `_`-prefixed references and the README. */
function listPostFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((name) => /\.mdx?$/.test(name) && !name.startsWith("_") && name !== "README.md");
}

export const getAllPosts = cache((): PostMeta[] => {
  const posts = listPostFiles()
    .map(readPostFile)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.sortKey - a.sortKey || a.title.localeCompare(b.title));

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) throw new Error(`Duplicate blog slug "${post.slug}"`);
    seen.add(post.slug);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return posts.map(({ body, ...meta }) => meta);
});

export const getPost = cache((slug: string): Post | undefined => {
  const post = listPostFiles().map(readPostFile).find((candidate) => candidate.slug === slug);
  return post && (showDrafts || !post.draft) ? post : undefined;
});

export function getAdjacentPosts(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function tagSlug(tag: string) {
  return tag.toLowerCase().replace(/\./g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getAllTags() {
  const counts = new Map<string, { tag: string; slug: string; count: number }>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag);
      const entry = counts.get(slug) ?? { tag, slug, count: 0 };
      entry.count += 1;
      counts.set(slug, entry);
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
