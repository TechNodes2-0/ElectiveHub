import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";
import BackToTopButton from "../BackToTopButton";
import userImg from "../../assets/images/user.webp";
import { toast } from "react-toastify";

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
        { ...inputValue },
        { withCredentials: true }
      );

      if (response.data.success) {
        console.log(response.data.token);
        login(response.data.token);
        cookies.set("TOKEN", response.data.token, { path: "/" });
        navigate("/Home");
      } else {
        alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      toast.error("Incorrect credentials. Check and try again or sign up.");
      console.log(error);
    }
  };

  const handleLoginWithGoogle = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <div className="flex items-center flex-wrap justify-center h-screen bg-gray-900">
      <img src={userImg} alt="user" />
      <div className="max-w-md w-full px-6 py-8 rounded-md">
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
          <button
            className="button"
            style={{
              transition: "background-color .3s, box-shadow .3s",
              cursor: "pointer",
              marginTop: "20px",
              padding: "12px 16px 12px 42px",
              border: "none",
              borderRadius: "3px",
              boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",
              color: "#757575",
              fontSize: "14px",
              fontWeight: "500",
              fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
              backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMiAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)`,
              backgroundColor: "white",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "12px 11px",
            }}
            onClick={handleLoginWithGoogle}
          >
            Sign In With Google
          </button>
        </form>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Login;
