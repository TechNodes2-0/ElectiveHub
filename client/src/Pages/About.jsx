import React from "react";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center text-white max-w-md mx-auto px-6 py-8 bg-blue-800 rounded-lg shadow-xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div>
          <p className="text-lg text-gray-300 mb-4">
            Welcome to ElectiveHub! We are dedicated to providing a streamlined
            and user-friendly platform for students to explore and select
            elective subjects.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Our mission is to empower students to make informed decisions about
            their academic paths by offering comprehensive information and tools
            to optimize their educational experience.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            At ElectiveHub, we strive for excellence in delivering a seamless
            elective subject selection process, aligning with students'
            interests, aspirations, and academic goals.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Thank you for choosing ElectiveHub as your trusted resource for
            elective subject selection and management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
