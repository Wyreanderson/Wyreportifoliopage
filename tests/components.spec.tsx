import { renderToStaticMarkup } from "react-dom/server";
import { test, expect } from "@playwright/test";
import { ExternalLink } from "../src/components/external-link";
import { ProjectCard } from "../src/components/project-card";
import { site } from "../src/config/site";
import type { Project } from "../src/content/projects";

test("external link configuration and safe rendering", () => {
  expect(site.githubUrl).toBeNull();
  expect(site.contactEmail).toBeNull();
  const disabled = renderToStaticMarkup(
    <ExternalLink href={null}>GitHub</ExternalLink>,
  );
  expect(disabled).toContain('aria-disabled="true"');
  expect(disabled).not.toContain("href=");
  const configured = renderToStaticMarkup(
    <ExternalLink href="https://example.org/">
      Verified external link
    </ExternalLink>,
  );
  expect(configured).toContain('href="https://example.org/"');
  expect(configured).toContain('rel="noopener noreferrer"');
  expect(
    renderToStaticMarkup(
      <ExternalLink href="javascript:alert(1)">Unsafe</ExternalLink>,
    ),
  ).not.toContain("href=");
});

test("real card escapes content and omits absent or unsafe links", () => {
  // Test fixture only: never included in src/content/projects.ts or the website.
  const project: Project = {
    id: "fixture",
    slug: "fixture",
    title: "<script>unsafe</script>",
    shortDescription: "Test fixture only",
    tags: ["TypeScript"],
    categories: ["open-source"],
    status: "published",
    featured: true,
    repoUrl: "https://example.org/",
    demoUrl: "javascript:alert(1)",
  };
  const card = renderToStaticMarkup(<ProjectCard project={project} />);
  expect(card).toContain("&lt;script&gt;");
  expect(card).not.toContain("<script>");
  expect(card).toContain("Repository");
  expect(card).not.toContain("Live demo");
  expect(card).not.toContain("Download");
});
