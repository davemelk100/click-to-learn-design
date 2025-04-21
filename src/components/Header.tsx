import React from "react";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Click to Learn Design
            </h1>
          </div>
          <nav className="flex space-x-8">
            <a
              href="#design"
              className={`text-sm font-medium ${
                activeSection === "design"
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => onSectionChange("design")}
            >
              Design
            </a>
            <a
              href="#designs"
              className={`text-sm font-medium ${
                activeSection === "designs"
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => onSectionChange("designs")}
            >
              Designs
            </a>
            <a
              href="#designers"
              className={`text-sm font-medium ${
                activeSection === "designers"
                  ? "text-indigo-600"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => onSectionChange("designers")}
            >
              Designers
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
