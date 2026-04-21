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
    pathname: "/terms",
    title: t("links.terms"),
    description:
      locale === "zh"
        ? "说明服务范围、责任边界和订阅规则。"
        : "Defines service scope, acceptable use, and billing terms.",
  });
}

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
            ? "说明服务范围、责任边界和订阅规则。"
            : "Defines service scope, acceptable use, and billing terms."
        }
      />
      <section className="pb-32">
        <div className="content-shell">
          <article className="max-w-3xl text-fg-secondary">
            <p className="leading-8">
              {locale === "zh"
                ? "使用本网站或相关服务即表示用户同意遵守适用的使用规则，不得滥用下载资源、接口能力、账户系统或社区渠道。"
                : "By using the site or related services, users agree to follow the applicable usage rules and must not misuse download resources, API capabilities, account systems, or community channels."}
            </p>
            <p className="mt-6 leading-8">
              {locale === "zh"
                ? "若产品包含订阅、付费功能或商业授权，续费、退款、责任限制和终止条款应以实际订单、发票或商业协议中的说明为准。"
                : "If the product includes subscriptions, paid features, or commercial licensing, renewal, refund, liability, and termination terms are governed by the applicable order, invoice, or commercial agreement."}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}