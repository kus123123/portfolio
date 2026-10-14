import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";

export const socialImageUrl = `${siteUrl}/opengraph-image`;
export const socialImageAlt =
  "Kushagra Rohatgi, senior backend and full-stack developer";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | Kushagra Rohatgi`;

  return {
    title,
    description,
    alternates: { canonical: path, types: { "application/rss+xml": "/blog/rss.xml" } },
    openGraph: {
      title: socialTitle,
      description,
      url: new URL(path, siteUrl).toString(),
      siteName: "Kushagra Rohatgi Portfolio",
      locale: "en_IN",
      type: "website",
      images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: socialImageUrl, alt: socialImageAlt }],
    },
  };
}
