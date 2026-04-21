import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });
  return {
    title: t("sections.gettingStarted.title"),
    description: t("sections.gettingStarted.description"),
  };
}

export default async function GettingStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GettingStartedContent />;
}

function GettingStartedContent() {
  const t = useTranslations("docs");

  return (
    <>
      <PageHeader
        title={t("sections.gettingStarted.title")}
        description={t("sections.gettingStarted.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <ol className="grid gap-4">
            {[
              "Install the desktop app from the latest release package.",
              "Scan connected RGB devices and confirm active controllers.",
              "Create your first profile and test a preset across multiple device types.",
            ].map((step, index) => (
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
