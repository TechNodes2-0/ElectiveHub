import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          Elective Subject App
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <a href="/add-subject" className="text-white hover:text-gray-200">
            Add Subject
          </a>
          <Link to="/subject" className="text-white hover:text-gray-200">
            Subject List
          </Link>
          <a href="#" className="text-white hover:text-gray-200">
            Updation History
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="/add-subject"
              className="block text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Add Subject
            </a>
            <Link
              to="/subject"
              className="block text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Subject List
            </Link>
            <a
              href="#"
              className="block text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Updation History
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
