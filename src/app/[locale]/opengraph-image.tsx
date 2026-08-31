import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { getBrandIconDataUri } from "@/lib/brand-icon";
import { siteConfig } from "@/lib/constants";

export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const alt = `${siteConfig.name} — Cross-platform RGB lighting control`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const badge = locale === "zh" ? "ZH" : "EN";
  const kicker = "CROSS-PLATFORM RGB CONTROL";
  const iconSrc = await getBrandIconDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(0,180,255,0.28), transparent 38%), radial-gradient(circle at 88% 82%, rgba(0,240,255,0.2), transparent 36%)",
          padding: "64px 72px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 28,
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            <img
              src={iconSrc}
              width={48}
              height={48}
              alt=""
              style={{ borderRadius: 12 }}
            />
            {siteConfig.shortName}
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 999,
              padding: "8px 16px",
              fontSize: 20,
              color: "#a1a1aa",
            }}
          >
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.28em",
              color: "#67e8f9",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: 920,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: "#d4d4d8",
              maxWidth: 880,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#a1a1aa", fontSize: 22 }}>
          <span>Windows · macOS · Linux</span>
          <span>Open source · MIT</span>
        </div>
      </div>
    ),
    size,
  );
}
