import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kushagra Rohatgi | Full-Stack Developer",
    template: "%s | Kushagra Rohatgi",
  },
  description:
    "Full-stack developer with senior backend expertise. Explore thoughtful interfaces, reliable APIs, Chrome extensions, and AI workflows built by Kushagra Rohatgi.",
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
    title: "Kushagra Rohatgi | Full-Stack Developer",
    description:
      "Backend engineer building scalable APIs, AI workflows, platform services, and cloud automation systems.",
    url: siteUrl,
    siteName: "Kushagra Rohatgi Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra Rohatgi | Full-Stack Developer",
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
    <html lang="en" className={`h-full ${display.variable} ${body.variable}`}>
      <body className="min-h-full antialiased">
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
