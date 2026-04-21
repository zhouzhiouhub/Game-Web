import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export const brandContent: Record<Locale, Record<string, unknown>> = {
  en: {
    metadata: {
      title: "One Software. Every Light.",
      titleTemplate: "%s | {siteName}",
      description:
        "Cross-platform RGB lighting control software for {siteName}. Unify all your RGB devices. No more software conflicts.",
    },
    hero: {
      line1: "One Software.",
      line2: "Every Light.",
      description:
        "Unify all your RGB devices with {siteName}. No more software conflicts. Cross-platform control for Windows, macOS, and Linux.",
    },
    logoCloud: {
      title: "Compatible with {brandCount}+ brands",
    },
    cta: {
      title: "Ready to light up your setup with {shortName}?",
      description: "Download now and take control of every light in your room.",
    },
    footer: {
      brand: "One Software. Every Light.",
    },
    download: {
      metadata: {
        description: "Download {siteName} for Windows, macOS, and Linux.",
      },
    },
    devicesPage: {
      metadata: {
        description:
          "{deviceCount}+ devices supported. Find your hardware in the {siteName} compatibility database.",
      },
    },
    featuresPage: {
      metadata: {
        description:
          "Explore visual effect editing, game sync, cloud sync, and other capabilities in {siteName}.",
      },
    },
    blog: {
      metadata: {
        description: "Latest news, tutorials, and updates from the {siteName} ecosystem.",
      },
    },
    community: {
      metadata: {
        description:
          "Join the {siteName} community through chat, marketplace resources, and public updates.",
      },
    },
    marketplace: {
      metadata: {
        description:
          "Browse and download community-made effects, plugins, and themes for {siteName}.",
      },
    },
    faq: {
      description:
        "The questions buyers ask before they replace fragmented RGB utilities with {siteName} as one control layer.",
      items: [
        {
          question: "Is the product free to use?",
          answer:
            "{siteName} can support free, paid, or hybrid pricing models. Adjust this section to match the actual licensing and packaging of your product.",
        },
        {
          question: "Do users need to remove existing brand software first?",
          answer:
            "Not necessarily. A practical migration path usually starts with parallel evaluation, then disables overlapping RGB services only after users confirm stable control in {shortName}.",
        },
        {
          question: "How should the supported device list be maintained?",
          answer:
            "The public devices page should be connected to a maintained compatibility catalog, release notes, or support intake flow so buyers understand what is verified.",
        },
        {
          question: "Can developers extend the platform?",
          answer:
            "Yes. {siteName} supports APIs, plugins, integrations, and marketplace-style ecosystem messaging for developer-facing products.",
        },
        {
          question: "What does the site cover end to end?",
          answer:
            "It covers the full conversion path for {siteName}: homepage, feature pages, downloads, docs, community, blog, pricing, and legal destinations with reusable sections.",
        },
      ],
    },
  },
  zh: {
    metadata: {
      title: "一款软件，点亮所有灯光",
      titleTemplate: "%s | {siteName}",
      description:
        "{siteName} 是一款跨平台 RGB 灯光控制软件，统一管理所有 RGB 设备，告别软件冲突。",
    },
    hero: {
      line1: "一款软件。",
      line2: "点亮所有灯光。",
      description:
        "通过 {siteName} 统一管理所有 RGB 设备，告别软件冲突，支持 Windows、macOS 和 Linux 跨平台控制。",
    },
    logoCloud: {
      title: "兼容 {brandCount}+ 品牌",
    },
    cta: {
      title: "准备好用 {shortName} 点亮你的设备了吗？",
      description: "立即下载，掌控你房间里的每一盏灯。",
    },
    footer: {
      brand: "一款软件，点亮所有灯光。",
    },
    download: {
      metadata: {
        description: "下载适用于 Windows、macOS 和 Linux 的 {siteName}。",
      },
    },
    devicesPage: {
      metadata: {
        description: "支持 {deviceCount}+ 设备，在 {siteName} 的兼容性数据库中查找你的硬件。",
      },
    },
    featuresPage: {
      metadata: {
        description: "探索 {siteName} 的可视化效果编辑、游戏同步、云端同步等核心能力。",
      },
    },
    blog: {
      metadata: {
        description: "查看 {siteName} 生态中的最新资讯、教程和产品更新。",
      },
    },
    community: {
      metadata: {
        description: "通过聊天社区、资源市场和公开更新加入 {siteName} 的产品生态。",
      },
    },
    marketplace: {
      metadata: {
        description: "浏览和下载适用于 {siteName} 的社区效果、插件和主题。",
      },
    },
    faq: {
      description:
        "这是用户在从碎片化 RGB 工具迁移到以 {siteName} 为统一控制层之前，最常提出的几个问题。",
      items: [
        {
          question: "这个产品一定要免费吗？",
          answer:
            "不一定。{siteName} 可以适配免费、付费或混合授权模式，你可以按产品真实的定价与交付方式调整这里的说明。",
        },
        {
          question: "用户需要先卸载原有品牌软件吗？",
          answer:
            "通常不需要。更稳妥的迁移方式是先并行试用，再在确认 {shortName} 控制稳定后关闭冲突的 RGB 后台服务。",
        },
        {
          question: "支持设备列表应该如何维护？",
          answer:
            "公开设备页最好连接到持续维护的兼容目录、发布说明或支持申请流程，让潜在用户清楚知道哪些硬件已经过验证。",
        },
        {
          question: "开发者可以扩展这个平台吗？",
          answer:
            "可以。{siteName} 当前的站点结构足以承接 API、插件、外部集成以及市场生态等开发者向内容。",
        },
        {
          question: "这套站点覆盖了哪些关键路径？",
          answer:
            "它覆盖了 {siteName} 的完整转化链路：首页、功能页、下载、文档、社区、博客、定价和法务页都已经具备可复用的版式与内容承载位。",
        },
      ],
    },
  },
};