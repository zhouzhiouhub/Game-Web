import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHeader
        title={locale === "zh" ? "隐私政策" : "Privacy Policy"}
        description={
          locale === "zh"
            ? "这是主题官网模板使用的示例隐私政策结构。"
            : "A sample privacy policy structure for this website template."
        }
      />
      <section className="pb-32">
        <article className="mx-auto max-w-3xl px-6 text-fg-secondary">
          <p className="leading-8">
            {locale === "zh"
              ? "本模板页用于承接隐私政策链接，正式上线时请替换为真实的数据收集、存储和第三方服务说明。"
              : "This template page exists to terminate privacy links with a real destination. Replace it with your actual data collection, storage and third-party service policy before launch."}
          </p>
        </article>
      </section>
    </>
  );
}