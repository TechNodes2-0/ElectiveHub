// BackToTopButton.js
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-7
        right-8
        bg-gray-700
        text-gray-200
        rounded-2xl
        p-4
        cursor-pointer
        ${isVisible ? "visible opacity-100" : "invisible opacity-0"}
        transition-opacity
        duration-300
        ease-in-out
      `}
      title="Go to top"
      style={{
        width: "60px", // Set the width to create a square
        height: "60px", // Set the height to create a square
      }}
    >
      ▲
    </button>
  );
};

export default BackToTopButton;
