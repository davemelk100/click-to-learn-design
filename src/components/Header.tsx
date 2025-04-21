import React from "react";
import { content } from "../data/content";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 py-2 bg-black">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative group">
            <div className="absolute w-8 h-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-px border-t border-dashed border-white/80 transform transition-all duration-500 group-hover:border-white group-hover:animate-pulse"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${
                      i * 45
                    }deg) translate(3px)`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            <div
              className="absolute w-2 h-2 bg-white rounded-full transform transition-all duration-500 group-hover:scale-150 group-hover:animate-bounce"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
          <span className="text-2xl font-medium text-white ml-[10px]">
            {content.header.title}
          </span>
        </div>
        <div className="flex items-center gap-4 ml-8">
          {content.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>
        <a
          href={content.header.portfolioLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-4 px-2 py-1 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
        >
          {content.header.portfolioLink.text}
        </a>
      </div>
    </header>
  );
};

export default Header;
