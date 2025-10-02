function Services() {
  const services = [
    { title: "Web Development", desc: "Building responsive and modern websites." },
    { title: "UI/UX Design", desc: "Designing clean and user-friendly interfaces." },
    { title: "Backend Development", desc: "Creating APIs and managing databases." },
  ];

  return (
    <section id="services" className="bg-gray-900 py-20 text-white">
          <h1 className="text-3xl font-bold text-center mb-12">SERVICES</h1>
          <br />

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
              <div className="text-5xl mb-4 text-blue-400 text-center">
                <i className="fa-solid fa-code"></i>
              </div>
              <h1>Web Development</h1>
              <p className="text-lg text-gray-300 text-center">
                I build responsive and high-performance websites using HTML,
                CSS, JavaScript, Tailwind, and React.
              </p>
            </div>

            <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
              <div className="text-5xl mb-4 text-pink-400 text-center">
                <i className="fa-solid fa-pencil-ruler"></i>
              </div>
              <h1>UI/UX Design</h1>
              <p className="text-lg text-gray-300 text-center">
                I design intuitive and user-friendly interfaces using Figma,
                focusing on clean and modern design principles.
              </p>
            </div>

            <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
              <div className="text-5xl mb-4 text-red-400 text-center">
                <i className="fa-solid fa-server"></i>
              </div>
              <h1>Backend Development</h1>
              <p className="text-lg text-gray-300 text-center">
                I create and manage backend systems using PHP and Laravel with
                database integration (MySQL).
              </p>
            </div>

            <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
              <div className="text-5xl mb-4 text-green-400 text-center">
                <i className="fa-brands fa-git-alt"></i>
              </div>
              <h1>Version Control</h1>
              <p className="text-lg text-gray-300 text-center">
                I manage and collaborate on projects using Git and GitHub,
                ensuring code integrity and team efficiency.
              </p>
            </div>
          </div>
        </section>
  );
}

export default Services;
