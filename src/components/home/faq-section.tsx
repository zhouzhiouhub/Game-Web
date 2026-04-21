import { Section } from "@/components/shared/section";
import { useMessages } from "next-intl";
import { cardVariants } from "@/components/ui/card";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQContent = {
  title: string;
  description: string;
  items: FAQItem[];
};

export function FAQSection() {
  const messages = useMessages() as { faq: FAQContent };
  const content = messages.faq;

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{content.title}</h2>
        <p className="mt-4 text-fg-secondary">{content.description}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4">
        {content.items.map((item) => (
          <details
            key={item.question}
            className={`${cardVariants({ variant: "surface", padding: "md" })} group open:border-white/10`}
          >
            <summary className="cursor-pointer list-none text-left font-semibold text-fg-primary">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-fg-secondary">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}