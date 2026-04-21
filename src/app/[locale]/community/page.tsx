import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { Card, cardVariants } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type CommunityChannel = {
  title: string;
  description: string;
  href: string;
  external: boolean;
};

type CommunityPageContent = {
  community: {
    content: {
      channels: CommunityChannel[];
      hubTitle: string;
      hubBullets: string[];
      noteTitle: string;
      noteDescription: string;
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "community" });
  return createPageMetadata({
    locale,
    pathname: "/community",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as CommunityPageContent;

  return <CommunityContent messages={messages} />;
}

function CommunityContent({ messages }: { messages: CommunityPageContent }) {
  const t = useTranslations("community");
  const content = messages.community.content;

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="content-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {content.channels.map((channel) =>
              channel.external ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardVariants({ variant: "interactive", padding: "lg" })}
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </a>
              ) : (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className={cardVariants({ variant: "interactive", padding: "lg" })}
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </Link>
              )
            )}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card as="article" variant="surface" padding="lg">
              <h2 className="text-2xl font-semibold">{content.hubTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-fg-muted">
                {content.hubBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Card>
            <Card as="article" variant="surface" padding="lg">
              <h2 className="text-2xl font-semibold">{content.noteTitle}</h2>
              <p className="mt-4 text-sm leading-6 text-fg-muted">
                {content.noteDescription}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
