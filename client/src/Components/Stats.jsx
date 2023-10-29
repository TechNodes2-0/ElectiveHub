/** @format */

import React from "react";

export default function Stats() {
  return (
    <div style={{backgroundImage:'linear-gradient(to top, #6b7280, #535a68, #3c4251, #262c3c, #111827)'}}>
      <h1 className="text-3xl text-center text-white">Stats</h1>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-900">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-gray-500">
                  Total Students
                </p>
                <div class="hs-tooltip">
                  <div class="hs-tooltip-toggle">
                    <svg
                      class="w-3.5 h-3.5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                    <span
                      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                      role="tooltip"
                    >
                      The number of daily users
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  72,540
                </h3>
                <span class="flex items-center text-green-600">
                  <svg
                    class="inline-block w-7 h-7 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                  <span class="inline-block text-sm">1.7%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-800">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-gray-500">
                  Subject
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  29.4%
                </h3>
              </div>
            </div>
          </div>

          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-800">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-gray-500">
                  Avg. Click Rate
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  56.8%
                </h3>
                <span class="flex items-center text-red-600">
                  <svg
                    class="inline-block w-7 h-7 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                  <span class="inline-block text-sm">1.7%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-800">
            <div class="p-4 md:p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase tracking-wide text-gray-500">
                  Pageviews
                </p>
              </div>

              <div class="mt-1 flex items-center">
                <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                  92,913
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
