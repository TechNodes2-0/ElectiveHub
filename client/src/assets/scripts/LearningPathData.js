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
//Main Object
const LearningPathData = [
  {
    name: "DataScience",
    subjectName: "Data Science",
    treeData: dataScienceTree,
    timelineData: TimelineDataScience,
  },
  {
    name: "CyberSecurity",
    subjectName: "Cyber Security",
    treeData: dataCybersecuritytree,
    timelineData: TimelineCyberSecurity,
  },
];

export default LearningPathData;
