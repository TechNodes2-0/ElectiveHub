import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center logo" onClick={scrollToTop}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png"
              className="h-8 mr-3"
              alt="subject Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ElectiveHub
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/OurTeam" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/licensing" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/TermsOfUse" className="mr-4 hover:underline md:mr-6" onClick={scrollToTop}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <a href="https://github.com/TechNodes2-0/ElectiveHub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="h-6 w-6 transform transition-transform hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2023 ElectiveHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
