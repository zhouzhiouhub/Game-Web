import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/page-metadata";

const steps = {
  en: [
    "Fork the repository and clone your working copy.",
    "Open an issue or discussion before large feature work.",
    "Submit PRs with screenshots, affected pages and rollout notes.",
  ],
  zh: [
    "Fork 仓库并克隆到本地工作目录。",
    "较大的功能改动请先发 issue 或 discussion 对齐。",
    "提交 PR 时附上截图、影响页面和上线说明。",
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return createPageMetadata({
    locale,
    pathname: "/docs/contributing",
    title: t("links.contributing"),
    description:
      locale === "zh"
        ? "说明外部贡献、问题反馈和协作提交流程。"
        : "How to contribute, report issues, and submit collaborative changes.",
  });
}

export default async function ContributingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = locale === "zh" ? steps.zh : steps.en;

  return (
    <>
      <PageHeader
        title={locale === "zh" ? "贡献指南" : "Contributing"}
        description={
          locale === "zh"
            ? "说明外部贡献、问题反馈和协作提交流程。"
            : "How to contribute, report issues, and submit collaborative changes."
        }
      />
      <section className="pb-32">
        <div className="content-shell">
          <ol className="grid max-w-3xl gap-4">
            {content.map((step, index) => (
              <Card key={step} as="li" variant="surface" padding="md" className="text-fg-secondary">
                <span className="mr-3 text-fg-primary">0{index + 1}</span>
                {step}
              </Card>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}