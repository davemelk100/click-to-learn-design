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
    <header className="sticky top-0 z-50 py-2 bg-black">
      <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto p-2 rounded-full hover:bg-white/10 transition-colors duration-200 sm:hidden"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div className="flex items-center gap-8">
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
        </div>

        {/* Desktop Right Side */}
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <button
            onClick={() => setIsListLayout(!isListLayout)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            title={isListLayout ? "Switch to grid view" : "Switch to list view"}
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
            className="px-2 py-1 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
          >
            {content.header.portfolioLink.text}
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black py-4 px-4 sm:hidden">
            <div className="flex flex-col items-center gap-4">
              {content.header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => {
                    setIsListLayout(!isListLayout);
                    setIsMenuOpen(false);
                  }}
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
                  className="px-2 py-1 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {content.header.portfolioLink.text}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
