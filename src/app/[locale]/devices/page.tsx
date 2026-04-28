import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import devices from "@/data/devices.json";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type DevicesPageMessages = {
  devicesPage: {
    content: {
      brandHighlights: string[];
      showcased: string;
      supportTitle: string;
      supportDescription: string;
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "devicesPage" });
  return createPageMetadata({
    locale,
    pathname: "/devices",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function DevicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as DevicesPageMessages;

  return <DevicesContent messages={messages} />;
}

function DevicesContent({ messages }: { messages: DevicesPageMessages }) {
  const t = useTranslations("devicesPage");
  const content = messages.devicesPage.content;
  const grouped = devices.reduce<Record<string, typeof devices>>((acc, device) => {
    if (!acc[device.type]) {
      acc[device.type] = [];
    }
    acc[device.type].push(device);
    return acc;
  }, {});
  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <PageContentCard className="content-limit-5xl">
          <div className="flex flex-wrap gap-3">
            {content.brandHighlights.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-fg-secondary"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {Object.entries(grouped).map(([type, entries]) => (
              <section key={type} className={insetPanelClass}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <h2 className="text-2xl font-semibold">{type}</h2>
                  <span className="text-sm text-fg-muted">{entries.length} {content.showcased}</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {entries.map((device) => (
                    <article key={device.name} className="rounded-lg border border-white/10 bg-bg-base/20 px-5 py-4">
                      <p className="font-medium">{device.name}</p>
                      <p className="mt-1 text-sm text-fg-muted">{device.brand}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className={`mt-4 ${insetPanelClass}`}>
            <h2 className="text-2xl font-semibold">{content.supportTitle}</h2>
            <p className="mt-4 content-limit-2xl text-fg-secondary">
              {content.supportDescription}
            </p>
          </div>
      </PageContentCard>
    </>
  );
}
