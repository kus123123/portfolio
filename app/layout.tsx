import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kushagra Rohatgi | Senior Backend Developer",
    template: "%s | Kushagra Rohatgi",
  },
  description:
    "Senior Backend Developer portfolio featuring scalable Node.js platforms, AI-driven workflows, REST and real-time APIs, cloud automation, and data-intensive systems.",
  keywords: [
    "Kushagra Rohatgi",
    "Senior Backend Developer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Express",
    "AWS Cognito",
    "Azure",
    "RAG",
    "OpenAI",
  ],
  authors: [{ name: "Kushagra Rohatgi" }],
  openGraph: {
    title: "Kushagra Rohatgi | Senior Backend Developer",
    description:
      "Backend engineer building scalable APIs, AI workflows, platform services, and cloud automation systems.",
    url: siteUrl,
    siteName: "Kushagra Rohatgi Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Rohatgi | Senior Backend Developer",
    description:
      "Backend engineer building scalable APIs, AI workflows, and data-intensive systems.",
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
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
