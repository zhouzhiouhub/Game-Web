import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";

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

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-lg px-6">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl rgb-full px-6 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Download className="h-5 w-5" />
              {t("windows")}
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
            >
              <Apple className="h-5 w-5" />
              {t("macos")}
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
            >
              <Terminal className="h-5 w-5" />
              {t("linux")}
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-white/5 bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-fg-primary">
              {t("systemRequirements")}
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-fg-muted">
              <li>{t("requirements.os")}</li>
              <li>{t("requirements.ram")}</li>
              <li>{t("requirements.disk")}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
