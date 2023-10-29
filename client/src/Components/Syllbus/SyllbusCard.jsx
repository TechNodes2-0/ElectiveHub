/** @format */

// SyllabusCard.js
import React from "react";
import Card from "./Card"; // Import your Card component
import cardsData from "./cardsData.json"; // Import the JSON data
import BackToTopButton from "../BackToTopButton";

export default function SyllabusCard() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-lightblack">
            Read our Subject Syllabus
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            You can read our subject syllabus here. We have provided the
            syllabus
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              linkText={card.linkText}
              linkUrl={card.linkUrl}
              id={card.id}
            />
          ))}
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
