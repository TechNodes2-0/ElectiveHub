/** @format */

import React, { useState } from "react";
import "./TimelineLearningPath.css";
const DataScienceTimeline = () => {
  const TimelineDataScience = [
    {
      title: "Coding Prerequisite",
      category: "Programming",
      description:
        "Data Structure (Python / R), SQL Scripting, Conditional list/Dict comprehension, Object-Oriented Programming, Working with external libraries, Fundamental algorithms - searching, sorting",
    },
    {
      title: "Preparation",
      category: "Data Extraction and Wrangling",
      description:
        "Scripting - Extracting Data from API/DB/Website, Data Formatting (Type Conversion), Libraries Learning - Pandas, Numpy, Data Transforming - Joining, Slicing, Indexing, Handling Missing Values",
    },
    {
      title: "Vizulation/ Dashboard",
      category: "EDA, Business acumen and storytelling",
      description:
        "Business Focus Questions, Studying Data Distribution, Univariate and Multivariate Analysis, Data Visualization - Matplotlib, Seaborn, Plotly, Building Dashboards - Excel/Tableau, Jupyter, Writing Concise and Insightful Reports, Business Acumen",
    },
    {
      title: "Data Engineering",
      category: "Data Warehouse",
      description:
        "Strong Programming Skills, Working with CLI (Command Line Interface), Building ETL (Extract, Transform, Load) Pipelines, Using Various Tools - Spark, Kafka, Airflow, and more, Cloud Services - AWS, GCP, Azure, Algorithm - MapReduce, Yarn, Deploying ML Models in Production",
    },
    {
      title: "Experimentation",
      category: "Statistics and mathematics",
      description:
        "Descriptive Statistics - Mean, Median, Mode, STD, and More, Inferential Statistics - Hypothesis and A/B testing, Confidence Intervals, P-Value, Experimental Design, ANOVA, Chi-Square Test, Sampling, Data Distributions, t-test, Linear Algebra, Single and Multivariate Calculus",
    },
    {
      title: "Modeling",
      category: "Machine Learning",
      description:
        "Supervised - Classification, Regression, Unsupervised - Clustering, Dimensionality Reduction, Reinforcement - TF Agents, Optimizing Rewards, Performance Metrics - RMS, Accuracy, Confusion Matrix, AUC-ROC, and More, Statistical Machine Learning - KNN, Decision Trees, Bagging, Boosting",
    },
  ];
  const TimelineCyberSecurity = [
    {
      title: "Foundations of Cybersecurity",
      category: "Basics",
      description:
        "Introduction to Cybersecurity, Cybersecurity Terminology, Security Principles",
    },
    {
      title: "Network Security",
      category: "Networking",
      description:
        "Networking Fundamentals, TCP/IP and Protocols, Firewalls and IDS, Wireless Network Security",
    },
    {
      title: "Cryptography",
      category: "Data Protection",
      description:
        "Introduction to Cryptography, Encryption and Decryption, Public Key Infrastructure (PKI)",
    },
    {
      title: "Web Security",
      category: "Web Protection",
      description:
        "Web Application Security, Secure Coding Practices, OWASP Top Ten",
    },
    {
      title: "Security Testing",
      category: "Testing and Assessment",
      description:
        "Vulnerability Scanning, Penetration Testing, Security Auditing",
    },
    {
      title: "Identity and Access Management",
      category: "Access Control",
      description: "Authentication and Authorization, Single Sign-On (SSO)",
    },
    {
      title: "Incident Response",
      category: "Response",
      description: "Incident Handling Process, Digital Forensics",
    },
    {
      title: "Compliance and Policies",
      category: "Regulations",
      description:
        "Security Policies and Procedures, Regulatory Compliance (e.g., GDPR, HIPAA)",
    },
    {
      title: "Cloud Security",
      category: "Cloud Protection",
      description:
        "Cloud Service Models (IaaS, PaaS, SaaS), Cloud Security Best Practices, Cloud Identity and Access Management",
    },
    {
      title: "Specializations",
      category: "Focus Areas",
      description:
        "Network Security, Application Security, IoT Security, Malware Analysis",
    },
    {
      title: "Advanced Topic",
      category: "Advanced Concepts",
      description: "Advanced Cryptography, Advanced Penetration Testing",
    },
    {
      title: "Certifications",
      category: "Certification Programs",
      description:
        "CompTIA Security+, Certified Information Systems Security Professional (CISSP)",
    },
    {
      title: "Much Moree...",
      category: "Keep Learning",
      description: "",
    },
  ];

  // Example: Access the category of the first entry
  const firstEntryCategory = TimelineCyberSecurity[0].category;
  console.log(firstEntryCategory); // Output: "Basics"

  const initialTimelineData = TimelineCyberSecurity;
  const [timelineData, setTimelineData] = useState(initialTimelineData);
  const [isHidden, setIsHidden] = useState(
    Array(initialTimelineData.length).fill(true)
  );

  const toggleListVisibility = (index) => {
    const updatedIsHidden = [...isHidden];
    updatedIsHidden[index] = !updatedIsHidden[index];
    setIsHidden(updatedIsHidden);
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
                  {timelineData.map((step, index) => (
                    <div
                      key={index}
                      className={`mb-8 flex justify-between ${
                        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                      } items-center w-full ${
                        index % 2 === 0 ? "left-timeline" : "right-timeline"
                      }`}
                    >
                      <div className="order-1 w-5/12" />
                      <div
                        className={`order-1 w-5/12 px-1 py-4 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <div className="mb-3 text-base">Step {index + 1}:</div>
                        <h4 className="text-blue-500 mb-3 font-bold text-lg md:text-2xl">
                          {step.title}{" "}
                          <span className="font-semibold text-md text-slate-600 ">
                            {step.category}
                          </span>
                        </h4>
                        {step.description && ( // Check if description is not null
                          <>
                            <button
                              className="show-more-btn"
                              onClick={() => toggleListVisibility(index)}
                            >
                              {isHidden[index] ? "Show More" : "Show Less"}
                            </button>
                            <div
                              className={` ${isHidden[index] ? "hidden" : ""}`}
                            >
                              <div className="ml-8">
                                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                  {step.description
                                    .split(",")
                                    .map((item, itemIndex) => (
                                      <li key={itemIndex} className="ml-4">
                                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                                        <p className="my-4 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                          {item.trim()}
                                        </p>
                                      </li>
                                    ))}
                                </ol>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
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
