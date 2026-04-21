export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Gaming RGB Software",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Gaming RGB",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gaming-rgb-software.com",
  brandCount: process.env.NEXT_PUBLIC_BRAND_COUNT ?? "50",
  deviceCount: process.env.NEXT_PUBLIC_DEVICE_COUNT ?? "500",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Cross-platform RGB lighting control software. One Software. Every Light.",
  githubRepo:
    process.env.NEXT_PUBLIC_GITHUB_REPO ?? "https://github.com/gaming-rgb-software/app",
  discordInvite:
    process.env.NEXT_PUBLIC_DISCORD_INVITE ?? "https://discord.gg/gaming-rgb",
} as const;

export const brandNames = [
  "Razer",
  "Corsair",
  "Logitech",
  "NZXT",
  "Asus",
  "HyperX",
  "SteelSeries",
] as const;
