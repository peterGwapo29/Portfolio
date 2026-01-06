import React, { useEffect, useMemo, useState } from "react";

import project1 from "../images/project/project1.png";
import project2 from "../images/project/project2.png";

// UI
import UI1 from "../images/project/UI/UX/UI1.png";
import UI2 from "../images/project/UI/UX/UI2.png";
import UI3 from "../images/project/UI/UX/UI3.png";
import UI4 from "../images/project/UI/UX/UI4.png";
import UI5 from "../images/project/UI/UX/UI5.png";

const paddingCard = {
  paddingTop: "16px",
  paddingRight: "16px",
  paddingBottom: "16px",
  paddingLeft: "16px",
};


const webdevModules = import.meta.glob(
  "../images/project/webdev/*.{png,jpg,jpeg,webp,gif}",
  { eager: true }
);

const Projects = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Convert glob imports -> sorted image urls
  const webdevImages = useMemo(() => {
    const entries = Object.entries(webdevModules);

    const getOrderKey = (path) => {
      const file = path.split("/").pop() || "";
      const name = file.split(".")[0]; // "0", "32", "f5"
      const num = parseInt(name, 10);
      // numbers first, then strings like f5 at the end
      return Number.isNaN(num) ? 999999 : num;
    };

    entries.sort(([a], [b]) => getOrderKey(a) - getOrderKey(b));
    return entries.map(([, mod]) => mod.default);
  }, []);

  const openCarousel = (start = 0) => {
    if (!webdevImages.length) {
      alert("No webdev images found in src/images/project/webdev/");
      return;
    }
    setCarouselIndex(start);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => setIsCarouselOpen(false);

  const next = () =>
    setCarouselIndex((i) => (i + 1) % webdevImages.length);

  const prev = () =>
    setCarouselIndex((i) => (i - 1 + webdevImages.length) % webdevImages.length);

  // Keyboard controls for modal
  useEffect(() => {
    if (!isCarouselOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarouselOpen, webdevImages.length]);

  const webProjects = [
    {
      title: "Club and Event Management System",
      desc: "Laravel Full-Stack",
      img: project1,
      tech: ["laravel", "tailwindcss", "mysql"],
      links: {
        github: "https://github.com/peterGwapo29/System",
        demo: null,
      },
    },
    {
      title: "Weather App",
      desc: "HTMl, CSS, JavaScript, API",
      img: project2,
      tech: ["html", "css", "JavaScript"],
      links: {
        github: "https://github.com/peterGwapo29/Weather-App",
        demo: "https://weather-app-kappa-gray-93.vercel.app/",
      },
    },

    // ✅ REPLACED your "In Progress" with your actual WebDev project
    {
      type: "carousel",
      title: "CashiPay Management System", // <-- change to your webdev project name
      desc: "Javafx Desktop Application", // <-- change as you like
      img: webdevImages?.[0], // thumbnail (first image in folder)
      links: {
        github: null, // optional: put github link if you have
        demo: null, // optional: put demo link if you have
      },
    },
  ];

  const uiProjects = [
    {
      title: "ROG Clone",
      desc: "Web Base UI/UX",
      img: UI1,
      figma:
        "https://www.figma.com/design/OfhqyjbhM92plO7RwZKJtL/Shopping-cart?node-id=142-862",
    },
    {
      title: "Vero",
      desc: "Mobile UI/UX",
      img: UI2,
      figma: "https://www.figma.com/design/FxsWHsMoLpUbj21FJ7qw0q/vero?node-id=0-1",
    },
    {
      title: "Business Card",
      desc: "UI",
      img: UI3,
      figma:
        "https://www.figma.com/design/kBR6R9Mn8vGQ5ajJxAJIw7/mekykbusiness?node-id=0-1",
    },
    {
      title: "FootPrint",
      desc: "UI/UX",
      img: UI4,
      figma:
        "https://www.figma.com/design/nFjGBTsfSLcjGocKTC5kWu/Figma-mobile-app?node-id=102-87",
    },
    {
      title: "Payment System",
      desc: "Mobile/Web UI/UX",
      img: UI5,
      figma:
        "https://www.figma.com/design/MOYpGEp43Z9tdP2JwtSaAr/Payment-System?node-id=0-1",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 text-white"
      style={{ backgroundColor: "#0d1b2a" }}
    >
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>

      <h2 className="text-2xl font-bold text-center mb-8">Web Development</h2>

      <div className="flex flex-wrap justify-center gap-8 bg-gray-800 rounded-xl project-card p-6">
        {webProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => {
              if (p.type === "carousel") openCarousel(0);
            }}
            className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 relative bg-contain bg-no-repeat bg-center h-[200px] w-full max-w-[400px] rounded-xl shadow-md overflow-hidden flex items-center justify-center"
            style={{ backgroundImage: p.img ? `url(${p.img})` : "none" }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
              <h1 className="text-lg font-semibold">{p.title}</h1>
              <p className="text-lg mb-3">{p.desc}</p>

              {/* Tech icons (only for your normal projects) */}
              {p.tech && (
                <>
                  <div className="flex gap-4 text-4xl">
                    {p.tech?.includes("laravel") && (
                      <i className="devicon-laravel-original colored"></i>
                    )}
                    {p.tech?.includes("tailwindcss") && (
                      <i className="devicon-tailwindcss-original colored"></i>
                    )}
                    {p.tech?.includes("mysql") && (
                      <i className="devicon-mysql-plain-wordmark colored"></i>
                    )}
                  </div>
                  <br />
                </>
              )}

              {/* Actions */}
              <div className="flex gap-5">
                {/* Github + Demo (optional) */}
                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="devicon-github-original text-2xl hover:text-4xl duration-100"></i>
                  </a>
                )}

                {/* Eye = open carousel for the carousel project, else normal demo behavior */}
                {p.type === "carousel" ? (
                  <button onClick={(e) => { e.stopPropagation(); openCarousel(0); }}>
                    <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                  </button>
                ) : p.links?.demo ? (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Sorry, Live demo is not available yet.");
                    }}
                  >
                    <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <h2 className="text-2xl font-bold text-center mb-8">UI/UX</h2>
      <br />

      <div className="flex flex-wrap justify-center gap-8 bg-gray-800 rounded-xl project-card p-6">
        {uiProjects.map((p, i) => (
          <div
            key={i}
            className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 relative bg-cover bg-center h-[200px] w-full max-w-[400px] rounded-xl shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
              <h1 className="text-lg font-semibold">{p.title}</h1>
              <p className="text-lg mb-3">{p.desc}</p>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                className="h-[32px] drop-shadow-lg"
                alt="figma"
              />
              <br />
              <a href={p.figma} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Carousel Modal */}
      {isCarouselOpen && (
  <div
    className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={closeCarousel}
  >
    <div style={paddingCard}
      className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b1220]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex flex-col">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            CashiePay Screenshots
          </h3>
          <p className="text-xs sm:text-sm text-white/60">
            {carouselIndex + 1} / {webdevImages.length}
          </p>
        </div>

        <button
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
          onClick={closeCarousel}
          aria-label="Close"
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* Image stage */}
      <div className="relative bg-black">
        <div className="w-full h-[62vh] flex items-center justify-center">
          <img
            src={webdevImages[carouselIndex]}
            alt={`cashiepay-${carouselIndex}`}
            className="max-h-full max-w-full object-contain select-none"
            draggable={false}
          />
        </div>

        {/* Prev/Next overlay buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center text-white text-xl"
          aria-label="Previous"
          title="Previous"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center text-white text-xl"
          aria-label="Next"
          title="Next"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="px-4 py-3 border-t border-white/10 bg-[#0b1220]">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {webdevImages.map((img, idx) => {
            const active = idx === carouselIndex;
            return (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`shrink-0 rounded-lg overflow-hidden border transition ${
                  active
                    ? "border-white/80 ring-2 ring-white/20"
                    : "border-white/10 hover:border-white/30"
                }`}
                title={`Go to ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`thumb-${idx}`}
                  className="h-14 w-24 object-cover"
                  draggable={false}
                />
              </button>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="mt-2 flex items-center justify-between">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white text-sm"
          >
            ◀ Prev
          </button>

          <div className="text-white/60 text-xs sm:text-sm">
            Tip: use <span className="text-white/80">←</span> /{" "}
            <span className="text-white/80">→</span> keys
          </div>

          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white text-sm"
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
