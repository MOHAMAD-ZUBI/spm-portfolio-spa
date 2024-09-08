"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/us.svg" },

    { code: "de", name: "German", flag: "https://flagcdn.com/de.svg" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center space-x-2">
          {" "}
          {/* Added space between flag and text */}
          <img
            src={languages.find((lang) => lang.code === selectedLanguage).flag}
            alt="Selected Language Flag"
            className="w-6 h-6"
          />
          <span>
            {languages.find((lang) => lang.code === selectedLanguage).name}
          </span>
        </div>
        <FaChevronDown
          className={`ml-2 w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} // Rotate arrow on open
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-30 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  selectedLanguage === language.code ? "bg-gray-200" : ""
                }`}
              >
                <img
                  src={language.flag}
                  alt={`${language.name} Flag`}
                  className="w-6 h-6 mr-2"
                />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
