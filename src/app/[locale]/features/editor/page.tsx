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
  const t = await getTranslations({ locale, namespace: "bento" });
  return {
    title: t("features.editor.title"),
    description: t("features.editor.description"),
  };
}

export default async function EditorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EditorContent />;
}

function EditorContent() {
  const t = useTranslations("bento");

  return (
    <>
      <PageHeader
        title={t("features.editor.title")}
        description={t("features.editor.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Layer-based visual editor for wave, ripple and gradient effects.",
              "Reusable preset system for setups, scenes and event-driven profiles.",
              "Timeline controls that help users design without code.",
            ].map((item) => (
              <article key={item} className="rounded-xl border border-white/5 bg-bg-surface p-6 text-fg-secondary">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
