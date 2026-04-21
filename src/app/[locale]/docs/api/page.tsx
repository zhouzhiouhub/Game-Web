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
    pathname: "/docs/api",
    title: t("sections.apiReference.title"),
    description: t("sections.apiReference.description"),
  });
}

export default async function ApiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ApiContent locale={locale} />;
}

function ApiContent({ locale }: { locale: string }) {
  const t = useTranslations("docs");
  const content =
    locale === "zh"
      ? {
          primaryTitle: "核心对象",
          primaryDescription:
            "设备、分区、配置和触发器构成了最小 API 模型。把这些对象讲清楚，才能让生态能力真正可信。",
          secondaryTitle: "集成路径",
          secondaryDescription:
            "提供请求与事件示例后，外部工具才能围绕游戏状态、桌面自动化和预设切换进行联动。",
        }
      : {
          primaryTitle: "Core objects",
          primaryDescription:
            "Devices, zones, profiles and triggers form the minimum public API model. Exposing this clearly is what makes the ecosystem credible.",
          secondaryTitle: "Integration path",
          secondaryDescription:
            "Publish request and event examples so external tools can react to game states, desktop automations and setup presets.",
        };

  return (
    <>
      <PageHeader
        title={t("sections.apiReference.title")}
        description={t("sections.apiReference.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.primaryTitle}</h2>
              <p className="mt-4 text-fg-secondary">{content.primaryDescription}</p>
            </article>
            <article className="rounded-xl border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.secondaryTitle}</h2>
              <p className="mt-4 text-fg-secondary">{content.secondaryDescription}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
