import { projects } from "@/content/projects";
import { featuredProjects } from "@/lib/projects";
import { ComingSoonCard, ProjectCard } from "./project-card";
export function FeaturedProjects() {
  const published = featuredProjects(projects);
  return (
    <section
      className="projects section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <h2 id="projects-heading">Featured Projects</h2>
        <a href="#projects">
          View all projects <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="project-grid">
        {published.length
          ? published.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          : Array.from({ length: 4 }, (_, index) => (
              <ComingSoonCard key={index} />
            ))}
      </div>
    </section>
  );
}
