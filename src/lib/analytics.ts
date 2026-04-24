export type AnalyticsProvider = "ga4" | "plausible" | "umami";

export type AnalyticsConfig =
  | {
      provider: "ga4";
      measurementId: string;
    }
  | {
      provider: "plausible";
      domain: string;
      scriptUrl: string;
    }
  | {
      provider: "umami";
      websiteId: string;
      scriptUrl: string;
    };

const analyticsProviderAliases: Record<string, AnalyticsProvider> = {
  ga4: "ga4",
  google: "ga4",
  "google-analytics": "ga4",
  plausible: "plausible",
  umami: "umami",
};

function readNonEmptyEnv(value?: string) {
  const normalizedValue = value?.trim();
  return normalizedValue ? normalizedValue : null;
}

function resolveAnalyticsProvider(value?: string): AnalyticsProvider | null {
  const normalizedValue = readNonEmptyEnv(value)?.toLowerCase();

  if (!normalizedValue) {
    return null;
  }

  return analyticsProviderAliases[normalizedValue] ?? null;
}

export function getAnalyticsConfig(): AnalyticsConfig | null {
  const measurementId = readNonEmptyEnv(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  const provider = resolveAnalyticsProvider(process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER) ??
    (measurementId ? "ga4" : null);

  if (!provider) {
    return null;
  }

  switch (provider) {
    case "ga4": {
      return measurementId
        ? {
            provider,
            measurementId,
          }
        : null;
    }

    case "plausible": {
      const domain = readNonEmptyEnv(process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN);

      return domain
        ? {
            provider,
            domain,
            scriptUrl:
              readNonEmptyEnv(process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL) ??
              "https://plausible.io/js/script.js",
          }
        : null;
    }

    case "umami": {
      const websiteId = readNonEmptyEnv(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID);
      const scriptUrl = readNonEmptyEnv(process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL);

      return websiteId && scriptUrl
        ? {
            provider,
            websiteId,
            scriptUrl,
          }
        : null;
    }
  }
}