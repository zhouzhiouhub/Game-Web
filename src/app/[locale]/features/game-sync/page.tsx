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
    title: t("features.gameSync.title"),
    description: t("features.gameSync.description"),
  };
}

export default async function GameSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GameSyncContent />;
}

function GameSyncContent() {
  const t = useTranslations("bento");

  return (
    <>
      <PageHeader
        title={t("features.gameSync.title")}
        description={t("features.gameSync.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Real-time reactive scenes</h2>
              <p className="mt-4 text-fg-secondary">
                Tie lighting states to in-game events like health thresholds, victory states,
                cooldowns and zone control without forcing users into complex automation flows.
              </p>
            </article>
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Safe fallbacks</h2>
              <p className="mt-4 text-fg-secondary">
                A good feature page should explain how profiles recover when integrations are
                unavailable, so users trust the software for daily use instead of demos only.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
