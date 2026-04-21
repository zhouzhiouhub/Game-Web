import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import devices from "@/data/devices.json";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
      <section className="pb-32">
        <div className="content-shell">
          <div className="flex flex-wrap gap-3">
            {content.brandHighlights.map((brand) => (
              <Badge key={brand} size="md" variant="outline">
                {brand}
              </Badge>
            ))}
          </div>

          <div className="mt-10 grid gap-8">
            {Object.entries(grouped).map(([type, entries]) => (
              <Card key={type} as="section" variant="surface" padding="lg">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{type}</h2>
                  <Badge variant="subtle" className="normal-case tracking-normal">
                    {entries.length} {content.showcased}
                  </Badge>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {entries.map((device) => (
                    <Card key={device.name} as="article" variant="surface" padding="sm">
                      <p className="font-medium">{device.name}</p>
                      <p className="mt-1 text-sm text-fg-muted">{device.brand}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-10" variant="surface" padding="lg">
            <h2 className="text-2xl font-semibold">{content.supportTitle}</h2>
            <p className="mt-4 max-w-2xl text-fg-secondary">
              {content.supportDescription}
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
