/** @format */
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Auth/Feature";
import StudyPic from "../assets/Study.png";
import { Link } from "react-router-dom";
import Stats from "../Components/Stats";
import axios from "axios";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import BackToTopButton from "../Components/BackToTopButton";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Homepage() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status
  const [error, setError] = useState(null); // State to handle subscription errors
  const [placeHolder, setPlaceHolder] = useState(true) //for placeholder
  const handleSubscribe = async () => {
    const valid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!valid) {
      setError("Please enter a valid email address");
      return;
    }
    else {
      try {
        // Make a POST request to your subscription endpoint


        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/subscribe-newsletter`,
          { email }
        );

        if (response.status === 200) {
          // Subscription successful
          setSubscribed(true);
          toast.success("Subscribed to newsletter successfully", {
            position: "top-center",
            autoClose: 5000

          })
          setEmail("");
          setError(null);
        } else {
          setError("Error subscribing to the newsletter.");
        }
      } catch (error) {
        console.log(error);
        setEmail("");
        setError("An error occurred while you were subscribing to the newsletter.");
      }

    };
  }

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".home-section", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
    });
    tl.from(".img-home", {
      opacity: 0,
      x: 100,
      // stagger: 0.2,
      // duration: 1.5,
      ease: "power3.out",
    });
  });
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>

      <section class="bg-white dark:bg-gray-900 min-h-screen">

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7  home-section  ">
            <h1 class="sub-selection max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Subject Selection tool for elective subject
            </h1>
            <p class="max-w-2xl mb-6 font-light text-justify text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The Subject Selection Tool for Elective Subject streamlines and
              simplifies the process of choosing elective subjects, helping
              students make informed decisions based on their interests and
              academic goals. It provides comprehensive information to optimize
              their educational experience and align their elective choices with
              their aspirations.
            </p>
            <Link
              to="/Login"
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
          <div class="hidden lg:flex lg:w-[37vw]">
            <img
              src={StudyPic}
              alt="mockup"
              width={400}
              height={400}
              className="w-full lg:ml-6 animate-bounce-slow img-home"
            />
          </div>
        </div>
      </section>
      <Feature></Feature>
      <Stats />

      {/* ------------------------------- Newsletter section ------------------------------- */}
      <section
        className="h-full text-center lg:text-left p-5 flex flex-col items-center sm:mt-0 bg-gray-900 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to bottom, #0369A1, #024472, #032647)",
      // }}
      >
        <div className="md:w-full text-2xl lg:text-3xl font-bold text-white mb-5 lg:w-1/2 text-center ">
          <span className="text-primary">
            Subscribe to our{" "}
            <span className="inline text-primary-600 ">Newsletter</span>
          </span>
          <p className="lg:mt-2 mt-5 mr-0 lg:mr-20 text-white font-medium text-lg">
            Get information regarding new Updates Features, Statistical
            Analysis, and Monthly Review from our team.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center p-2 w-full">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:flex-row justify-between relative mb-3 w-full md:mr-3 md:mb-0">
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 mr-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="emailInput"
                placeholder={placeHolder ? "" : "Enter your email"}
                onFocus={() => setPlaceHolder(false)}
                onBlur={() => setEmail("")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="emailInput"
                className={`
            pointer-events-none 
        absolute 
        top-0 
        left-3 
        mb-0 
        max-w-[90%] 
        origin-[0_0] 
        truncate 
        pt-[0.37rem] 
        leading-[2.15] 
        text-slate-200 
        transition-transform 
        duration-200 
        ease-out 
        ${email ? "-translate-y-[2.15rem] scale-[0.8]" : ""}
        ${email ? "text-primary" : ""}
        motion-reduce:transition-none 
        dark:text-neutral-200 
        dark:peer-focus:text-primary
    `}
              >
                Enter your email
              </label>
              <button

                onClick={handleSubscribe}
                className="lg:mt-0 mt-2 inline-block rounded hover:bg-slate-800 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal hover:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out bg-primary-600 text-gray-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                disabled={subscribed}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

      </section>

      <BackToTopButton />
    </div>
  );
}
