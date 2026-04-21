import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DownloadContent />;
}

function DownloadContent() {
  const t = useTranslations("download");
  const releasesUrl = `${siteConfig.githubRepo}/releases/latest`;
  const platforms = [
    {
      label: t("windows"),
      href: releasesUrl,
      icon: Download,
      accent:
        "rgb-full text-white hover:opacity-90 border-transparent",
      note: "v1.0.0 · Installer .exe · Recommended",
    },
    {
      label: t("macos"),
      href: releasesUrl,
      icon: Apple,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: "v1.0.0 · Apple Silicon + Intel preview",
    },
    {
      label: t("linux"),
      href: releasesUrl,
      icon: Terminal,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: "AppImage and .deb packages",
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
                  <span className="text-sm font-medium">Latest</span>
                </div>
              </a>
            ))}

            <div className="rounded-xl border border-white/5 bg-bg-surface p-6">
              <h3 className="text-sm font-semibold text-fg-primary">Release notes</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
                <li>Unified profiles for mixed-brand setups.</li>
                <li>Improved effect editor performance on large device groups.</li>
                <li>Safer migration guidance for existing vendor RGB services.</li>
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
              <li>Administrator rights may be required for certain USB controllers.</li>
            </ul>

            <div className="mt-6 border-t border-white/5 pt-6">
              <h3 className="text-sm font-semibold text-fg-primary">Deployment notes</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                This template points downloads to the latest GitHub release. Replace the
                release URL with your own package CDN or installer pipeline when you ship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
