import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { pickClientMessages } from "@/i18n/client-messages";
import { routing } from "@/i18n/routing";
import { loadMessages } from "@/i18n/load-messages";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/seo/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { buildSiteJsonLd, getHtmlLang } from "@/lib/seo/structured-data";
import "@/styles/globals.css";

type LayoutMessages = {
  metadata: {
    title: string;
    description: string;
    titleTemplate?: string;
    keywords?: string[];
  };
  seo?: {
    skipToContent?: string;
  };
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await loadMessages(locale)) as LayoutMessages;
  const defaultMetadata = createPageMetadata({
    locale,
    pathname: "",
    title: String(messages.metadata.title),
    description: String(messages.metadata.description),
  });

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    keywords: messages.metadata.keywords,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    ...defaultMetadata,
    robots: {
      index: siteConfig.shouldIndexSite,
      follow: siteConfig.shouldIndexSite,
      googleBot: {
        index: siteConfig.shouldIndexSite,
        follow: siteConfig.shouldIndexSite,
      },
    },
    title: {
      default: String(messages.metadata.title),
      template: String(messages.metadata.titleTemplate ?? `%s | ${siteConfig.name}`),
    },
    description: String(messages.metadata.description),
    openGraph: {
      ...defaultMetadata.openGraph,
      title: String(messages.metadata.title),
      description: String(messages.metadata.description),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSupportedLocale = routing.locales.includes(locale as (typeof routing.locales)[number]);

  if (!isSupportedLocale) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const skipToContent =
    (messages as LayoutMessages).seo?.skipToContent ?? "Skip to main content";

  return (
    <html lang={getHtmlLang(locale)} className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-bg-base text-fg-primary font-sans antialiased">
        <JsonLd data={buildSiteJsonLd(locale)} />
        <NextIntlClientProvider messages={pickClientMessages(messages as Record<string, unknown>)}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-bg-surface focus:px-4 focus:py-2 focus:text-fg-primary"
          >
            {skipToContent}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
