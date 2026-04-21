import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";

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
            ? "说明项目许可方式、第三方依赖和模板可复用边界。"
            : "Describe project licensing, third-party notices and template reuse boundaries."
        }
      />
      <section className="pb-32">
        <article className="mx-auto max-w-3xl px-6 text-fg-secondary">
          <p className="leading-8">
            {locale === "zh"
              ? "当前页用于承接页脚许可证入口。可在这里放置 MIT、商业许可或双许可说明。"
              : "This page terminates the footer license link and can host MIT, commercial or dual-license terms."}
          </p>
        </article>
      </section>
    </>
  );
}