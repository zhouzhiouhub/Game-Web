import { siteConfig } from "@/lib/constants";
import { buildAbsolutePageUrl } from "@/lib/seo/page-metadata";

export function getHtmlLang(locale: string): string {
  return locale === "zh" ? "zh-CN" : "en";
}

export function buildSiteJsonLd(locale: string): Record<string, unknown> {
  const pageUrl = buildAbsolutePageUrl(locale, "");
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${pageUrl}#website`;
  const softwareId = `${pageUrl}#software`;
  const sameAs = [siteConfig.githubRepo, siteConfig.discordInvite].filter(Boolean);
  const logoUrl = new URL("/logo.svg", siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        url: pageUrl,
        inLanguage: getHtmlLang(locale),
        publisher: { "@id": organizationId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: siteConfig.name,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows, macOS, Linux",
        description: siteConfig.description,
        url: pageUrl,
        inLanguage: getHtmlLang(locale),
        isAccessibleForFree: true,
        license: buildAbsolutePageUrl(locale, "/license"),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...(siteConfig.downloads.default
          ? { downloadUrl: siteConfig.downloads.default }
          : {}),
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  locale: string,
  items: Array<{ name: string; pathname: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsolutePageUrl(locale, item.pathname),
    })),
  };
}

export function buildBlogPostingJsonLd({
  locale,
  slug,
  title,
  description,
  author,
  publishedAt,
}: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: buildAbsolutePageUrl(locale, `/blog/${slug}`),
    inLanguage: getHtmlLang(locale),
  };
}
