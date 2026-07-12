import React, { useEffect, useMemo, useState } from "react";

const projectScreenshotModules = import.meta.glob(
  "../images/project/{webdev,mobileapp,ui-ux}/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true }
);

const sortScreenshotPaths = (entries) => {
  const getOrderKey = (path) => {
    const file = path.split("/").pop() || "";
    const name = file.split(".")[0];
    const num = parseInt(name, 10);
    return Number.isNaN(num) ? 999999 : num;
  };

  return entries
    .sort(([a], [b]) => getOrderKey(a) - getOrderKey(b))
    .map(([, mod]) => mod.default);
};

const buildScreenshotSets = (modules) => {
  const grouped = {};

  for (const [path, mod] of Object.entries(modules)) {
    const match = path.match(/\/(webdev|mobileapp|ui-ux)\/([^/]+)\//);
    if (!match) continue;

    const folder = match[2];
    if (!grouped[folder]) grouped[folder] = [];
    grouped[folder].push([path, mod]);
  }

  return Object.fromEntries(
    Object.entries(grouped).map(([folder, entries]) => [
      folder,
      sortScreenshotPaths(entries),
    ])
  );
};

const Projects = () => {
  const [activeCarousel, setActiveCarousel] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const screenshotSets = useMemo(
    () => buildScreenshotSets(projectScreenshotModules),
    []
  );

  const currentImages = activeCarousel
    ? screenshotSets[activeCarousel] || []
    : [];

  const openCarousel = (key, start = 0) => {
    const images = screenshotSets[key];
    if (!images?.length) {
      alert("No screenshots found for this project.");
      return;
    }
    setActiveCarousel(key);
    setCarouselIndex(start);
  };

  const closeCarousel = () => {
    setActiveCarousel(null);
    setCarouselIndex(0);
  };

  const next = () =>
    setCarouselIndex((i) => (i + 1) % currentImages.length);

  const prev = () =>
    setCarouselIndex(
      (i) => (i - 1 + currentImages.length) % currentImages.length
    );

  useEffect(() => {
    if (!activeCarousel) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCarousel, currentImages.length]);

  const featuredProjects = [
    {
      title: "Club and Event Management System",
      description:
        "A secure and comprehensive Laravel full-stack system designed to streamline event registration, club membership records, and attendance monitoring for campus activities.",
      icon: "fa-solid fa-users-gear",
      badges: ["#1 SYSTEM APP", "LARAVEL CORE", "SQL DATABASE"],
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      links: {
        github: "https://github.com/peterGwapo29/System",
        demo: null,
      },
      screenshotsKey: "club-event-management-system",
      carouselTitle: "Club and Event Management System Screenshots",
      featuredIn: "University Campus Portal / Beta Testing v2.1",
    },
    {
      title: "CashiPay Management System",
      description:
        "An offline-first JavaFX desktop application featuring advanced ledger record tracking, interactive balance sheets, and animations for quick treasury accounts reconciliation.",
      icon: "fa-solid fa-wallet",
      badges: ["#1 FINANCE APP", "DESKTOP JAVA", "OFFLINE LEDGER"],
      tech: ["JavaFX", "CSS", "SQLite"],
      links: {
        github: null,
        demo: null,
      },
      screenshotsKey: "cashipay",
      carouselTitle: "CashiPay Application Screenshots",
      featuredIn: "Accounting Class Project / Student Treasury Utility",
    },
    {
      title: "Click Clutch",
      description:
        "A responsive esports organization landing site for a premier Call of Duty Mobile team — featuring roster showcases, match schedules, merch pages, and a bold competitive brand experience deployed on Vercel.",
      icon: "fa-solid fa-crosshairs",
      badges: ["WEB DEV", "ESPORTS", "VERCEL DEPLOY"],
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      links: {
        github: null,
        demo: "https://click-clutch-o2bawvv5j-petergwapo29s-projects.vercel.app/index.html",
      },
      screenshotsKey: "click-clutch",
      carouselTitle: "Click Clutch Website Screenshots",
      featuredIn: "Call of Duty Mobile Esports / Organization Landing Site",
    },
    {
      title: "GradePad Student Portal",
      description:
        "A Flutter mobile app where teachers push grades, scores, and oral marks to students who can only view their records. Built with offline-first SQLite storage and Firebase sync, plus attendance tracking and a to-do list for grading workflows.",
      icon: "fa-solid fa-graduation-cap",
      badges: ["MOBILE APP", "FLUTTER", "OFFLINE/ONLINE SYNC"],
      tech: ["Flutter", "Dart", "SQLite", "Firebase"],
      links: {
        github: null,
        demo: null,
      },
      screenshotsKey: "gradepad",
      carouselTitle: "GradePad Mobile App Screenshots",
      featuredIn: "Academic Grade Management / Student Portal",
    },
    {
      title: "Vero Mobile App",
      description:
        "A high-fidelity mobile UI for an eco-community platform — featuring splash and login flows, event discovery for tree planting and coastal cleanups, and gamified reward badges. Designed in Figma with a clean teal-and-green visual system.",
      icon: "fa-solid fa-leaf",
      badges: ["MOBILE UI", "FIGMA DESIGN", "ECO PLATFORM"],
      tech: ["Figma", "UI/UX Design", "Mobile Prototyping"],
      links: {
        github: null,
        demo: "https://www.figma.com/design/FxsWHsMoLpUbj21FJ7qw0q/vero?node-id=0-1",
      },
      screenshotsKey: "vero",
      carouselTitle: "Vero Mobile App Screenshots",
      featuredIn: "Eco-Community Events / Mobile UI Concept",
    },
  ];

  const otherProjects = [
    {
      title: "Weather App",
      category: "WEB APP",
      desc: "Interactive weather dashboard fetching real-time APIs with location searches.",
      link: "https://weather-app-kappa-gray-93.vercel.app/",
      screenshotsKey: "weather-app",
    },
    {
      title: "ROG Asus Clone",
      category: "UI DESIGN",
      desc: "High-fidelity Figma mockup redesigning the Asus ROG laptop store interface.",
      link: "https://www.figma.com/design/OfhqyjbhM92plO7RwZKJtL/Shopping-cart?node-id=142-862",
      screenshotsKey: "rog-asus-clone",
    },
    {
      title: "Payment Transfer System",
      category: "UI DESIGN",
      desc: "Web & mobile UI templates for treasury tracking dashboards and transactions.",
      link: "https://www.figma.com/design/MOYpGEp43Z9tdP2JwtSaAr/Payment-System?node-id=0-1",
      screenshotsKey: "payment-transfer-system",
    },
    {
      title: "FootPrint Travel UI",
      category: "UI/UX",
      desc: "Interactive itinerary maps and journal timeline pages for a mobile social travel app.",
      link: "https://www.figma.com/design/nFjGBTsfSLcjGocKTC5kWu/Figma-mobile-app?node-id=102-87",
      screenshotsKey: "footprint-travel",
    },
    {
      title: "Business Card Concept",
      category: "GRAPHIC",
      desc: "Double-sided premium business card design and digital layouts in Figma.",
      link: "https://www.figma.com/design/kBR6R9Mn8vGQ5ajJxAJIw7/mekykbusiness?node-id=0-1",
      screenshotsKey: "business-card-concept",
    },
  ];

  const carouselTitles = Object.fromEntries(
    [...featuredProjects, ...otherProjects]
      .filter((p) => p.carouselTitle || p.title)
      .map((p) => [
        p.screenshotsKey,
        p.carouselTitle || `${p.title} Screenshots`,
      ])
  );

  const activeCarouselTitle =
    carouselTitles[activeCarousel] || "Project Screenshots";

  const hasProjectActions = (project) =>
    project.links?.github ||
    project.links?.demo ||
    (project.screenshotsKey && screenshotSets[project.screenshotsKey]?.length);

  const hasScreenshots = (key) =>
    key && screenshotSets[key]?.length > 0;

  return (
    <section className="page-section">
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          projects
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          Products and systems I've designed and shipped — spanning full-stack
          web platforms, mobile apps, desktop utilities, and high-fidelity UI
          prototypes.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {featuredProjects.map((p, i) => (
          <div
            key={i}
            className="bg-[#121214] border border-zinc-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-zinc-800 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-2xl text-[#fca311] shrink-0 border border-zinc-700/50">
              <i className={p.icon}></i>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-zinc-800 bg-[#0c0c0d] text-zinc-500 tracking-wider"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold text-white mb-2 font-mono">
                {p.title}
              </h2>

              <p className="text-zinc-400 text-sm mb-6 leading-relaxed max-w-2xl">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-appstore-btn"
                  >
                    <i className="devicon-github-original text-base"></i>
                    <span>Download on GitHub</span>
                  </a>
                )}

                {hasScreenshots(p.screenshotsKey) && (
                  <button
                    onClick={() => openCarousel(p.screenshotsKey, 0)}
                    className="project-appstore-btn"
                  >
                    <i className="fa-solid fa-images text-base"></i>
                    <span>View Screenshots</span>
                  </button>
                )}

                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-playstore-btn"
                  >
                    <i className="fa-solid fa-play text-white text-xs"></i>
                    <span>Get Live Demo</span>
                  </a>
                )}

                {!hasProjectActions(p) && (
                  <button
                    onClick={() =>
                      alert("Live demo files not publicly hosted yet.")
                    }
                    className="project-playstore-btn"
                  >
                    <i className="fa-solid fa-circle-exclamation text-zinc-400 text-xs"></i>
                    <span>Request Access</span>
                  </button>
                )}
              </div>

              <div className="border-t border-zinc-950 pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-zinc-500 font-mono gap-2">
                <div>
                  <span className="text-zinc-600">FEATURED IN:</span>{" "}
                  {p.featuredIn}
                </div>
                <div>
                  <span className="text-zinc-600">TECH:</span>{" "}
                  {p.tech.join(" / ")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">
          all secondary releases
        </h3>

        <div className="border border-zinc-900 rounded-2xl overflow-hidden bg-[#0c0c0d]">
          {otherProjects.map((op, idx) => (
            <div
              key={idx}
              className="list-row flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center gap-3 sm:gap-4 text-zinc-400"
            >
              <div className="sm:col-span-3 flex items-center">
                <span className="font-mono font-bold text-sm text-[#e4e4e7]">
                  {op.title}
                </span>
              </div>

              <div className="sm:col-span-2 flex">
                <span className="text-[10px] font-mono border border-zinc-805 bg-[#121214] px-2 py-0.5 rounded tracking-wide text-zinc-500 font-semibold uppercase">
                  {op.category}
                </span>
              </div>

              <div className="sm:col-span-5 text-xs font-sans leading-relaxed text-zinc-500">
                {op.desc}
              </div>

              <div className="sm:col-span-2 flex items-center justify-end gap-2">
                {hasScreenshots(op.screenshotsKey) && (
                  <button
                    onClick={() => openCarousel(op.screenshotsKey, 0)}
                    className="text-[10px] font-mono px-2.5 py-1 rounded border border-zinc-800 bg-[#121214] text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    Screenshots
                  </button>
                )}
                <a
                  href={op.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 hover:text-white text-sm transition-colors"
                  aria-label={`Open ${op.title}`}
                >
                  ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeCarousel && currentImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeCarousel}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-[#0c0c0d]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 bg-[#0c0c0d]">
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-white font-mono">
                  {activeCarouselTitle}
                </h3>
                <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                  View {carouselIndex + 1} of {currentImages.length}
                </p>
              </div>

              <button
                className="w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-800 transition flex items-center justify-center text-white text-sm"
                onClick={closeCarousel}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="relative bg-black flex items-center justify-center h-[55vh]">
              <img
                src={currentImages[carouselIndex]}
                alt={`${activeCarousel}-screenshot-${carouselIndex}`}
                className="max-h-full max-w-full object-contain select-none p-4"
                draggable={false}
              />

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 transition flex items-center justify-center text-white text-lg font-mono focus:outline-none"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 transition flex items-center justify-center text-white text-lg font-mono focus:outline-none"
              >
                ›
              </button>
            </div>

            <div className="p-4 border-t border-zinc-900 bg-[#0c0c0d] flex flex-col gap-3">
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {currentImages.map((img, idx) => {
                  const active = idx === carouselIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className={`shrink-0 rounded-md overflow-hidden border-2 transition ${
                        active
                          ? "border-[#fca311]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`thumb-${idx}`}
                        className="h-10 w-16 object-cover"
                        draggable={false}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-zinc-500 text-xs font-mono">
                <button
                  onClick={prev}
                  className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 transition"
                >
                  ◀ Prev
                </button>
                <span>Tip: Click arrows to navigate. Press ESC to close.</span>
                <button
                  onClick={next}
                  className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 transition"
                >
                  Next ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
