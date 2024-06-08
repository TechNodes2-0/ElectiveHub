import React from 'react';
import Navbar from '../Components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Navbar />
      <div className='lg:w-3/4 w-full block m-auto'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Privacy Policy</h1>
        <p className='mb-4'><strong>Last Updated On:</strong> 8th June, 2024</p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Introduction</h2>
        <p className='mb-4'>
          Welcome to ElectiveHub. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your information.
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Information We Collect</h2><br/>
        <h3 className='text-xl font-semibold mb-1'>Personal Information</h3>
        <p className='mb-4'>
          We collect personal information that you provide to us when you:
          <ul className='list-disc list-inside ml-4'>
            <li>Register or create an account on ElectiveHub.</li>
            <li>Select elective subjects.</li>
            <li>Communicate with us through customer service or other channels.</li>
            <li>Use any of our services.</li>
          </ul>
          This information may include your name, email address, phone number, date of birth, student ID, and other relevant details.
        </p><br/>

        <h3 className='text-xl font-semibold mb-1'>Non-Personal Information</h3>
        <p className='mb-4'>
          We may also collect non-personal information that cannot be used to identify you, such as:
          <ul className='list-disc list-inside ml-4'>
            <li>Browser type and version.</li>
            <li>Device type and operating system.</li>
            <li>IP address.</li>
            <li>Usage data, including the date and time of your visits to ElectiveHub and your activities on the site.</li>
          </ul>
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>How We Use Your Information</h2>
        <p className='mb-4'>
          We use the information we collect to:
          <ul className='list-disc list-inside ml-4'>
            <li>Provide, operate, and maintain our services.</li>
            <li>Process and manage elective subject selections.</li>
            <li>Communicate with you about your account and our services.</li>
            <li>Improve and personalize your experience on ElectiveHub.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Monitor and analyze usage and trends to improve our services.</li>
            <li>Ensure compliance with legal obligations and our policies.</li>
          </ul>
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Sharing Your Information</h2>
        <p className='mb-4'>
          We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
          <ul className='list-disc list-inside ml-4'>
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring company.
            </li>
          </ul>
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Security</h2>
        <p className='mb-4'>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Your Choices</h2>
        <p className='mb-4'>
          You have the following rights regarding your personal information:
          <ul className='list-disc list-inside ml-4'>
            <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your personal information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
            <li><strong>Opt-Out:</strong> You can opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</li>
          </ul>
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Changes to This Privacy Policy</h2>
        <p className='mb-4'>
          We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page and update the effective date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p><br/>

        <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at<a href="mailto:electivehub@supprt.com" className='text-blue-300'> electivehub@support.com</a>
        </p>
      </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
