import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });
  return createPageMetadata({
    locale,
    pathname: "/docs/getting-started",
    title: t("sections.gettingStarted.title"),
    description: t("sections.gettingStarted.description"),
  });
}

export default async function GettingStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GettingStartedContent locale={locale} />;
}

function GettingStartedContent({ locale }: { locale: string }) {
  const t = useTranslations("docs");
  const steps =
    locale === "zh"
      ? [
          "从最新发行包安装桌面应用。",
          "扫描已连接的 RGB 设备并确认当前控制器状态。",
          "创建第一个配置文件，并在多种设备类型上测试一个预设。",
        ]
      : [
          "Install the desktop app from the latest release package.",
          "Scan connected RGB devices and confirm active controllers.",
          "Create your first profile and test a preset across multiple device types.",
        ];

  return (
    <>
      <PageHeader
        title={t("sections.gettingStarted.title")}
        description={t("sections.gettingStarted.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/5 bg-bg-surface p-6 text-fg-secondary">
                <span className="mr-3 text-fg-primary">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
