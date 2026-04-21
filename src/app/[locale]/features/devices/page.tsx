import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "devices" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
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

  return (
    <>
      <PageHeader title={t("title")} description={t("subtitle")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">Cross-brand support strategy</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              The device support story should explain how keyboards, mice, motherboards, fans and
              light strips are normalized into one control surface. This turns compatibility from
              a vague promise into a product advantage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
