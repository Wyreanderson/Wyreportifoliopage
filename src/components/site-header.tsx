"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { ExternalLink } from "./external-link";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <a className="brand" href="#about">
        wyreanderson.com
      </a>
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ×" : "Menu +"}
      </button>
      <nav
        id="navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {[
          ["Projects", "projects"],
          ["Open Source", "open-source"],
          ["Self-Hosted", "self-hosted"],
          ["About", "about"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <ExternalLink href={site.githubUrl}>
          GitHub <span aria-hidden="true">↗</span>
        </ExternalLink>
      </nav>
    </header>
  );
}
