export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPostEntry {
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  title: {
    en: string;
    zh: string;
  };
  excerpt: {
    en: string;
    zh: string;
  };
  sections: {
    en: BlogPostSection[];
    zh: BlogPostSection[];
  };
}

export const blogPosts: BlogPostEntry[] = [
  {
    slug: "replace-vendor-rgb-apps",
    category: "Guide",
    readTime: "6 min",
    publishedAt: "2026-04-18",
    author: "Core Team",
    title: {
      en: "How to replace vendor RGB apps without breaking your setup",
      zh: "如何在不破坏现有环境的前提下替换官方 RGB 软件",
    },
    excerpt: {
      en: "A practical migration path from single-brand utilities to one control layer for your entire desk.",
      zh: "从品牌私有控制软件迁移到统一灯光控制层的务实路径。",
    },
    sections: {
      en: [
        {
          heading: "Audit what is already running",
          paragraphs: [
            "Before installing anything new, list the RGB services already controlling your peripherals, motherboard headers and ambient strips.",
            "Most lighting conflicts are caused by overlapping background processes rather than by the hardware itself.",
          ],
        },
        {
          heading: "Migrate one device family at a time",
          paragraphs: [
            "Start with keyboards and mice, then move to fans, strips and motherboard lighting. This keeps failures isolated and makes rollback simple.",
            "A good product page should explain this sequence because it reduces support load and increases trust.",
          ],
        },
      ],
      zh: [
        {
          heading: "先盘点当前正在运行的控制软件",
          paragraphs: [
            "在安装新软件前，先梳理目前是谁在控制键盘、鼠标、主板和灯带。",
            "大多数灯效冲突都来自多个后台服务同时抢占控制权，而不是硬件本身。",
          ],
        },
        {
          heading: "按设备类型分批迁移",
          paragraphs: [
            "建议先迁移键盘和鼠标，再迁移风扇、灯条和主板灯光。这样问题范围更小，回滚也更简单。",
            "一个成熟官网模板应该把这种迁移顺序讲清楚，因为它能显著降低用户决策成本。",
          ],
        },
      ],
    },
  },
  {
    slug: "designing-responsive-rgb-scenes",
    category: "Tutorial",
    readTime: "5 min",
    publishedAt: "2026-04-15",
    author: "Design Systems",
    title: {
      en: "Designing responsive RGB scenes for games, streams and work",
      zh: "如何为游戏、直播和工作设计响应式 RGB 场景",
    },
    excerpt: {
      en: "Scene design is not about adding more colors. It is about matching context, latency and readability.",
      zh: "场景设计不是堆叠更多颜色，而是匹配上下文、响应速度和可读性。",
    },
    sections: {
      en: [
        {
          heading: "Think in profiles, not devices",
          paragraphs: [
            "Users do not think in terms of per-device configuration. They think in terms of streaming, ranked play, editing and night mode.",
            "A strong product story groups RGB controls around scenarios and workflows instead of hardware SKUs.",
          ],
        },
        {
          heading: "Keep motion readable",
          paragraphs: [
            "Fast-moving reactive effects look impressive in demos but often become visual noise during actual use.",
            "Offer presets with restrained motion so the setup still feels premium during long sessions.",
          ],
        },
      ],
      zh: [
        {
          heading: "以场景配置而不是设备配置来思考",
          paragraphs: [
            "用户不会以单个设备为单位思考配置，他们会以直播、排位、剪辑和夜间模式来区分场景。",
            "一个好的官网内容应该围绕工作流和使用场景讲产品，而不是围绕 SKU 堆硬件列表。",
          ],
        },
        {
          heading: "动态效果要可读，而不是只追求炫技",
          paragraphs: [
            "高频动态效果在演示中很抓眼，但在真实使用里很容易变成视觉噪音。",
            "所以模板里应同时展示克制型预设，让用户理解这是一个长期可用的控制工具。",
          ],
        },
      ],
    },
  },
  {
    slug: "building-a-plugin-ecosystem",
    category: "Product",
    readTime: "7 min",
    publishedAt: "2026-04-10",
    author: "Platform Team",
    title: {
      en: "What a credible plugin ecosystem page must communicate",
      zh: "一个可信的插件生态页面必须传达什么",
    },
    excerpt: {
      en: "Developers need more than an API mention. They need lifecycle docs, examples and a clear publishing path.",
      zh: "开发者需要的不只是 API 口号，而是生命周期文档、示例和清晰的发布路径。",
    },
    sections: {
      en: [
        {
          heading: "Show the lifecycle",
          paragraphs: [
            "If you claim plugin support, explain discovery, permissions, updates and failure handling.",
            "This is the difference between a marketing promise and a platform promise.",
          ],
        },
        {
          heading: "Reduce the path to first success",
          paragraphs: [
            "A good docs and community pairing should let a developer build a first plugin in under an hour.",
            "That means examples, starter manifests and a contribution path linked directly from the docs and footer.",
          ],
        },
      ],
      zh: [
        {
          heading: "先把插件生命周期讲清楚",
          paragraphs: [
            "如果产品宣称支持插件，就必须说明发现、权限、更新和失败处理机制。",
            "这决定了它是一个营销承诺，还是一个真正的平台承诺。",
          ],
        },
        {
          heading: "降低开发者的首次成功门槛",
          paragraphs: [
            "好的文档和社区组合，应该让开发者在一小时内完成第一个插件。",
            "这意味着需要示例、starter manifest，以及从文档和页脚都能直接到达的贡献路径。",
          ],
        },
      ],
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}