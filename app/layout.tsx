import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { socialImageAlt, socialImageUrl } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const title = "Kushagra Rohatgi | Senior Backend & Full-Stack Developer";
const description =
  "Kushagra Rohatgi is a senior backend and full-stack developer in Noida, India. Explore his APIs, Chrome extensions, AI workflows, and products.";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Kushagra Rohatgi",
  description,
  inLanguage: "en-IN",
  author: { "@id": `${siteUrl}/about#person` },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Kushagra Rohatgi",
  },
  description,
  authors: [{ name: "Kushagra Rohatgi" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kushagra Rohatgi Portfolio",
    locale: "en_IN",
    type: "website",
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImageUrl, alt: socialImageAlt }],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${display.variable} ${body.variable}`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
