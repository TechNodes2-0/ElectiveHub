import React, { useState, useEffect } from "react";
import LearningPathData from "../assets/scripts/LearningPathData";
import TreeLearningPath from "./TreeLearningPath";
import TimelineLearningPath from "./TimelineLearningPath";
import BackToTopButton from "../Components/BackToTopButton";

const TabComponent = () => {
  const [activeSubject, setActiveSubject] = useState(LearningPathData[0]);
  const [activeTab, setActiveTab] = useState("Timeline");
  const [selectedSubjectData, setSelectedSubjectData] = useState(
    LearningPathData[0]
  );

  // Update selectedSubjectData when activeSubject changes
  useEffect(() => {
    const newSelectedSubjectData = LearningPathData.find(
      (subject) => subject.subjectName === activeSubject?.subjectName
    );
    setSelectedSubjectData(newSelectedSubjectData);
    setActiveTab("Timeline"); // Reset the active tab when switching subjects
  }, [activeSubject]);

  const handleSubjectTabClick = (subject) => {
    setActiveSubject(subject);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {LearningPathData?.map((subject) => (
            <li key={subject.name} className="mr-2">
              <a
                href="#"
                onClick={() => handleSubjectTabClick(subject)}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  activeSubject?.subjectName === subject.subjectName
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                } rounded-t-lg`}
              >
                {subject.subjectName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleTabClick("Timeline")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "Timeline"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              } rounded-t-lg`}
            >
              Timeline
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              onClick={() => handleTabClick("Tree")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "Tree"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              } rounded-t-lg`}
            >
              Tree
            </a>
          </li>
        </ul>
      </div>
      {/* Conditional rendering based on the active tab and subject */}
      {activeTab === "Timeline" && activeSubject?.timelineData && (
        <TimelineLearningPath
          initialTimelineData={activeSubject?.timelineData}
          subjectName={activeSubject?.subjectName}
        />
      )}
      {activeTab === "Tree" && activeSubject?.treeData && (
        <TreeLearningPath data={activeSubject?.treeData} />
      )}

      {/* Repeat the conditional rendering for other subjects */}
      <BackToTopButton />
    </div>
  );
};

export default TabComponent;
