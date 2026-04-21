import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
  return <CommunityContent locale={locale} />;
}

function CommunityContent({ locale }: { locale: string }) {
  const t = useTranslations("community");
  const messages = useMessages() as CommunityPageContent;
  const content = messages.community.content;

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {content.channels.map((channel) =>
              channel.external ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </a>
              ) : (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </Link>
              )
            )}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.hubTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-fg-muted">
                {content.hubBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{content.noteTitle}</h2>
              <p className="mt-4 text-sm leading-6 text-fg-muted">
                {content.noteDescription}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
