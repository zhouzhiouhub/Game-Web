import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import devices from "@/data/devices.json";

const brandHighlights = ["Corsair", "Razer", "Logitech", "NZXT", "Asus", "SteelSeries"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "devicesPage" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function DevicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DevicesContent />;
}

function DevicesContent() {
  const t = useTranslations("devicesPage");
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
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="flex flex-wrap gap-3">
            {brandHighlights.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-fg-secondary"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-8">
            {Object.entries(grouped).map(([type, entries]) => (
              <section key={type} className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{type}</h2>
                  <span className="text-sm text-fg-muted">{entries.length} showcased</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {entries.map((device) => (
                    <article key={device.name} className="rounded-xl border border-white/5 px-5 py-4">
                      <p className="font-medium">{device.name}</p>
                      <p className="mt-1 text-sm text-fg-muted">{device.brand}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">Need a device that is not listed?</h2>
            <p className="mt-4 max-w-2xl text-fg-secondary">
              Use this page as the public compatibility surface. In a production template,
              connect it to your maintained hardware catalog, support form or device request queue.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
