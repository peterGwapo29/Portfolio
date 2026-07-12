import React, { useState } from "react";

function Sidebar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "stack", label: "Tech Stack" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <aside className="sidebar-container">
      
      {/* Top Section */}
      <div className="flex flex-col gap-6 lg:gap-8">
        
        {/* Name / Branding & Hamburger */}
        <div className="flex items-center justify-between lg:block">
          <div 
            onClick={() => handleTabClick("about")}
            className="cursor-pointer group flex flex-col"
          >
            <span className="text-[#e4e4e7] font-bold text-lg tracking-tight group-hover:text-[#fca311] transition-colors">
              Peter Olan-Olan
            </span>
            <span className="text-zinc-600 text-xs mt-0.5">
              Student & Developer
            </span>
          </div>

          {/* Hamburger trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-white focus:outline-none p-1 text-lg"
            aria-label="Toggle Navigation"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Menu Items (collapsible on mobile) */}
        <nav className={`${mobileMenuOpen ? "flex" : "hidden"} lg:flex flex-col gap-2.5`}>
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`text-left transition-all duration-200 flex items-center py-1.5 focus:outline-none ${
                  isActive 
                    ? "text-[#e4e4e7] font-medium translate-x-1" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && <span className="mr-2 text-[#fca311]">→</span>}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section (collapsible on mobile) */}
      <div className={`${mobileMenuOpen ? "flex" : "hidden"} lg:flex flex-col gap-6 mt-6 lg:mt-0`}>
        
        {/* Theme Toggle bottom row */}
        <div className="flex items-center gap-4 border-t border-zinc-950 pt-4 text-zinc-500">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
            className="hover:text-zinc-300 transition-colors focus:outline-none flex items-center gap-2 cursor-pointer"
          >
            <i className={`fa-regular ${darkMode ? "fa-moon" : "fa-sun"} text-base`}></i>
            <span className="text-xs font-sans font-medium">{darkMode ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </div>

        {/* Email Footer */}
        <div className="flex flex-col gap-1.5 text-zinc-600 text-[11px] leading-normal font-sans border-t border-zinc-950 pt-4">
          <span>For work, collabs & everything else, reach me at</span>
          <a 
            href="mailto:peterolanolan@gmail.com"
            className="text-zinc-400 hover:text-[#fca311] font-mono transition-colors break-all"
          >
            peterolanolan@gmail.com
          </a>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;
