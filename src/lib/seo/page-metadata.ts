import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";

type Locale = (typeof routing.locales)[number];

type PageMetadataInput = {
  locale: string;
  pathname: string;
  title: string;
  description: string;
  keywords?: string | string[];
  absoluteTitle?: boolean;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
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

export function getOpenGraphLocale(locale: string): string {
  return locale === "zh" ? "zh_CN" : "en_US";
}

export function createPageMetadata({
  locale,
  pathname,
  title,
  description,
  keywords,
  absoluteTitle,
  noIndex,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  ogImage,
  openGraph,
}: PageMetadataInput): Metadata {
  const canonical = buildAbsolutePageUrl(locale, pathname);
  const languages = Object.fromEntries(
    routing.locales.map((entryLocale) => [entryLocale, buildAbsolutePageUrl(entryLocale, pathname)]),
  ) as Record<Locale, string>;
  const alternateLocale = routing.locales
    .filter((entryLocale) => entryLocale !== locale)
    .map((entryLocale) => getOpenGraphLocale(entryLocale));

  const resolvedOgImage = ogImage
    ? {
        url: buildAbsoluteAssetUrl(ogImage.pathname),
        alt: ogImage.alt,
        width: ogImage.width ?? 1200,
        height: ogImage.height ?? 630,
      }
    : undefined;
  const openGraphImages = openGraph?.images ?? (resolvedOgImage ? [resolvedOgImage] : undefined);
  const twitterImages = Array.isArray(openGraphImages)
    ? openGraphImages.map((image) =>
        typeof image === "string" || image instanceof URL ? image : image.url,
      )
    : openGraphImages;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(authors ? { authors: authors.map((name) => ({ name })) } : {}),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": buildAbsolutePageUrl(routing.defaultLocale, pathname),
      },
    },
    openGraph: {
      type,
      siteName: siteConfig.name,
      url: canonical,
      locale: getOpenGraphLocale(locale),
      alternateLocale,
      title,
      description,
      ...openGraph,
      ...(openGraphImages ? { images: openGraphImages } : {}),
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(twitterImages ? { images: twitterImages } : {}),
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}
