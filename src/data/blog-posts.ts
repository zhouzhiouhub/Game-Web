export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPostEntry {
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  title: {
    en: string;
    zh: string;
  };
  excerpt: {
    en: string;
    zh: string;
  };
  sections: {
    en: BlogPostSection[];
    zh: BlogPostSection[];
  };
}

export const blogPosts: BlogPostEntry[] = [];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
