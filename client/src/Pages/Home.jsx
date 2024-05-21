import React, { useEffect, useState } from "react";
import {Modal , Button} from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Auth/AuthContext";
import Cookies from "universal-cookie";
import BackToTopButton from "../Components/BackToTopButton";
import { useGSAP } from "@gsap/react";

const StudentDetailsFunctionality = () => {
  return (
    <div className="bg-white py-4 pl-3  rounded-b-lg mb-2 ">
      <h3 className="text-lg  text-black font-light mb-2">
        {" "}
        Manage Student Details Functionality:{" "}
      </h3>
      <ul className="list-disc  list-inside">
        <li className="text-blue-900">View all students</li>
        <li className="text-green-900">Add a new student</li>
        <li className="text-yellow-900">Update student details</li>
        <li className="text-red-900">Delete a student</li>
      </ul>
    </div>
  );
};

const ElectiveSubjectFunctionality = () => {
  return (
    <div className="bg-white py-4 pl-3 rounded-b-lg mb-2 ">
      <h3 className="text-lg  text-black mb-2 font-light">
        Manage Elective Subjects Functionality:
      </h3>
      <ul className="list-disc list-inside  ">
        <li className="text-blue-900">View all elective subjects</li>
        <li className="text-green-900">Add a new elective subject</li>
        <li className="text-yellow-900">Update elective subject details</li>
        <li className="text-red-900">Delete an elective subject</li>
      </ul>
    </div>
  );
};

const SpecialRoutesFunctionality = () => {
  return (
    <div className="bg-white py-4 pl-3  rounded-b-lg mb-2 ">
      <h3 className="text-lg    text-black font-light mb-2">
        Special Routes Functionality:
      </h3>
      <ul className="list-disc list-inside">
        <li className="text-blue-900">Add elective subject to a student</li>
        <li className="text-green-900">Add student to an elective subject</li>
        <li className="text-yellow-900">Get elective subjects for a student</li>
        <li className="text-red-900">Edit subject of a student</li>
        <li className="text-purple-900">
          Remove elective subject from a student
        </li>
        <li className="text-indigo-900">
          Remove student from an elective subject
        </li>
        <li className="text-pink-900">Get students for an elective subject</li>
      </ul>
    </div>
  );
};

const Home = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [showmodal, setModal] = useState(null);
  const [showStudentFunctionality, setShowStudentFunctionality] =
    useState(false);
  const [showSubjectFunctionality, setShowSubjectFunctionality] =
    useState(false);
  const [showSpecialRoutesFunctionality, setShowSpecialRoutesFunctionality] =
    useState(false);
  const [studentArrowImage, setStudentArrowImage] = useState("right_arrw.png");
  const [subjectArrowImage, setSubjectArrowImage] = useState("right_arrw.png");
  const [specialRoutesArrowImage, setSpecialRoutesArrowImage] =
    useState("right_arrw.png");
  const { token, logout } = useContext(AuthContext);
  console.log(token);

  useEffect(() => {
    const verifyCookie = async () => {
      console.log(token);
      if (!token) {
        console.log("1");
        navigate("/");
      } else {
        try {
          console.log(token);
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/yaae`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const { status, user } = response.data;

          if (status && user) {
            console.log(user.username);
            setUser(user);
          } else {
            console.log("2");
            cookies.remove("TOKEN", { path: "/login" });
            navigate("/");
          }
        } catch (error) {
          console.log("3");
          console.error(error);
          cookies.remove("TOKEN", { path: "/login" });
          navigate("/");
        }
      }
    };

    verifyCookie();
  }, [navigate, token]);

  const handleLogout = () => {
    console.log("4");
    logout();

    navigate("/");
  };

  const toggleStudentFunctionality = () => {
    setShowStudentFunctionality(!showStudentFunctionality);
    setStudentArrowImage(
      !showStudentFunctionality ? "down_arrw.png" : "right_arrw.png"
    );
  };

  const toggleSubjectFunctionality = () => {
    setShowSubjectFunctionality(!showSubjectFunctionality);
    setSubjectArrowImage(
      !showSubjectFunctionality ? "down_arrw.png" : "right_arrw.png"
    );
  };

  const toggleSpecialRoutesFunctionality = () => {
    setShowSpecialRoutesFunctionality(!showSpecialRoutesFunctionality);
    setSpecialRoutesArrowImage(
      !showSpecialRoutesFunctionality ? "down_arrw.png" : "right_arrw.png"
    );
  };

  return (
    <div className="flex  w-full min-h-screen bg-gray-900">
      {user && (
        <div className="w-full flex-wrap p-8  mt-12">
          <h2 className="text-7xl  text-transparent bg-clip-text font-sans pt-6 font-semibold mb-4 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 inline-block">
            Welcome, {user.username}
          </h2>

          {user.role === "admin" ? (
            <div>
              <h3 className="text-2xl text-white ml-6 mt-10 font-bold mb-2">
                Admin Perks:
              </h3>
              <div className="flex w-full pt-5">
                <ul className="list-none pl-6  w-full md:w-3/5 list-inside ">
                  <div className=" flex justify-start items-center my-1  rounded-t-lg  p-4  h-auto w-auto bg-blue-200 ">
                    <li className="text-black text-lg  ">
                      Access to all website routes
                    </li>
                  </div>
                  <div className=" flex justify-start p-4 my-1 items-center rounded-t-lg h-auto w-auto  bg-blue-200 ">
                    <li
                      className=" text-black text-lg  "
                      onClick={toggleStudentFunctionality}
                    >
                      Manage Student Details
                    </li>
                    <img
                      src={studentArrowImage}
                      className="h-6 w-6 ml-11 mt-1 cursor-pointer"
                      onClick={toggleStudentFunctionality}
                      alt="Toggle Arrow"
                    />
                  </div>

                  {showStudentFunctionality && <StudentDetailsFunctionality />}

                  <div className=" flex justify-start my-1 p-4 items-center rounded-t-lg h-auto w-auto bg-blue-200 ">
                    <li
                      className=" text-black  text-lg  "
                      onClick={toggleSubjectFunctionality}
                    >
                      Manage Elective Subjects
                    </li>
                    <img
                      src={subjectArrowImage}
                      className="h-6 w-6 ml-9 mt-1 cursor-pointer"
                      onClick={toggleSubjectFunctionality}
                      alt="Toggle Arrow"
                    />
                  </div>
                  {showSubjectFunctionality && <ElectiveSubjectFunctionality />}

                  <div className=" flex justify-start items-center my-1 p-4 rounded-lg  h-auto w-auto bg-blue-200 ">
                    <li
                      className="text-text text-lg  "
                      onClick={toggleSpecialRoutesFunctionality}
                    >
                      Special Routes Functionality
                    </li>
                    <img
                      src={specialRoutesArrowImage}
                      className="h-6 w-6 ml-3 mt-1 cursor-pointer"
                      onClick={toggleSpecialRoutesFunctionality}
                      alt="Toggle Arrow"
                    />
                  </div>
                  {showSpecialRoutesFunctionality && (
                    <SpecialRoutesFunctionality />
                  )}
                </ul>
              </div>
            </div> 
          ) : (
            <div>
              <h3 className="text-2xl text-white ml-6 mt-10 font-bold mb-2">
                Student Perks:
              </h3>
              <ul className="list-none pl-6  w-full md:w-3/5 list-inside">
                <div className=" flex justify-start items-center my-1  rounded-t-lg  p-4  h-auto w-auto bg-blue-200 ">
                  <li className="text-black text-lg  ">
                    Choose elective subjects
                  </li>
                </div>
                <div className=" flex justify-start items-center my-1    p-4  h-auto w-auto bg-blue-200 ">
                  <li className="text-black text-lg  ">
                    Access limited routes
                  </li>
                </div>
                <div className=" flex justify-start items-center my-1  rounded-b-lg  p-4  h-auto w-auto bg-blue-200 ">
                  <li className="text-black text-lg  ">
                    View selected subjects
                  </li>
                </div>
              </ul>
            </div>
          )}
          <div className="h-auto mt-16 text-xl w-full">
            <li className="text-white flex justify-start underline underline-offset-2 items-center list-none  ">
              <img src="student_Home.png" className="h-6 w-6 mr-2" />{" "}
              <Link to="/student"> Student Home</Link>
            </li>
            <li className="text-white flex justify-start  underline underline-offset-2 items-center list-none  ">
              <img src="books.png" className="h-6 w-6 mr-2" />{" "}
              <Link to="/subject">Elective Subjects</Link>
            </li>
          </div>
          <button
            className="bg-red-400 text-white rounded px-4 py-2 mt-6"
            onClick={() => {
                        setModal(true);
                      }}
          >
            Logout
          </button>
        </div>
      )}
      <div className="w-full">
        <img src="wlcmbg.png" className="w-full hidden md:block mr-36" />
      </div>
      <BackToTopButton />
      <Modal
        show={showmodal}
        onClose={() => setModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to SignOut?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleLogout}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
