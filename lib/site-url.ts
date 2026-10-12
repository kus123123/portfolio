const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  configuredUrl ||
  (vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000");
