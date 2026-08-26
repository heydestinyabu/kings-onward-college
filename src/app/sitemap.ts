import type { MetadataRoute } from "next";
import { SITE_URL, pages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = Object.values(pages).map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency:
      page.path === "/" || page.path === "/admissions"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      page.path === "/"
        ? 1.0
        : page.path === "/admissions"
          ? 0.95
          : page.path === "/academics"
            ? 0.9
            : page.path === "/about"
              ? 0.85
              : 0.8,
  }));

  return staticPages;
}
