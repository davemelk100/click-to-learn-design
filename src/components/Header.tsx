import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["design", "designs", "designers"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h2 className="text-2xl font-bold text-white font-dm-sans leading-none tracking-tight mb-2 sm:mb-0">
          DESIGN PANES
        </h2>
        <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
          <a
            href="#design"
            className={`text-white hover:text-white/80 font-avenir transition-colors px-2 py-1 rounded sm:px-0 sm:py-0 ${
              activeSection === "design"
                ? "text-white font-medium"
                : "text-white/70"
            }`}
            style={{ cursor: "pointer" }}
          >
            Design
          </a>
          <a
            href="#designs"
            className={`text-white hover:text-white/80 font-avenir transition-colors px-2 py-1 rounded sm:px-0 sm:py-0 ${
              activeSection === "designs"
                ? "text-white font-medium"
                : "text-white/70"
            }`}
            style={{ cursor: "pointer" }}
          >
            Designs
          </a>
          <a
            href="#designers"
            className={`text-white hover:text-white/80 font-avenir transition-colors px-2 py-1 rounded sm:px-0 sm:py-0 ${
              activeSection === "designers"
                ? "text-white font-medium"
                : "text-white/70"
            }`}
            style={{ cursor: "pointer" }}
          >
            Designers
          </a>
          <a
            href="https://davemelk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white font-avenir transition-colors px-2 py-1 rounded sm:px-0 sm:py-0"
            style={{ cursor: "pointer" }}
          >
            DM
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
