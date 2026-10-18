import Image from "next/image";
import { site } from "@/config/site";
import { ExternalLink } from "./external-link";
export function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <h1 id="hero-heading">
          Building open-source &amp;
          <br className="desktop-break" /> self-hosted projects
        </h1>
        <p>{site.description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects <span aria-hidden="true">→</span>
          </a>
          <ExternalLink className="button" href={site.githubUrl}>
            Visit GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
        {!site.githubUrl && (
          <small className="availability">GitHub link coming soon.</small>
        )}
      </div>
      <Image
        className="hero-art"
        src="/assets/hero-workspace.png"
        width={657}
        height={394}
        alt="Pixel art workspace with a person using a laptop, plants, books and a sleeping cat."
        sizes="(max-width: 560px) 100vw, 52vw"
        priority
      />
    </section>
  );
}
