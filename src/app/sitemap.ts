import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import { buildLocalizedPath } from "@/lib/seo/page-metadata";
import { getIndexableRoutes } from "@/lib/seo/routes";

export const dynamic = "force-static";

const baseUrl = siteConfig.url.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.shouldIndexSite) {
    return [];
  }

  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of getIndexableRoutes()) {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${baseUrl}${buildLocalizedPath(locale, route.pathname)}`,
      ]),
    );

    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}${buildLocalizedPath(locale, route.pathname)}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${baseUrl}${buildLocalizedPath(routing.defaultLocale, route.pathname)}`,
          },
        },
      });
    }
  }

  return entries;
}
