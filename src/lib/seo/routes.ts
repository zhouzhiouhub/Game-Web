import { blogPosts } from "@/data/blog-posts";

export type SitemapRoute = {
  pathname: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const indexableRoutes: SitemapRoute[] = [
  { pathname: "", changeFrequency: "weekly", priority: 1 },
  { pathname: "/features", changeFrequency: "monthly", priority: 0.9 },
  { pathname: "/features/editor", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/features/devices", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/features/game-sync", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/features/cloud-sync", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/download", changeFrequency: "weekly", priority: 0.9 },
  { pathname: "/devices", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/docs", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/docs/getting-started", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/docs/api", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/docs/plugins", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/docs/contributing", changeFrequency: "monthly", priority: 0.4 },
  { pathname: "/community", changeFrequency: "monthly", priority: 0.6 },
  { pathname: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { pathname: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { pathname: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { pathname: "/terms", changeFrequency: "monthly", priority: 0.3 },
  { pathname: "/license", changeFrequency: "monthly", priority: 0.3 },
];

export function getIndexableRoutes(): SitemapRoute[] {
  const postRoutes = blogPosts.map((post) => ({
    pathname: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...indexableRoutes, ...postRoutes];
}

export const robotsDisallowPaths = [
  "/pricing",
  "/community/marketplace",
  "/blog/__placeholder__",
];
