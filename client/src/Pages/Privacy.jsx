import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center text-white max-w-md mx-auto px-6 py-8 bg-blue-800 rounded-lg shadow-xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div>
          <p className="text-lg text-gray-300 mb-4">
            Your privacy is important to us. This Privacy Policy outlines the
            types of personal information we receive and collect when you use
            our website, how we use and safeguard that information, and your
            choices with respect to your personal information.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            We collect and use your personal information solely for the purpose
            of providing and improving our services. We do not sell, rent, or
            share your personal information with third parties unless required
            by law or with your consent.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            We may collect information such as your name, email address, and IP
            address when you interact with our website. This information is used
            to personalize your experience, improve our website, and communicate
            with you.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            By using our website, you consent to the collection and use of your
            personal information as described in this Privacy Policy. If you
            have any questions or concerns about our Privacy Policy, please
            contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
