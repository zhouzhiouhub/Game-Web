import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";

type Locale = (typeof routing.locales)[number];

type PageMetadataInput = {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  openGraph?: NonNullable<Metadata["openGraph"]>;
};

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash.slice(0, Math.max(withLeadingSlash.length - 1, 1))
    : withLeadingSlash;
}

export function buildLocalizedPath(locale: string, pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);

  return normalizedPathname ? `/${locale}${normalizedPathname}` : `/${locale}`;
}

export function buildAbsolutePageUrl(locale: string, pathname: string): string {
  return new URL(buildLocalizedPath(locale, pathname), siteConfig.url).toString();
}

function getOpenGraphLocale(locale: string): string {
  return locale === "zh" ? "zh_CN" : "en_US";
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  openGraph,
}: PageMetadataInput): Metadata {
  const canonical = buildAbsolutePageUrl(locale, pathname);
  const languages = Object.fromEntries(
    routing.locales.map((entryLocale) => [entryLocale, buildAbsolutePageUrl(entryLocale, pathname)]),
  ) as Record<Locale, string>;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": buildAbsolutePageUrl(routing.defaultLocale, pathname),
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: canonical,
      locale: getOpenGraphLocale(locale),
      title,
      description,
      ...openGraph,
    },
  };
}