import React from 'react';
import Navbar from '../Components/Navbar';
import yash from '../assets/yash.png';
import nishit from '../assets/nishit.png';
import vinayak from '../assets/vinayak.png';
import jayesh from '../assets/Jayesh.png';

const teamData = [
  {
    name: 'Yash Suthar',
    image: yash,
    github: 'https://github.com/Yash636261',
  },
  {
    name: 'Nishit Bariya',
    image: nishit,
    github: 'https://github.com/Nishitbaria',
  },
  {
    name: 'Vinayak Vispute',
    image: vinayak,
    github: 'https://github.com/VinayakVispute',
  },
  {
    name: 'Jayesh Yadav',
    image: jayesh,
    github: 'https://github.com/JayeshYadav99',
  },
];

const OurTeam = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Navbar />
      <div className='lg:w-3/4 w-full block m-auto'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Our Team</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {teamData.map((member, index) => (
              <div key={index} className='text-center'>
                <div className='relative w-40 h-40 m-auto mb-4'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                <h2 className='text-xl font-semibold mb-2'>{member.name}</h2>
                <a
                  href={member.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-300'
                >
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
