import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import { robotsDisallowPaths } from "@/lib/seo/routes";

export const dynamic = "force-static";

const baseUrl = siteConfig.url.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.shouldIndexSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  const disallow = robotsDisallowPaths.flatMap((pathname) =>
    routing.locales.map((locale) => `/${locale}${pathname}`),
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
