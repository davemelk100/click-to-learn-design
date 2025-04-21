import React, { useState } from "react";
import { content } from "../data/content";
import { Grid, List, Menu, X } from "lucide-react";

interface HeaderProps {
  isListLayout: boolean;
  setIsListLayout: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isListLayout, setIsListLayout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 p-3 bg-black">
      <div className="grid grid-cols-3">
        {/* Logo - Left Column */}
        <div className="flex items-center">
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
            <span className="text-2xl font-medium text-white ml-[10px] whitespace-nowrap">
              {content.header.title}
            </span>
          </div>
        </div>

        {/* Navigation - Center Column */}
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8 h-full">
            {content.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-white/80 transition-colors duration-300 uppercase h-full flex items-center"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-end">
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsListLayout(!isListLayout)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              title={
                isListLayout ? "Switch to grid view" : "Switch to list view"
              }
            >
              {isListLayout ? (
                <Grid className="w-5 h-5 text-white" />
              ) : (
                <List className="w-5 h-5 text-white" />
              )}
            </button>
            <a
              href={content.header.portfolioLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
            >
              {content.header.portfolioLink.text}
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-black md:hidden">
            <div className="flex flex-col items-center gap-6 p-6">
              {content.header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors duration-300 uppercase text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <a
                href={content.header.portfolioLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black text-lg font-medium hover:bg-white/90 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.header.portfolioLink.text}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
