/** @format */
import React, { useState } from "react";
import SubjectHome from "../../Pages/SubjectHome";
import StudentHome from "../StudentHome";
import BackToTopButton from "../../Components/BackToTopButton";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
     
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 
                   .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 
                   .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <ol
            className="ml-3 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
        </div>
      </div>

     
      <div className="flex flex-1">
       
        <div
          id="application-sidebar"
          className="
            hs-overlay
            hidden
            lg:block
            w-64
            bg-white
            border-r
            border-gray-200
            dark:bg-gray-800
            dark:border-gray-700
            pt-7
            pb-10
            overflow-y-auto
          "
        >
          <div className="px-6 ">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Admin Dashboard
            </a>
          </div>

          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap h-full"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <a
                  className={`${
                    activeTab === "dashboard" ? "bg-gray-900 " : ""
                  } flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300`}
                  href="#"
                  onClick={() => handleTabClick("dashboard")}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeTab === "Subject" ? "bg-gray-900 " : ""
                  } flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300`}
                  href="#"
                  onClick={() => handleTabClick("Subject")}
                >
                  Subject
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeTab === "Student" ? "bg-gray-900 " : ""
                  } flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300`}
                  href="#"
                  onClick={() => handleTabClick("Student")}
                >
                  Student
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
        <div className="flex-1 pt-10 px-4 sm:px-6 md:px-8">
          {activeTab === "dashboard" && (
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              It is Admin Dashboard
            </h1>
          )}

          {activeTab === "Subject" && <SubjectHome />}
          {activeTab === "Student" && <StudentHome />}

          <BackToTopButton />
        </div>
      </div>

     
    </div>
  );
}
