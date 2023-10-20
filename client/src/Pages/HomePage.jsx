/** @format */
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Auth/Feature";
import StudyPic from "../assets/Study.png";
import { Link } from "react-router-dom";
import Stats from "../Components/Stats";
import axios from "axios";
import BackToTopButton from "../Components/BackToTopButton";

export default function Homepage() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status
  const [error, setError] = useState(null); // State to handle subscription errors

  const handleSubscribe = async () => {
    try {
      // Make a POST request to your subscription endpoint
      console.log(email);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/subscribe-newsletter`,
        { email }
      );

      if (response.status === 200) {
        // Subscription successful
        setSubscribed(true);
        setError(null);
      } else {
        setError("Error subscribing to the newsletter.");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while you subscribing to the newsletter.");
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Subject Selection tool for elective subject
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The Subject Selection Tool for Elective Subject streamlines and
              simplifies the process of choosing elective subjects, helping
              students make informed decisions based on their interests and
              academic goals. It provides comprehensive information to optimize
              their educational experience and align their elective choices with
              their aspirations.
            </p>
            <Link
              to="/Home"
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
              src={StudyPic}
              alt="mockup"
              width={400}
              class="ml-20 animate-bounce-slow"
            />
          </div>
        </div>
      </section>
      <Feature></Feature>
      <Stats />
      <hr className="border-t border-gray-500" />
      <section className="text-center lg:text-left bg-gray-500 p-12">
        <div className="flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold dark:text-white">
                  Do not miss any updates.
                  <br />
                  <span className="text-primary dark:text-primary-400">
                    Subscribe to the newsletter
                  </span>
                </h2>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div
                  className="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="emailInput"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="emailInput"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter your email
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="inline-block rounded bg-slate-800 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  disabled={subscribed}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
}
