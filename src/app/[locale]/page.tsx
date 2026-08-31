import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { BentoFeatures } from "@/components/home/bento-features";
import { DeviceShowcase } from "@/components/home/device-showcase";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { RgbArtwork } from "@/components/shared/rgb-artwork";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { buildFaqJsonLd } from "@/lib/seo/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return createPageMetadata({
    locale,
    pathname: "",
    title: t("metadata.title"),
    description: t("metadata.description"),
    keywords: t.raw("metadata.keywords") as string[],
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as {
    faq?: { items?: Array<{ question: string; answer: string }> };
  };
  const faqItems = messages.faq?.items ?? [];

  return (
    <div className="relative">
      {faqItems.length > 0 ? <JsonLd data={buildFaqJsonLd(faqItems)} /> : null}
      {/* Full-page background image */}
      <div className="fixed inset-0 -z-10">
        <RgbArtwork variant="ambient" className="h-full w-full" />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-bg-base/80" />
        {/* RGB aurora overlay for brand feel */}
        <div className="absolute inset-0 rgb-aurora opacity-40" />
      </div>

      <HeroSection />
      <LogoCloud />
      <BentoFeatures />
      <DeviceShowcase />
      <FAQSection />
      <CTASection />
    </div>
  );
}
