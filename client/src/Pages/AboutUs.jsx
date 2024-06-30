import React from 'react';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Navbar />
      <div className='lg:w-3/4 w-full block m-auto'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-4 text-center'>About Us</h1>
          
          <p className='mb-4'>
            <strong>Welcome to ElectiveHub!</strong> Our mission is to revolutionize the way educational institutions manage student information and elective subject selection. We understand the challenges faced by students, teachers, and administrators, and have developed a comprehensive Education Management System to address these needs effectively.
          </p>
          
          <h2 className='text-2xl font-semibold mb-2'>Who We Are</h2>
          <p className='mb-4'>
            ElectiveHub is a cutting-edge Education Management System designed to simplify and enhance the management of student information and elective subject selection in educational institutions. We offer a suite of applications tailored for students, teachers, and administrators, providing a user-friendly platform that streamlines educational processes and promotes efficiency.
          </p>
          
          <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
          <p className='mb-4'>
            Our mission is to empower educational institutions with innovative tools that facilitate seamless management of academic processes. By leveraging technology, we aim to enhance the educational experience for students, improve administrative efficiency, and support teachers in delivering quality education.
          </p>
          
          <h2 className='text-2xl font-semibold mb-2'>What We Offer</h2>
          <p className='mb-4'>
            ElectiveHub provides a comprehensive suite of applications, including:
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>Student Information Management: Efficiently manage student records, enrollment, attendance, and performance data.</li>
            <li>Elective Subject Selection: Simplify the process of selecting and managing elective subjects for students.</li>
            <li>Teacher and Administrator Tools: Provide powerful tools for educators and administrators to manage their tasks and responsibilities effectively.</li>
            <li>Communication and Collaboration: Facilitate communication between students, teachers, and administrators to enhance collaboration and support.</li>
            <li>Analytics and Reporting: Generate detailed reports and analytics to gain insights into academic performance and institutional efficiency.</li>
          </ul>
          
          <h2 className='text-2xl font-semibold mb-2'>Why Choose ElectiveHub?</h2>
          <p className='mb-4'>
            At ElectiveHub, we are committed to delivering a high-quality education management solution that meets the evolving needs of educational institutions. Here are some reasons to choose us:
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>User-Friendly Interface: Our platform is designed with a focus on ease of use, ensuring a smooth experience for all users.</li>
            <li>Comprehensive Features: We offer a wide range of features that cover all aspects of education management.</li>
            <li>Reliable Support: Our dedicated support team is always ready to assist you with any questions or issues.</li>
            <li>Continuous Improvement: We continuously update and enhance our platform to incorporate the latest technological advancements and feedback from our users.</li>
            <li>Secure and Scalable: We prioritize data security and provide a scalable solution that grows with your institution.</li>
          </ul>
          
          <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
          <p className='mb-4'>
            If you have any questions or would like to learn more about ElectiveHub, please don't hesitate to contact us. We are here to help you make the most of our education management system.
          </p>
          <p>
            Email us at <a href="mailto:electivehub@support.com" className='text-blue-300'>electivehub@support.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
