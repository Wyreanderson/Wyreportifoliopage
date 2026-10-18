import Image from "next/image";
import type { Project } from "@/content/projects";
import { safeUrl } from "@/lib/projects";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.coverImage && (
        <Image
          className="project-art"
          src={project.coverImage}
          width={64}
          height={64}
          alt=""
          unoptimized
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <ul className="tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {(
          [
            ["Repository", project.repoUrl],
            ["Live demo", project.demoUrl],
            ["Documentation", project.docsUrl],
            ["Download", project.downloadUrl],
          ] as const
        ).map(([label, url]) =>
          safeUrl(url) ? (
            <a
              key={label}
              href={safeUrl(url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null,
        )}
      </div>
    </article>
  );
}
export function ComingSoonCard() {
  return (
    <article className="project-card placeholder">
      <Image src="/assets/icon-coming-soon.svg" width={58} height={58} alt="" />
      <h3>Coming soon</h3>
      <p>New projects will appear here.</p>
      <span className="placeholder-label">In the making</span>
    </article>
  );
}
