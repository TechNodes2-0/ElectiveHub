import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function StatsCard({
  label,
  finalValue,
  isPercentage,
  isGrow,
  isLoss,
}) {
  // Function to calculate duration based on the final value
  const calculateDuration = (value) => {
    if (value < 100) return 1.2;
    if (value < 1000) return 1.5;
    if (value < 10000) return 1.8;
    return 2;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white border-2 shadow-sm rounded-xl dark:bg-gray-900 border-blue-400 dark:border-blue-300 transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 lg:mb-10 sm:mb-5 font-roboto">
      <div className="p-4 md:p-5 flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-x-2 mb-2">
          <p className="text-sm md:text-base lg:text-lg uppercase tracking-wide text-black font-semibold">
            {label}
          </p>
        </div>

        <div className="mt-1 flex items-center">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <CountUp
                  start={isVisible ? 0 : null}
                  end={finalValue}
                  duration={calculateDuration(finalValue)}
                  decimals={isPercentage ? 1 : 0}
                  suffix={isPercentage ? "%" : ""}
                />
              )}
            </VisibilitySensor>
          </h3>
          {isGrow > 0 || isLoss > 0 ? (
            <span
              className={`flex items-center ${
                isGrow > 0 ? "text-green-600" : "text-red-600"
              } ml-2`}
            >
              <svg
                className="inline-block w-7 h-7 self-center"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {isGrow > 0 ? (
                  <path
                    fillRule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                )}
              </svg>
              <span className="inline-block text-sm">
                {isGrow > 0 ? isGrow : isLoss}%
              </span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
