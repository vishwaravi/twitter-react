import React, { useState, useEffect, useRef } from "react";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Three-dot button */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        &#8226;&#8226;&#8226;
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
        >
          <ul className="py-1">
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
