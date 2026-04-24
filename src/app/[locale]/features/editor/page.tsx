import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type EditorMessages = {
  featurePages: {
    editor: {
      cards: string[];
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bento" });
  return createPageMetadata({
    locale,
    pathname: "/features/editor",
    title: t("features.editor.title"),
    description: t("features.editor.description"),
  });
}

export default async function EditorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as EditorMessages;

  return <EditorContent messages={messages} />;
}

function EditorContent({ messages }: { messages: EditorMessages }) {
  const t = useTranslations("bento");
  const cards = messages.featurePages.editor.cards;

  return (
    <>
      <PageHeader
        title={t("features.editor.title")}
        description={t("features.editor.description")}
      />
      <section className="pb-32">
        <div className="content-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {cards.map((item) => (
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
