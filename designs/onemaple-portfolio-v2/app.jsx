function App() {
  const data = window.portfolioData;
  const [lang, setLang] = React.useState(() => localStorage.getItem("onemaple-language") || "zh");
  const [navOpen, setNavOpen] = React.useState(false);
  const [indexOpen, setIndexOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);

  React.useEffect(() => {
    localStorage.setItem("onemaple-language", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = lang === "zh" ? "张丰毅 | OneMaple" : "Fengyi Zhang | OneMaple";
  }, [lang]);

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.7 } });
  });

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIndexOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setIndexOpen(false);
        setLightboxIndex(-1);
        setNavOpen(false);
      }
      if (lightboxIndex >= 0 && event.key === "ArrowRight") {
        setLightboxIndex((value) => (value + 1) % data.photos.length);
      }
      if (lightboxIndex >= 0 && event.key === "ArrowLeft") {
        setLightboxIndex((value) => (value - 1 + data.photos.length) % data.photos.length);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [data.photos.length, lightboxIndex]);

  React.useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [lang]);

  React.useEffect(() => {
    document.body.classList.toggle("overlay-open", indexOpen || lightboxIndex >= 0 || navOpen);
  }, [indexOpen, lightboxIndex, navOpen]);

  return (
    <div className="site-shell" data-lang={lang}>
      <Masthead
        lang={lang}
        setLang={setLang}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        openIndex={() => setIndexOpen(true)}
        navigation={data.navigation}
      />
      <main>
        <Hero lang={lang} />
        <ProjectsSection lang={lang} projects={data.projects} />
        <CareerSection lang={lang} career={data.career} />
        <PhotographySection lang={lang} photos={data.photos} openLightbox={setLightboxIndex} />
        <WritingSection lang={lang} writing={data.writing} />
        <MusicSection lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <Lightbox
        photo={lightboxIndex >= 0 ? data.photos[lightboxIndex] : null}
        lang={lang}
        close={() => setLightboxIndex(-1)}
        previous={() => setLightboxIndex((value) => (value - 1 + data.photos.length) % data.photos.length)}
        next={() => setLightboxIndex((value) => (value + 1) % data.photos.length)}
      />
      <CommandIndex
        open={indexOpen}
        close={() => setIndexOpen(false)}
        lang={lang}
        navigation={data.navigation}
        projects={data.projects}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
