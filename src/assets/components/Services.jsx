import React from "react";

function Services() {
  const services = [
    { 
      title: "Web Development", 
      desc: "Creating responsive, secure, and modern web applications utilizing HTML, CSS, JavaScript, Tailwind, and React.", 
      icon: "fa-solid fa-code", 
      color: "text-blue-400" 
    },
    { 
      title: "UI/UX & Mobile Prototypes", 
      desc: "Structuring clean, intuitive user wireframes and high-fidelity clickable mockups using modern design systems in Figma.", 
      icon: "fa-solid fa-pencil-ruler", 
      color: "text-pink-400" 
    },
    { 
      title: "Backend Engineering", 
      desc: "Building relational databases (MySQL) and RESTful API backends with robust logic structures in PHP and Laravel.", 
      icon: "fa-solid fa-server", 
      color: "text-red-400" 
    },
    { 
      title: "Version Control & Hosting", 
      desc: "Setting up collaborative workflows with Git & GitHub, and managing live deployments on Vercel or cloud web hosting.", 
      icon: "fa-brands fa-git-alt", 
      color: "text-green-400" 
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
