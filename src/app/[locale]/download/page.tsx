import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";
import { Card, cardVariants } from "@/components/ui/card";
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
    ogImage: {
      pathname: "/og/download.png",
      alt: "Gaming RGB Software download page preview",
    },
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
  const releasesUrl = `${siteConfig.githubRepo}/releases/latest`;
  const platforms = [
    {
      label: t("windows"),
      href: releasesUrl,
      icon: Download,
      accent:
        "rgb-full text-white hover:opacity-90 border-transparent",
      note: content.platforms.windows,
    },
    {
      label: t("macos"),
      href: releasesUrl,
      icon: Apple,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: content.platforms.macos,
    },
    {
      label: t("linux"),
      href: releasesUrl,
      icon: Terminal,
      accent:
        "border-white/10 text-fg-secondary hover:text-fg-primary hover:border-white/20",
      note: content.platforms.linux,
    },
  ];

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="content-shell grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardVariants({ variant: "interactive", padding: "md" })} ${platform.accent}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <platform.icon className="h-5 w-5" />
                    <div>
                      <p className="text-base font-semibold">{platform.label}</p>
                      <p className="mt-1 text-sm opacity-80">{platform.note}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{content.latest}</span>
                </div>
              </a>
            ))}

            <Card variant="surface" padding="md">
              <h3 className="text-sm font-semibold text-fg-primary">{content.releaseTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-fg-muted">
                {content.releaseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>

          <Card variant="surface" padding="md">
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
          </Card>
        </div>
      </section>
    </>
  );
}
