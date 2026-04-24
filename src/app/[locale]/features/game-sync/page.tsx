import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type GameSyncCard = {
  title: string;
  description: string;
};

type GameSyncMessages = {
  featurePages: {
    gameSync: {
      cards: GameSyncCard[];
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
    pathname: "/features/game-sync",
    title: t("features.gameSync.title"),
    description: t("features.gameSync.description"),
  });
}

export default async function GameSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as GameSyncMessages;

  return <GameSyncContent messages={messages} />;
}

function GameSyncContent({ messages }: { messages: GameSyncMessages }) {
  const t = useTranslations("bento");
  const cards = messages.featurePages.gameSync.cards;

  return (
    <>
      <PageHeader
        title={t("features.gameSync.title")}
        description={t("features.gameSync.description")}
      />
      <section className="pb-32">
        <div className="content-shell">
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
