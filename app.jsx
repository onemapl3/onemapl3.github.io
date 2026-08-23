function CareerPortfolioApp() {
  const [lang, setLang] = React.useState(() => localStorage.getItem("fengyi-career-language") || "zh");
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("fengyi-career-language", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = "Maple’s Portfolio";
  }, [lang]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.65 } });
  });

  return (
    <div className="site-shell" data-lang={lang}>
      <Header lang={lang} setLang={setLang} navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero lang={lang} />
        <CareerSection lang={lang} />
        <ProjectsSection lang={lang} />
        <SkillsSection lang={lang} />
        <EducationSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CareerPortfolioApp />);
