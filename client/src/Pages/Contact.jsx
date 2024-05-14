import React from "react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-xl text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          You can reach us via email at{" "}
          <a
            href="mailto:contact@electivehub.com"
            className="text-teal-500 hover:underline"
          >
            contact@electivehub.com
          </a>
          .
        </p>
        {/* Add more contact information or a contact form if needed */}
      </div>
    </div>
  );
};

export default ContactPage;
