import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type DownloadContentMessages = {
  download: {
    content: {
      latest: string;
      platforms: {
        windows: string;
        macos: string;
        linux: string;
      };
      releaseTitle: string;
      releaseItems: string[];
      adminNote: string;
      distributionTitle: string;
      distributionDescription: string;
    };
  };
};

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
  const messages = (await getMessages()) as DownloadContentMessages;

  return <DownloadContent messages={messages} />;
}

function DownloadContent({ messages }: { messages: DownloadContentMessages }) {
  const t = useTranslations("download");
  const content = messages.download.content;
  const platforms = [
    {
      label: t("windows"),
      href: siteConfig.downloads.windows,
      icon: Download,
      accent:
        "rgb-full text-white hover:opacity-90 border-transparent",
      note: content.platforms.windows,
    },
    {
      label: t("macos"),
      href: siteConfig.downloads.macos,
      icon: Apple,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: content.platforms.macos,
    },
    {
      label: t("linux"),
      href: siteConfig.downloads.linux,
      icon: Terminal,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: content.platforms.linux,
    },
  ];
  const hasAnyDownload = platforms.some((platform) => Boolean(platform.href));

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-24 sm:pb-28 lg:pb-32">
        <div className="content-shell content-limit-5xl grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:grid-cols-[1.25fr_0.75fr] xl:gap-8">
          <div className="grid gap-4">
            {platforms.map((platform) => (
              platform.href ? (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl border px-5 py-5 transition-colors sm:px-6 ${platform.accent}`}
                >
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <platform.icon className="h-5 w-5" />
                      <div>
                        <p className="text-base font-semibold">{platform.label}</p>
                        <p className="mt-1 text-sm opacity-80">{platform.note}</p>
                      </div>
                    </div>
                    <span className="self-start text-sm font-medium sm:self-auto">{content.latest}</span>
                  </div>
                </a>
              ) : (
                <div
                  key={platform.label}
                  aria-disabled="true"
                  className="rounded-xl border border-white/10 px-5 py-5 text-fg-muted opacity-60 sm:px-6"
                >
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <platform.icon className="h-5 w-5" />
                      <div>
                        <p className="text-base font-semibold">{platform.label}</p>
                        <p className="mt-1 text-sm opacity-80">{platform.note}</p>
                      </div>
                    </div>
                    <span className="self-start text-sm font-medium sm:self-auto">{t("notAvailable")}</span>
                  </div>
                </div>
              )
            ))}

            {!hasAnyDownload ? (
              <div className="rounded-xl border border-amber-400/20 bg-amber-400/8 p-6 text-sm leading-6 text-amber-100">
                <p className="font-semibold">{t("linksPendingTitle")}</p>
                <p className="mt-2">{t("linksPendingDescription")}</p>
              </div>
            ) : null}

            <div className="rounded-xl border border-white/5 bg-bg-surface p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-fg-primary">{content.releaseTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
                {content.releaseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-bg-surface p-5 sm:p-6 md:self-start">
            <h3 className="text-sm font-semibold text-fg-primary">
              {t("systemRequirements")}
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-fg-muted">
              <li>{t("requirements.os")}</li>
              <li>{t("requirements.ram")}</li>
              <li>{t("requirements.disk")}</li>
              <li>{content.adminNote}</li>
            </ul>

            <div className="mt-6 border-t border-white/5 pt-6">
              <h3 className="text-sm font-semibold text-fg-primary">{content.distributionTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">
                {content.distributionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
