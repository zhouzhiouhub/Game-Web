import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type FeatureDevicesMessages = {
  featurePages: {
    devices: {
      title: string;
      description: string;
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "devices" });
  return createPageMetadata({
    locale,
    pathname: "/features/devices",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function DeviceSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as FeatureDevicesMessages;

  return <DeviceSupportContent messages={messages} />;
}

function DeviceSupportContent({ messages }: { messages: FeatureDevicesMessages }) {
  const t = useTranslations("devices");
  const content = messages.featurePages.devices;

  return (
    <>
      <PageHeader title={t("title")} description={t("subtitle")} />
      <PageContentCard>
        <h2 className="text-2xl font-semibold">{content.title}</h2>
        <p className="mt-4 content-limit-3xl text-fg-secondary">{content.description}</p>
      </PageContentCard>
    </>
  );
}
