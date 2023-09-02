import React, { useState } from "react";
import TreeLearningPath from "./TreeLearningPath";
import TimelineLearningPath from "./TimelineLearningPath";
// Create separate components for the Timeline and Tree content

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleTabClick("timeline")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "timeline"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              } rounded-t-lg`}
            >
              <svg
                className={`w-4 h-4 mr-2 ${
                  activeTab === "timeline"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Add your timeline icon here */}
              </svg>
              Timeline
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleTabClick("tree")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "tree"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              } rounded-t-lg`}
              aria-current={activeTab === "tree" ? "page" : undefined}
            >
              <svg
                className={`w-4 h-4 mr-2 ${
                  activeTab === "tree"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                {/* Add your tree icon here */}
              </svg>
              Tree
            </a>
          </li>
        </ul>
      </div>

      {/* Conditional rendering based on the active tab */}
      {activeTab === "timeline" && <TimelineLearningPath />}
      {activeTab === "tree" && <TreeLearningPath />}
    </div>
  );
};

export default TabComponent;
