const careerPortfolioData = {
  navigation: [
    { id: "experience", en: "Experience", zh: "经历" },
    { id: "projects", en: "Projects", zh: "项目" },
    { id: "skills", en: "Skills", zh: "技能" },
    { id: "education", en: "Education", zh: "教育" }
  ],
  hero: {
    kicker: { en: "Curriculum Vitae", zh: "Curriculum Vitae · 履历" },
    title: { en: "Systems I built,\nand what changed.", zh: "我构建过的系统，\n和它们改变的数字。" },
    intro: {
      en: "Senior software engineer with a backend and distributed-systems foundation. I have worked across cloud security, map services, identity, blockchain infrastructure, and satellite digital twins, and now ship AI products end to end.",
      zh: "高级软件工程师，后端与分布式系统出身。曾在阿里云、滴滴、微软、Nethermind 与 Space AIC 参与云安全、地图服务、身份系统、区块链基础设施与卫星数字孪生；也独立构建 AI 产品，把新的模型能力变成真正可用的完整系统。"
    }
  },
  evidence: [
    { value: "15,000+", en: "interactive satellites", zh: "卫星实时仿真实验" },
    { value: "15M", en: "daily POI users", zh: "日活用户的 POI 服务" },
    { value: "−51%", en: "TP99 at 2,000 QPS", zh: "2,000 QPS 下的 TP99 延迟" }
  ],
  career: [
    {
      id: "space-aic",
      year: "2026",
      company: "Space AIC",
      role: { en: "Software Engineer", zh: "软件工程师" },
      place: { en: "Shanghai, China", zh: "上海，中国" },
      dates: { en: "Mar 2026 · Present", zh: "2026.03 · 至今" },
      category: { en: "Digital twin", zh: "数字孪生" },
      impact: { value: "15,000+", en: "satellites supported", zh: "支持卫星规模" },
      summary: {
        en: "Built frontend capabilities for the world's first 10,000+ satellite digital-twin system, expanding experiments from 1,800 to 15,000+ satellites while keeping 3D playback interactive.",
        zh: "为全球首个万星级卫星数字孪生系统开发控制面与仿真交互，将实验规模从 1,800 颗扩展至 15,000+ 颗，并保持三维轨道与姿态回放可交互。"
      },
      details: {
        en: [
          "Connected React/Cesium control surfaces to distributed RPC simulation services for constellation design, attitude control, interference, thermal, energy, space-environment, and ns-3 experiments.",
          "Delivered Cell and Beam rendering for 1,584-satellite experiments with H3 grids, terrain, timeline playback, and 16 beam cones.",
          "Built hybrid-in-the-loop microVM terminals and a Terminal Gateway over HTTP, WebSocket, and gRPC, including session-aware routing and resource monitoring.",
          "Developed SAT Agent capabilities for satellite Q&A, scenario analysis, and space-ground edge-AI architecture exploration."
        ],
        zh: [
          "将 React/Cesium 控制面接入分布式 RPC 仿真服务，支撑星座设计、姿态控制、干扰、热控、电源、空间环境与 ns-3 实验。",
          "为 1,584 星实验实现 Cell / Beam 实时渲染，接入 H3 网格、地形、timeline 播放与 16 个波束锥体。",
          "通过 HTTP、WebSocket 与 gRPC Terminal Gateway 完成 microVM 在线终端、会话路由与资源监控。",
          "开发 SAT Agent 卫星信息问答与场景分析能力，并探索天地一体化边缘 AI 架构。"
        ]
      },
      stack: "React 19 · TypeScript · Vite · Cesium · ECharts · Zustand · RPC · gRPC · RAG"
    },
    {
      id: "nethermind",
      year: "2023",
      company: "Nethermind",
      role: { en: "Internship Programme · Ethereum Foundation", zh: "区块链研发实习生 · Ethereum Foundation" },
      place: { en: "Remote", zh: "远程" },
      dates: { en: "Aug · Nov 2023", zh: "2023.08 · 11" },
      category: { en: "Blockchain infrastructure", zh: "区块链基础设施" },
      impact: { value: "−1,000ms", en: "search latency", zh: "搜索延迟" },
      summary: {
        en: "Re-architected Voyager, a StarkNet explorer, and refactored its search path to cut roughly one second from user-facing latency.",
        zh: "重构 StarkNet 浏览器 Voyager 的架构与搜索链路，将用户侧搜索延迟减少约 1,000 毫秒。"
      },
      details: {
        en: [
          "Migrated services from AWS Lambda and the StarkNet gateway to ECS and RPC endpoints, rewriting two APIs and documenting the new architecture.",
          "Added RDS indexes and rewrote PostgreSQL queries to improve retrieval efficiency.",
          "Designed a prompt-engineering method to detect and decode Cairo types into human-readable transaction call-data."
        ],
        zh: [
          "将服务从 AWS Lambda 与 StarkNet gateway 迁移到 ECS 与 RPC endpoint，重写 2 个 API 并补充架构文档。",
          "通过索引与 PostgreSQL 查询重写提升 RDS 检索效率。",
          "设计提示工程方法自动检测并解码 Cairo 类型，将交易 call-data 转为人类可读结果。"
        ]
      },
      stack: "AWS ECS · PostgreSQL · RDS · RPC · Cairo"
    },
    {
      id: "microsoft",
      year: "2022",
      company: "Microsoft",
      role: { en: "Software Engineer · Mobile Experience", zh: "软件工程师 · Mobile Experience" },
      place: { en: "Suzhou, China", zh: "苏州，中国" },
      dates: { en: "Jan · Aug 2022", zh: "2022.01 · 08" },
      category: { en: "Identity & reliability", zh: "身份与可靠性" },
      impact: { value: "35.4%", en: "pairing completion", zh: "配对完成率" },
      summary: {
        en: "Designed and shipped Windows OOBE phone pairing through QR and accessibility codes, lifting completion from 28.3% to 35.4%.",
        zh: "设计并交付 Windows OOBE 的 QR / Accessibility Code 手机配对流程，将完成率从 28.3% 提升至 35.4%。"
      },
      details: {
        en: [
          "Built eight REST APIs with .NET and account-based JWT trust relationships for certificate, device, and account verification.",
          "Used microservices, async processing, caching, WebSockets, long polling, and throttling to hold a 97% API success rate at 720 RPS.",
          "Added more than 2,000 lines of unit, functional, end-to-end, and load tests plus telemetry for anomaly detection."
        ],
        zh: [
          "使用 .NET 构建 8 个 REST API，并以 JWT 建立证书、设备和账户之间的加密信任关系。",
          "通过微服务、异步、缓存、WebSocket、长轮询与限流，在 720 RPS 下保持 97% API 成功率。",
          "补充超过 2,000 行单元、功能、端到端与负载测试，以及异常遥测。"
        ]
      },
      stack: ".NET · REST · JWT · WebSocket · Caching · Testing"
    },
    {
      id: "didi",
      year: "2021",
      company: "DiDi Global",
      role: { en: "Software Development Engineer · Map Architecture", zh: "软件开发工程师 · 地图架构" },
      place: { en: "Beijing, China", zh: "北京，中国" },
      dates: { en: "Jan · Dec 2021", zh: "2021.01 · 12" },
      category: { en: "Distributed systems", zh: "分布式系统" },
      impact: { value: "−51%", en: "TP99 at 2,000 QPS", zh: "2,000 QPS 下 TP99" },
      summary: {
        en: "Rewrote six POI APIs serving 15 million users a day from PHP to Go, raising CPU idle from 36% to 73% and reducing TP99 by 51% at 2,000 QPS.",
        zh: "将服务 1,500 万日活用户的 6 个 POI API 从 PHP 重写为 Go，在 2,000 QPS 下将 CPU 空闲率从 36% 提升至 73%，TP99 降低 51%。"
      },
      details: {
        en: [
          "Split business logic into pluggable workflow modules and moved eight REST APIs to DiRPC with service discovery.",
          "Applied A/B testing for canary deployment, configuration synchronization, and strategy experiments.",
          "Managed online metric alarms across 22 APIs and 16 downstream services during on-call rotations."
        ],
        zh: [
          "使用内部工作流引擎拆分可插拔业务模块，并将 8 个 REST API 迁移到带服务发现的 DiRPC。",
          "应用 A/B 测试完成灰度发布、配置同步与策略实验。",
          "值班期间管理 22 个 API 与 16 个下游服务的错误率、延迟等在线指标告警。"
        ]
      },
      stack: "Go · DiRPC · Service discovery · A/B testing · Observability · On-call"
    },
    {
      id: "alibaba",
      year: "2020",
      company: "Alibaba Cloud",
      role: { en: "Software Engineer Intern · Cloud Security", zh: "软件工程实习生 · 云安全" },
      place: { en: "Hangzhou, China", zh: "杭州，中国" },
      dates: { en: "Jul · Sep 2020", zh: "2020.07 · 09" },
      category: { en: "Cloud security", zh: "云安全" },
      impact: { value: "SLA", en: "route traceback", zh: "路由回溯" },
      summary: {
        en: "Led a by-pass sniffing route-traceback project for SLA monitoring and network fault location on elastic Anti-DDoS clusters.",
        zh: "主持基于旁路嗅探的路由回溯项目，用于 SLA 监控与网络故障定位，并交付可配置扩展的高级 Anti-DDoS 集群能力。"
      },
      details: {
        en: [
          "Constructed spoofed-source VIP packet sequences with increasing TTL using Scapy.",
          "Captured mirrored traffic asynchronously and filtered packets through callback-based I/O."
        ],
        zh: [
          "使用 Scapy 构造 TTL 递增的虚假源 VIP 数据包序列。",
          "通过流量镜像服务异步捕获数据包，并使用回调过滤。"
        ]
      },
      stack: "Scapy · Async I/O · Traffic mirroring · Anti-DDoS"
    }
  ],
  projects: [
    {
      id: "type-machine",
      year: "2026",
      title: "Type Machine",
      zhTitle: "打字机",
      category: "AI & Agents",
      filter: "ai",
      status: { en: "Shipped · public", zh: "已上线 · 公开" },
      description: {
        en: "An asynchronous multimodal capture pipeline that turns screenshots, recordings, videos, and links into editable, traceable knowledge.",
        zh: "从系统分享菜单接收截图、录音、视频与链接，经异步多模态流水线生成可编辑、可检索、可复核的知识。"
      },
      stack: "Next.js · Web Share Target · OCR · ffmpeg · SQLite",
      links: [
        { label: "Live", href: "https://app.type-machine.com" },
        { label: "GitHub", href: "https://github.com/onemapl3/type-machine" },
        { label: "小红书", href: "https://www.xiaohongshu.com/explore/69e7518c000000002102f6fa" }
      ]
    },
    {
      id: "time-machine",
      year: "2026",
      title: "Time Machine",
      zhTitle: "时光机",
      category: "AI & Agents",
      filter: "ai",
      status: { en: "Deployed · public", zh: "已部署 · 公开" },
      description: {
        en: "A SecondMe companion with temporal memory distillation, date-bounded RAG, and dual-agent SSE dialogue.",
        zh: "基于日期边界蒸馏记忆并执行 Temporal RAG，以 SecondMe 和 Anthropic 双 Agent SSE 构建私人情感陪伴体验。"
      },
      stack: "Next.js 16 · Prisma · OAuth2 · SSE · Anthropic · Fly.io",
      links: [
        { label: "Live", href: "https://timemachine-app.fly.dev" },
        { label: "GitHub", href: "https://github.com/onemapl3/timemachine" },
        { label: "小红书", href: "https://www.xiaohongshu.com/explore/69a82d78000000000e00d183" }
      ]
    },
    {
      id: "onepoem",
      year: "2026",
      title: "OnePoem",
      zhTitle: "一页诗",
      category: "Tools",
      filter: "tools",
      status: { en: "Shipped · case study", zh: "已完成 · 案例" },
      description: {
        en: "A cross-platform poetry composer with reusable templates, collections, widgets, and export from web to iOS.",
        zh: "跨 Web 与 iOS 的诗歌排版工具，提供模板、字体、版式比例、诗集、桌面小组件与图片导出。"
      },
      stack: "React · SwiftUI · WKWebView · html2canvas",
      links: [
        { label: "Live", href: "https://onepoem.vercel.app" },
        { label: "小红书", href: "https://www.xiaohongshu.com/explore/69f1dd72000000002003bd26" }
      ]
    },
    {
      id: "amebook",
      year: "2026",
      title: "AmeBook",
      zhTitle: "回忆照片书",
      category: "Building now",
      filter: "tools",
      status: { en: "Working software", zh: "正在构建" },
      description: {
        en: "Starting from memory photographs and a little writing, AmeBook autonomously creates a complete photo book with a coherent narrative rhythm, while keeping every page editable and print-ready.",
        zh: "从一组回忆照片与少量文字出发，自主生成一本有完整叙事节奏的照片书，同时保留逐页编辑与印刷级导出能力。"
      },
      stack: "React · Zustand · Canvas · Sharp · PDFKit · ag-psd",
      links: [
        { label: "Live", href: "https://amebook.onemaple.cc" }
      ]
    },
    {
      id: "oneframe",
      year: "2026",
      title: "OneFrame",
      zhTitle: "一帧",
      category: "Product study",
      filter: "tools",
      status: { en: "Prototype · in progress", zh: "原型 · 进行中" },
      description: {
        en: "A local-first, restrained composition tool for turning one to three photographs into a considered social frame.",
        zh: "面向 1–3 张照片的克制排版工具。目前完成产品定义、高保真移动端原型和完整工程规划。"
      },
      stack: "React Native · Skia · local-first · prototype",
      links: []
    }
  ],
  skills: [
    { en: "Core engineering", zh: "核心工程", value: "Go · Python · TypeScript / JavaScript · SQL · C / C++ · Java · Shell · RPC · gRPC · REST" },
    { en: "AI & agent engineering", zh: "AI 与 Agent 工程", value: "RAG · vector databases · MCP · agent skills · multi-agent orchestration · Anthropic API · OpenAI SDK" },
    { en: "Cloud & data", zh: "云与数据", value: "Docker · Kubernetes · AWS ECS / Lambda / RDS · GCP · Azure · PostgreSQL · MySQL · Redis · Qdrant" },
    { en: "Product delivery", zh: "产品交付", value: "React · Next.js · React Native · Cesium · ECharts · FastAPI · Gin · Prisma · Playwright · observability" }
  ],
  education: [
    { school: "University of Illinois Urbana-Champaign", zhSchool: "伊利诺伊大学厄巴纳-香槟分校", degree: "Master of Computer Science", zhDegree: "Master of Computer Science", dates: "2022—2024", gpa: "GPA 3.56 / 4.0" },
    { school: "Shandong University", zhSchool: "山东大学", degree: "B.Eng. Computer Science and Technology", zhDegree: "计算机科学与技术工学学士", dates: "2017—2021", gpa: "GPA 3.82 / 4.0" }
  ]
};

window.careerPortfolioData = careerPortfolioData;
