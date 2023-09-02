import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../Components/Auth/AuthContext";
import Cookies from 'universal-cookie';

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
  }, [cookies, navigate, token]);

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
    <div className="flex justify-center items-center h-screen bg-red-100">
      {user && (
        <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
          {user.role === 'admin' ? (
            <div>
              <h3 className="text-xl font-semibold mb-2">Admin Perks:</h3>
              <ul className="list-disc list-inside">
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
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-2">Student Perks:</h3>
              <ul className="list-disc list-inside">
                <li className="text-blue-500">Choose elective subjects</li>
                <li className="text-green-500">Access limited routes</li>
                <li className="text-yellow-500">View selected subjects</li>
              </ul>
            </div>
          )}
          <li className="text-blue-500">
            <Link to="/student">Student Home Page</Link>
          </li>
          <li className="text-blue-500">
            <Link to="/subject">Elective Subjects Page</Link>
          </li>
          <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
