import Link from "next/link";
import { Arrow, Spark } from "@/components/icons";
import { portfolioData } from "@/lib/portfolio-data";

export function SiteFooter() {
  const { person } = portfolioData;
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-invitation"><p className="eyebrow">Have something in mind?</p><Link href="/contact">Let&apos;s build it.<Arrow diagonal /></Link></div>
        <div className="footer-bottom">
          <Link href="/" className="brand"><Spark className="brand-mark" /><span>{person.name}</span></Link>
          <span className="footer-location">Made with care. Based in {person.location}.</span>
          <div className="footer-links"><a href={`mailto:${person.email}`}>Email<Arrow diagonal /></a><a href={person.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn<Arrow diagonal /></a><a href={person.resumeUrl} download>Resume<Arrow diagonal /></a></div>
        </div>
      </div>
    </footer>
  );
}
