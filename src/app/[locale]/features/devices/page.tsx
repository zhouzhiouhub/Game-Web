import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useMessages, useTranslations } from "next-intl";
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
  return <DeviceSupportContent />;
}

function DeviceSupportContent() {
  const t = useTranslations("devices");
  const messages = useMessages() as FeatureDevicesMessages;
  const content = messages.featurePages.devices;

  return (
    <>
      <PageHeader title={t("title")} description={t("subtitle")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">{content.title}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">{content.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
