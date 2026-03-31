import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

export function SiteFooter() {
  const { person } = portfolioData;

  return (
    <footer className="border-t border-black/8 bg-[#f4ede3]/85">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-black">{person.name}</p>
          <p className="mt-2 text-sm text-black/85">{person.role}</p>
          <p className="mt-1 text-sm text-black/75">{person.location}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-medium text-black/80">
          <a href={`mailto:${person.email}`} className="transition hover:text-black">
            Email
          </a>
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            LinkedIn
          </a>
          <Link href="/projects" className="transition hover:text-black">
            Projects
          </Link>
          <a href="/api/profile" className="transition hover:text-black">
            Profile JSON
          </a>
        </div>
      </div>
    </footer>
  );
}
