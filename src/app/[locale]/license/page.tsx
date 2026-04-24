import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return createPageMetadata({
    locale,
    pathname: "/license",
    title: t("links.license"),
    description:
      locale === "zh"
        ? "说明项目许可方式以及第三方依赖与资产的适用边界。"
        : "Describes project licensing and the handling of third-party dependencies and assets.",
  });
}

export default async function LicensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lastUpdated = siteConfig.legalLastUpdated ? new Date(siteConfig.legalLastUpdated) : null;
  const formattedLastUpdated =
    lastUpdated && !Number.isNaN(lastUpdated.getTime())
      ? new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
          dateStyle: "long",
        }).format(lastUpdated)
      : null;

  return (
    <>
      <PageHeader
        title={locale === "zh" ? "许可证" : "License"}
        description={
          locale === "zh"
            ? "说明项目许可方式以及第三方依赖与资产的适用边界。"
            : "Describes project licensing and the handling of third-party dependencies and assets."
        }
      />
      <section className="pb-32">
        <div className="content-shell">
          <article className="content-limit-3xl text-fg-secondary">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/8 px-5 py-4 text-sm leading-6 text-amber-100">
              <p className="font-semibold">
                {locale === "zh" ? "模板法务文本提示" : "Template legal copy notice"}
              </p>
              <p className="mt-2">
                {locale === "zh"
                  ? "当前页面为模板示例文本，仅用于交付结构占位。正式上线前需由法务或合规负责人审核后替换。"
                  : "This page contains template legal copy for handoff purposes only. Replace it with counsel- or compliance-approved language before production launch."}
              </p>
            </div>
            <p className="mt-8 leading-8">
              {locale === "zh"
                ? "仓库代码默认以 MIT 协议发布，第三方依赖遵循各自许可证；若站点包含品牌图形、截图或外部图片素材，应单独核对这些资产的再分发权限。"
                : "The repository source code is distributed under the MIT License, while third-party dependencies follow their own licenses. If the site includes branded graphics, screenshots, or external imagery, those assets should be reviewed separately for redistribution rights."}
            </p>
            {formattedLastUpdated ? (
              <p className="mt-10 text-sm text-fg-muted">
                {locale === "zh"
                  ? `最后更新：${formattedLastUpdated}`
                  : `Last updated: ${formattedLastUpdated}`}
              </p>
            ) : null}
          </article>
        </div>
      </section>
    </>
  );
}