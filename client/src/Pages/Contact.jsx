import React from "react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-white mb-4">
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
