import React from "react";
import project1 from "../images/project/project1.png";
import inprogressGif from "../images/inprogress.gif";
import UI1 from "../images/project/UI/UX/UI1.png";
import UI2 from "../images/project/UI/UX/UI2.png";
import UI3 from "../images/project/UI/UX/UI3.png";
import UI4 from "../images/project/UI/UX/UI4.png";
import UI5 from "../images/project/UI/UX/UI5.png";

const Projects = () => {
  // Web Dev Projects
  const webProjects = [
    {
      title: "Club and Event Management System",
      desc: "Admin module only",
      img: project1,
      tech: ["laravel", "tailwindcss", "mysql"],
      links: {
        github: "https://github.com/peterGwapo29/System",
        demo: null, // if null, show alert instead
      },
    },
    { title: "In Progress", img: inprogressGif },
    { title: "In Progress", img: inprogressGif },
  ];

  // UI/UX Projects
  const uiProjects = [
    {
      title: "ROG Clone",
      desc: "Web Base UI/UX",
      img: UI1,
      figma: "https://www.figma.com/design/OfhqyjbhM92plO7RwZKJtL/Shopping-cart?node-id=142-862",
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
      figma: "https://www.figma.com/design/kBR6R9Mn8vGQ5ajJxAJIw7/mekykbusiness?node-id=0-1",
    },
    {
      title: "FootPrint",
      desc: "UI/UX",
      img: UI4,
      figma: "https://www.figma.com/design/nFjGBTsfSLcjGocKTC5kWu/Figma-mobile-app?node-id=102-87",
    },
    {
      title: "Payment System",
      desc: "Mobile/Web UI/UX",
      img: UI5,
      figma: "https://www.figma.com/design/MOYpGEp43Z9tdP2JwtSaAr/Payment-System?node-id=0-1",
    },
  ];

  return (
    <section id="projects" className="py-16 text-white" style={{ backgroundColor: "#374151" }}>
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
      <hr className="mb-12" />

      {/* Web Dev */}
      <h2 className="text-2xl font-bold text-center mb-8">Web Development</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {webProjects.map((p, i) => (
          <div
            key={i}
            className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 relative bg-contain bg-no-repeat bg-center h-[200px] w-full max-w-[400px] rounded-xl shadow-md overflow-hidden flex items-center justify-center"
            style={{ backgroundImage: p.img ? `url(${p.img})` : "none" }}
          >
            {p.title !== "In Progress" && (
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-lg font-semibold">{p.title}</h1>
                <p className="text-lg mb-3">{p.desc}</p>

                {/* Tech Icons */}
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

                {/* Links */}
                <div className="flex gap-5">
                  {p.links?.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer">
                      <i className="devicon-github-original colored text-2xl hover:text-4xl duration-100"></i>
                    </a>
                  )}
                  {p.links?.demo ? (
                    <a href={p.links.demo} target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                    </a>
                  ) : (
                    <button
                      onClick={() => alert("Sorry, Live demo is not available yet.")}
                    >
                      <i className="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* UI/UX */}
      <br />
      <h2 className="text-2xl font-bold text-center mb-8">UI/UX</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {uiProjects.map((p, i) => (
          <div
            key={i}
            className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 relative bg-cover bg-center h-[200px] w-full max-w-[400px] rounded-xl shadow-md overflow-hidden"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            <div className="overlay-background"></div>
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
    </section>
  );
};

export default Projects;
