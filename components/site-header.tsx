"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/lib/portfolio-data";

export function SiteHeader() {
  const pathname = usePathname();
  const { navigation, person } = portfolioData;

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[#fbf8f3]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-2xl text-black">
            {person.name}
          </Link>
          <a
            href={person.resumeUrl}
            download
            className="inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,118,110,0.22)] transition hover:bg-teal-800"
          >
            Resume
          </a>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-black shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                    : "text-black/80 hover:bg-white/80 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
