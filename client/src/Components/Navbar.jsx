/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext"; 
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function Navbar() {
  const cookies = new Cookies();
  const { token, isLoggedIn, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [openNav, setOpenNav] = useState(false);

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
    // Perform any additional actions after logout, e.g., redirect to login page
    // history.push("/login"); // If you are using React Router, you can redirect the user to the login page
  };


  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.logo', {
      opacity: 0,
       duration: 0.5,
        x: -100
    })
   .from('li', {
    opacity: 0, 
    duration: 0.5,
    y: -100,
    stagger:0.2
  })
  })
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3413/3413535.png"
              className="h-8 mr-3"
              alt="subject Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ElectiveHub
            </span>
          </a>
          {!openNav ? (
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
          ) : (
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={() => setOpenNav(!openNav)}
            >
              <span className="sr-only">Close main menu</span>
              <svg
                fill="white"
                className="w-4 h-4"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xml:space="preserve"
              >
                <polygon
                  points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
                />
              </svg>
            </button>
          )}

          {openNav && (
            <ul className=" lg:hidden font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row w-full md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="flex-grow text-start text-white">
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              {token && username ? (
                <>
                  <li className="flex-grow text-start">
                    <Link
                      to="/Admin"
                      className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Admin
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

                  <li className="flex-grow text-start">
                    <Link
                      to="/Dashboard"
                      className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

                  <li className="flex-grow text-start">
                    <Link
                      to="/Contact"
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <li className="flex-grow text-start ">
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 dark:text-red-600 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-transparent md:dark:bg-transparent"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : null}
              {!isLoggedIn && (
                <>
                  <li className="flex-grow text-start">
                    <a
                      href="/Login"
                      className="block py-2 pl-3 pr-4 text-gray-900 hover:dark:text-red-600 rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-400 dark:hover:bg-transparent  md:dark:hover:bg-transparent"
                    >
                      Login
                    </a>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  <li className="flex-grow text-start">
                    <a
                      href="/Signup"
                      className="block py-2 pl-3 pr-4 text-gray-900 hover:dark:text-sky-600 rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-400 dark:hover:bg-transparent  md:dark:hover:bg-transparent"
                    >
                      Signup
                    </a>
                  </li>
                </>
              )}
            </ul>
          )}

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-primary-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {token && username ? (
                <>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-primary-600 md:dark:bg-transparent"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard"
                      className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-primary-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Admin"
                      className="block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-400 dark:bg-primary-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/Home">
                      <span className="block py-1 pl-3 pr-4 rounded bg-gray-800 text-white">
                        Welcome, {username}
                      </span>
                    </Link>
                  </li>
                </>
              ) : null}
              {!isLoggedIn && (
                <>
                  <li>
                    <a
                      href="/Login"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Signup"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Signup
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
