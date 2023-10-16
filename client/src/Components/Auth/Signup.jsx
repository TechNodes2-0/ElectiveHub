import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";

const Signup = () => {
  const cookies = new Cookies();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const [role, setRole] = useState("student");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,12})/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Invalid password! Please enter a valid password.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          ...inputValue,
          role: role,
        },
        {
          withCredentials: true,
        }
      );

      if (response) {
        console.log(response.data.token);
        cookies.set("TOKEN", response.data.token, {
          path: "/",
        });
      }
      console.log(cookies.get("TOKEN"));

      const { success, message } = response.data;
      if (success) {
        login(response.data.token);
        cookies.set("TOKEN", response.data.token, {
          path: "/",
        });
        navigate("/Home");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-w-md w-full px-6 py-8 border-2 border-gray-300 shadow-lg rounded-md bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">Signup Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-medium text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-lg font-medium text-white"
            >
              Password
            </label>
            <p className="p-4 w-full text-sm text-gray-300">*(Password must be 8-12 characters long and contain 1 capital letter and 1 special character.)</p>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div>
            <label htmlFor="role" className="text-lg font-medium text-white">
              Role
            </label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border rounded text-black"
            >
              <option value="student">Student</option>
              <option value="admin">College Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover-bg-blue-700"
          >
            Submit
          </button>
          <span className="mt-4 text-white ml-8">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
