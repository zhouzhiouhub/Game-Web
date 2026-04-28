import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
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
      <section className="pb-32">
        <div className="content-shell">
          <article className="content-limit-3xl">
            <p className="text-sm text-fg-muted">
              {post.category} · {post.publishedAt} · {post.readTime} · {post.author}
            </p>
            <div className="mt-10 grid gap-10">
              {sections.map((section) => (
                <section key={section.heading}>
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
          </article>
        </div>
      </section>
    </>
  );
}
