import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://gaming-rgb-software.com";

const routes = [
  "",
  "/features",
  "/download",
  "/devices",
  "/docs",
  "/docs/getting-started",
  "/docs/api",
  "/docs/plugins",
  "/community",
  "/community/marketplace",
  "/blog",
  "/features/editor",
  "/features/devices",
  "/features/game-sync",
  "/features/cloud-sync",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.5,
      });
    }
  }

  return entries;
}
