import { getAnalyticsConfig } from "@/lib/analytics";
import { AnalyticsConsent } from "@/components/seo/analytics-consent";

export function Analytics() {
  const analyticsConfig = getAnalyticsConfig();

  if (!analyticsConfig) {
    return null;
  }

  return <AnalyticsConsent analyticsConfig={analyticsConfig} />;
}