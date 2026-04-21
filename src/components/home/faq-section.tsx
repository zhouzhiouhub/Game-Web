import { Section } from "@/components/shared/section";

const faqContent = {
  en: {
    title: "Frequently asked questions",
    description:
      "The questions buyers and tinkerers ask before they replace brand-locked RGB software.",
    items: [
      {
        question: "Is Gaming RGB Software free to use?",
        answer:
          "Yes. Core device control, profile management and lighting effects are free. Cloud sync and premium marketplace packs are positioned as optional upgrades.",
      },
      {
        question: "Do I need to uninstall iCUE, Synapse or other vendor apps?",
        answer:
          "No. You can evaluate Gaming RGB Software alongside vendor apps. For stable lighting control, we recommend disabling overlapping RGB services after migration.",
      },
      {
        question: "How many devices are supported?",
        answer:
          "The template currently showcases representative devices across keyboards, mice, fans, strips and motherboards. In production, this section should be connected to your maintained compatibility list.",
      },
      {
        question: "Can developers extend the platform?",
        answer:
          "Yes. The product narrative supports APIs, plugins and shared effect packs. The docs area now includes starter guidance for integrations and community extensions.",
      },
      {
        question: "What makes this suitable as a brand template?",
        answer:
          "The site now covers the complete conversion path: homepage, product details, downloads, docs, community, blog, pricing and legal pages. You can swap branding and data without changing the structure.",
      },
    ],
  },
  zh: {
    title: "常见问题",
    description: "这是用户在替换品牌 RGB 软件前，最常问的几个问题。",
    items: [
      {
        question: "Gaming RGB Software 免费吗？",
        answer:
          "是的。核心设备控制、配置管理和灯效能力免费提供。云同步和高级市场内容作为可选增值项存在。",
      },
      {
        question: "需要卸载 iCUE、Synapse 之类的官方软件吗？",
        answer:
          "不需要。你可以先并行试用。真正迁移时，建议关闭其他软件里的 RGB 控制服务，避免冲突。",
      },
      {
        question: "当前支持多少设备？",
        answer:
          "模板当前展示了键盘、鼠标、风扇、灯条和主板等代表性设备。正式上线时，建议接入你自己的兼容设备列表。",
      },
      {
        question: "开发者可以扩展平台吗？",
        answer:
          "可以。当前站点结构已经覆盖 API、插件和社区效果包等扩展叙事，文档区也补上了接入和扩展说明。",
      },
      {
        question: "为什么说它已经接近一个主题官网模板？",
        answer:
          "因为它已经具备首页、功能详情、下载、文档、社区、博客、定价和法务页等完整转化链路，更换品牌和数据即可复用。",
      },
    ],
  },
} as const;

export function FAQSection({ locale }: { locale: string }) {
  const content = locale === "zh" ? faqContent.zh : faqContent.en;

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
            className="group rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-6 open:border-white/10"
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