function readOptionalEnvValue(value: string | undefined): string {
  return value?.trim() ?? "";
}

function normalizeUrlValue(value: string): string {
  return value.replace(/\/+$/, "");
}

function readConfiguredUrlEnvValue(value: string | undefined, placeholderValue: string): string {
  const normalizedValue = normalizeUrlValue(readOptionalEnvValue(value));
  const normalizedPlaceholderValue = normalizeUrlValue(placeholderValue);

  return normalizedValue && normalizedValue !== normalizedPlaceholderValue ? normalizedValue : "";
}

function isLocalUrl(url: string): boolean {
  return /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?(\/|$)/i.test(url);
}

function buildLatestReleaseUrl(repositoryUrl: string): string {
  const normalizedRepositoryUrl = repositoryUrl.replace(/\/+$/, "");

  return normalizedRepositoryUrl ? `${normalizedRepositoryUrl}/releases/latest` : "";
}

const defaultSiteUrl = "https://gaming-rgb-software.com";
const defaultGithubRepo = "https://github.com/gaming-rgb-software/app";
const defaultDiscordInvite = "https://discord.gg/gaming-rgb";
const configuredSiteUrl = readConfiguredUrlEnvValue(process.env.NEXT_PUBLIC_SITE_URL, defaultSiteUrl);
const configuredGithubRepo = readConfiguredUrlEnvValue(
  process.env.NEXT_PUBLIC_GITHUB_REPO,
  defaultGithubRepo,
);
const configuredDiscordInvite = readConfiguredUrlEnvValue(
  process.env.NEXT_PUBLIC_DISCORD_INVITE,
  defaultDiscordInvite,
);
const resolvedSiteUrl = configuredSiteUrl || "http://localhost:3000";
const defaultDownloadUrl =
  readOptionalEnvValue(process.env.NEXT_PUBLIC_DOWNLOAD_URL) ||
  buildLatestReleaseUrl(configuredGithubRepo);
const shouldIndexSite = Boolean(configuredSiteUrl) && !isLocalUrl(resolvedSiteUrl);

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Gaming RGB Software",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Gaming RGB",
  url: resolvedSiteUrl,
  brandCount: process.env.NEXT_PUBLIC_BRAND_COUNT ?? "50",
  deviceCount: process.env.NEXT_PUBLIC_DEVICE_COUNT ?? "500",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Cross-platform RGB lighting control software. One Software. Every Light.",
  githubRepo: configuredGithubRepo,
  discordInvite: configuredDiscordInvite,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL ?? "",
  legalLastUpdated: readOptionalEnvValue(process.env.NEXT_PUBLIC_LEGAL_LAST_UPDATED),
  hasConfiguredSiteUrl: Boolean(configuredSiteUrl),
  hasConfiguredGithubRepo: Boolean(configuredGithubRepo),
  hasConfiguredDiscordInvite: Boolean(configuredDiscordInvite),
  shouldIndexSite,
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
