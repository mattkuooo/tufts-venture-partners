import type { MetadataRoute } from "next";
import { navLinks, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    lastModified: new Date(),
    priority: href === "/" ? 1 : 0.8,
  }));
}
