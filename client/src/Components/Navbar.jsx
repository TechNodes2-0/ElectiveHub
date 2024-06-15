import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
import { AuthContext } from "./Auth/AuthContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const cookies = new Cookies();
  const { token, isLoggedIn, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const [showmodal, setModal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/yaae`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { status, user } = response.data;
        if (user) {
          console.log(user);
          setUsername(user.username);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      opacity: 0,
      duration: 0.5,
      x: -100,
    }).from("li", {
      opacity: 0,
      duration: 0.5,
      y: -100,
      stagger: 0.2,
    });
  });

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png"
              className="h-8 mr-3"
              alt="subject Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ElectiveHub
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setOpenNav(!openNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {openNav && (
            <ul className="lg:hidden font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row w-full md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex-grow text-start text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              {token && username ? (
                <>
                  <li className="flex-grow text-start">
                    <NavLink
                      to="/Admin"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                      aria-current="page"
                    >
                      Admin
                    </NavLink>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

                  <li className="flex-grow text-start">
                    <NavLink
                      to="/Dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                      aria-current="page"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

                  <li className="flex-grow text-start">
                    <NavLink
                      to="/Contact"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                      aria-current="page"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <li className="flex-grow text-start ">
                    <NavLink
                      to="/"
                      className="block py-2 pl-3 pr-4 dark:text-red-600 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : null}
              {!isLoggedIn && (
                <>
                  <li className="flex-grow flex text-start">
                    <NavLink
                      to="/Login"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <li className="flex-grow flex text-start mr-2">
                    <NavLink
                      to="/Signup"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          )}

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                      : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {token && username ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className="block py-2 pl-3 pr-4 dark:text-red-600 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                      onClick={() => setModal(true)}
                    >
                      Logout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                      aria-current="page"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Admin"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                      aria-current="page"
                    >
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Home">
                      <span className="block py-1 pl-3 pr-4 rounded bg-gray-800 text-white">
                        Welcome, {username}
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : null}
              {!isLoggedIn && (
                <>
                  <li>
                    <NavLink
                      to="/Login"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Signup"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:p-0"
                          : "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                      }
                    
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Modal show={showmodal} onClose={() => setModal(false)} popup size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to SignOut?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleLogout}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
