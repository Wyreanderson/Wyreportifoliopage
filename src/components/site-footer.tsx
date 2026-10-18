import Image from "next/image";
import { site } from "@/config/site";
import { ExternalLink } from "./external-link";
export function SiteFooter() {
  const email =
    site.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.contactEmail)
      ? site.contactEmail
      : null;
  return (
    <footer className="site-footer">
      <Image
        sizes="100vw"
        className="footer-art"
        src="/assets/footer-landscape.png"
        width={1440}
        height={124}
        alt=""
      />
      <nav aria-label="Footer navigation">
        <ExternalLink href={site.githubUrl}>GitHub</ExternalLink>
        <span aria-hidden="true">/</span>
        <a href="#projects">Projects</a>
        <span aria-hidden="true">/</span>
        {email ? (
          <a href={`mailto:${email}`}>Contact</a>
        ) : (
          <span
            role="link"
            aria-disabled="true"
            title="Contact not available yet"
          >
            Contact<span className="sr-only"> — not available yet</span>
          </span>
        )}
      </nav>
    </footer>
  );
}
