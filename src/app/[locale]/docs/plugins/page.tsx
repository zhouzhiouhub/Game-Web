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
  const t = await getTranslations({ locale, namespace: "docs" });
  return {
    title: t("sections.pluginDev.title"),
    description: t("sections.pluginDev.description"),
  };
}

export default async function PluginsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PluginsContent />;
}

function PluginsContent() {
  const t = useTranslations("docs");

  return (
    <>
      <PageHeader
        title={t("sections.pluginDev.title")}
        description={t("sections.pluginDev.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Coming soon.</p>
        </div>
      </section>
    </>
  );
}
