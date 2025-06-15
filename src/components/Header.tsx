import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-dm-sans leading-none">
          DESIGN PANES
        </h2>
        <nav className="flex items-center space-x-8">
          <a
            href="#design"
            className="text-white hover:text-white/80 font-avenir"
            style={{ cursor: "pointer" }}
          >
            Design
          </a>
          <a
            href="#designs"
            className="text-white hover:text-white/80 font-avenir"
            style={{ cursor: "pointer" }}
          >
            Designs
          </a>
          <a
            href="#designers"
            className="text-white hover:text-white/80 font-avenir"
            style={{ cursor: "pointer" }}
          >
            Designers
          </a>
          <a
            href="https://davemelk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 font-avenir"
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
