import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";
import BackToTopButton from "../BackToTopButton";
import userImg from "../../assets/images/user.webp";
import { toast } from "react-toastify";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Login = () => {
  const cookies = new Cookies();
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  useGSAP(()=>{
    const tl = gsap.timeline();
tl.from('.text-login',{
  opacity: 0,
  y:100,
  duration: 1,
  delay: 0.5,
  ease: "power3.inOut",
  stagger: {
    amount: 0.5,
  },
})
    tl.from('.form-login',{
      opacity: 0,
      y:100,

      ease: "power3.inOut",

    })
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          ...inputValue,
        },
        // {
          // withCredentials: true,

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        // }
      );
      console.log(response)
      if (response) {
        console.log(response.data.token);
        login(response.data.token);

        cookies.set("TOKEN", response.data.token, {
          path: "/",
        });
      }
      console.log(cookies.get("TOKEN"));

      const { success, message } = response.data;

     
      if (success) {
        // navigate("/verify", {state: {email: inputValue.email}});
        navigate("/Home");
      } else {
        alert(message.message);
        console.log(message);
      }
    } catch (error) {
      toast.error("Incorrect credentials. Check and try again or sign up.");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center flex-wrap justify-center h-screen bg-gray-900">
      <img src={userImg} alt="user" />
      <div className="max-w-md w-full px-6 py-8 rounded-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-white text-login">
          Login Account
        </h2>
        <form onSubmit={handleSubmit} className="form-login">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="w-full px-2 py-3 rounded-md outline-none border border-gray-300"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="w-full px-2 py-3 rounded-md outline-none border border-gray-300"
            />
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2"
            >
              Submit
            </button>
            <p className="mt-4 text-white">
              New to the Platform?
              <Link
                to={"/signup"}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Login;
