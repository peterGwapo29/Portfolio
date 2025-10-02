function Skills() {
  const skillList = ["HTML", "CSS", "JavaScript", "React", "PHP", "Laravel", "MySQL"];

  return (
    <section id="skills" className="bg-gray-700">
          <br />
          <h1 className="text-3xl font-bold text-center">MY SKILLS</h1>
          <br />

          <div className="flex flex-col items-center gap-12 px-6">
            <div className="w-full max-w-5xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Frontend
              </h2>
              <br />
              <div className="flex flex-wrap justify-center gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
              </div>
            </div>

            <div className="w-full max-w-5xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Backend
              </h2>
              <br />
              <div className="flex flex-wrap justify-center gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  className="h-[100px]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg"
                  className="h-[100px]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
              </div>
            </div>

            <div className="w-full max-w-5xl">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Tools & Others
              </h2>
              <br />
              <div className="flex flex-wrap justify-center gap-8">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
                  className="h-[100px]"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
                  className="h-[80px] drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
  );
}

export default Skills;
