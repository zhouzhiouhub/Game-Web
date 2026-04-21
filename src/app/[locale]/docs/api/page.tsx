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
    title: t("sections.apiReference.title"),
    description: t("sections.apiReference.description"),
  };
}

export default async function ApiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ApiContent />;
}

function ApiContent() {
  const t = useTranslations("docs");

  return (
    <>
      <PageHeader
        title={t("sections.apiReference.title")}
        description={t("sections.apiReference.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Core objects</h2>
              <p className="mt-4 text-fg-secondary">
                Devices, zones, profiles and triggers form the minimum public API model. Exposing
                this clearly is what makes the ecosystem credible.
              </p>
            </article>
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Integration path</h2>
              <p className="mt-4 text-fg-secondary">
                Publish request and event examples so external tools can react to game states,
                desktop automations and setup presets.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
