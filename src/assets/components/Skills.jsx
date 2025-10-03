function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    ],
    backend: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" },
    ],
  };

  const renderIcons = (category) =>
    category.map((skill, i) => (
      <img
        key={i}
        src={skill.icon}
        alt={skill.name}
        className="h-[80px] drop-shadow-lg"
      />
    ));

  return (
    <section id="skills" className="bg-gray-700">
      <br />
      <h1 className="text-3xl font-bold text-center">MY SKILLS</h1>
      <br /><br />

      <div className="flex flex-col items-center gap-12 px-6">
        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Frontend</h2><br />
          <div className="flex flex-wrap justify-center gap-8">
            {renderIcons(skills.frontend)}
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Backend</h2><br />
          <div className="flex flex-wrap justify-center gap-8">
            {renderIcons(skills.backend)}
          </div>
        </div>

        <div className="w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Tools & Others</h2><br />
          <div className="flex flex-wrap justify-center gap-8">
            {renderIcons(skills.tools)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
