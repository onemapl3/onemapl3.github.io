const { useEffect, useMemo, useRef, useState } = React;

function copy(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function Icon({ name, size = 18, strokeWidth = 1.7 }) {
  return <i data-lucide={name} style={{ width: size, height: size }} data-stroke-width={strokeWidth}></i>;
}

function Masthead({ lang, setLang, navOpen, setNavOpen, openIndex, navigation }) {
  return (
    <header className="masthead">
      <a className="wordmark" href="#top" aria-label="OneMaple home">
        <img src="assets/profile/logo.png" alt="" aria-hidden="true" />
        <span>OneMaple</span>
      </a>
      <nav className={navOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setNavOpen(false)}>
            {lang === "en" ? item.en : item.zh}
          </a>
        ))}
      </nav>
      <div className="masthead-actions">
        <button className="language-button" type="button" onClick={() => setLang(lang === "en" ? "zh" : "en")}>
          {lang === "en" ? "中" : "EN"}
        </button>
        <button className="icon-button desktop-index" type="button" onClick={openIndex} aria-label="Open index" title="Index">
          <Icon name="search" />
        </button>
        <button className="icon-button mobile-menu" type="button" onClick={() => setNavOpen(!navOpen)} aria-label={navOpen ? "Close menu" : "Open menu"} aria-expanded={navOpen}>
          <Icon name={navOpen ? "x" : "menu"} />
        </button>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  return (
    <section id="top" className="hero" data-screen-label="Home">
      <img className="hero-image" src="assets/photo/xinjiang-valley.jpg" alt="Horses crossing a river in a mountain valley in Xinjiang" />
      <div className="hero-scrim"></div>
      <div className="hero-copy">
        <div className="hero-kicker">2026 · Shanghai · No. 05</div>
        <h1>Fengyi Zhang</h1>
        <p className="hero-chinese">张丰毅 · Maple</p>
        <p className="hero-role">
          {lang === "en"
            ? "Software engineer, independent product maker, photographer, writer."
            : "软件工程师、独立产品作者、摄影师与写作者。"}
        </p>
      </div>
      <figure className="hero-portrait">
        <img src="assets/profile/fengyi.jpg" alt="Portrait of Fengyi Zhang" />
        <figcaption>{lang === "en" ? "Self portrait · 2026" : "自画像 · 2026"}</figcaption>
      </figure>
      <a className="hero-scroll" href="#projects" aria-label="Continue to projects">
        <Icon name="arrow-down" size={20} />
      </a>
    </section>
  );
}

function SectionHeading({ number, label, title, intro, tone = "paper" }) {
  return (
    <header className={`section-heading section-heading-${tone} reveal`}>
      <div className="folio">{number} / {label}</div>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}

function FilterBar({ items, active, onChange, ariaLabel }) {
  return (
    <div className="filter-bar" role="group" aria-label={ariaLabel}>
      {items.map((item) => (
        <button key={item.value} type="button" className={active === item.value ? "is-active" : ""} onClick={() => onChange(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

function ProjectDossier({ project, lang, order }) {
  return (
    <article className={`project-dossier project-order-${order} reveal`} id={project.id}>
      <div className="project-visual">
        <figure className="project-shot project-shot-primary">
          <img src={project.images[0]} alt={project.alt[0]} loading="lazy" />
          <figcaption>{project.index}.1 / {project.title}</figcaption>
        </figure>
        <figure className="project-shot project-shot-secondary">
          <img src={project.images[1]} alt={project.alt[1]} loading="lazy" />
          <figcaption>{project.index}.2 / {project.year}</figcaption>
        </figure>
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.index}</span>
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}<small>{project.zhTitle}</small></h3>
        <p className="project-lead">{copy(project.lead, lang)}</p>
        <p className="project-story">{copy(project.story, lang)}</p>
        <div className="project-proof">
          {project.proof.map((item) => <span key={item}>{item}</span>)}
        </div>
        <p className="project-stack">{project.stack}</p>
        <div className="project-links">
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live <Icon name="external-link" size={15} /></a> : null}
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <Icon name="github" size={15} /></a> : null}
          <a href={project.xhs} target="_blank" rel="noreferrer">{lang === "en" ? "Project notes" : "项目手记"} <Icon name="external-link" size={15} /></a>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ lang, projects }) {
  const [filter, setFilter] = useState("All");
  const filters = [
    { value: "All", label: lang === "en" ? "All" : "全部" },
    { value: "AI & Agents", label: "AI & Agents" },
    { value: "Tool", label: lang === "en" ? "Tools" : "工具" }
  ];
  const visible = projects.filter((project) => filter === "All" || project.type === filter);

  return (
    <section id="projects" className="projects-section" data-screen-label="Projects">
      <div className="section-inner">
        <div className="projects-intro">
          <SectionHeading
            number="I"
            label={lang === "en" ? "Selected work" : "作品选"}
            title={lang === "en" ? "Three containers for what people cannot hold alone." : "三个容器，收拢人独自无法承受的东西。"}
            intro={lang === "en" ? "A poem, a scattered archive, an unfinished goodbye. Each began as a private need and became a working product." : "一首诗、散落的信息、未完成的告别。它们都从私人的需要开始，最后成为真正可用的产品。"}
          />
          <FilterBar items={filters} active={filter} onChange={setFilter} ariaLabel="Project filter" />
        </div>
      </div>
      <div className="project-list">
        {visible.map((project, index) => <ProjectDossier key={project.id} project={project} lang={lang} order={index % 2} />)}
      </div>
    </section>
  );
}

function CareerSection({ lang, career }) {
  return (
    <section id="career" className="career-section" data-screen-label="Career">
      <div className="section-inner">
        <SectionHeading
          number="II"
          label={lang === "en" ? "Professional ledger" : "职业履历"}
          title={lang === "en" ? "Systems at human scale, systems at orbital scale." : "从人的尺度，到轨道的尺度。"}
          intro={lang === "en" ? "Distributed services, identity, blockchain infrastructure, satellite simulation, and agents. The through-line is turning complex systems into legible tools." : "分布式服务、身份系统、区块链基础设施、卫星仿真与智能体。始终在做同一件事：让复杂系统变得清晰可用。"}
        />
        <div className="career-ledger">
          {career.map((item, index) => (
            <details className="career-entry reveal" key={item.company} open={index === 0}>
              <summary>
                <span className="career-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="career-company">{item.company}<small>{copy(item.role, lang)}</small></span>
                <span className="career-summary">{copy(item.summary, lang)}</span>
                <span className="career-date">{copy(item.dates, lang)}<small>{copy(item.place, lang)}</small></span>
                <span className="career-toggle"><Icon name="plus" size={18} /></span>
              </summary>
              <div className="career-detail">
                <ul>
                  {item.details[lang].map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <div className="career-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </details>
          ))}
        </div>
        <div className="resume-row">
          <span>{lang === "en" ? "Full curriculum vitae" : "完整简历"}</span>
          <a href="assets/resume/maple-resume-en.pdf" target="_blank">PDF · EN <Icon name="download" size={15} /></a>
          <a href="assets/resume/maple-resume-zh.pdf" target="_blank">PDF · 中文 <Icon name="download" size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function PhotographySection({ lang, photos, openLightbox }) {
  const [year, setYear] = useState("2026");
  const years = ["2026", "2025", "2024", "2023"];
  return (
    <section id="photography" className="photography-section" data-screen-label="Photographs">
      <div className="section-inner photography-heading">
        <SectionHeading
          number="III"
          label={lang === "en" ? "Photographs" : "摄影"}
          title={lang === "en" ? "Xinjiang, on horseback and on foot." : "新疆，在马背上，也在路上。"}
          intro={lang === "en" ? "A first contact sheet for the independent photography archive. The annual index is ready for future journeys." : "独立摄影站的第一张联系表。年度索引已经留好，等待之后的旅途慢慢填入。"}
          tone="dark"
        />
        <div className="year-tabs" role="tablist" aria-label="Photography year">
          {years.map((item) => (
            <button key={item} type="button" role="tab" aria-selected={year === item} className={year === item ? "is-active" : ""} onClick={() => setYear(item)}>{item}</button>
          ))}
        </div>
      </div>
      {year === "2026" ? (
        <div className="contact-sheet">
          {photos.map((photo, index) => (
            <button className={`photo-plate photo-${photo.span} reveal`} type="button" key={photo.id} onClick={() => openLightbox(index)}>
              <img src={photo.src} alt={`${copy({ en: photo.en, zh: photo.zh }, lang)}, Xinjiang 2026`} loading="lazy" />
              <span><b>{photo.id}</b>{lang === "en" ? photo.en : photo.zh}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="archive-empty">
          <span>{year}</span>
          <p>{lang === "en" ? "Annual edit not yet catalogued." : "这一年的影像还没有编目。"}</p>
        </div>
      )}
      <div className="photo-footer section-inner">
        <span>photographs.onemaple.xyz</span>
        <span>{lang === "en" ? "Standalone archive · planned" : "独立摄影档案 · 筹备中"}</span>
      </div>
    </section>
  );
}

function WritingSection({ lang, writing }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Essay", "Personal study", "Engineering postmortem", "Lyrics"];
  const visible = writing.filter((item) => filter === "All" || item.category.en === filter);
  const labels = {
    All: lang === "en" ? "All" : "全部",
    Essay: lang === "en" ? "Essay" : "散文",
    "Personal study": lang === "en" ? "Personal study" : "关系研究",
    "Engineering postmortem": lang === "en" ? "Engineering" : "工程",
    Lyrics: lang === "en" ? "Lyrics" : "歌词"
  };
  return (
    <section id="writing" className="writing-section" data-screen-label="Writing">
      <div className="section-inner">
        <div className="writing-intro">
          <SectionHeading
            number="IV"
            label={lang === "en" ? "Writing register" : "文字索引"}
            title={lang === "en" ? "Field notes from systems, weather, and attachment." : "关于系统、天气与依恋的田野笔记。"}
            intro={lang === "en" ? "Essays, engineering notes, lyrics, and long-form drafts. Full reading pages will grow from this index." : "散文、工程笔记、歌词与长文草稿。之后的完整阅读页会从这个索引继续生长。"}
          />
          <FilterBar items={categories.map((value) => ({ value, label: labels[value] }))} active={filter} onChange={setFilter} ariaLabel="Writing filter" />
        </div>
        <div className="writing-list">
          {visible.map((item, index) => (
            <article className="writing-entry reveal" key={item.title.en}>
              <span className="writing-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="writing-date">{item.year}<small>{copy(item.category, lang)}</small></div>
              <h3>{copy(item.title, lang)}</h3>
              <p>{copy(item.excerpt, lang)}</p>
              <span className="writing-status">{copy(item.status, lang)}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = String(Math.floor(value % 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function MusicSection({ lang }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }, [playing]);

  function seek(event) {
    const next = Number(event.target.value);
    if (audioRef.current) audioRef.current.currentTime = next;
    setTime(next);
  }

  return (
    <section id="music" className="music-section" data-screen-label="Music">
      <div className="section-inner music-layout">
        <SectionHeading
          number="V"
          label={lang === "en" ? "Home recordings" : "家庭录音"}
          title={lang === "en" ? "Songs kept in draft until they tell the truth." : "让歌留在草稿里，直到它说出真话。"}
          intro={lang === "en" ? "One private rough mix and a growing lyric book. The archive will expand track by track." : "一份私有 rough mix，一本还在长大的歌词册。这个档案会一首一首地继续。"}
          tone="dark"
        />
        <div className="audio-ledger reveal">
          <audio
            ref={audioRef}
            src="assets/audio/yu-zai-rough-preview.mp3"
            preload="metadata"
            muted={muted}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 60)}
            onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
            onEnded={() => setPlaying(false)}
          ></audio>
          <div className="record-label">Rough mix · 60 sec excerpt · 2026</div>
          <div className="track-title"><span>01</span><h3>鱼仔 v2</h3><small>{lang === "en" ? "Home session" : "家庭录音"}</small></div>
          <div className="audio-controls">
            <button className="audio-play" type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause preview" : "Play preview"}>
              <Icon name={playing ? "pause" : "play"} size={22} />
            </button>
            <span>{formatTime(time)}</span>
            <input type="range" min="0" max={duration || 60} step="0.1" value={time} onChange={seek} aria-label="Audio position" />
            <span>{formatTime(duration)}</span>
            <button className="audio-mute" type="button" onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute" : "Mute"}>
              <Icon name={muted ? "volume-x" : "volume-2"} size={18} />
            </button>
          </div>
          <div className="track-list">
            <div><span>02</span><strong>Daydream</strong><small>{lang === "en" ? "lyrics · demo" : "歌词 · demo"}</small></div>
            <div><span>03</span><strong>{lang === "en" ? "Next recording" : "下一次录音"}</strong><small>{lang === "en" ? "open reel" : "空白母带"}</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ lang }) {
  return (
    <footer className="site-footer" data-screen-label="Contact">
      <div className="section-inner footer-grid">
        <div className="footer-title">
          <span>VI / {lang === "en" ? "Contact" : "联系"}</span>
          <h2>{lang === "en" ? "Write a proper letter." : "写一封认真的信。"}</h2>
        </div>
        <div className="footer-contact">
          <a href="mailto:me.fzhang@gmail.com">me.fzhang@gmail.com <Icon name="arrow-up-right" size={17} /></a>
          <a href="https://github.com/onemapl3" target="_blank" rel="noreferrer">GitHub <Icon name="github" size={17} /></a>
          <a href="https://www.linkedin.com/in/fengyizhang-profile" target="_blank" rel="noreferrer">LinkedIn <Icon name="linkedin" size={17} /></a>
        </div>
        <p>{lang === "en" ? "Open to software and AI engineering, independent-product collaborations, photography commissions, and thoughtful correspondence." : "欢迎软件与 AI 工程机会、独立产品合作、摄影委托，以及认真写来的信。"}</p>
        <div className="footer-mark">OneMaple<br /><small>Shanghai · 2026</small></div>
      </div>
    </footer>
  );
}

function Lightbox({ photo, lang, close, previous, next }) {
  if (!photo) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={close}>
      <button type="button" className="lightbox-close icon-button" onClick={close} aria-label="Close photograph"><Icon name="x" size={22} /></button>
      <button type="button" className="lightbox-prev icon-button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photograph"><Icon name="arrow-left" size={22} /></button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={`${lang === "en" ? photo.en : photo.zh}, Xinjiang 2026`} />
        <figcaption><b>{photo.id}</b><span>{lang === "en" ? photo.en : photo.zh}</span><span>Xinjiang · 2026</span></figcaption>
      </figure>
      <button type="button" className="lightbox-next icon-button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photograph"><Icon name="arrow-right" size={22} /></button>
    </div>
  );
}

function CommandIndex({ open, close, lang, navigation, projects }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const items = useMemo(() => [
    ...navigation.map((item) => ({ label: lang === "en" ? item.en : item.zh, meta: lang === "en" ? "Chapter" : "章节", id: item.id })),
    ...projects.map((project) => ({ label: `${project.title} ${project.zhTitle}`, meta: project.year, id: project.id }))
  ], [lang, navigation, projects]);
  const filtered = items.filter((item) => `${item.label} ${item.meta}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  if (!open) return null;
  function select(id) {
    close();
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 20);
  }
  return (
    <div className="command-backdrop" role="presentation" onClick={close}>
      <div className="command-index" role="dialog" aria-modal="true" aria-label="Site index" onClick={(event) => event.stopPropagation()}>
        <div className="command-search">
          <Icon name="search" />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={lang === "en" ? "Search the index" : "搜索索引"} />
          <button type="button" onClick={close} aria-label="Close index"><Icon name="x" size={18} /></button>
        </div>
        <div className="command-results">
          {filtered.map((item) => (
            <button type="button" key={`${item.id}-${item.label}`} onClick={() => select(item.id)}>
              <span>{item.label}</span><small>{item.meta}</small><Icon name="arrow-right" size={16} />
            </button>
          ))}
          {!filtered.length ? <p>{lang === "en" ? "No entry found." : "没有找到条目。"}</p> : null}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Masthead,
  Hero,
  ProjectsSection,
  CareerSection,
  PhotographySection,
  WritingSection,
  MusicSection,
  SiteFooter,
  Lightbox,
  CommandIndex
});
