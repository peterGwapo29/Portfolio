
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
      { name: "Vite", iconClass: "devicon-vite-plain colored" },
      { name: "WordPress", iconClass: "devicon-wordpress-plain colored" },
      { name: "WooCommerce", iconClass: "devicon-woocommerce-plain colored" },
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
      { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
    ],

    tools: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-original text-white" },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
      { name: "Figma", iconClass: "devicon-figma-plain colored" },
      { name: "Vercel", iconClass: "devicon-vercel-original text-white" },
      { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
      { name: "Composer", iconClass: "devicon-composer-line colored" },
      { name: "Scene Builder", iconClass: "devicon-scenebuilder-plain colored" },
    ],

    ai: [
      {
        name: "Cursor",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 3.5L20 12L13.5 14.5L11 21L4 3.5Z"
              fill="currentColor"
            />
            <path
              d="M11 21L13.5 14.5L20 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },

      {
        name: "Antigravity",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C9.5 7.5 7 9.5 4 11.5C7 12 9 13 12 16C15 13 17 12 20 11.5C17 9.5 14.5 7.5 12 3Z"
              fill="currentColor"
            />
            <path
              d="M8 16.5C9.5 15.5 10.5 15 12 15C13.5 15 14.5 15.5 16 16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 20C10 19 11 18.5 12 18.5C13 18.5 14 19 15 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ),
      },

      {
        name: "Claude Code",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L10.5 6L14 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 14H12.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M15 8L19 12L15 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },

      {
        name: "OpenCodeX",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4H17C18.657 4 20 5.343 20 7V17C20 18.657 18.657 20 17 20H7C5.343 20 4 18.657 4 17V7C4 5.343 5.343 4 7 4Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M8 9L11 12L8 15"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 15H16"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        ),
      },

      {
        name: "ChatGPT",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.2C13.8 3.3 16.8 3.1 18.8 4.8C20.3 6.1 20.8 8.2 20.2 10.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18.7 9.1C21.2 9.7 22.7 12.3 21.8 14.7C21.2 16.5 19.4 17.6 17.5 17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17.5 17.5C16.9 20 14.3 21.5 11.9 20.6C10.1 20 9 18.2 9.1 16.3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9.1 16.3C6.6 15.7 5.1 13.1 6 10.7C6.6 8.9 8.4 7.8 10.3 7.9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10.3 7.9C10.9 5.4 13.5 3.9 15.9 4.8C17.7 5.4 18.8 7.2 18.7 9.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 8L16 10.3V14.9L12 17.2L8 14.9V10.3L12 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },

      {
        name: "Devin AI",
        icon: (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4V20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 5H13C16.314 5 19 7.686 19 11C19 14.314 16.314 17 13 17H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="15.5"
              cy="8.5"
              r="1"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
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
            {item.icon ? (
              <span className="text-white group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
            ) : (
              <i
                className={`${item.iconClass} text-base group-hover:scale-110 transition-transform`}
              ></i>
            )}

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
          The tools, frameworks, platforms, and AI-powered development tools I
          use to build, debug, design, and ship applications.
        </p>
      </div>

      {/* Stack Categories */}
      <div className="flex flex-col gap-10">

        {/* Frontend */}
        {renderSection("Frontend", stack.frontend)}

        <div className="border-t border-zinc-950 my-2"></div>

        {/* Backend */}
        {renderSection("Backend", stack.backend)}

        <div className="border-t border-zinc-950 my-2"></div>

        {/* Tools */}
        {renderSection("DevOps, Tools & IDE", stack.tools)}

        <div className="border-t border-zinc-950 my-2"></div>

        {/* AI */}
        {renderSection("AI Stack", stack.ai)}

      </div>
    </section>
  );
}

export default TechStack;
