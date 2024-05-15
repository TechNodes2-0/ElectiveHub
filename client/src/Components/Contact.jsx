import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'



export default function About() {
  return (

<div>
<Navbar />
<div className='bg-gray-900' style={{height: "50px"}}>
<img src='https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/afs.jpg?alt=media&token=25caf792-1d90-4916-93ba-27023b449479' className='w-full bg-gray-900' style={{height: "550px"}}>
</img>
</div>
        <div class="flex justify-center items-center h-full bg-gray-900">
    <div class="text-center ">
        <h1 class="max-w-3xl mb-6 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl">Contact Us</h1>
        <p class="max-w-2xl mb-2 font-light text-white md:text-lg lg:text-xl">Have questions, or just want to say hello? We'd love to hear from you! Drop us a line using the form below, and we'll get back to you as soon as possible.</p>
    </div>
</div>
<div className='flex mt-10 h-auto justify-center bg-gray-900'>
<form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-10 bg-gray-200 h-auto dark:border-gray-700 dark:bg-gray-800 p-10 mx-3 rounded-lg ttransition duration-300 hover:shadow-2xl hover:shadow-blue-500/70 hover:scale-105" style={{width:"800px" }}>
<input type="hidden" name="access_key" value="33e7186f-166c-459b-aa50-8abeb932d45c"/>
<div className='flex flex-col gap-6 sm:flex-row justify-between'>
<div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="First Name" />
        </div>
            <TextInput
            type='text'
            placeholder='Name'
            name='name'
            className="flex-1"  />
            </div>
            <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Last Name" />
        </div>
            <TextInput
            type='text'
            placeholder='Surname'
            name='Last Name'
            className="flex-1" /> 
            </div>
            </div>
            <div className='flex flex-col gap-6 sm:flex-row justify-between'>
        <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Contact" />
        </div>
            <TextInput
            type='number'
            placeholder='Phone no'
            required id='city'
            name='Number'
            className="flex-1"  />
            </div>
            <div className='w-full'>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email" />
        </div>
            <TextInput
            type='email'
            placeholder='name@xyz.com'
            name='Email'
            className="flex-1" /> 
            </div>
            </div>
      <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder=" Leave a comment..." name='Message' required rows={4} />
    </div>
      <Button onclick="/#" type='submit'>Send message</Button>
    </form>
</div>
<section class="bg-white dark:bg-gray-900 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About ElectiveHub</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">ElectiveHub is an Education Management System designed to simplify and enhance the management of student information and elective subject selection in educational institutions. It offers a suite of applications for students, teachers, and administrators, providing a user-friendly platform.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110 ">
    <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
            </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Our Mission</h3>
              <p class="text-gray-500 dark:text-gray-400">Our mission at ElectiveHub is to revolutionize the way educational institutions manage student information and elective subject selection. We aim to create a user-friendly platform that empowers students and administrators to navigate the complexities of education management with ease and efficiency.  </p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110">
                  <svg class="w-5 h-5 text-white text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
              <p class="text-gray-500 dark:text-gray-400">ElectiveHub is committed to maintaining the highest standards of legal compliance and data protection. We adhere to all relevant educational regulations and privacy laws, ensuring that our platform safeguards the confidentiality and integrity of student information.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110">
                  <svg class="w-5 h-5 text-white text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Our Story</h3>
              <p class="text-gray-500 dark:text-gray-400">The story of ElectiveHub began with a simple observation: the process of managing elective subjects and student information in educational institutions was often cumbersome and outdated. Our founders saw an opportunity to streamline these processes through technology.</p>
          </div> 
          <div>
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110">
                  <svg class="w-5 h-5 text-white text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              
              <h3 class="mb-2 text-xl font-bold dark:text-white">Enterprise</h3>
              <p class="text-gray-500 dark:text-gray-400">ElectiveHub offers enterprise solutions tailored to meet the needs of large educational institutions. Our enterprise package includes advanced features such as customizable dashboards and integration with existing school management systems.</p>
          </div>
          <div>
          <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
              </div>

              <h3 class="mb-2 text-xl font-bold dark:text-white">Finance</h3>
              <p class="text-gray-500 dark:text-gray-400">ElectiveHub is funded through a combination of venture capital, strategic partnerships, and subscription-based services. Our financial model is designed to ensure sustainability and continuous improvement of our platform.</p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-900 hover:shadow-lg transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-800 hover:scale-110">
                  <svg class="w-5 h-5 text-white text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Join Us</h3>
              <p class="text-gray-500 dark:text-gray-400">At ElectiveHub, we are always looking for passionate individuals to join our team. Whether you are a developer, educator, or marketing expert, we offer exciting opportunities to contribute to the future of education management. </p>
          </div>
      </div>
  </div>
</section>
</div>
  )
}
