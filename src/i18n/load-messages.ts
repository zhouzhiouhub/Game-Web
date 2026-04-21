import { brandContent } from "@/data/brand-content";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";

type Locale = (typeof routing.locales)[number];
type MessageTree = Record<string, unknown>;

const contentTokens = {
  siteName: siteConfig.name,
  shortName: siteConfig.shortName,
  brandCount: siteConfig.brandCount,
  deviceCount: siteConfig.deviceCount,
  githubRepo: siteConfig.githubRepo,
  discordInvite: siteConfig.discordInvite,
} as const;

function isPlainObject(value: unknown): value is MessageTree {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function replaceTokens(value: string): string {
  return value.replace(
    /\{(siteName|shortName|brandCount|deviceCount|githubRepo|discordInvite)\}/g,
    (_, key) => {
    return contentTokens[key as keyof typeof contentTokens];
    },
  );
}

function resolveTokens<T>(value: T): T {
  if (typeof value === "string") {
    return replaceTokens(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveTokens(item)) as T;
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, resolveTokens(entry)]),
    ) as T;
  }

  return value;
}

function mergeMessages(base: MessageTree, override: MessageTree): MessageTree {
  const merged = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const current = merged[key];

    if (isPlainObject(current) && isPlainObject(value)) {
      merged[key] = mergeMessages(current, value);
      continue;
    }

    merged[key] = value;
  }

  return merged;
}

export async function loadMessages(locale: string): Promise<MessageTree> {
  const normalizedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;
  const baseMessages = (await import(`../../messages/${normalizedLocale}.json`)).default as MessageTree;
  const overrides = resolveTokens(brandContent[normalizedLocale]);

  return mergeMessages(baseMessages, overrides);
}