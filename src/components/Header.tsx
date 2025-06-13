import React from "react";
import { content } from "../data/content";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-gray-900 font-dm-sans leading-none">
              {content.header.title}
            </h2>
          </div>
          <nav className="flex items-center space-x-8">
            {content.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-avenir"
              >
                {link.text}
              </a>
            ))}
            <a
              href={content.header.portfolioLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-avenir"
            >
              {content.header.portfolioLink.text}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
