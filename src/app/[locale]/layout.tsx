import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "@/styles/globals.css";

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
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return {
    metadataBase: new URL("https://gaming-rgb-software.com"),
    title: {
      default: messages.metadata.title,
      template: messages.metadata.titleTemplate,
    },
    description: messages.metadata.description,
    alternates: {
      canonical: `https://gaming-rgb-software.com/${locale}`,
      languages: {
        en: "https://gaming-rgb-software.com/en",
        zh: "https://gaming-rgb-software.com/zh",
      },
    },
    openGraph: {
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      siteName: "Gaming RGB Software",
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

  if (!routing.locales.includes(locale as any)) {
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
