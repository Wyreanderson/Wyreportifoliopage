import Image from "next/image";
import { site } from "@/config/site";
import { ExternalLink } from "./external-link";
export function SiteFooter() {
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
        <ExternalLink href={site.instagramUrl}>
          Contact<span className="sr-only"> via Instagram @wyreanderson</span>
        </ExternalLink>
      </nav>
    </footer>
  );
}
