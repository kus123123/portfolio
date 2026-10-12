# Kushagra Rohatgi Portfolio

Senior-backend-focused portfolio built with Next.js App Router.

## Run locally

This machine did not have Node.js on the default `PATH`, so a local runtime was installed at:

```bash
$HOME/.local/node-v24.14.1-darwin-arm64/bin
```

Use it in the current shell before running the app:

```bash
export PATH="$HOME/.local/node-v24.14.1-darwin-arm64/bin:$PATH"
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

- `app/page.tsx`: portfolio home page
- `lib/portfolio-data.ts`: shared profile, experience, skills, and project data
- `lib/blog-data.ts`: published blog posts and article content
- `app/blog/`: blog index and article route
- `app/api/profile/route.ts`: structured profile JSON
- `app/api/projects/route.ts`: project JSON feed
- `public/resume/kushagra-rohatgi-resume.pdf`: downloadable resume

## Notes

- The Vercel production environment sets `NEXT_PUBLIC_SITE_URL` to `https://portfolio.kushagraportfolio.cloud`. Keep this value aligned with the public domain so canonical, Open Graph, robots, and sitemap URLs stay consistent. Without the override, the site uses Vercel's production domain automatically.
- Add new project case studies by extending `lib/portfolio-data.ts`.
- Add a post in `lib/blog-data.ts` with a unique slug, publication date, description, lead, and sections. The blog index, article route, metadata, and sitemap update from that entry when the next commit is deployed. Only add finished posts to this published list.

## Search indexing

After a production deployment, verify the custom domain in Google Search Console and submit `https://portfolio.kushagraportfolio.cloud/sitemap.xml`. Search Console verification and indexing are controlled by the domain owner; deploying the sitemap does not guarantee that Google will index every page.

## Safe Supabase auth test

Use the included harness for a single password-login check against a test account you control.
It is intentionally limited to one credential attempt and refuses obviously non-test email addresses.

```bash
export SUPABASE_URL="https://your-project.supabase.co"
export SUPABASE_TEST_EMAIL="qa@example.com"
export SUPABASE_TEST_PASSWORD="your-known-test-password"

# Optional when your project expects an apikey header.
export SUPABASE_ANON_KEY="your-anon-or-publishable-key"

npm run test:supabase-auth
```

The script exits with a non-zero status on auth failure and prints the Supabase response body for debugging.
