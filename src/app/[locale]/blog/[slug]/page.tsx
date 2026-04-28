import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { routing } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export const dynamicParams = false;

const placeholderSlug = "__placeholder__";

export function generateStaticParams() {
  if (blogPosts.length === 0) {
    return routing.locales.map((locale) => ({ locale, slug: placeholderSlug }));
  }

  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({
      locale,
      pathname: "/blog",
      title: locale === "zh" ? "博客" : "Blog",
      description:
        locale === "zh"
          ? "产品更新、教程和社区精选会发布在这里。"
          : "Product updates, tutorials, and community highlights will appear here.",
    });
  }

  return createPageMetadata({
    locale,
    pathname: `/blog/${slug}`,
    title: locale === "zh" ? post.title.zh : post.title.en,
    description: locale === "zh" ? post.excerpt.zh : post.excerpt.en,
    openGraph: {
      type: "article",
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent locale={locale} slug={slug} />;
}

function BlogPostContent({ locale, slug }: { locale: string; slug: string }) {
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const title = locale === "zh" ? post.title.zh : post.title.en;
  const excerpt = locale === "zh" ? post.excerpt.zh : post.excerpt.en;
  const sections = locale === "zh" ? post.sections.zh : post.sections.en;

  return (
    <>
      <PageHeader title={title} description={excerpt} />
      <PageContentCard>
            <p className="text-sm text-fg-muted">
              {post.category} · {post.publishedAt} · {post.readTime} · {post.author}
            </p>
            <div className="mt-8 grid gap-4">
              {sections.map((section) => (
                <section key={section.heading} className={insetPanelClass}>
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <div className="mt-4 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8 text-fg-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
      </PageContentCard>
    </>
  );
}
