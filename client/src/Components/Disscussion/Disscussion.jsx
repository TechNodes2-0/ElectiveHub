import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import BackToTopButton from "../BackToTopButton";

const ForumData = [
  {
    name: "what is web development?",
    author: "jay patel",
  },
  {
    name: "what is difference between kotlin and flutter in App development ?",
    author: "vinayak vispute",
  },
  {
    name: "DevOps",
    author: "vraj patel",
  },
];

function Disscussion() {
  const [loadingInProgress, setLoading] = useState(false);
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      {loadingInProgress ? (
        <div className="loader-container">
          <ClipLoader color={"#fff"} size={150} />
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-900 px-10 ">
          <h1 className="text-2xl font-bold mb-4 text-white">Disscussion</h1>
          <div className="mb-4 ml-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search subjects..."
                value=""
                onChange=""
                className="border border-gray-300 px-3 py-2 pl-8 rounded"
              />
              <span className="absolute top-3 left-2">
                <img
                  src="search.png"
                  alt="Search Icon"
                  className="w-4 h-4 text-gray-500"
                />
              </span>
            </div>
          </div>
          <div className="flex justify-around w-full">
            <div className="">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <aside
                id="logo-sidebar"
                className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
              >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-0 rounded-xl">
                  <div className="flex items-center pl-2.5 mb-5">
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                      Categories
                    </span>
                  </div>
                  <ul className="space-y-2 font-medium">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 21"
                        >
                          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ml-3">Web Development</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          App development
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Api
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            <div className=" text-white bg-gray-800 p-10 border-0 rounded-xl">
              {ForumData.map((forum) => (
                <Link
                  to="/SubDisscussion"
                  className="flex items-center border border-gray-600 hover:bg-slate-700 rounded-lg p-5 my-5"
                  key={forum.name}
                >
                  <img
                    className="w-8 h-8 border-0 rounded-full"
                    src="https://yt3.ggpht.com/a/AATXAJze_m5RDcoqRPxisz98o5Zk9FjJBJNJju4NJg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt=""
                  />
                  <div className="mx-3">
                    <h2 className="font-semibold">{forum.name}</h2>
                    <p className="fon font-light text-sm">{forum.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <BackToTopButton />
    </div>
  );
}

export default Disscussion;
