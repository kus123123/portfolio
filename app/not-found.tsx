import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <div>
        <PageIntro
          eyebrow="404 / Page not found"
          title="This page isn’t here."
          description="Check the address, or explore the projects and notes below."
        />
        <nav className="hero-actions" aria-label="Find another page">
          <Link href="/" className="button button-primary">Back to home<Arrow /></Link>
          <Link href="/projects" className="text-link">Explore projects<Arrow diagonal /></Link>
          <Link href="/blog" className="text-link">Read the blog<Arrow diagonal /></Link>
        </nav>
      </div>
    </PageShell>
  );
}
