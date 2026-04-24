import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type DocsPluginsMessages = {
  docs: {
    sections: {
      pluginDev: {
        cards: string[];
      };
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });
  return createPageMetadata({
    locale,
    pathname: "/docs/plugins",
    title: t("sections.pluginDev.title"),
    description: t("sections.pluginDev.description"),
  });
}

export default async function PluginsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as DocsPluginsMessages;

  return <PluginsContent messages={messages} />;
}

function PluginsContent({ messages }: { messages: DocsPluginsMessages }) {
  const t = useTranslations("docs");
  const cards = messages.docs.sections.pluginDev.cards;

  return (
    <>
      <PageHeader
        title={t("sections.pluginDev.title")}
        description={t("sections.pluginDev.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
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
