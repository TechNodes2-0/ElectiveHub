import React from "react";
import { Link } from "react-router-dom";

export default function SubjectNavbar() {
  return (
    <div>
      <nav className="bg-blue-500">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            Elective Subject App
          </div>
          <div className="flex space-x-4">
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
        </div>
      </nav>
    </div>
  );
}
