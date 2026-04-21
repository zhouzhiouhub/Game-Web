import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";

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
            ? "为模板补齐一个真实的贡献入口，而不是停留在页脚死链。"
            : "Provide a real contribution endpoint instead of leaving a dead footer link."
        }
      />
      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="grid gap-4">
            {content.map((step, index) => (
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