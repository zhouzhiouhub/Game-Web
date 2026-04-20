import { useTranslations } from "next-intl";

export function SocialProof() {
  const t = useTranslations("social");

  const stats = [
    { label: t("stars.label"), value: t("stars.value"), icon: t("stars.icon") },
    { label: t("downloads.label"), value: t("downloads.value"), icon: t("downloads.icon") },
    { label: t("members.label"), value: t("members.value"), icon: t("members.icon") },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-3xl">{stat.icon}</span>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-fg-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
