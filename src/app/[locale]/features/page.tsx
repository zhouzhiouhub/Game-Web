import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

const featureDetails = [
  {
    key: "editor",
    href: "/features/editor",
    bullets: [
      "Visual timeline with layered effects and reusable presets",
      "Profile-based workflows for gaming, streaming and focus modes",
      "No-code editing path for non-technical users",
    ],
  },
  {
    key: "gameSync",
    href: "/features/game-sync",
    bullets: [
      "Reactive lighting tied to health, cooldowns and match states",
      "Low-latency triggers tuned for desktop immersion",
      "Profiles that can fall back safely when integrations fail",
    ],
  },
  {
    key: "cloudSync",
    href: "/features/cloud-sync",
    bullets: [
      "Sign in once and carry profiles across machines",
      "Restore setup states after OS reinstalls or hardware swaps",
      "Share curated presets with teams and communities",
    ],
  },
  {
    key: "plugin",
    href: "/docs/plugins",
    bullets: [
      "Extend device support without forking the main app",
      "Hook external triggers, APIs and automation workflows",
      "Publish community add-ons through a curated marketplace path",
    ],
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "featuresPage" });
  return createPageMetadata({
    locale,
    pathname: "/features",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FeaturesContent locale={locale} />;
}

function FeaturesContent({ locale }: { locale: string }) {
  const t = useTranslations("featuresPage");
  const bento = useTranslations("bento");
  const content =
    locale === "zh"
      ? {
          sectionLabel: "核心能力",
          cta: "查看详情",
          summaryTitle: "完整的产品能力叙事",
          summaryDescription:
            "功能页、详情页与下载、文档、社区入口已经形成闭环，能够同时承接品牌表达、能力说明与后续转化。",
          bullets: {
            editor: [
              "可视化时间轴与多层灯效组合",
              "围绕游戏、直播、专注等场景组织配置",
              "非技术用户也能完成无代码编辑",
            ],
            gameSync: [
              "围绕血量、冷却、胜负状态做实时联动",
              "面向桌面沉浸感优化低延迟触发反馈",
              "当联动失效时可安全回退到默认配置",
            ],
            cloudSync: [
              "登录后跨设备同步配置与场景",
              "系统重装或换机后快速恢复设置",
              "便于团队和社区共享预设",
            ],
            plugin: [
              "在不改动主应用的前提下扩展能力",
              "接入外部 API、自动化和事件源",
              "为社区插件与效果包提供发布入口",
            ],
          },
        }
      : {
          sectionLabel: "Core capability",
          cta: "Learn more",
          summaryTitle: "A complete product capability narrative",
          summaryDescription:
            "These sections already connect feature storytelling with docs, downloads, and community paths, so the site can explain value without turning into a dead-end brochure.",
          bullets: {
            editor: [
              "Visual timeline with layered effects and reusable presets",
              "Profile-based workflows for gaming, streaming and focus modes",
              "No-code editing path for non-technical users",
            ],
            gameSync: [
              "Reactive lighting tied to health, cooldowns and match states",
              "Low-latency triggers tuned for desktop immersion",
              "Profiles that can fall back safely when integrations fail",
            ],
            cloudSync: [
              "Sign in once and carry profiles across machines",
              "Restore setup states after OS reinstalls or hardware swaps",
              "Share curated presets with teams and communities",
            ],
            plugin: [
              "Extend device support without forking the main app",
              "Hook external triggers, APIs and automation workflows",
              "Publish community add-ons through a curated marketplace path",
            ],
          },
        };

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {featureDetails.map((feature) => (
              <article
                key={feature.key}
                className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  {content.sectionLabel}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  {bento(`features.${feature.key}.title`)}
                </h2>
                <p className="mt-3 text-fg-secondary">
                  {bento(`features.${feature.key}.description`)}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
                  {content.bullets[feature.key].map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Link
                  href={feature.href}
                  className="mt-8 inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:border-white/20 hover:text-fg-primary"
                >
                  {content.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">{content.summaryTitle}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              {content.summaryDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
