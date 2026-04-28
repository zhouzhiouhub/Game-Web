import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
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
  const channels = content.channels.filter((channel) => channel.href.trim().length > 0);

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <PageContentCard className="content-limit-5xl">
          {channels.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-3">
              {channels.map((channel) =>
                channel.external ? (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${insetPanelClass} transition-colors hover:border-white/20`}
                  >
                    <h2 className="text-2xl font-semibold">{channel.title}</h2>
                    <p className="mt-3 text-fg-secondary">{channel.description}</p>
                  </a>
                ) : (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    className={`${insetPanelClass} transition-colors hover:border-white/20`}
                  >
                    <h2 className="text-2xl font-semibold">{channel.title}</h2>
                    <p className="mt-3 text-fg-secondary">{channel.description}</p>
                  </Link>
                )
              )}
            </div>
          ) : null}

          <div className={`${channels.length > 0 ? "mt-4" : "mt-0"} grid gap-4 lg:grid-cols-2`}>
            <article className={insetPanelClass}>
              <h2 className="text-2xl font-semibold">{content.hubTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-fg-muted">
                {content.hubBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </article>
            <article className={insetPanelClass}>
              <h2 className="text-2xl font-semibold">{content.noteTitle}</h2>
              <p className="mt-4 text-sm leading-6 text-fg-muted">
                {content.noteDescription}
              </p>
            </article>
          </div>
      </PageContentCard>
    </>
  );
}
