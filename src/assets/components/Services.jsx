function Services() {
  const services = [
    { 
      title: "Web Development", 
      desc: "I build responsive and high-performance websites using HTML, CSS, JavaScript, Tailwind, and React.", 
      icon: "fa-solid fa-code", 
      color: "text-blue-400" 
    },
    { 
      title: "UI/UX Design", 
      desc: "I design intuitive and user-friendly interfaces using Figma, focusing on clean and modern design principles.", 
      icon: "fa-solid fa-pencil-ruler", 
      color: "text-pink-400" 
    },
    { 
      title: "Backend Development", 
      desc: "I create and manage backend systems using PHP and Laravel with database integration (MySQL).", 
      icon: "fa-solid fa-server", 
      color: "text-red-400" 
    },
    { 
      title: "Version Control", 
      desc: "I manage and collaborate on projects using Git and GitHub, ensuring code integrity and team efficiency.", 
      icon: "fa-brands fa-git-alt", 
      color: "text-green-400" 
    },
  ];

  return (
    <section id="services" className="py-20 text-white" style={{ backgroundColor: "#0d1b2a" }}>
      <h1 className="text-3xl font-bold text-center mb-12">SERVICES</h1><br />

      <div className="flex flex-wrap justify-center items-center gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md p-6 w-72 hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-5xl mb-4 ${service.color}`}>
              <i className={service.icon}></i>
            </div>
            <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
            <p className="text-lg text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
