import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
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
      <PageContentCard className={blogPosts.length > 0 ? "content-limit-5xl" : undefined}>
          {blogPosts.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`${insetPanelClass} transition-colors hover:border-white/20`}
                >
                  <Badge className="w-fit" variant="subtle">
                    {post.category}
                  </Badge>
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
          ) : (
            <div className="text-center">
              <Badge className="mx-auto w-fit" variant="subtle">
                Blog
              </Badge>
              <h2 className="mt-4 text-2xl font-semibold text-fg-primary">
                {t("comingSoon")}
              </h2>
              <p className="mt-3 text-fg-secondary">
                {locale === "zh"
                  ? "当前还没有公开文章，后续会在这里发布产品更新、教程和社区精选。"
                  : "There are no published posts yet. Product updates, tutorials, and community highlights will appear here."}
              </p>
            </div>
          )}
      </PageContentCard>
    </>
  );
}
