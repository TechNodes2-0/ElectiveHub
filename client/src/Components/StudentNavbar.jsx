import React from "react";
import { Link } from "react-router-dom";

const StudentNavbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Add the icon here */}
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt="Student Icon"
              className="h-6 w-6 mr-2"
            />
            <Link to="/" className="text-white font-bold text-lg">
              Student App
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/Student"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Student
            </Link>
            <Link
              to="/add-student"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Add Student
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;
