import React, { useState, useEffect } from "react";
import "../css/App.css";

// Import restructured components
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [darkMode, setDarkMode] = useState(true);

  // Sync theme class to root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Render content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <Introduction setActiveTab={setActiveTab} />;
      case "projects":
        return <Projects setActiveTab={setActiveTab} />;
      case "stack":
        return <TechStack />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Introduction setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080809] text-zinc-100 flex flex-col lg:flex-row transition-colors duration-300">
      
      {/* Sidebar - Left panel */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area - Right panel */}
      <main className="main-content">
        <div className="w-full">
          {renderTabContent()}
        </div>
      </main>

    </div>
  );
}

export default App;
