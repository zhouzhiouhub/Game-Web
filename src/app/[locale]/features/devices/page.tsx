import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
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
      <section className="pb-32">
        <div className="content-shell">
          <Card variant="surface" padding="lg">
            <h2 className="text-2xl font-semibold">{content.title}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">{content.description}</p>
          </Card>
        </div>
      </section>
    </>
  );
}
