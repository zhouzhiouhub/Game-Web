import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";

const marketplaceItems = [
  {
    title: "Reactive FPS Pack",
    category: "Effect pack",
    description: "Health, damage and victory-state reactions tuned for competitive shooters.",
  },
  {
    title: "Streamer Starter Kit",
    category: "Theme",
    description: "Scene-aware desk lighting with low-distraction idle states for long broadcasts.",
  },
  {
    title: "Home Assistant Bridge",
    category: "Plugin",
    description: "Sync profiles with room modes, automations and media playback events.",
  },
  {
    title: "Ambient Work Mode",
    category: "Preset",
    description: "Muted gradients and schedule-based transitions for daily productivity setups.",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "marketplace" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function MarketplacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MarketplaceContent />;
}

function MarketplaceContent() {
  const t = useTranslations("marketplace");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {marketplaceItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  {item.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-fg-secondary">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">How to use this template section</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              Replace these curated cards with your real effects, templates, plugins or theme
              inventory. The layout already supports a marketplace narrative without requiring
              backend integration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
