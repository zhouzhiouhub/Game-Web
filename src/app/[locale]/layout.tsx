import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { loadMessages } from "@/i18n/load-messages";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import "@/styles/globals.css";

type LayoutMessages = {
  metadata: {
    title: string;
    description: string;
    titleTemplate?: string;
  };
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    ...defaultMetadata,
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

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="bg-bg-base text-fg-primary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
