import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "community" });
  return createPageMetadata({
    locale,
    pathname: "/community",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CommunityContent locale={locale} />;
}

function CommunityContent({ locale }: { locale: string }) {
  const t = useTranslations("community");
  const channels = [
    {
      title: "Discord",
      description:
        locale === "zh"
          ? "用于实时答疑、版本反馈和用户效果分享。"
          : "Real-time setup help, release feedback and effect sharing.",
      href: siteConfig.discordInvite,
      external: true,
    },
    {
      title: "Marketplace",
      description:
        locale === "zh"
          ? "集中展示社区沉淀的效果、主题和插件资源。"
          : "Curated effects, themes and plugins from the community.",
      href: "/community/marketplace",
      external: false,
    },
    {
      title: "GitHub",
      description:
        locale === "zh"
          ? "追踪问题、提交修复并公开查看项目路线。"
          : "Track issues, submit fixes and review the public roadmap.",
      href: siteConfig.githubRepo,
      external: true,
    },
  ];
  const content =
    locale === "zh"
      ? {
          hubTitle: "社区中心需要承接什么",
          hubBullets: [
            "清晰连接实时讨论、问题反馈与贡献文档。",
            "展示精选案例、用户设备布置或效果作品。",
            "为可复用资源提供统一的市场或资源入口。",
          ],
          noteTitle: "社区页的作用",
          noteDescription:
            "这块内容应该承担信任建立和活跃度展示的职责，让用户既能看到资源沉淀，也能看到持续互动与贡献路径。",
        }
      : {
          hubTitle: "What a community hub should include",
          hubBullets: [
            "Clear path to live chat, issue tracking and contribution docs.",
            "Highlighted setup galleries or effect showcases.",
            "Marketplace or resource destination for reusable assets.",
          ],
          noteTitle: "Why this page matters",
          noteDescription:
            "A strong community page builds trust and activity visibility at the same time, showing both the resource layer and the path for ongoing contribution.",
        };

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {channels.map((channel) =>
              channel.external ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </a>
              ) : (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </Link>
              )
            )}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.hubTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-fg-muted">
                {content.hubBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.noteTitle}</h2>
              <p className="mt-4 text-sm leading-6 text-fg-muted">
                {content.noteDescription}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
