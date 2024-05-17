/** @format */

import React, { useState, useEffect } from "react";
import StatsCard from "./StatsCard";

const CardData = [
  {
    label: "Total Students",
    finalValue: 72540,
    growth: 1.7,
    loss: 0,
    percentage: false,
  },
  {
    label: "Subject Percentage",
    finalValue: 29.4,
    growth: 0,
    loss: 0,
    percentage: true,
  },
  {
    label: "Avg. Click Rate",
    finalValue: 56.8,
    growth: 0,
    loss: 1.7,
    percentage: true,
  },
  {
    label: "PageViews",
    finalValue: 92913,
    growth: 0,
    loss: 0,
    percentage: false,
  },
];

export default function Stats() {
  const [currentValues, setCurrentValues] = useState(
    CardData.map((card) => ({ currentValue: 0, finalValue: card.finalValue }))
  );

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      const updatedValues = currentValues.map((card) => {
        if (card.currentValue < card.finalValue) {
          const step = Math.ceil(card.finalValue / 100);
          const newValue = card.currentValue + step;
          return {
            ...card,
            currentValue:
              newValue >= card.finalValue ? card.finalValue : newValue,
          };
        }
        return card;
      });
      setCurrentValues(updatedValues);
    }, 50);

    return () => {
      clearInterval(incrementInterval);
    };
  }, [currentValues]);

  return (
    <div className=" lg:py-6 bg-gray-900 ">
      <h1 className="text-3xl text-center text-white">Stats</h1>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6  lg:px-8 lg:py-6 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
          {CardData.map((item, index) => (
            <StatsCard
              key={index}
              label={item.label}
              finalValue={currentValues[index].currentValue}
              isPercentage={item.percentage}
              isGrow={item.growth}
              isLoss={item.loss}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
