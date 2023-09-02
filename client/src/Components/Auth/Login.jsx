import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";



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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          ...inputValue,
        },
        {
          withCredentials: true,
          

          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );

      if (response) {
        console.log(response.data.token);
        localStorage.setItem("authToken",response.data.token);
        login(response.data.token);

        cookies.set("TOKEN", response.data.token, {
          path: "/",
        });
      }
      console.log(cookies.get("TOKEN"));

      const { success, message } = response.data;

      if (success) {
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md w-full px-6 py-8  border-2 border-gray-300 shadow-lg rounded-md bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login Account
        </h2>
        <form onSubmit={handleSubmit}>
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
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2"
          >
            Submit
          </button>
        </form>
        <span className="mt-4 text-white">
          Already have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
