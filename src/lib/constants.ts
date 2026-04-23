function readOptionalEnvValue(value: string | undefined): string {
  return value?.trim() ?? "";
}

function buildLatestReleaseUrl(repositoryUrl: string): string {
  const normalizedRepositoryUrl = repositoryUrl.replace(/\/+$/, "");

  return normalizedRepositoryUrl ? `${normalizedRepositoryUrl}/releases/latest` : "";
}

const githubRepo =
  readOptionalEnvValue(process.env.NEXT_PUBLIC_GITHUB_REPO) ||
  "https://github.com/gaming-rgb-software/app";
const defaultDownloadUrl =
  readOptionalEnvValue(process.env.NEXT_PUBLIC_DOWNLOAD_URL) || buildLatestReleaseUrl(githubRepo);

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Gaming RGB Software",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Gaming RGB",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gaming-rgb-software.com",
  brandCount: process.env.NEXT_PUBLIC_BRAND_COUNT ?? "50",
  deviceCount: process.env.NEXT_PUBLIC_DEVICE_COUNT ?? "500",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Cross-platform RGB lighting control software. One Software. Every Light.",
  githubRepo,
  discordInvite:
    process.env.NEXT_PUBLIC_DISCORD_INVITE ?? "https://discord.gg/gaming-rgb",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "",
  legalLastUpdated: readOptionalEnvValue(process.env.NEXT_PUBLIC_LEGAL_LAST_UPDATED),
  downloads: {
    default: defaultDownloadUrl,
    windows:
      readOptionalEnvValue(process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS) || defaultDownloadUrl,
    macos:
      readOptionalEnvValue(process.env.NEXT_PUBLIC_DOWNLOAD_URL_MACOS) || defaultDownloadUrl,
    linux:
      readOptionalEnvValue(process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX) || defaultDownloadUrl,
  },
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
