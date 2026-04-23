import Script from "next/script";
import { getAnalyticsConfig } from "@/lib/analytics";

export function Analytics() {
  const analyticsConfig = getAnalyticsConfig();

  if (!analyticsConfig) {
    return null;
  }

  switch (analyticsConfig.provider) {
    case "ga4":
      return (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analyticsConfig.measurementId}', { anonymize_ip: true });`}
          </Script>
        </>
      );

    case "plausible":
      return (
        <Script
          id="plausible-analytics"
          strategy="afterInteractive"
          data-domain={analyticsConfig.domain}
          src={analyticsConfig.scriptUrl}
        />
      );

    case "umami":
      return (
        <Script
          id="umami-analytics"
          strategy="afterInteractive"
          data-website-id={analyticsConfig.websiteId}
          src={analyticsConfig.scriptUrl}
        />
      );
  }
}