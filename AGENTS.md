<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project Overview
- Next.js 16 App Router portfolio for Kushagra Rohatgi.
- Tailwind CSS v4 is used through `app/globals.css`; the UI is a single-page experience with supporting route handlers.
- Portfolio content is sourced from `lib/portfolio-data.ts` so future content updates stay data-first instead of page-first.

## Architecture
- The site uses multiple App Router pages (`/`, `/about`, `/projects`, `/experience`, `/contact`) with shared layout components.
- Route handlers under `app/api/` expose profile and project data as static JSON for reuse or integration.
- Metadata, robots, and sitemap files are handled with App Router file conventions.

## Conventions
- Keep styling local to `app/globals.css` plus Tailwind utility classes in reusable components.
- Prefer extending `lib/portfolio-data.ts` for content updates instead of hardcoding strings across page files.
- Use only verified external links; omit uncertain profile URLs rather than shipping placeholders.

## Known Gotchas
- This environment needs `export PATH="$HOME/.local/node-v24.14.1-darwin-arm64/bin:$PATH"` before running `npm` commands.
- Do not place `route.ts` files at the same segment level as a `page.tsx`.

## Session Log
- 2026-03-31: Replaced the default Next.js starter with a senior-backend-focused portfolio, added static JSON route handlers, metadata files, and a downloadable resume asset.
- 2026-03-31: Refactored the original one-page layout into a lighter multi-page portfolio with shared header/footer components and route-based navigation.
