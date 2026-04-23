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
    pathname: "/privacy",
    title: t("links.privacy"),
    description:
      locale === "zh"
        ? "说明站点如何收集、存储和使用用户数据。"
        : "How the site collects, stores, and uses visitor data.",
  });
}

export default async function PrivacyPage({
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
        title={locale === "zh" ? "隐私政策" : "Privacy Policy"}
        description={
          locale === "zh"
            ? "说明站点如何收集、存储和使用用户数据。"
            : "How the site collects, stores, and uses visitor data."
        }
      />
      <section className="pb-32">
        <div className="content-shell">
          <article className="max-w-3xl text-fg-secondary">
            <p className="leading-8">
              {locale === "zh"
                ? "我们可能收集联系信息、兼容性申请、支持消息和基础分析数据，用于提供服务、改进产品体验以及响应用户请求。"
                : "We may collect contact details, compatibility requests, support messages, and basic analytics data to operate the service, improve the product experience, and respond to user requests."}
            </p>
            <p className="mt-6 leading-8">
              {locale === "zh"
                ? "站点可使用托管、分析、邮件或支付等第三方服务。用户可以通过官方支持渠道请求访问、更正、删除或导出与其相关的数据。"
                : "The site may use third-party services for hosting, analytics, email delivery, or payments. Users can request access, correction, deletion, or export of relevant data through the official support channel."}
            </p>
            <p className="mt-6 leading-8">
              {locale === "zh"
                ? "当站点启用可选统计时，我们会先展示同意横幅，再在用户明确同意后加载非必要分析脚本。拒绝后不影响浏览核心内容。"
                : "When optional analytics is enabled, the site presents a consent banner and only loads non-essential measurement scripts after the visitor explicitly allows them. Declining consent does not block access to core site content."}
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