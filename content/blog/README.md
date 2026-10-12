# Writing blog posts

Every `.mdx` file in this folder is a post. Commit a new file and the blog index, tag pages, RSS feed, sitemap, and social image update on the next deploy.

Files starting with `_` and this README are ignored.

## Frontmatter

```yaml
---
title: "Post title"                  # required
description: "One-sentence summary"  # required — used for SEO, cards, and RSS
date: "2026-10-12"                   # required — add a time ("2026-10-12T21:00:00+05:30") to order same-day posts
slug: "custom-url"                   # optional — defaults to the file name
updated: "2026-11-01"                # optional — shown as "Updated" and used for dateModified
category: "Backend notes"            # optional — defaults to the first tag
tags: ["Node.js", "PostgreSQL"]      # optional — each tag gets a page at /blog/tag/<tag>
lead: "Opening line under the title" # optional — defaults to description
draft: true                          # optional — visible in `npm run dev`, hidden in production
---
```

Don't add a `# Heading` at the top; the title comes from frontmatter. Use `##` for sections (they form the "On this page" list) and `###` below that.

## What you can put in a post

Put media for a post in `public/blog/<slug>/` and reference it as `/blog/<slug>/file.png`.

| Need | Write |
| --- | --- |
| Link | `[text](https://example.com)` — external links open in a new tab; `/projects` stays in-site |
| Code | Fenced block with a language: ` ```js ` — highlighted at build time, with a copy button. Add a title: ` ```js title="worker.mjs" `, highlight lines: ` ```js {3-5} ` |
| Inline code | `` `process.availableMemory()` `` |
| Screenshot | `![Alt text](/blog/my-post/shot.png "Optional caption")` |
| Optimised image | `<Figure src="/blog/my-post/shot.png" alt="..." width={1600} height={900} caption="..." />` |
| Flow diagram | A ` ```mermaid ` fenced block (flowchart, sequence, ER, state...) |
| Video file | `<Video src="/blog/my-post/demo.mp4" poster="/blog/my-post/poster.jpg" caption="..." />` |
| YouTube | `<YouTube id="VIDEO_ID" title="What the video is" />` |
| Any iframe | `<Embed src="https://codesandbox.io/embed/..." title="Live demo" aspect="4 / 3" />` |
| Callout | `<Callout type="note">...</Callout>` — types: `note`, `tip`, `warning` |
| Table | Standard GitHub-flavoured markdown table |

See `_reference.mdx` for a working example of every block. To preview it, copy it to a file without the leading underscore and run `npm run dev`; it is marked `draft: true`, so it never ships.
