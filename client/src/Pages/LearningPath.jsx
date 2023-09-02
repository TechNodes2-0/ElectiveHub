import React, { useState, useEffect } from "react";
import axios from "axios";
import Tree from "react-d3-tree";
import RichText from "../Components/RichText";
import LargeModal from "../Components/LargeModal";

export default function LearningPath() {
  const dataCybersecuritytree = {
    name: "Cybersecurity Learning Path",
    children: [
      {
        name: "Foundations of Cybersecurity",
        children: [
          {
            name: "Introduction to Cybersecurity",
          },
          {
            name: "Cybersecurity Terminology",
          },
          {
            name: "Threats and Vulnerabilities",
          },
          {
            name: "Security Principles",
          },
        ],
      },
      {
        name: "Network Security",
        children: [
          {
            name: "Networking Fundamentals",
          },
          {
            name: "TCP/IP and Protocols",
          },
          {
            name: "Firewalls and IDS",
          },
          {
            name: "Wireless Network Security",
          },
        ],
      },
      {
        name: "Cryptography",
        children: [
          {
            name: "Introduction to Cryptography",
          },
          {
            name: "Encryption and Decryption",
          },
          {
            name: "Public Key Infrastructure (PKI)",
          },
        ],
      },
      {
        name: "Web Security",
        children: [
          {
            name: "Web Application Security",
          },
          {
            name: "Secure Coding Practices",
          },
          {
            name: "OWASP Top Ten",
          },
        ],
      },
      {
        name: "Security Testing",
        children: [
          {
            name: "Vulnerability Scanning",
          },
          {
            name: "Penetration Testing",
          },
          {
            name: "Security Auditing",
          },
        ],
      },
      {
        name: "Identity and Access Management",
        children: [
          {
            name: "Authentication and Authorization",
          },
          {
            name: "Single Sign-On (SSO)",
          },
        ],
      },
      {
        name: "Incident Response",
        children: [
          {
            name: "Incident Handling Process",
          },
          {
            name: "Digital Forensics",
          },
        ],
      },
      {
        name: "Compliance and Policies",
        children: [
          {
            name: "Security Policies and Procedures",
          },
          {
            name: "Regulatory Compliance (e.g., GDPR, HIPAA)",
          },
        ],
      },
      {
        name: "Cloud Security",
        children: [
          {
            name: "Cloud Service Models (IaaS, PaaS, SaaS)",
          },
          {
            name: "Cloud Security Best Practices",
          },
          {
            name: "Cloud Identity and Access Management",
          },
        ],
      },
      {
        name: "Specializations",
        children: [
          {
            name: "Network Security",
          },
          {
            name: "Application Security",
          },
          {
            name: "IoT Security",
          },
          {
            name: "Malware Analysis",
          },
        ],
      },
      {
        name: "Advanced Topics",
        children: [
          {
            name: "Advanced Cryptography",
          },
          {
            name: "Advanced Penetration Testing",
          },
        ],
      },
      {
        name: "Certifications",
        children: [
          {
            name: "CompTIA Security+",
          },
          {
            name: "Certified Information Systems Security Professional (CISSP)",
          },
        ],
      },
      {
        name: "Continuous Learning",
      },
    ],
  };
  const dataScienceTree = {
    name: "Data Science",
    children: [
      {
        name: "Coding Prerequisite",
        children: [
          {
            name: "Programming",
            children: [
              {
                name: "Data Structure",
                children: [{ name: "Python" }, { name: "R" }],
              },
              { name: "SQL Scripting" },
              { name: "Conditional List/Dict Comprehension" },
              { name: "Object Oriented Programming" },
              { name: "Working with External Libraries" },
              { name: "Fundamental Algorithms (Searching, Sorting)" },
            ],
          },
        ],
      },
      {
        name: "Preparation",
        children: [
          {
            name: "Data Extraction and Wrangling",
            children: [
              {
                name: "Scripting",
                children: [
                  { name: "Extracting Data from API" },
                  { name: "Extracting Data from Website" },
                  { name: "Extracting Data from DBs" },
                ],
              },
              { name: "Data Formatting (Type Conversion)" },
              {
                name: "Libraries Learning",
                children: [{ name: "Pandas" }, { name: "Numpy" }],
              },
              {
                name: "Data Transforming",
                children: [
                  { name: "Joining" },
                  { name: "Slicing" },
                  { name: "Indexing" },
                ],
              },
              { name: "Handling Missing Values" },
            ],
          },
        ],
      },
      {
        name: "Visualization/Dashboard",
        children: [
          {
            name: "EDA, Business Acumen, and Storytelling",
            children: [
              { name: "Define Business Focus Questions" },
              { name: "Studying Data Distribution" },
              { name: "Univariate and Multivariate Analysis" },
              {
                name: "Data Visualization",
                children: [
                  { name: "Matplotlib" },
                  { name: "Seaborn" },
                  { name: "Plotly" },
                ],
              },
              {
                name: "Building Dashboard",
                children: [{ name: "Excel/Tableau" }, { name: "Jupyter" }],
              },
              { name: "Writing Concise and Insightful Reports" },
              { name: "Business Acumen" },
            ],
          },
        ],
      },
      {
        name: "Data Warehouse",
        children: [
          {
            name: "Data Engineering",
            children: [
              { name: "Strong Programming Skills" },
              { name: "Working with CLI" },
              { name: "Building ETL Pipelines" },
              {
                name: "Using Various Tools",
                children: [
                  { name: "Spark" },
                  { name: "Kafka" },
                  { name: "Airflow" },
                  { name: "And Much More" },
                ],
              },
              {
                name: "Cloud Services",
                children: [{ name: "AWS" }, { name: "GCP" }, { name: "Azure" }],
              },
              {
                name: "Algorithms",
                children: [{ name: "Map Reduce" }, { name: "Yarn" }],
              },
              { name: "Deploying ML Models in Production" },
            ],
          },
        ],
      },
      {
        name: "Experimentation",
        children: [
          {
            name: "Statistics and Mathematical",
            children: [
              {
                name: "Descriptive Statistics",
                children: [
                  { name: "Mean" },
                  { name: "Median" },
                  { name: "Mode" },
                  { name: "STD" },
                  { name: "And Much More" },
                ],
              },
              { name: "Inferential Statistics" },
              {
                name: "Experimental Design",
                children: [
                  { name: "Hypothesis and A/B Testing" },
                  { name: "Confidence Intervals (CI)" },
                  { name: "P-Value" },
                ],
              },
              {
                name: "Experimental Design",
                children: [
                  { name: "ANOVA" },
                  { name: "Chi-Square Test" },
                  { name: "Sampling, Data Distributions, t-Test" },
                ],
              },
              {
                name: "Mathematics",
                children: [
                  { name: "Linear Algebra" },
                  { name: "Single and Multivariate Calculus" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Modeling",
        children: [
          {
            name: "Machine Learning",
            children: [
              { name: "Supervised Learning" },
              { name: "Unsupervised Learning" },
              { name: "Reinforcement Learning" },
              {
                name: "Performance Metrics",
                children: [
                  { name: "Root Mean Square Error (RMS)" },
                  { name: "Accuracy" },
                  { name: "Confusion Matrix" },
                  { name: "AUC-ROC" },
                ],
              },
              {
                name: "Statistical Machine Learning",
                children: [
                  { name: "K-Nearest Neighbors (KNN)" },
                  { name: "Decision Trees" },
                  { name: "Ensemble Learning (Bagging, Boosting)" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const treeData = dataScienceTree;
  if (!treeData) {
    // Show loading or some other UI while fetching the data
    return <div>Loading...</div>;
  }

  return (
    <div>
      <OrgChartTree treeData={treeData} />
    </div>
  );
}

function OrgChartTree({ treeData }) {
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const [showModal, setShowModal] = useState(false);
  const nodeSize = { x: 900, y: 400 };
  const foreignObjectProps = { width: nodeSize.x, height: "1500", x: 70 };

  return (
    <div
      id="treeWrapper"
      style={containerStyles}
      className="border-4 border-black"
    >
      <Tree
        data={treeData}
        initialDepth={0}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) => (
          <RenderForeignObjectNode
            {...rd3tProps}
            foreignObjectProps={foreignObjectProps}
            showModal={showModal}
            handleButtonClick={handleButtonClick}
            onNodeClick={() => handleButtonClick()}
          />
        )}
        nodeSize={nodeSize}
        // enableLegacyTransitions={true}
      />
    </div>
  );
}

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const RenderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <g>
      <circle r={35} onClick={toggleNode} />
      <foreignObject
        width={foreignObjectProps.width}
        height={foreignObjectProps.height}
        x={foreignObjectProps.x}
      >
        {!showModal && (
          <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
                {nodeDatum?.name}
              </h5>
            </a>
            {nodeDatum.attributes?.title && (
              <div className="p-4 text-white">{nodeDatum.attributes.title}</div>
            )}
            {nodeDatum.attributes?.article && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                type="button"
                onClick={handleButtonClick}
              >
                Toggle modal
              </button>
            )}
          </div>
        )}

        {showModal && (
          <LargeModal
            nodeDatum={nodeDatum}
            handleButtonClick={handleButtonClick}
          >
            {nodeDatum?.attributes?.article && (
              <RichText articleId={nodeDatum.attributes.article} />
            )}
          </LargeModal>
        )}
      </foreignObject>
    </g>
  );
};
