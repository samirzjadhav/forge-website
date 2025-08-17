"use client";
import React, { useState } from "react";
import { TbGolf } from "react-icons/tb";
import { GiBeveledStar } from "react-icons/gi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<"ENG" | "FRA">("ENG");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // close menu on click
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 fixed top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left Section → Logo + Location */}
        <div className="flex items-center gap-4 md:gap-20">
          {/* Logo */}
          <span className="text-2xl font-bold text-black flex items-center gap-2">
            <GiBeveledStar />
            Forge
          </span>

          {/* Location (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <TbGolf className="text-lg" />
            <span>Canada, Montreal</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li
            className="hover:text-blue-600 cursor-pointer underline"
            onClick={() => handleScroll("manufacture")}
          >
            Manufacture
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer underline"
            onClick={() => handleScroll("tool-library")}
          >
            Tool Library
          </li>
          <li
            className="hover:text-blue-600 cursor-pointer underline"
            onClick={() => handleScroll("get-in-touch")}
          >
            Get in Touch
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              className={`px-3 py-1 rounded ${
                language === "ENG" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setLanguage("ENG")}
            >
              ENG
            </button>
            /
            <button
              className={`px-3 py-1 rounded ${
                language === "FRA" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setLanguage("FRA")}
            >
              FRA
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white rounded-md py-4">
          <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium">
            <li
              className="hover:text-blue-600 cursor-pointer underline"
              onClick={() => handleScroll("manufacture")}
            >
              Manufacture
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer underline"
              onClick={() => handleScroll("tool-library")}
            >
              Tool Library
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer underline"
              onClick={() => handleScroll("get-in-touch")}
            >
              Get in Touch
            </li>
          </ul>

          {/* Language Switcher for Mobile */}
          <div className="flex items-center gap-2 mt-2">
            <button
              className={`px-3 py-1 rounded ${
                language === "ENG" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setLanguage("ENG")}
            >
              ENG
            </button>
            /
            <button
              className={`px-3 py-1 rounded ${
                language === "FRA" ? "text-blue-600" : "text-gray-500"
              }`}
              onClick={() => setLanguage("FRA")}
            >
              FRA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
