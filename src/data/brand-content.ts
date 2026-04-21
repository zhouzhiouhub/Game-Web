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
      title: "Compatible with major RGB brands",
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
      content: {
        latest: "Latest",
        platforms: {
          windows: "v1.0.0 · Installer .exe · Recommended",
          macos: "v1.0.0 · Apple Silicon + Intel preview",
          linux: "AppImage and .deb packages",
        },
        releaseTitle: "Release highlights",
        releaseItems: [
          "Unified profiles for mixed-brand setups.",
          "Improved effect editor performance on large device groups.",
          "Clearer migration guidance for existing vendor RGB services.",
        ],
        adminNote: "Administrator rights may be required for certain USB controllers.",
        distributionTitle: "Distribution",
        distributionDescription:
          "Downloads are distributed through the latest verified release channel and can point to GitHub Releases, object storage, or an installer CDN depending on deployment.",
      },
    },
    devicesPage: {
      metadata: {
        description:
          "Browse the public compatibility catalog for {siteName} and review currently showcased hardware support.",
      },
      content: {
        brandHighlights: ["Corsair", "Razer", "Logitech", "NZXT", "Asus", "SteelSeries"],
        showcased: "showcased",
        supportTitle: "Need support for a device that is not listed?",
        supportDescription:
          "Use this page as the public compatibility surface and connect it to your maintained hardware catalog, support intake, or roadmap for new device requests.",
      },
    },
    featuresPage: {
      metadata: {
        description:
          "Explore visual effect editing, game sync, cloud sync, and other capabilities in {siteName}.",
      },
      content: {
        sectionLabel: "Core capability",
        cta: "Learn more",
        summaryTitle: "A complete product capability narrative",
        summaryDescription:
          "These sections already connect feature storytelling with docs, downloads, and community paths, so the site can explain value without turning into a dead-end brochure.",
        cards: [
          {
            key: "editor",
            href: "/features/editor",
            bullets: [
              "Visual timeline with layered effects and reusable presets",
              "Profile-based workflows for gaming, streaming and focus modes",
              "No-code editing path for non-technical users",
            ],
          },
          {
            key: "gameSync",
            href: "/features/game-sync",
            bullets: [
              "Reactive lighting tied to health, cooldowns and match states",
              "Low-latency triggers tuned for desktop immersion",
              "Profiles that can fall back safely when integrations fail",
            ],
          },
          {
            key: "cloudSync",
            href: "/features/cloud-sync",
            bullets: [
              "Sign in once and carry profiles across machines",
              "Restore setup states after OS reinstalls or hardware swaps",
              "Share curated presets with teams and communities",
            ],
          },
          {
            key: "plugin",
            href: "/docs/plugins",
            bullets: [
              "Extend device support without forking the main app",
              "Hook external triggers, APIs and automation workflows",
              "Publish community add-ons through a documented release path",
            ],
          },
        ],
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
          "Join the {siteName} community through chat, contribution docs, and public updates.",
      },
      content: {
        channels: [
          {
            title: "Discord",
            description: "Real-time setup help, release feedback and effect sharing.",
            href: "{discordInvite}",
            external: true,
          },
          {
            title: "GitHub",
            description: "Track issues, submit fixes and review the public roadmap.",
            href: "{githubRepo}",
            external: true,
          },
        ],
        hubTitle: "What a community hub should include",
        hubBullets: [
          "Clear path to live chat, issue tracking and contribution docs.",
          "Highlighted setup galleries or effect showcases.",
          "A documented destination for reusable assets and community resources.",
        ],
        noteTitle: "Why this page matters",
        noteDescription:
          "A strong community page builds trust and activity visibility at the same time, showing both the resource layer and the path for ongoing contribution.",
      },
    },
    marketplace: {
      metadata: {
        description:
          "Browse and download community-made effects, plugins, and themes for {siteName}.",
      },
      content: {
        items: [
          {
            title: "Reactive FPS Pack",
            category: "Effect pack",
            description: "Health, damage and victory-state reactions tuned for competitive shooters.",
          },
          {
            title: "Streamer Starter Kit",
            category: "Theme",
            description: "Scene-aware desk lighting with low-distraction idle states for long broadcasts.",
          },
          {
            title: "Home Assistant Bridge",
            category: "Plugin",
            description: "Sync profiles with room modes, automations and media playback events.",
          },
          {
            title: "Ambient Work Mode",
            category: "Preset",
            description: "Muted gradients and schedule-based transitions for daily productivity setups.",
          },
        ],
        sectionTitle: "Curated resource highlights",
        sectionDescription:
          "Use this area to showcase effects, presets, plugins, or other reusable assets so visitors understand the value of the ecosystem layer.",
      },
    },
    pricingPage: {
      title: "Pricing",
      description: "A pricing structure suited to free-core, subscription, or tiered-license products.",
      plans: [
        {
          name: "Free Core",
          price: "$0",
          features: [
            "Unified RGB control for core device categories",
            "Profile switching and local presets",
            "Community docs and public plugin support",
          ],
        },
        {
          name: "Pro Sync",
          price: "$6/mo",
          features: [
            "Cloud backup and multi-device sync",
            "Shared team profiles and private packs",
            "Priority compatibility requests",
          ],
        },
        {
          name: "Studio",
          price: "$15/mo",
          features: [
            "Marketplace publishing tools",
            "Advanced automation and API limits",
            "Commercial deployment rights for branded setups",
          ],
        },
      ],
    },
    docs: {
      sections: {
        apiReference: {
          content: {
            primaryTitle: "Core objects",
            primaryDescription:
              "Devices, zones, profiles and triggers form the minimum public API model. Exposing this clearly is what makes the ecosystem credible.",
            secondaryTitle: "Integration path",
            secondaryDescription:
              "Publish request and event examples so external tools can react to game states, desktop automations and setup presets.",
          },
        },
        pluginDev: {
          cards: [
            "Manifest-based plugin registration with clear capability scopes.",
            "Lifecycle hooks for install, update, event handling and cleanup.",
            "A publishing path that connects docs, GitHub and community review.",
          ],
        },
      },
    },
    featurePages: {
      editor: {
        cards: [
          "Layer-based visual editor for wave, ripple and gradient effects.",
          "Reusable preset system for setups, scenes and event-driven profiles.",
          "Timeline controls that help users design without code.",
        ],
      },
      gameSync: {
        cards: [
          {
            title: "Real-time reactive scenes",
            description:
              "Tie lighting states to in-game events like health thresholds, victory states, cooldowns and zone control without forcing users into complex automation flows.",
          },
          {
            title: "Safe fallbacks",
            description:
              "A good feature page should explain how profiles recover when integrations are unavailable, so users trust the software for daily use instead of demos only.",
          },
        ],
      },
      cloudSync: {
        cards: [
          {
            title: "Profiles that travel with you",
            description:
              "Restore desk lighting, device groups and scenes when you switch machines, reinstall the OS or move between gaming and work environments.",
          },
          {
            title: "Shareable setups",
            description:
              "Use cloud sync as the bridge between solo setup management and community preset sharing across teams and user groups.",
          },
        ],
      },
      devices: {
        title: "Cross-brand support strategy",
        description:
          "The device support story should explain how keyboards, mice, motherboards, fans and light strips are normalized into one control surface. This turns compatibility from a vague promise into a product advantage.",
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
            "Yes. {siteName} supports APIs, plugins, integrations, and community ecosystem messaging for developer-facing products.",
        },
        {
          question: "What does the site cover end to end?",
          answer:
            "It covers the full conversion path for {siteName}: homepage, feature pages, downloads, docs, community, and legal destinations with reusable sections.",
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
      title: "兼容主流 RGB 品牌",
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
      content: {
        latest: "最新版",
        platforms: {
          windows: "v1.0.0 · 安装包 .exe · 推荐",
          macos: "v1.0.0 · Apple Silicon + Intel 预览版",
          linux: "AppImage 与 .deb 包",
        },
        releaseTitle: "版本亮点",
        releaseItems: [
          "统一多品牌设备的配置管理。",
          "大规模设备组下的编辑器性能优化。",
          "更清晰的品牌软件迁移引导。",
        ],
        adminNote: "某些 USB 控制器可能需要管理员权限。",
        distributionTitle: "分发方式",
        distributionDescription:
          "当前下载按钮默认指向最新 GitHub Release。正式交付时可以替换为你自己的安装包 CDN、对象存储或发行平台。",
      },
    },
    devicesPage: {
      metadata: {
        description: "查看 {siteName} 的公开兼容性目录，确认当前已展示的硬件支持范围。",
      },
      content: {
        brandHighlights: ["Corsair", "Razer", "Logitech", "NZXT", "Asus", "SteelSeries"],
        showcased: "已展示",
        supportTitle: "需要适配尚未列出的设备？",
        supportDescription:
          "设备页应当作为公开兼容性入口，承接你的硬件目录、支持申请或设备接入计划，让用户明确知道当前覆盖范围。",
      },
    },
    featuresPage: {
      metadata: {
        description: "探索 {siteName} 的可视化效果编辑、游戏同步、云端同步等核心能力。",
      },
      content: {
        sectionLabel: "核心能力",
        cta: "查看详情",
        summaryTitle: "完整的产品能力叙事",
        summaryDescription:
          "功能页、详情页与下载、文档、社区入口已经形成闭环，能够同时承接品牌表达、能力说明与后续转化。",
        cards: [
          {
            key: "editor",
            href: "/features/editor",
            bullets: [
              "可视化时间轴与多层灯效组合",
              "围绕游戏、直播、专注等场景组织配置",
              "非技术用户也能完成无代码编辑",
            ],
          },
          {
            key: "gameSync",
            href: "/features/game-sync",
            bullets: [
              "围绕血量、冷却、胜负状态做实时联动",
              "面向桌面沉浸感优化低延迟触发反馈",
              "当联动失效时可安全回退到默认配置",
            ],
          },
          {
            key: "cloudSync",
            href: "/features/cloud-sync",
            bullets: [
              "登录后跨设备同步配置与场景",
              "系统重装或换机后快速恢复设置",
              "便于团队和社区共享预设",
            ],
          },
          {
            key: "plugin",
            href: "/docs/plugins",
            bullets: [
              "在不改动主应用的前提下扩展能力",
              "接入外部 API、自动化和事件源",
              "为社区插件与扩展提供明确的发布路径",
            ],
          },
        ],
      },
    },
    blog: {
      metadata: {
        description: "查看 {siteName} 生态中的最新资讯、教程和产品更新。",
      },
    },
    community: {
      metadata: {
        description: "通过聊天社区、贡献文档和公开更新加入 {siteName} 的产品生态。",
      },
      content: {
        channels: [
          {
            title: "Discord",
            description: "用于实时答疑、版本反馈和用户效果分享。",
            href: "{discordInvite}",
            external: true,
          },
          {
            title: "GitHub",
            description: "追踪问题、提交修复并公开查看项目路线。",
            href: "{githubRepo}",
            external: true,
          },
        ],
        hubTitle: "社区中心需要承接什么",
        hubBullets: [
          "清晰连接实时讨论、问题反馈与贡献文档。",
          "展示精选案例、用户设备布置或效果作品。",
          "为可复用资源提供明确的文档入口和社区分发路径。",
        ],
        noteTitle: "社区页的作用",
        noteDescription:
          "这块内容应该承担信任建立和活跃度展示的职责，让用户既能看到资源沉淀，也能看到持续互动与贡献路径。",
      },
    },
    marketplace: {
      metadata: {
        description: "浏览和下载适用于 {siteName} 的社区效果、插件和主题。",
      },
      content: {
        items: [
          {
            title: "Reactive FPS Pack",
            category: "效果包",
            description: "围绕血量、受击和胜利状态设计的竞技类灯效组合。",
          },
          {
            title: "Streamer Starter Kit",
            category: "主题",
            description: "适合长时间直播的场景化桌面灯光与低干扰待机状态。",
          },
          {
            title: "Home Assistant Bridge",
            category: "插件",
            description: "让配置与房间模式、自动化和媒体事件联动。",
          },
          {
            title: "Ambient Work Mode",
            category: "预设",
            description: "更克制的渐变和按时间切换的工作模式配置。",
          },
        ],
        sectionTitle: "精选资源展示",
        sectionDescription:
          "这里适合展示效果包、模板、插件或其他可分发资源，帮助用户理解生态层的价值。",
      },
    },
    pricingPage: {
      title: "定价",
      description: "适用于免费核心、订阅增值或分层授权产品的标准定价结构。",
      plans: [
        {
          name: "Free Core",
          price: "$0",
          features: [
            "统一 RGB 核心设备品类控制",
            "配置切换与本地预设",
            "社区文档与公开插件支持",
          ],
        },
        {
          name: "Pro Sync",
          price: "$6/mo",
          features: [
            "云端备份与多设备同步",
            "团队共享配置与私有内容包",
            "优先兼容性需求响应",
          ],
        },
        {
          name: "Studio",
          price: "$15/mo",
          features: [
            "市场发布工具",
            "高级自动化与 API 限额",
            "品牌化场景的商业部署权限",
          ],
        },
      ],
    },
    docs: {
      sections: {
        apiReference: {
          content: {
            primaryTitle: "核心对象",
            primaryDescription:
              "设备、分区、配置和触发器构成了最小 API 模型。把这些对象讲清楚，才能让生态能力真正可信。",
            secondaryTitle: "集成路径",
            secondaryDescription:
              "提供请求与事件示例后，外部工具才能围绕游戏状态、桌面自动化和预设切换进行联动。",
          },
        },
        pluginDev: {
          cards: [
            "基于清单的插件注册与清晰能力边界。",
            "安装、更新、事件处理与清理的生命周期钩子。",
            "把文档、GitHub 与社区审核流程连起来的发布路径。",
          ],
        },
      },
    },
    featurePages: {
      editor: {
        cards: [
          "面向波浪、涟漪和渐变效果的分层可视化编辑器。",
          "面向设备布置、场景与事件驱动配置的可复用预设系统。",
          "帮助用户无需代码完成设计的时间轴控制。",
        ],
      },
      gameSync: {
        cards: [
          {
            title: "实时联动场景",
            description:
              "把灯光状态绑定到血量阈值、胜负状态、技能冷却和区域控制等游戏事件，而不需要用户维护复杂自动化流程。",
          },
          {
            title: "安全回退",
            description:
              "优秀的功能页应该解释当联动不可用时配置如何恢复，这样用户才会把软件用于日常环境而不只是演示。",
          },
        ],
      },
      cloudSync: {
        cards: [
          {
            title: "配置随你走",
            description:
              "当你切换设备、重装系统或在游戏与办公环境之间移动时，快速恢复桌面灯光、设备分组和场景配置。",
          },
          {
            title: "可共享的配置",
            description:
              "把云同步作为个人配置管理与社区预设分享之间的桥梁，便于团队和用户群体协作。",
          },
        ],
      },
      devices: {
        title: "跨品牌支持策略",
        description:
          "设备支持叙事需要解释键盘、鼠标、主板、风扇和灯条如何被归一到同一控制面上，把兼容性从模糊承诺变成真实的产品优势。",
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
            "可以。{siteName} 当前的站点结构足以承接 API、插件、外部集成以及社区生态等开发者向内容。",
        },
        {
          question: "这套站点覆盖了哪些关键路径？",
          answer:
            "它覆盖了 {siteName} 的完整转化链路：首页、功能页、下载、文档、社区和法务页都已经具备可复用的版式与内容承载位。",
        },
      ],
    },
  },
};
