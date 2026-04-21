import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

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
  return createPageMetadata({
    locale,
    pathname: "/community/marketplace",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function MarketplacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MarketplaceContent locale={locale} />;
}

function MarketplaceContent({ locale }: { locale: string }) {
  const t = useTranslations("marketplace");
  const localizedItems =
    locale === "zh"
      ? [
          {
            title: "Reactive FPS Pack",
            category: "效果包",
            description: "围绕血量、受击和胜利状态设计的竞技类灯效组合。",
          },
          {
            title: "Streamer Starter Kit",
            category: "主题",
            description: "适合长时间直播的场景化桌面灯光与低干扰待机状态。",
          },
          {
            title: "Home Assistant Bridge",
            category: "插件",
            description: "让配置与房间模式、自动化和媒体事件联动。",
          },
          {
            title: "Ambient Work Mode",
            category: "预设",
            description: "更克制的渐变和按时间切换的工作模式配置。",
          },
        ]
      : marketplaceItems;
  const content =
    locale === "zh"
      ? {
          sectionTitle: "精选资源展示",
          sectionDescription:
            "这里适合展示效果包、模板、插件或其他可分发资源，帮助用户理解生态层的价值。",
        }
      : {
          sectionTitle: "Curated resource highlights",
          sectionDescription:
            "Use this area to showcase effects, presets, plugins, or other reusable assets so visitors understand the value of the ecosystem layer.",
        };

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {localizedItems.map((item) => (
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
            <h2 className="text-2xl font-semibold">{content.sectionTitle}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              {content.sectionDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
