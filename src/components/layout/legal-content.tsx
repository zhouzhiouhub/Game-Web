import { AlertTriangle } from "lucide-react";
import { PageContentCard } from "@/components/layout/page-content-card";

interface LegalContentProps {
  locale: string;
  noticeTitle: string;
  noticeBody: string;
  paragraphs: string[];
  lastUpdated?: string | null;
}

export function LegalContent({
  locale,
  noticeTitle,
  noticeBody,
  paragraphs,
  lastUpdated,
}: LegalContentProps) {
  return (
    <PageContentCard className="overflow-hidden">
      <div className="relative">
        <div className="relative rounded-lg border border-warning/20 bg-warning/8 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-warning/20 bg-warning/10 text-warning">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-body-sm font-semibold text-fg-primary">
                {noticeTitle}
              </p>
              <p className="mt-1 text-body-sm text-fg-secondary">
                {noticeBody}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-fg-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        {lastUpdated ? (
          <div className="mt-10 border-t border-white/10 pt-5">
            <p className="text-caption font-medium text-fg-muted">
              {locale === "zh" ? `最后更新：${lastUpdated}` : `Last updated: ${lastUpdated}`}
            </p>
          </div>
        ) : null}
      </div>
    </PageContentCard>
  );
}
