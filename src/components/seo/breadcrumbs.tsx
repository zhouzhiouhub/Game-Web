"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { buildBreadcrumbJsonLd } from "@/lib/seo/structured-data";

const breadcrumbKeyBySegment: Record<string, string> = {
  features: "features",
  editor: "editor",
  "game-sync": "gameSync",
  "cloud-sync": "cloudSync",
  devices: "devices",
  download: "download",
  docs: "docs",
  "getting-started": "gettingStarted",
  api: "api",
  plugins: "plugins",
  contributing: "contributing",
  community: "community",
  blog: "blog",
  contact: "contact",
  privacy: "privacy",
  terms: "terms",
  license: "license",
};

function formatFallbackLabel(segment: string): string {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("seo.breadcrumbs");

  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const items = [
    { name: t("home"), pathname: "" },
    ...segments.map((segment, index) => {
      const key = breadcrumbKeyBySegment[segment];
      const crumbPath = `/${segments.slice(0, index + 1).join("/")}`;
      const isDevicesUnderFeatures = segment === "devices" && segments[0] === "features";

      return {
        name: key
          ? t(isDevicesUnderFeatures ? "featureDevices" : key)
          : formatFallbackLabel(segment),
        pathname: crumbPath,
      };
    }),
  ];

  return (
    <nav aria-label={t("label")} className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(locale, items)) }}
      />
      <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-fg-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.pathname}-${item.name}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="text-fg-secondary">{item.name}</span>
              ) : (
                <Link href={item.pathname || "/"} className="transition-colors hover:text-fg-primary">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
