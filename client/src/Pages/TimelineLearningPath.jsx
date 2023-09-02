/** @format */

import React, { useState } from "react";
import "./TimelineLearningPath.css";
const DataScienceTimeline = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleListVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      {/* component */}
      <section>
        <div className="bg-gray-900 text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-blue-500 uppercase tracking-loose">
                Learning Path 🔥🔥🔥
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Learning Timeline for DataScience
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the Learning DataScience 2023. Go through
                all the steps to know the exact process of the Learning
                DataScience.
              </p>
              <a
                href="#"
                className="bg-transparent mr-auto hover:bg-blue-500 text-blue-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-500 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-blue-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #4299e1",
                      borderRadius: "1%",
                    }}
                  />
                  <div
                    className="border-2-2 border-blue-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #4299e1",
                      borderRadius: "1%",
                    }}
                  />
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <div className="mb-3 text-base text-blue-500">
                        Step 1:
                      </div>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Coding Prerequisite{" "}
                        <span class="font-semibold text-md text-slate-600 ">
                          Programming{" "}
                        </span>
                      </h4>
                      <div className="mb-3 font-bold text-lg md:text-2xl mt-4 text-blue-500">
                        Programming Topics to Learn:
                      </div>
                      <button
                        className="show-more-btn"
                        onClick={toggleListVisibility}
                      >
                        {isHidden ? "Show More" : "Show Less"}
                      </button>
                      <div className={` ${isHidden ? "hidden" : ""}`}>
                        <div className="ml-8">
                          <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className=" ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Data Structure (Python / R)
                              </p>
                            </li>
                            <li className=" ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                SQL Scripiting
                              </p>
                            </li>
                            <li className="ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Conditional list/Dict compreshension
                              </p>
                            </li>
                            <li className="ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Object Oriented Programming
                              </p>
                            </li>
                            <li className="ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {" "}
                                Working with external libraries
                              </p>
                            </li>
                            <li className="ml-4">
                              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                              <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Fundamental algorithms- searching, sorting
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-blue-500">
                        6-9 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events
                        will be sent to you via email and whatsapp groups. Use
                        those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-blue-500">
                        {" "}
                        10 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging
                        panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to
                        you.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12" />
                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-blue-500">
                        12 May, 2021
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                        Prize Distribution
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their
                        addresses and the winning goodies will be sent at their
                        addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataScienceTimeline;
