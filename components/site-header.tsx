"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow, Spark } from "@/components/icons";
import { portfolioData } from "@/lib/portfolio-data";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Kushagra Rohatgi, home"><Spark className="brand-mark" /><span>{portfolioData.person.name}</span></Link>
        <nav aria-label="Main navigation">
          {[{ label: "Work", href: "/projects" }, { label: "About", href: "/about" }, { label: "Experience", href: "/experience" }, { label: "Blog", href: "/blog" }].map((item) => <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/")) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="header-contact text-link" aria-current={pathname === "/contact" ? "page" : undefined}>Let&apos;s talk<Arrow diagonal /></Link>
      </div>
    </header>
  );
}
