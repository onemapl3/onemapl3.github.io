const { useMemo, useState, useEffect } = React;

function copy(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function Icon({ name, size = 15, strokeWidth = 1.65 }) {
  return <i data-lucide={name} style={{ width: size, height: size }} data-stroke-width={strokeWidth}></i>;
}

function Header({ lang, setLang, navOpen, setNavOpen }) {
  const data = window.careerPortfolioData;
  const resumeHref = lang === "zh" ? "assets/resume/maple-resume-zh.pdf" : "assets/resume/maple-resume-en.pdf";
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Maple Zhang home">
          <img src="assets/profile/logo.png" alt="" aria-hidden="true" />
          <span>Maple Zhang</span>
        </a>
        <nav className={navOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {data.navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setNavOpen(false)}>{copy(item, lang)}</a>
          ))}
          <a href="#contact" onClick={() => setNavOpen(false)}>{lang === "zh" ? "联系" : "Contact"}</a>
        </nav>
        <div className="header-actions">
          <a className="resume-link" href={resumeHref} target="_blank" rel="noreferrer">{lang === "zh" ? "简历 PDF" : "Résumé PDF"}</a>
          <button className="language-toggle" type="button" onClick={() => setLang(lang === "zh" ? "en" : "zh")} aria-label="Toggle language">
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setNavOpen(!navOpen)} aria-label={navOpen ? "Close menu" : "Open menu"} aria-expanded={navOpen}>
            <Icon name={navOpen ? "x" : "menu"} size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  const data = window.careerPortfolioData;
  const titleLines = copy(data.hero.title, lang).split("\n");
  const resumeHref = lang === "zh" ? "assets/resume/maple-resume-zh.pdf" : "assets/resume/maple-resume-en.pdf";
  return (
    <section id="top" className="hero-section" data-screen-label="Career portfolio home">
      <div className="hero-copy">
        <div className="eyebrow">{copy(data.hero.kicker, lang)}</div>
        <h1>{titleLines.map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</h1>
        <p className="body-copy hero-intro">{copy(data.hero.intro, lang)}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={resumeHref} target="_blank" rel="noreferrer">{lang === "zh" ? "下载简历" : "Download résumé"}<Icon name="arrow-up-right" size={14} /></a>
          <a className="button button-quiet" href="#experience">{lang === "zh" ? "查看经历" : "Read experience"}<Icon name="arrow-down" size={14} /></a>
        </div>
      </div>
      <aside className="hero-aside">
        <div className="eyebrow">Selected evidence</div>
        <div className="evidence-list">
          {data.evidence.map((item) => <div className="evidence-item" key={item.value}><strong>{item.value}</strong><span className="body-copy">{copy(item, lang)}</span></div>)}
        </div>
        <p className="hero-aside-note body-copy">{lang === "zh" ? "后端与分布式系统出身，也能借助 AI 完成端到端产品交付。" : "Backend and distributed-systems depth, with the ability to ship AI products end to end."}</p>
      </aside>
    </section>
  );
}

function SectionIntro({ kicker, title, description, lang }) {
  const lines = copy(title, lang).split("\n");
  return (
    <div className="section-intro">
      <div><div className="eyebrow">{copy(kicker, lang)}</div><h2>{lines.map((line, index) => <React.Fragment key={line}>{index > 0 && <br />}{line}</React.Fragment>)}</h2></div>
      <p className="body-copy">{copy(description, lang)}</p>
    </div>
  );
}

function CareerRow({ item, lang }) {
  return (
    <details className="career-entry">
      <summary>
        <span className="career-year">{item.year}</span>
        <span className="career-company"><strong>{item.company}</strong><em>{copy(item.role, lang)}</em><small>{copy(item.category, lang)}</small></span>
        <span className="career-summary body-copy">{copy(item.summary, lang)}<small>{item.stack}</small></span>
        <span className="career-impact">{item.impact.value}<small>{copy(item.impact, lang)}</small></span>
        <span className="career-chevron"><Icon name="chevron-down" size={16} /></span>
      </summary>
      <div className="career-detail">
        <div className="career-detail-meta body-copy">{copy(item.dates, lang)}<br />{copy(item.place, lang)}</div>
        <ul className="body-copy">{item.details[lang].map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <div className="career-detail-stack">{item.stack}</div>
      </div>
    </details>
  );
}

function CareerSection({ lang }) {
  const data = window.careerPortfolioData;
  return (
    <section id="experience" className="section-block">
      <SectionIntro
        lang={lang}
        kicker={{ en: "Selected experience · 经历", zh: "Selected experience · 经历" }}
        title={{ en: "Five systems,\nfive different scales.", zh: "五段经历，\n五种系统尺度。" }}
        description={{ en: "Each entry adds the context beyond a résumé bullet: why the system needed to change, what constraints mattered, what I owned, and how the result was measured.", zh: "每一段经历都补充简历之外的背景：系统为什么要改、约束是什么、我负责哪一部分、最后如何验证结果。数字出现于上下文中，而不是被做成仪表盘。" }}
      />
      <div className="section-meta"><span>{lang === "zh" ? "2020 — 至今" : "2020 — now"}</span><span>5 roles</span></div>
      <div className="career-ledger">{data.career.map((item) => <CareerRow key={item.id} item={item} lang={lang} />)}</div>
    </section>
  );
}

function ProjectRow({ item, lang }) {
  return (
    <article className="project-entry" id={item.id}>
      <div className="project-year">{item.year}</div>
      <div className="project-name"><h3>{item.title}</h3><p className="body-copy">{item.zhTitle}</p><small>{item.category}</small></div>
      <div className="project-description body-copy">{copy(item.description, lang)}<span>{item.stack}</span></div>
      <div className="project-links">
        {item.links.length ? item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<Icon name="arrow-up-right" size={12} /></a>) : <span className="project-status">{copy(item.status, lang)}</span>}
      </div>
    </article>
  );
}

function ProjectsSection({ lang }) {
  const data = window.careerPortfolioData;
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", en: "All", zh: "全部" },
    { id: "ai", en: "AI & Agents", zh: "AI 与 Agents" },
    { id: "tools", en: "Tools", zh: "工具" }
  ];
  const visible = useMemo(() => filter === "all" ? data.projects : data.projects.filter((item) => item.filter === filter), [filter, data.projects]);
  return (
    <section id="projects" className="section-block projects-block">
      <SectionIntro
        lang={lang}
        kicker={{ en: "Selected works · 项目", zh: "Selected works · 项目" }}
        title={{ en: "Things I made\nto see if they would work.", zh: "我做过的东西，\n用来验证一个想法。" }}
        description={{ en: "Five selected projects, newest first. Public work links directly to the live product, repository, or release note; work in progress is labelled honestly.", zh: "五个项目，由新到旧。已经上线的产品直接连接真实网站、代码仓库与发布记录；仍在构建的项目如实标明当前阶段。" }}
      />
      <div className="filter-bar">{filters.map((item) => <button key={item.id} type="button" className={filter === item.id ? "filter-button is-active" : "filter-button"} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{copy(item, lang)}</button>)}<span className="filter-count">{visible.length} / {data.projects.length}</span></div>
      <div className="project-ledger">{visible.map((item) => <ProjectRow key={item.id} item={item} lang={lang} />)}</div>
    </section>
  );
}

function SkillsSection({ lang }) {
  const data = window.careerPortfolioData;
  return (
    <section id="skills" className="section-block split-block">
      <aside className="section-side"><div className="eyebrow">Index</div><span className="is-current">{lang === "zh" ? "核心工程" : "Core engineering"}</span><span>{lang === "zh" ? "AI 与 Agent" : "AI engineering"}</span><span>{lang === "zh" ? "云与数据" : "Cloud & data"}</span><span>{lang === "zh" ? "产品交付" : "Product delivery"}</span></aside>
      <div className="section-content"><div className="eyebrow">Technical practice · 技能</div><h2>{lang === "zh" ? "技能是经历的索引。" : "Skills, as an index of practice."}</h2><p className="body-copy section-lead">{lang === "zh" ? "不做 Logo 云，也不堆满所有工具。只保留能被工作经历和项目案例证明的能力。" : "No logo cloud, no exhaustive inventory. Only the abilities that the work and projects can prove."}</p><div className="skill-table">{data.skills.map((skill) => <div className="skill-row" key={skill.en}><strong>{copy(skill, lang)}</strong><span>{skill.value}</span></div>)}</div></div>
    </section>
  );
}

function EducationSection({ lang }) {
  const data = window.careerPortfolioData;
  return (
    <section id="education" className="section-block education-block">
      <div className="eyebrow">Education · 教育</div><h2>{lang === "zh" ? "研究方向，仍然延伸到产品。" : "Research that keeps moving into products."}</h2>
      <div className="education-list">{data.education.map((item) => <div className="education-row" key={item.school}><div><h3>{lang === "zh" ? item.zhSchool : item.school}</h3><p className="body-copy">{lang === "zh" ? item.zhDegree : item.degree}</p></div><div className="education-meta">{item.dates}<br />{item.gpa}</div></div>)}</div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer id="contact" className="site-footer"><div><div className="eyebrow">Open to the right problem · 联系</div><h2>{lang === "zh" ? "如果你正在构建复杂的东西，聊聊。" : "If you are building something complex, let's talk."}</h2></div><div className="footer-links"><a href="mailto:me.fzhang@gmail.com">me.fzhang@gmail.com <Icon name="arrow-up-right" size={13} /></a><a href="https://www.linkedin.com/in/fengyizhang-profile" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up-right" size={13} /></a><a href="https://github.com/onemapl3" target="_blank" rel="noreferrer">GitHub <Icon name="arrow-up-right" size={13} /></a></div><p className="footer-note">{lang === "zh" ? "张丰毅 · 上海 / 可远程 · 2026" : "Fengyi Zhang · Shanghai / Remote · 2026"}</p></footer>
  );
}

Object.assign(window, { Header, Hero, CareerSection, ProjectsSection, SkillsSection, EducationSection, Footer });
