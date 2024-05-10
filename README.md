# ElectiveHub  

![image](https://github.com/TechNodes2-0/ElectiveHub/assets/85815172/a113ed3c-5611-4eb2-81b4-9896db64cfdc)


<br>

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/TechNodes2-0/CodeCompanion)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/TechNodes2-0/TechNode-Community-Website.svg)](https://github.com/TechNodes2-0/TechNode-Community-Website/issues)
[![GitHub forks](https://img.shields.io/github/forks/TechNodes2-0/TechNode-Community-Website.svg)](https://github.com/TechNodes2-0/TechNode-Community-Website/network)
[![GitHub stars](https://img.shields.io/github/stars/TechNodes2-0/TechNode-Community-Website.svg)](https://github.com/TechNodes2-0/ElectiveHub/stargazers)
[![Netlify Badge](https://img.shields.io/badge/Netlify-Deployed-brightgreen)](https://electivehub.onrender.com)



## **Description:**
ElectiveHub is an Education Management System designed to simplify and enhance the management of student information and elective subject selection in educational institutions. It offers a suite of applications for students, teachers, and administrators, providing a user-friendly platform to manage academic processes efficiently.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Contributing](#contributing)
4. [License](#license)

# Features

- **Student Information Management:** Add, update, and delete student details, including Student Name, Student ID Number, Email, and Phone Number.
- **Elective Subject Management:** Add, update, and delete elective subjects with details like Elective Subject Name, Description, and Code.
- **Syllabus and Timeline:** Access detailed syllabus information for elective subjects and follow a structured learning timeline.
- **Elective Subject Selection:** Students can choose elective subjects, while teachers can assign them to students.
- **Admin Dashboard:** Visualize data with charts and analytics to make informed decisions about curriculum and student engagement.

# Maintainers

<table style="border: none;">
<tr>
<td align="center" width="200"><pre><a href="https://github.com/Yash636261"><img src="https://avatars.githubusercontent.com/u/98970491?v=4" width="200" alt="Profile" /><br><sub>@Yash636261</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/Nishitbaria"><img src="https://avatars.githubusercontent.com/u/85815172?v=4" width="200" alt="Profile" /><br><sub>@Nishitbaria</sub></a></pre></td>
<td align="center" width="200"><pre><a href="https://github.com/VinayakVispute"><img src="https://avatars.githubusercontent.com/u/93467074?v=4" width="200" alt="Profile" /><br><sub>@VinayakVispute</sub></a>
<td align="center" width="200"><pre><a href="https://github.com/JayeshYadav99"><img src="https://avatars.githubusercontent.com/u/107855172?v=4" width="200" alt="Profile" /><br><sub>@JayeshYadav99</sub></a></pre></td>
</tr>
</table>


# Creating .env file for client

A file named .env is required in the client directory of ELECTIVEHUB for storing environment variables used at runtime. It is not a part of the repo and you will have to create it.

Add the endpoint for accessing electivehub-api service to the variable named "VITE_API_URL" in the .env file.

VITE_API_URL="http://your-server.com"

If you are a developer working on your local system, then the URL would be:

VITE_API_URL="http://localhost:4000"


# Creating .env file in server

A file named .env is required in the server directory of ELECTIVEHUB for storing environment variables used at runtime. It is not a part of the repo and you will have to create it.

Create the following variables in the .env file and assign there values.

MONGO_URL
PORT
TOKEN_KEY


# Installation

To get started with ElectiveHub, follow these installation steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/TechNodes2-0/ElectiveHub.git
   ```

2. Set up the backend by navigating to the server directory:

   ```
   cd server
   ```

3. Install the necessary dependencies for the backend:

   ```
   npm install
   ```

4. Start the backend server:

   ```
   npm start
   ```

5. For the frontend, navigate to the client directory:

   ```
   cd client
   ```

6. Install the necessary dependencies for the frontend:

   ```
   npm install
   ```

7. Start the frontend:

   ```
   npm run dev
   ```

8. Access the application through your web browser.

These steps will ensure both the frontend and backend of ElectiveHub are properly set up and running.

# Contributing

We welcome contributions to improve ElectiveHub. To contribute:

1. Fork the repository on GitHub.

2. Clone the forked repository to your local machine.

3. Make your changes and improvements.

4. Commit your changes with clear and concise commit messages.

5. Push your changes to your forked repository.

6. Submit a pull request to the main repository, describing your changes and why they should be merged.

# License

This project is licensed under the MIT License.

