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
  const t = await getTranslations({ locale, namespace: "bento" });
  return {
    title: t("features.cloudSync.title"),
    description: t("features.cloudSync.description"),
  };
}

export default async function CloudSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CloudSyncContent />;
}

function CloudSyncContent() {
  const t = useTranslations("bento");

  return (
    <>
      <PageHeader
        title={t("features.cloudSync.title")}
        description={t("features.cloudSync.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Profiles that travel with you</h2>
              <p className="mt-4 text-fg-secondary">
                Restore desk lighting, device groups and scenes when you switch machines,
                reinstall the OS or move between gaming and work environments.
              </p>
            </article>
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Shareable setups</h2>
              <p className="mt-4 text-fg-secondary">
                Use cloud sync as the bridge between solo setup management and community preset
                sharing, especially when your product has marketplace ambitions.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
