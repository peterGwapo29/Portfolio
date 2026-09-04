import React from "react";

function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "Building responsive, modern, and scalable web applications using HTML, CSS, JavaScript, Tailwind CSS, React, PHP, and Laravel.",
      icon: "fa-solid fa-code",
      color: "text-blue-400",
    },
    {
      title: "UI/UX & Web/Mobile Prototyping",
      desc: "Designing clean, intuitive user interfaces, wireframes, and high-fidelity interactive prototypes using Figma and modern design systems.",
      icon: "fa-solid fa-pencil-ruler",
      color: "text-pink-400",
    },
    {
      title: "Backend & API Development",
      desc: "Developing secure backend systems, RESTful APIs, database structures, and application logic using PHP, Laravel, MySQL, MongoDB, and Firebase.",
      icon: "fa-solid fa-server",
      color: "text-red-400",
    },
    { title: "Web System Maintenance & Debugging", 
      desc: "Maintaining, troubleshooting, and improving existing web systems by identifying bugs, resolving technical issues, optimizing performance, and ensuring system stability and reliability.", 
      icon: "fa-solid fa-screwdriver-wrench", 
      color: "text-yellow-400", 
    },
    {
      title: "Version Control & Deployment",
      desc: "Managing development workflows with Git and GitHub, configuring environments, and deploying web applications to platforms such as Vercel and cloud hosting services.",
      icon: "fa-brands fa-git-alt",
      color: "text-green-400",
    },
    {
      title: "AI-Assisted Development",
      desc: "Using modern AI development tools such as Cursor, Claude Code, ChatGPT, Antigravity, OpenCodeX, and Devin AI to accelerate development, debugging, code generation, and problem solving.",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "text-purple-400",
    },
  ];



  return (
    <section className="page-section">
      
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          services
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          The technical capabilities and software solutions I offer to clients, teammates, and academic partners.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="bg-[#121214] border border-zinc-900 rounded-2xl p-6 hover-scale hover:border-zinc-800 transition-all duration-200 flex flex-col gap-4"
          >
            <div className={`text-3xl ${service.color}`}>
              <i className={service.icon}></i>
            </div>
            
            <h2 className="text-lg font-bold text-white font-mono mt-1">
              {service.title}
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;
