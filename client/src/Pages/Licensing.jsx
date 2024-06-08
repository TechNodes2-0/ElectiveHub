import React from 'react';
import Navbar from '../Components/Navbar';

const Licensing = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Navbar />
      <div className='lg:w-3/4 w-full block m-auto'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-4 text-center'>Licensing</h1>
          <p className='mb-4'><strong>Last Updated On:</strong> 8th June, 2024</p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Introduction</h2>
          <p className='mb-4'>
            Welcome to ElectiveHub. This Licensing page outlines the terms under which you may use our services and the content provided through our platform.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>License Grant</h2>
          <p className='mb-4'>
            Subject to your compliance with these terms, ElectiveHub grants you a limited, non-exclusive, non-transferable, revocable license to access and use our services and content solely for your personal, non-commercial use.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Restrictions</h2>
          <div className='mb-4'>
            <p>
              You agree not to:
            </p>
            <p className='ml-6'>
              - Reproduce, distribute, publicly display, or publicly perform our content except as permitted by the license.
            </p>
            <p className='ml-6'>
              - Modify or create derivative works of our services or content.
            </p>
            <p className='ml-6'>
              - Use our services or content for any commercial purpose or in any manner not permitted by these terms.
            </p>
            <p className='ml-6'>
              - Attempt to interfere with or disrupt the integrity or performance of our services.
            </p>
          </div><br/>

          <h2 className='text-2xl font-semibold mb-2'>Intellectual Property</h2>
          <p className='mb-4'>
            All content and services provided by ElectiveHub, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of ElectiveHub or its content suppliers and are protected by copyright, trademark, and other intellectual property laws.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>User Contributions</h2>
          <p className='mb-4'>
            By submitting any content to ElectiveHub, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Termination</h2>
          <p className='mb-4'>
            ElectiveHub reserves the right to terminate or suspend your license to use our services and content at any time, with or without cause or notice.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Changes to This Licensing Policy</h2>
          <p className='mb-4'>
            We may update this Licensing Policy from time to time. When we do, we will post the updated policy on this page and update the effective date at the top. We encourage you to review this Licensing Policy periodically to stay informed about the terms under which you may use our services and content.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Licensing Policy or our terms of use, please contact us at <a href="mailto:electivehub@support.com" className='text-blue-300'>electivehub@support.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Licensing;
