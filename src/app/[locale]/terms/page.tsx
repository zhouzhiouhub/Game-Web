import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHeader
        title={locale === "zh" ? "服务条款" : "Terms of Service"}
        description={
          locale === "zh"
            ? "这是主题官网模板使用的示例条款页。"
            : "A sample terms page for this website template."
        }
      />
      <section className="pb-32">
        <article className="mx-auto max-w-3xl px-6 text-fg-secondary">
          <p className="leading-8">
            {locale === "zh"
              ? "当前版本提供条款页落点，便于模板完整交付。正式项目请补充责任限制、订阅续费、退款与使用限制条款。"
              : "This page gives the template a real legal endpoint. Production use should add liability, billing, refund and acceptable use clauses."}
          </p>
        </article>
      </section>
    </>
  );
}