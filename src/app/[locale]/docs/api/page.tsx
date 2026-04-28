import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type DocsApiMessages = {
  docs: {
    sections: {
      apiReference: {
        content: {
          primaryTitle: string;
          primaryDescription: string;
          secondaryTitle: string;
          secondaryDescription: string;
        };
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
    pathname: "/docs/api",
    title: t("sections.apiReference.title"),
    description: t("sections.apiReference.description"),
  });
}

export default async function ApiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as DocsApiMessages;

  return <ApiContent messages={messages} />;
}

function ApiContent({ messages }: { messages: DocsApiMessages }) {
  const t = useTranslations("docs");
  const content = messages.docs.sections.apiReference.content;

  return (
    <>
      <PageHeader
        title={t("sections.apiReference.title")}
        description={t("sections.apiReference.description")}
      />
      <PageContentCard>
        <div className="grid gap-4 lg:grid-cols-2">
          <section className={insetPanelClass}>
            <h2 className="text-2xl font-semibold">{content.primaryTitle}</h2>
            <p className="mt-4 text-fg-secondary">{content.primaryDescription}</p>
          </section>
          <section className={insetPanelClass}>
            <h2 className="text-2xl font-semibold">{content.secondaryTitle}</h2>
            <p className="mt-4 text-fg-secondary">{content.secondaryDescription}</p>
          </section>
        </div>
      </PageContentCard>
    </>
  );
}
