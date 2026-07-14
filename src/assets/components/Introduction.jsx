import { useEffect, useState } from "react";
import profileImg from "../images/profile.png";

function Introduction({ setActiveTab }) {
  const [typedTitle, setTypedTitle] = useState("");
  const subtitleText = "Web & Mobile Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 120;
    const interval = setTimeout(() => {
      if (!isDeleting) {
        setTypedTitle(subtitleText.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === subtitleText.length) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setTypedTitle(subtitleText.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(interval);
  }, [index, isDeleting]);

  return (
    <section className="page-section">
      
      {/* Hero Layout */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
        
        {/* Grayscale Halftone Image Container */}
        <div className="halftone-wrapper shadow-lg">
          <img 
            src={profileImg} 
            alt="Peter Olan-Olan" 
            className="halftone-image" 
          />
        </div>

        {/* Text Bio */}
        <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
          
          <span className="text-xs text-[#fca311] font-mono tracking-widest uppercase mb-1.5 block">
            {typedTitle}
            <span className="typing-cursor"></span>
          </span>

          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Peter Olan-Olan
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-4">
            Hi, I'm Peter, currently pursuing a Bachelor of Science in Information Technology as a 4th year student. I'm a passionate, detail-driven web developer with a strong foundation in frontend technologies like HTML, CSS, JavaScript, and React.
          </p>

          <p className="text-zinc-500 text-sm max-w-xl leading-relaxed font-mono">
            I'm currently expanding my knowledge in backend development (Laravel & MySQL) to build powerful full-stack applications. I love crafting clean, responsive user interfaces that perfectly blend form and function.
          </p>

          {/* Social Links formatted inline with slashes */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 text-zinc-500 font-mono text-xs mt-6">
            <a 
              href="https://github.com/peterGwapo29" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#e4e4e7] transition-colors"
            >
              github
            </a>
            <span className="text-zinc-800">/</span>
            <a 
              href="https://www.facebook.com/petergwapo.292004" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#e4e4e7] transition-colors"
            >
              facebook
            </a>
            <span className="text-zinc-800">/</span>
            <a 
              href="mailto:peterolanolan@gmail.com" 
              className="hover:text-[#e4e4e7] transition-colors"
            >
              email
            </a>
            <span className="text-zinc-800">/</span>
            <a
              href="/src/assets/CV/Peter_OlanOlan_Resume.docx"
              download
              className="hover:text-[#e4e4e7] transition-colors"
            >
              cv
            </a>
          </div>

        </div>

      </div>

      {/* Stats Grid Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-zinc-800/80 rounded-2xl overflow-hidden mt-16 font-mono bg-[#0c0c0d]">
        
        <div className="border-r border-b md:border-b-0 border-zinc-800/80 p-5 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Education</span>
          <div className="flex items-center justify-between mt-3.5">
            <span className="text-[#e4e4e7] font-bold text-base sm:text-lg">4th Year</span>
            <span className="text-zinc-600 text-xs">↗</span>
          </div>
          <span className="text-zinc-600 text-[9px] uppercase mt-1">IT Major</span>
        </div>

        <div className="border-b md:border-b-0 md:border-r border-zinc-800/80 p-5 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Experience</span>
          <div className="flex items-center justify-between mt-3.5">
            <span className="text-[#e4e4e7] font-bold text-base sm:text-lg">3+ Yrs</span>
            <span className="text-zinc-600 text-xs">↗</span>
          </div>
          <span className="text-zinc-600 text-[9px] uppercase mt-1">Coding Exp School based</span>
        </div>

        <div className="border-r border-zinc-800/80 p-5 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Projects</span>
          <div className="flex items-center justify-between mt-3.5">
            <span className="text-[#e4e4e7] font-bold text-base sm:text-lg">7+ Built</span>
            <span className="text-zinc-600 text-xs">↗</span>
          </div>
          <span className="text-zinc-600 text-[9px] uppercase mt-1">Full-stack & UI</span>
        </div>

        <div className="p-5 flex flex-col justify-between hover:bg-zinc-900/30 transition-colors">
          <span className="text-zinc-500 text-[10px] uppercase tracking-wider">Preferences</span>
          <div className="flex items-center justify-between mt-3.5">
            <span className="text-[#e4e4e7] font-bold text-base sm:text-lg font-sans">React/PHP</span>
            <span className="text-zinc-600 text-xs">↗</span>
          </div>
          <span className="text-zinc-600 text-[9px] uppercase mt-1">Core Tech Stack</span>
        </div>

      </div>

      {/* Log Feed widget */}
      <div className="mt-16 border-t border-zinc-900 pt-8 font-mono">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>01 - recent log</span>
          <button 
            onClick={() => setActiveTab("projects")}
            className="hover:text-[#e4e4e7] transition-colors focus:outline-none"
          >
            ALL PROJECTS →
          </button>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-zinc-900 bg-[#0c0c0d]/50 hover:bg-[#0c0c0d] rounded-xl hover:border-zinc-800/50 transition-all duration-200">
          <div className="flex flex-col">
            <span className="text-[#e4e4e7] font-medium text-sm sm:text-base">
              CashiPay Management System
            </span>
            <span className="text-zinc-500 text-xs mt-1 leading-normal">
              Finalized UI dashboard elements, local caching, and custom screen transitions.
            </span>
          </div>
          <span className="text-[#fca311] text-[10px] font-bold shrink-0 tracking-wider bg-[#fca311]/5 px-2 py-1 rounded border border-[#fca311]/15 align-self-start sm:align-self-auto">
            LATEST COMPLETED
          </span>
        </div>
      </div>

    </section>
  );
}

export default Introduction;
