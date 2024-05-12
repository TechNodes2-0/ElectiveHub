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
    <div>
      <div class="bg-gray-50 dark:bg-slate-900">
        <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center py-4">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600"
              data-hs-overlay="#application-sidebar"
              aria-controls="application-sidebar"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle Navigation</span>
              <svg
                class="w-5 h-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>

            <ol
              class="ml-3 flex items-center whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
                Application Layout
                <svg
                  class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li
                class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
          </div>
        </div>

        <div
          id="application-sidebar"
          class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden absolute top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="px-6">
            <a
              class="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Admin Dashboard
            </a>
          </div>

          <nav
            class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul class="space-y-1.5">
              <li>
                <a
                  class={
                    (activeTab === "dashboard" ? "bg-gray-900 " : "") +
                    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300"
                  }
                  href="javascript:;"
                  onClick={handleTabClick.bind(this, "dashboard")}
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  class={
                    (activeTab === "Subject" ? "bg-gray-900 " : "") +
                    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300"
                  }
                  href="javascript:;"
                  onClick={handleTabClick.bind(this, "Subject")}
                >
                  Subject
                </a>
              </li>
              <li>
                <a
                  class={
                    (activeTab === "Student" ? "bg-gray-900 " : "") +
                    "flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-md hover:bg-gray-900 text-slate-400 dark:hover:text-slate-300"
                  }
                  href="javascript:;"
                  onClick={handleTabClick.bind(this, "Student")}
                >
                  Student
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:pl-72 ">
          {activeTab === "dashboard" && (
            <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
              It is Admin Dashboard
            </h1>
          )}

          {activeTab === "Subject" && (
            <div>
              <SubjectHome />
            </div>
          )}

          {activeTab === "Student" && (
            <div>
              <StudentHome />
            </div>
          )}
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
