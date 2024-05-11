import React from "react";

const LicensingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Licensing</h1>
        <div className="max-w-md mx-auto">
          <p className="mb-4">
            Our website's content and materials, including but not limited to
            text, images, videos, and software, are protected by copyright and
            other intellectual property rights.
          </p>
          <p className="mb-4">
            You may use our website's content for personal, non-commercial
            purposes only. Any unauthorized use, reproduction, or distribution
            of our content is strictly prohibited and may result in legal
            action.
          </p>
          <p className="mb-4">
            If you have any questions or inquiries regarding licensing or the
            use of our content, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensingPage;
