import type { Metadata } from "next";
import "@fontsource/pixelify-sans/latin-700.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./globals.css";
import { site } from "@/config/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Wyre Anderson — Open-source & self-hosted projects",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wyre Anderson — Open-source & self-hosted projects",
    description: site.description,
    url: "/",
    type: "website",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/og-image.png"] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
