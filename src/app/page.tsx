import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { Features } from "@/components/features";
import { SiteFooter } from "@/components/site-footer";
export default function Home() {
  return (
    <div className="page-frame">
      <SiteHeader />
      <main id="main">
        <Hero />
        <FeaturedProjects />
        <Features />
      </main>
      <SiteFooter />
    </div>
  );
}
