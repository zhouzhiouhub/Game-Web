import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";

type Locale = (typeof routing.locales)[number];

type PageMetadataInput = {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  ogImage?: {
    pathname: string;
    alt: string;
    width?: number;
    height?: number;
  };
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

function buildAbsoluteAssetUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}

function getOpenGraphLocale(locale: string): string {
  return locale === "zh" ? "zh_CN" : "en_US";
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  ogImage,
  openGraph,
}: PageMetadataInput): Metadata {
  const canonical = buildAbsolutePageUrl(locale, pathname);
  const resolvedOgImage = {
    pathname: ogImage?.pathname ?? "/og-image.svg",
    alt: ogImage?.alt ?? `${siteConfig.name} preview image`,
    width: ogImage?.width ?? 1200,
    height: ogImage?.height ?? 630,
  };
  const defaultOpenGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
    {
      url: buildAbsoluteAssetUrl(resolvedOgImage.pathname),
      alt: resolvedOgImage.alt,
      width: resolvedOgImage.width,
      height: resolvedOgImage.height,
    },
  ];
  const openGraphImages = openGraph?.images ?? defaultOpenGraphImages;
  const twitterImages = Array.isArray(openGraphImages)
    ? openGraphImages.map((image) =>
        typeof image === "string" || image instanceof URL ? image : image.url,
      )
    : openGraphImages;
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
      images: openGraphImages,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImages,
    },
  };
}
