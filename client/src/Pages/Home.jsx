import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../Components/Auth/AuthContext";
import Cookies from 'universal-cookie';
import BackToTopButton from '../Components/BackToTopButton';

const StudentDetailsFunctionality = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Manage Student Details Functionality:</h3>
      <ul className="list-disc list-inside">
        <li className="text-blue-500">View all students</li>
        <li className="text-green-500">Add a new student</li>
        <li className="text-yellow-500">Update student details</li>
        <li className="text-red-500">Delete a student</li>
      </ul>
    </div>
  );
};

const ElectiveSubjectFunctionality = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Manage Elective Subject Functionality:</h3>
      <ul className="list-disc list-inside">
        <li className="text-blue-500">View all elective subjects</li>
        <li className="text-green-500">Add a new elective subject</li>
        <li className="text-yellow-500">Update elective subject details</li>
        <li className="text-red-500">Delete an elective subject</li>
      </ul>
    </div>
  );
};

const SpecialRoutesFunctionality = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Special Routes Functionality:</h3>
      <ul className="list-disc list-inside">
        <li className="text-blue-500">Add elective subject to a student</li>
        <li className="text-green-500">Add student to an elective subject</li>
        <li className="text-yellow-500">Get elective subjects for a student</li>
        <li className="text-red-500">Edit subject of a student</li>
        <li className="text-purple-500">Remove elective subject from a student</li>
        <li className="text-indigo-500">Remove student from an elective subject</li>
        <li className="text-pink-500">Get students for an elective subject</li>
      </ul>
    </div>
  );
};

const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [showStudentFunctionality, setShowStudentFunctionality] = useState(false);
  const [showSubjectFunctionality, setShowSubjectFunctionality] = useState(false);
  const [showSpecialRoutesFunctionality, setShowSpecialRoutesFunctionality] = useState(false);
  const { token,logout } = useContext(AuthContext);
  console.log(token);

  useEffect(() => {
    const verifyCookie = async () => {
      console.log(token);
      if (!token) {
        console.log('1');
        navigate('/');
      } else {
        try {
          console.log(token)
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/yaae`, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { status, user } = response.data;

          if (status && user) {
            console.log(user.username);
            setUser(user);
          } else {
            console.log('2');
            cookies.remove('TOKEN', { path: '/login' });
            navigate('/');
          }
        } catch (error) {
          console.log('3');
          console.error(error);
          cookies.remove('TOKEN', { path: '/login' });
          navigate('/');
        }
      }
    };

    verifyCookie();
  }, [navigate, token]);

  const handleLogout = () => {
    console.log('4');
   logout();

    navigate('/');
  };

  const toggleStudentFunctionality = () => {
    setShowStudentFunctionality(!showStudentFunctionality);
  };

  const toggleSubjectFunctionality = () => {
    setShowSubjectFunctionality(!showSubjectFunctionality);
  };

  const toggleSpecialRoutesFunctionality = () => {
    setShowSpecialRoutesFunctionality(!showSpecialRoutesFunctionality);
  };

  return (

<div class="overflow-hidden shadow  min-h-screen bg-gray-900">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-white">
            {user?.username}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-blue-700">
            {user?.role}
        </p>
    </div>
    <div class="border-t px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {user?.username}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {user?.email}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Role
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {user?.role}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                Elective Subjects Page
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
             <Link to="/subject"  className="text-blue-500">Click Here</Link>
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                Student Home Page
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
             <Link to="/student" className='text-blue-500'>Click Here</Link>
                </dd>
            </div>
            {user?.role === 'admin' ? (
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                Admin Perks:
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                <li className="text-blue-500">Access to all website routes</li>
                <li className="text-green-500" onClick={toggleStudentFunctionality}>
                    Manage Student Details
                </li>
                {showStudentFunctionality && <StudentDetailsFunctionality />}
                <li className="text-yellow-500" onClick={toggleSubjectFunctionality}>
                    Manage Elective Subjects
                </li>
                {showSubjectFunctionality && <ElectiveSubjectFunctionality />}
                <li className="text-purple-500" onClick={toggleSpecialRoutesFunctionality}>
                    Special Routes Functionality
                </li>
                {showSpecialRoutesFunctionality && <SpecialRoutesFunctionality />}
                </dd>
            </div>):(
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                Student Perks:
                </dt>
                <dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                <p className="text-blue-500">Choose elective subjects</p>
                <p className="text-green-500">Access limited routes</p>
                <p className="text-yellow-500">View selected subjects</p>
                </dd>
            </div>)}
        </dl>
    </div>
    <button className="bg-blue-500 ml-5 text-white rounded px-4 py-2 mt-4" onClick={handleLogout}>
             Logout
           </button>
</div>
  );
};

export default Home;
