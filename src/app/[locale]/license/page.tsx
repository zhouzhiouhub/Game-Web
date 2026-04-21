import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";
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
        <article className="mx-auto max-w-3xl px-6 text-fg-secondary">
          <p className="leading-8">
            {locale === "zh"
              ? "仓库代码默认以 MIT 协议发布，第三方依赖遵循各自许可证；若站点包含品牌图形、截图或外部图片素材，应单独核对这些资产的再分发权限。"
              : "The repository source code is distributed under the MIT License, while third-party dependencies follow their own licenses. If the site includes branded graphics, screenshots, or external imagery, those assets should be reviewed separately for redistribution rights."}
          </p>
        </article>
      </section>
    </>
  );
}