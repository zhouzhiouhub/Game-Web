import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type FeaturePageCard = {
  title: string;
  description: string;
};

type FeaturePagesMessages = {
  featurePages: {
    cloudSync: {
      cards: FeaturePageCard[];
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
    pathname: "/features/cloud-sync",
    title: t("features.cloudSync.title"),
    description: t("features.cloudSync.description"),
  });
}

export default async function CloudSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as FeaturePagesMessages;

  return <CloudSyncContent messages={messages} />;
}

function CloudSyncContent({ messages }: { messages: FeaturePagesMessages }) {
  const t = useTranslations("bento");
  const cards = messages.featurePages.cloudSync.cards;

  return (
    <>
      <PageHeader
        title={t("features.cloudSync.title")}
        description={t("features.cloudSync.description")}
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="rounded-xl border border-white/5 bg-bg-surface p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="mt-4 text-fg-secondary">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
