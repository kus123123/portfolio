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

- `app/page.tsx`: single-page portfolio UI
- `lib/portfolio-data.ts`: shared profile, experience, skills, and project data
- `app/api/profile/route.ts`: structured profile JSON
- `app/api/projects/route.ts`: project JSON feed
- `public/resume/kushagra-rohatgi-resume.pdf`: downloadable resume

## Notes

- On Vercel, canonical and sitemap URLs use the project's production domain automatically. After adding a custom domain, redeploy to refresh the statically generated URLs. Set `NEXT_PUBLIC_SITE_URL` to explicitly choose a different canonical URL.
- Add new project case studies by extending `lib/portfolio-data.ts`.

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
