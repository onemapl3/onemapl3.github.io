const portfolioData = {
  navigation: [
    { id: "projects", en: "Projects", zh: "项目" },
    { id: "career", en: "Career", zh: "履历" },
    { id: "photography", en: "Photographs", zh: "摄影" },
    { id: "writing", en: "Writing", zh: "文字" },
    { id: "music", en: "Music", zh: "音乐" }
  ],
  projects: [
    {
      id: "onepoem",
      year: "2026",
      type: "Tool",
      title: "OnePoem",
      zhTitle: "一页诗",
      index: "01",
      lead: {
        en: "Give a poem, a lyric, or a feeling you do not want to lose a page of its own.",
        zh: "让一首诗、一句歌词，或一个不想忘记的感受，被认真地放在一页纸上。"
      },
      story: {
        en: "It began when I wrote a poem and found plenty of image and text tools, but nothing that treated poetry as something worth typesetting for itself. OnePoem turns fragments into collectible pages, personal templates, poetry collections, home-screen widgets, and exportable images.",
        zh: "它开始于一件很小的事：我写了一首诗，想发出去，却找不到一款真正为诗准备的排版工具。一页诗把片段做成可收藏的页面，支持个人模板、诗集、桌面小组件与图片导出。"
      },
      proof: ["Web + iOS", "PNG export", "SwiftUI bridge"],
      stack: "React · SwiftUI · WKWebView · html2canvas",
      images: ["assets/xhs/onepoem-01.webp", "assets/xhs/onepoem-02.webp"],
      alt: ["OnePoem black and gold app icon on a paper background", "OnePoem poetry page shown inside an iPhone mockup"],
      xhs: "https://www.xiaohongshu.com/explore/69f1dd72000000002003bd26?xsec_token=AB9ogIorlpEV05F8HJo_gmEdXZ8_Iuye7artkt5HTC8tI=&xsec_source=pc_user"
    },
    {
      id: "typemachine",
      year: "2026",
      type: "AI & Agents",
      title: "Type Machine",
      zhTitle: "打字机",
      index: "02",
      lead: {
        en: "Collect the loud voices around you, then hear which one is actually yours.",
        zh: "把喧嚣的声音收拢成干净文字，再慢慢听清，哪些是别人的，哪些是自己的。"
      },
      story: {
        en: "Screenshots, recordings, videos, and links used to die in my camera roll. Type Machine rebuilds ordered screenshots, removes interface noise, preserves source text, adds summaries and tags, translates when needed, and sends the result to Flomo through an asynchronous multimodal pipeline.",
        zh: "截图、录屏、播客和链接曾经都死在相册与收藏夹里。打字机用异步多模态流水线重建连续截图、过滤界面噪音、保留原文、生成摘要与标签，并在需要时翻译和投递到 Flomo。"
      },
      proof: ["v1.2 shipped", "Open registration", "Async queue"],
      stack: "Next.js 15 · React 19 · OCR · ffmpeg · SQLite",
      images: ["assets/xhs/typemachine-01.webp", "assets/xhs/typemachine-02.webp"],
      alt: ["Type Machine landing page explaining how saved content becomes usable text", "Type Machine product page listing real capture scenarios"],
      live: "https://app.type-machine.com",
      github: "https://github.com/onemapl3/type-machine",
      xhs: "https://www.xiaohongshu.com/explore/69e7518c000000002102f6fa?xsec_token=ABXPQdAaMPx6nRMmEFQ2uxQCbh4GDXuZFu89r0ybKhGU8=&xsec_source=pc_user"
    },
    {
      id: "timemachine",
      year: "2026",
      type: "AI & Agents",
      title: "Time Machine",
      zhTitle: "时光机",
      index: "03",
      lead: {
        en: "A safe container for the words that have nowhere left to land.",
        zh: "用代码，为那些无处安放的话与遗憾建一个安全的容器。"
      },
      story: {
        en: "Choose a date, import text and image memories, then speak with a SecondMe digital twin that can only retrieve what was knowable before that point. A second therapeutic agent provides structured emotional reflection while the TimePortal state machine carries the journey from memory selection into streamed dialogue.",
        zh: "选择一个日期，导入文字与图片记忆，再与只能检索该时点之前信息的 SecondMe 数字分身对话。第二个疗愈 Agent 提供结构化情绪反馈，TimePortal 状态机把记忆选择、时间穿越与流式对话连成完整旅程。"
      },
      proof: ["Temporal RAG", "Dual-agent SSE", "Fly.io deployed"],
      stack: "Next.js 16 · Prisma · OAuth2 · SSE · Anthropic",
      images: ["assets/xhs/timemachine-01.webp", "assets/xhs/timemachine-02.webp"],
      alt: ["Time Machine landing page with a purple entry action and feature notes", "Time Machine dark space interface with two relationship portals"],
      live: "https://timemachine-app.fly.dev",
      github: "https://github.com/onemapl3/timemachine",
      xhs: "https://www.xiaohongshu.com/explore/69a82d78000000000e00d183?xsec_token=ABDXXaIwJcMDAg8k_BaIpBVX-UVR_9AsR_MY1pPaUEybU=&xsec_source=pc_user"
    }
  ],
  career: [
    {
      company: "Space AIC",
      role: { en: "Software Engineer", zh: "软件工程师" },
      place: { en: "Shanghai", zh: "上海" },
      dates: { en: "Mar 2026 · Present", zh: "2026.03 · 至今" },
      summary: {
        en: "Frontend and agent systems for the world's first 10,000+ satellite digital twin.",
        zh: "为全球首个万星级卫星数字孪生系统开发前端、仿真交互与智能体能力。"
      },
      details: {
        en: ["Expanded supported experiments from 1,800 to 15,000+ satellites while keeping 3D orbit and attitude playback interactive.", "Built real-time Cell and Beam rendering for 1,584-satellite experiments with H3 grids, terrain, and 16 beam cones.", "Connected Notebook, Python simulation, Express, Cesium, JupyterHub, and Docker into a model-to-grade education loop."],
        zh: ["将实验规模从 1,800 颗提升至 15,000+ 颗，并保持三维轨道与姿态回放可交互。", "为 1,584 星实验实现实时 Cell / Beam 可视化，包括 H3 网格、地形与 16 个波束锥体。", "把 Notebook、Python 仿真、Express、Cesium、JupyterHub 与 Docker 串成建模到评价闭环。"]
      },
      tags: ["React 19", "Cesium", "TypeScript", "gRPC", "RAG"]
    },
    {
      company: "Nethermind",
      role: { en: "Internship Programme · Ethereum Foundation", zh: "区块链研发实习生 · Ethereum Foundation" },
      place: { en: "Remote", zh: "远程" },
      dates: { en: "Aug · Nov 2023", zh: "2023.08 · 11" },
      summary: {
        en: "Re-architected Voyager, a StarkNet explorer, and cut roughly one second from search latency.",
        zh: "重构 StarkNet 浏览器 Voyager 的架构与搜索链路，搜索延迟减少约 1 秒。"
      },
      details: {
        en: ["Migrated services from AWS Lambda and the StarkNet gateway to ECS and RPC endpoints.", "Improved RDS retrieval with indexes and rewritten PostgreSQL queries, then decoded Cairo call-data into human-readable output."],
        zh: ["从 AWS Lambda 与 StarkNet gateway 迁移到 ECS 与 RPC endpoint。", "通过索引与 PostgreSQL 查询重写提升 RDS 检索效率，并将 Cairo call-data 解码成人类可读结果。"]
      },
      tags: ["AWS ECS", "PostgreSQL", "Cairo"]
    },
    {
      company: "Microsoft",
      role: { en: "Software Engineer · Mobile Experience", zh: "软件工程师 · Mobile Experience" },
      place: { en: "Suzhou", zh: "苏州" },
      dates: { en: "Jan · Aug 2022", zh: "2022.01 · 08" },
      summary: {
        en: "Built Windows OOBE phone pairing that lifted completion from 28.3% to 35.4%.",
        zh: "开发 Windows OOBE 手机配对流程，将完成率从 28.3% 提升至 35.4%。"
      },
      details: {
        en: ["Held a 97% API success rate at 720 RPS with microservices, async processing, caching, WebSockets, long polling, and throttling.", "Added more than 2,000 lines of unit, functional, end-to-end, and load tests plus telemetry."],
        zh: ["通过微服务、异步、缓存、WebSocket、长轮询与限流，在 720 RPS 下保持 97% API 成功率。", "补充 2,000+ 行单元、功能、端到端与负载测试，以及异常遥测。"]
      },
      tags: [".NET", "REST", "JWT", "Testing"]
    },
    {
      company: "DiDi Global",
      role: { en: "Software Development Engineer · Map Architecture", zh: "软件开发工程师 · 地图架构" },
      place: { en: "Beijing", zh: "北京" },
      dates: { en: "Jan · Dec 2021", zh: "2021.01 · 12" },
      summary: {
        en: "Rewrote six POI APIs serving 15 million users a day from PHP to Go.",
        zh: "将服务 1,500 万日活用户的 6 个 POI API 从 PHP 重写为 Go。"
      },
      details: {
        en: ["At 2,000 QPS, CPU idle improved from 36% to 73% and TP99 latency fell 51%.", "Split business logic into pluggable workflow modules and moved eight REST APIs to DiRPC with service discovery."],
        zh: ["在 2,000 QPS 下，CPU 空闲率从 36% 提升至 73%，TP99 延迟降低 51%。", "将业务逻辑拆成可插拔工作流模块，并把 8 个 REST API 迁移到带服务发现的 DiRPC。"]
      },
      tags: ["Go", "RPC", "A/B Testing", "On-call"]
    },
    {
      company: "Alibaba Cloud",
      role: { en: "Software Engineer Intern · Cloud Security", zh: "软件工程实习生 · 云安全" },
      place: { en: "Hangzhou", zh: "杭州" },
      dates: { en: "Jul · Sep 2020", zh: "2020.07 · 09" },
      summary: {
        en: "Led by-pass sniffing route traceback for SLA monitoring and network fault location.",
        zh: "主持基于旁路嗅探的路由回溯，用于 SLA 监控与网络故障定位。"
      },
      details: {
        en: ["Constructed spoofed-source VIP packet sequences with increasing TTL using Scapy, then captured and filtered mirrored traffic asynchronously."],
        zh: ["使用 Scapy 构造递增 TTL 的虚假源 VIP 数据包，并异步捕获、过滤镜像流量。"]
      },
      tags: ["Scapy", "Async I/O", "Anti-DDoS"]
    }
  ],
  photos: [
    { src: "assets/photo/xinjiang-valley.jpg", id: "XJ-01", en: "Valley and horses", zh: "山谷与马群", span: "wide" },
    { src: "assets/photo/xinjiang-horseback.jpg", id: "XJ-02", en: "From the saddle", zh: "马背上的视线", span: "tall" },
    { src: "assets/photo/xinjiang-stream.jpg", id: "XJ-03", en: "White water", zh: "白色的水", span: "standard" },
    { src: "assets/photo/xinjiang-pasture.jpg", id: "XJ-04", en: "Summer settlement", zh: "夏季牧场", span: "standard" },
    { src: "assets/photo/xinjiang-pass.jpg", id: "XJ-05", en: "The pass", zh: "山口", span: "wide" },
    { src: "assets/photo/xinjiang-garden.jpg", id: "XJ-06", en: "Garden portrait", zh: "花园里", span: "tall" }
  ],
  writing: [
    {
      year: "2026",
      category: { en: "Essay", zh: "散文" },
      title: { en: "Plum Rain Season", zh: "《梅雨季》" },
      excerpt: { en: "Shanghai is raining again. The city slows down, and the memories that remain are nearly all connected to rain.", zh: "上海又下雨了，一下就是一周。整个世界都会慢下来，连呼吸都变轻。我最深的回忆，几乎都和雨有关。" },
      status: { en: "Draft · long-form", zh: "草稿 · 长文" }
    },
    {
      year: "2026",
      category: { en: "Personal study", zh: "关系研究" },
      title: { en: "When Fear Defeats Love", zh: "当恐惧战胜爱" },
      excerpt: { en: "What separated us was never a lack of love. The fear each of us carried into the relationship was heavier than love.", zh: "真正拆散我们的从来不是爱得不够深。是我们各自带进来的恐惧，比爱更重。" },
      status: { en: "Working manuscript", zh: "写作中" }
    },
    {
      year: "2026.03.13",
      category: { en: "Engineering postmortem", zh: "工程复盘" },
      title: { en: "Account Merge Data Loss", zh: "账号合并数据丢失" },
      excerpt: { en: "A reversed merge direction deleted 37 memories, 71 conversations, and 680 messages. PITR recovered the data; tests and safety guards changed the process.", zh: "一次写反的合并方向删除了 37 条记忆、71 个对话与 680 条消息。PITR 找回数据，测试、守卫与备份随后成为强制流程。" },
      status: { en: "Published internally", zh: "内部发布" }
    },
    {
      year: "2026",
      category: { en: "Lyrics", zh: "歌词" },
      title: { en: "Daydream", zh: "白日梦" },
      excerpt: { en: "Let me stay while the whole world is waking. I remain in the love I misplaced.", zh: "当整个世界醒来，让我仍留在这场白日梦里。" },
      status: { en: "Demo lyrics", zh: "Demo 歌词" }
    }
  ]
};

window.portfolioData = portfolioData;
