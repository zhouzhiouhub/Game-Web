import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { blogPosts } from "@/data/blog-posts";
import { cardVariants } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return createPageMetadata({
    locale,
    pathname: "/blog",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogContent locale={locale} />;
}

function BlogContent({ locale }: { locale: string }) {
  const t = useTranslations("blog");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="content-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={cardVariants({ variant: "interactive", padding: "lg" })}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  {post.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  {locale === "zh" ? post.title.zh : post.title.en}
                </h2>
                <p className="mt-3 text-fg-secondary">
                  {locale === "zh" ? post.excerpt.zh : post.excerpt.en}
                </p>
                <p className="mt-6 text-sm text-fg-muted">
                  {post.publishedAt} · {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
