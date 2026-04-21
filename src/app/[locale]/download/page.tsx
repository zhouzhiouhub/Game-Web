import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download" });
  return createPageMetadata({
    locale,
    pathname: "/download",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DownloadContent locale={locale} />;
}

function DownloadContent({ locale }: { locale: string }) {
  const t = useTranslations("download");
  const releasesUrl = `${siteConfig.githubRepo}/releases/latest`;
  const localizedNotes =
    locale === "zh"
      ? {
          windows: "v1.0.0 · 安装包 .exe · 推荐",
          macos: "v1.0.0 · Apple Silicon + Intel 预览版",
          linux: "AppImage 与 .deb 包",
          latest: "最新版",
          releaseTitle: "版本亮点",
          releaseItems: [
            "统一多品牌设备的配置管理。",
            "大规模设备组下的编辑器性能优化。",
            "更清晰的品牌软件迁移引导。",
          ],
          adminNote: "某些 USB 控制器可能需要管理员权限。",
          distributionTitle: "分发方式",
          distributionDescription:
            "当前下载按钮默认指向最新 GitHub Release。正式交付时可以替换为你自己的安装包 CDN、对象存储或发行平台。",
        }
      : {
          windows: "v1.0.0 · Installer .exe · Recommended",
          macos: "v1.0.0 · Apple Silicon + Intel preview",
          linux: "AppImage and .deb packages",
          latest: "Latest",
          releaseTitle: "Release highlights",
          releaseItems: [
            "Unified profiles for mixed-brand setups.",
            "Improved effect editor performance on large device groups.",
            "Clearer migration guidance for existing vendor RGB services.",
          ],
          adminNote: "Administrator rights may be required for certain USB controllers.",
          distributionTitle: "Distribution",
          distributionDescription:
            "Downloads are distributed through the latest verified release channel and can point to GitHub Releases, object storage, or an installer CDN depending on deployment.",
        };
  const platforms = [
    {
      label: t("windows"),
      href: releasesUrl,
      icon: Download,
      accent:
        "rgb-full text-white hover:opacity-90 border-transparent",
      note: localizedNotes.windows,
    },
    {
      label: t("macos"),
      href: releasesUrl,
      icon: Apple,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: localizedNotes.macos,
    },
    {
      label: t("linux"),
      href: releasesUrl,
      icon: Terminal,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: localizedNotes.linux,
    },
  ];

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-6 py-5 transition-colors ${platform.accent}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <platform.icon className="h-5 w-5" />
                    <div>
                      <p className="text-base font-semibold">{platform.label}</p>
                      <p className="mt-1 text-sm opacity-80">{platform.note}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{localizedNotes.latest}</span>
                </div>
              </a>
            ))}

            <div className="rounded-xl border border-white/5 bg-bg-surface p-6">
              <h3 className="text-sm font-semibold text-fg-primary">{localizedNotes.releaseTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
                {localizedNotes.releaseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-fg-primary">
              {t("systemRequirements")}
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-fg-muted">
              <li>{t("requirements.os")}</li>
              <li>{t("requirements.ram")}</li>
              <li>{t("requirements.disk")}</li>
              <li>{localizedNotes.adminNote}</li>
            </ul>

            <div className="mt-6 border-t border-white/5 pt-6">
              <h3 className="text-sm font-semibold text-fg-primary">{localizedNotes.distributionTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                {localizedNotes.distributionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
