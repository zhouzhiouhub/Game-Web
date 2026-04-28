import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ 必须：开启静态导出

  basePath: "/Game-Web", // ✅ 必须：你的仓库名

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    unoptimized: true, // ✅ 必须：GitHub Pages 不支持优化
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default withNextIntl(nextConfig);
