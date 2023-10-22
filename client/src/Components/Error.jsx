/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import BackToTopButton from "./BackToTopButton";

export default function Error() {
  const [showConfetti, setShowConfetti] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger the confetti after the component has mounted
    setShowConfetti(true);

    // Redirect to /Homepage after 5 seconds
    const timer = setTimeout(() => {
      // You should use `history.replace` to replace the current URL
      window.location.replace("/");
    }, 5000);

    // Clean up the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't access that page without Login.
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Go to Homepage
            </Link>
            {showConfetti && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
          </div>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
}
