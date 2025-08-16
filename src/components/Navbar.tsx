import React, { useState } from "react";
import { TbGolf } from "react-icons/tb";
import { GiBeveledStar } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<"ENG" | "FRA">("ENG");

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left Section → Logo + Location */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <span className="text-2xl font-bold text-black flex items-center gap-2">
          <i>
            <GiBeveledStar />
          </i>
          Forge
        </span>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TbGolf className="text-lg" />
          <span>Canada, Montreal</span>
        </div>
      </div>

      {/* Nav Links (Center) */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer underline">
          Manufacture
        </li>
        <li className="hover:text-blue-600 cursor-pointer underline">
          Tool Library
        </li>
        <li className="hover:text-blue-600 cursor-pointer underline">
          Get in Touch
        </li>
      </ul>

      {/* Language Switcher (Right) */}
      <div className="flex items-center gap-2">
        <button
          className={`px-3 py-1 rounded ${
            language === "ENG" ? "text-blue-600 " : "text-gray-500"
          }`}
          onClick={() => setLanguage("ENG")}
        >
          ENG
        </button>
        /
        <button
          className={`px-3 py-1 rounded ${
            language === "FRA" ? "text-blue-600 " : "text-gray-500"
          }`}
          onClick={() => setLanguage("FRA")}
        >
          FRA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
