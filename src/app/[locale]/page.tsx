import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { BentoFeatures } from "@/components/home/bento-features";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { heroImage } from "@/lib/hero-image";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { buildFaqJsonLd } from "@/lib/seo/structured-data";

const DeviceShowcase = dynamic(
  () => import("@/components/home/device-showcase").then((module) => module.DeviceShowcase),
  { ssr: true },
);

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
      <link
        rel="preload"
        as="image"
        href={heroImage.preloadSrc}
        imageSrcSet={heroImage.srcSet}
        imageSizes={heroImage.sizes}
        fetchPriority="high"
        type="image/webp"
      />
      {faqItems.length > 0 ? <JsonLd data={buildFaqJsonLd(faqItems)} /> : null}
      <HeroSection />
      <LogoCloud />
      <BentoFeatures />
      <DeviceShowcase />
      <FAQSection />
      <CTASection />
    </div>
  );
}
