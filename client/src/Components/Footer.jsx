import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="bg-white h-[30vh] shadow dark:bg-gray-900 ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://    ElectiChoice.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png"
              class="h-8 mr-3"
              alt="    ElectiChoice Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ElectiChoice
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" class="hover:underline">
            ElectiChoice™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
