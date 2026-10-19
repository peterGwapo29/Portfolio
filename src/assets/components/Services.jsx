
import React from "react";

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Building responsive, scalable web applications from frontend interfaces to backend functionality.",
    icon: "fa-solid fa-code",
    color: "text-blue-400",
    number: "01",
    tags: ["React", "Next.js", "Node.js", "Laravel"],
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Creating clean, intuitive user experiences through wireframes, interactive prototypes, and responsive interface designs that prioritize usability.",
    icon: "fa-solid fa-pen-ruler",
    color: "text-pink-400",
    number: "02",
    tags: ["Figma", "Wireframes", "Prototypes"],
  },
  {
    title: "Backend & API Development",
    desc: "Developing reliable backend services, REST APIs, database structures, authentication, and business logic to power modern applications.",
    icon: "fa-solid fa-server",
    color: "text-red-400",
    number: "03",
    tags: ["PHP", "Laravel", "Node.js", "Express.js", "MySQL"],
  },
  {
    title: "System Maintenance & Debugging",
    desc: "Troubleshooting existing applications, fixing bugs, improving performance, and maintaining system stability, security, and reliability.",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "text-yellow-400",
    number: "04",
    tags: ["Bug Fixes", "Optimization", "Support"],
  },
  {
    title: "Deployment & Version Control",
    desc: "Managing source code, configuring environments, maintaining Git workflows, and deploying applications to reliable hosting platforms.",
    icon: "fa-brands fa-git-alt",
    color: "text-green-400",
    number: "05",
    tags: ["Git", "GitHub", "Vercel", "Netlify", "Hostinger"],
  },
  {
    title: "AI-Assisted Development",
    desc: "Leveraging AI coding assistants to accelerate implementation, investigate bugs, explore solutions, and improve development workflows with careful code review.",
    icon: "fa-solid fa-wand-magic-sparkles",
    color: "text-purple-400",
    number: "06",
    tags: ["Antigravity", "Claude Code", "Cursor", "AI Tools"],
  },
];

function Services() {
  return (
    <section className="page-section">
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-4">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          services
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          I build and maintain digital solutions that help turn ideas into
          reliable, functional, and user-friendly applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.number}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#121214] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#fca311]/40 hover:bg-[#171719]"
          >
            {/* Top Row */}
            <div className="mb-7 flex items-start justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.04] ${service.color}`}
              >
                <i
                  className={`${service.icon} text-xl`}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Content */}
            <h2 className="mb-3 text-lg font-semibold leading-snug text-white">
              {service.title}
            </h2>

            <p className="mb-6 flex-1 text-sm leading-7 text-zinc-400">
              {service.desc}
            </p>

            {/* Technology / Service Tags */}
            <div className="flex flex-wrap gap-2 border-t border-zinc-800/80 pt-5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-black/20 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors group-hover:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative Accent */}
            <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#fca311]/70 transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10 flex flex-col justify-between gap-5 rounded-2xl border border-zinc-800 bg-[#121214] p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Have a project in mind?
          </h2>
          <p className="max-w-xl text-sm leading-6 text-zinc-400">
            Let&apos;s discuss your idea and explore how I can help bring it
            to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
