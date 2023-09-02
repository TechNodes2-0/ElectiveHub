import React from "react";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Auth/Feature";
import Contectus from "../Components/Contectus";
import { Link } from "react-router-dom";
import FAQ from "../Components/FAQ";

export default function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="font-sans mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Subject Selection tool for elective subject
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
              The Subject Selection Tool for Elective Subject" streamlines and
              simplifies the process of choosing elective subjects, helping
              students make informed decisions based on their interests and
              academic goals. It provides comprehensive information to optimize
              their educational experience and align their elective choices with
              their aspirations.
            </p>
            <Link
              to="/Student"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <Feature></Feature>
      <Contectus></Contectus>
      <FAQ />
    </div>
  );
}
