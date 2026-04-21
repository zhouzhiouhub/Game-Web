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
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Manifest-based plugin registration with clear capability scopes.",
              "Lifecycle hooks for install, update, event handling and cleanup.",
              "A publishing path that connects docs, GitHub and marketplace review.",
            ].map((item) => (
              <article key={item} className="rounded-xl border border-white/5 bg-bg-surface p-6 text-fg-secondary">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
