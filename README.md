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

- Set `NEXT_PUBLIC_SITE_URL` in production to generate correct canonical and sitemap URLs.
- Add new project case studies by extending `lib/portfolio-data.ts`.
