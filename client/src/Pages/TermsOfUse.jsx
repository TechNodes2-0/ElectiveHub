import React from 'react';
import Navbar from '../Components/Navbar';
import Terms  from '../assets/Terms.png';  // Ensure this path is correct

const TermsOfUse = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Navbar />
      <div className='lg:w-3/4 w-full block m-auto'>
        <div className='container mx-auto px-4 py-8'>
          <div className="flex justify-center mb-8">
            <img
              src={Terms}
              alt='Terms of Use'
              className='rounded-lg'
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          </div>
          <h1 className='text-3xl font-bold mb-4 text-center'>Terms of Use</h1>
          <p className='mb-4'><strong>Last Updated On:</strong> 15th June, 2024</p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Introduction</h2>
          <p className='mb-4'>
            Welcome to ElectiveHub. These Terms of Use govern your use of our services and content provided through our platform.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Acceptance of Terms</h2>
          <p className='mb-4'>
            By accessing or using our services, you agree to comply with and be bound by these Terms of Use and our Privacy Policy.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Use of Services</h2>
          <p className='mb-4'>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of our services.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>User Accounts</h2>
          <p className='mb-4'>
            To access certain features of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Prohibited Activities</h2>
          <div className='mb-4'>
            <p>
              You agree not to:
            </p>
            <p className='ml-6'>
              - Use our services in any manner that could damage, disable, overburden, or impair any server or network.
            </p>
            <p className='ml-6'>
              - Attempt to gain unauthorized access to any parts of our services.
            </p>
            <p className='ml-6'>
              - Use any automated means to access our services for any purpose without our express written permission.
            </p>
          </div><br/>

          <h2 className='text-2xl font-semibold mb-2'>Intellectual Property</h2>
          <p className='mb-4'>
            All content and services provided by ElectiveHub, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of ElectiveHub or its content suppliers and are protected by copyright, trademark, and other intellectual property laws.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Termination</h2>
          <p className='mb-4'>
            ElectiveHub reserves the right to terminate or suspend your access to our services at any time, with or without cause or notice.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Changes to These Terms</h2>
          <p className='mb-4'>
            We may update these Terms of Use from time to time. When we do, we will post the updated terms on this page and update the effective date at the top. We encourage you to review these Terms of Use periodically to stay informed about the terms governing your use of our services.
          </p><br/>

          <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Use, please contact us at <a href="mailto:electivehub@support.com" className='text-blue-300'>electivehub@support.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
