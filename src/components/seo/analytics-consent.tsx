"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { AnalyticsConfig } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ConsentState = "accepted" | "rejected" | "pending";

const analyticsConsentStorageKey = "site:analytics-consent";

function readStoredConsent(): ConsentState {
  if (typeof window === "undefined") {
    return "pending";
  }

  try {
    const value = window.localStorage.getItem(analyticsConsentStorageKey);

    return value === "accepted" || value === "rejected" ? value : "pending";
  } catch {
    return "pending";
  }
}

function persistConsent(nextState: Exclude<ConsentState, "pending">) {
  try {
    window.localStorage.setItem(analyticsConsentStorageKey, nextState);
  } catch {}
}

function AnalyticsScripts({ analyticsConfig }: { analyticsConfig: AnalyticsConfig }) {
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

export function AnalyticsConsent({ analyticsConfig }: { analyticsConfig: AnalyticsConfig }) {
  const t = useTranslations("cookieConsent");
  const [hydrated, setHydrated] = useState(false);
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    setConsent(readStoredConsent());
    setHydrated(true);
  }, []);

  function updateConsent(nextState: Exclude<ConsentState, "pending">) {
    persistConsent(nextState);
    setConsent(nextState);
  }

  if (!hydrated) {
    return null;
  }

  return (
    <>
      {consent === "pending" ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4">
          <div className="mx-auto max-w-5xl">
            <Card
              variant="elevated"
              className="pointer-events-auto border-white/10 bg-black/85 shadow-2xl backdrop-blur-xl"
            >
              <div
                aria-labelledby="cookie-consent-title"
                aria-describedby="cookie-consent-description"
                aria-live="polite"
                className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
              >
                <div className="max-w-3xl space-y-2">
                  <p id="cookie-consent-title" className="text-sm font-semibold uppercase tracking-[0.24em] text-rgb-b">
                    {t("title")}
                  </p>
                  <p id="cookie-consent-description" className="text-sm leading-7 text-fg-secondary sm:text-base">
                    {t("description")}
                  </p>
                  <Link
                    href="/privacy"
                    className="inline-flex text-sm font-medium text-fg-primary transition-colors hover:text-rgb-b"
                  >
                    {t("privacy")}
                  </Link>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button variant="secondary" size="sm" onClick={() => updateConsent("rejected")}>
                    {t("reject")}
                  </Button>
                  <Button size="sm" onClick={() => updateConsent("accepted")}>
                    {t("accept")}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : null}

      {consent === "accepted" ? <AnalyticsScripts analyticsConfig={analyticsConfig} /> : null}
    </>
  );
}