import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import { buildLocalizedPath } from "@/lib/seo/page-metadata";

const baseUrl = siteConfig.url.replace(/\/+$/, "");

const routes = [
  "",
  "/features",
  "/download",
  "/devices",
  "/docs",
  "/docs/getting-started",
  "/docs/api",
  "/docs/contributing",
  "/docs/plugins",
  "/community",
  "/contact",
  "/privacy",
  "/terms",
  "/license",
  "/features/editor",
  "/features/devices",
  "/features/game-sync",
  "/features/cloud-sync",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.shouldIndexSite) {
    return [];
  }

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}${buildLocalizedPath(locale, route)}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.5,
      });
    }
  }

  return entries;
}
