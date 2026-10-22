export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  categories: ("open-source" | "self-hosted")[];
  status: "draft" | "published";
  featured: boolean;
  repoUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  downloadUrl?: string;
  coverImage?: string;
};

// Add verified, real projects here. Set status to published and featured to true
// to show a card on the homepage. Optional links must be absolute HTTPS URLs.
// Keep drafts private: this file is committed publicly, even when a card is hidden.
export const projects: Project[] = [
  {
    id: "wyrefi-cam",
    slug: "wyrefi-cam",
    title: "WyreFi Cam",
    shortDescription:
      "Use your iPhone as a Wi-Fi webcam for OBS, with Safari and WebRTC.",
    tags: ["WebRTC", "OBS", "TypeScript"],
    categories: ["open-source", "self-hosted"],
    status: "published",
    featured: true,
    repoUrl: "https://github.com/Wyreanderson/WyreFi-Cam",
    coverImage: "/assets/projects/wyrefi-cam-pixel.png",
  },
  {
    id: "btc-puzzle",
    slug: "btc-puzzle",
    title: "BTC Puzzle #71 Worker",
    shortDescription:
      "Self-hosted Python/CUDA worker for Bitcoin Puzzle #71, with checkpoints, recovery and a local dashboard. Experimental v0.1.0.",
    tags: ["Python", "CUDA", "Self-Hosted"],
    categories: ["open-source", "self-hosted"],
    status: "published",
    featured: true,
    repoUrl: "https://github.com/Wyreanderson/-projeto-BTC-Puzzle",
    docsUrl:
      "https://github.com/Wyreanderson/-projeto-BTC-Puzzle/blob/main/docs/QUICKSTART.md",
    coverImage: "/assets/projects/btc-puzzle-pixel.png",
  },
];
