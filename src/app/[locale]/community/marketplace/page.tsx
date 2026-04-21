import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type MarketplaceItem = {
  title: string;
  category: string;
  description: string;
};

type MarketplaceMessages = {
  marketplace: {
    content: {
      items: MarketplaceItem[];
      sectionTitle: string;
      sectionDescription: string;
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "marketplace" });
  return createPageMetadata({
    locale,
    pathname: "/community/marketplace",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function MarketplacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as MarketplaceMessages;

  return <MarketplaceContent messages={messages} />;
}

function MarketplaceContent({ messages }: { messages: MarketplaceMessages }) {
  const t = useTranslations("marketplace");
  const content = messages.marketplace.content;

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  {item.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-fg-secondary">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">{content.sectionTitle}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              {content.sectionDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
