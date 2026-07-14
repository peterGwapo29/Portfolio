import React from "react";

function TechStack() {
  const stack = {
    frontend: [
      { name: "HTML5", iconClass: "devicon-html5-plain colored" },
      { name: "CSS3", iconClass: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Vite", iconClass: "devicon-vite-plain colored" }
    ],
    backend: [
      { name: "PHP", iconClass: "devicon-php-plain colored" },
      { name: "Laravel", iconClass: "devicon-laravel-original colored" },
      { name: "NodeJS", iconClass: "devicon-nodejs-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "SQLite", iconClass: "devicon-sqlite-plain colored" },
      { name: "FireBase", iconClass: "devicon-firebase-plain colored" }
    ],
    tools: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-original text-white" },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
      { name: "Figma", iconClass: "devicon-figma-plain colored" },
      { name: "Vercel", iconClass: "devicon-vercel-original text-white" },
      { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
      { name: "Composer", iconClass: "devicon-composer-line colored" },
      { name: "Scene Builder", iconClass: "devicon-scenebuilder-plain colored" }
    ]
  };

  const renderSection = (title, items) => (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="bg-[#121214] border border-zinc-900 rounded-xl px-4 py-2.5 flex items-center gap-2.5 hover:border-zinc-800 hover:bg-[#161619] transition-all duration-200 hover-scale group cursor-default"
          >
            <i className={`${item.iconClass} text-base group-hover:scale-110 transition-transform`}></i>
            <span className="text-sm font-sans font-medium text-zinc-300 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="page-section">
      
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-white">
          tech stack
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
          The tools, frameworks, and platforms I reach for — across the front end, back end, developer utilities, and styling environments.
        </p>
      </div>

      {/* Stack Categories */}
      <div className="flex flex-col gap-10">
        {renderSection("Frontend", stack.frontend)}
        
        <div className="border-t border-zinc-950 my-2"></div>
        
        {renderSection("Backend", stack.backend)}
        
        <div className="border-t border-zinc-950 my-2"></div>
        
        {renderSection("DevOps, Tools & IDE", stack.tools)}
      </div>

    </section>
  );
}

export default TechStack;
