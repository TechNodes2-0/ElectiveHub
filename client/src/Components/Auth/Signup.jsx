import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";
import BackToTopButton from "../BackToTopButton";
import userImg from "../../assets/images/login1.png";
import { toast } from "react-toastify";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


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
  const togglePasswordVisibility = () => {
    setInputValue(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

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
      toast.error("Invalid email format"); 
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Invalid password"); 
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
        if (response.status === 409) {
          toast.error("This email id already exists, please either login or use another email id");
        } else {
          toast.error(message); // Display error message from server
        }
      }
    } catch (error) {
      toast.error("Signup Failed, Please try again");
      console.log(error);
    }
  };
  const customStyles = {
    student: {
      backgroundColor: 'rgb(17 24 39)',
    },
    default: {
      backgroundColor: 'transparent',
    },
  };
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.text-signup',{
      duration: 1,
      opacity: 0,
      y: 100,
      delay: 0.5,
      ease: 'power3.out',
      stagger: {
        amount: 0.5,
      },
    })
    tl.from('.form-signup',{
      duration: 1,
      opacity: 0,
      y: 100,
      ease: 'power3.out'
    })
  })

  return (
    <div className="h-screen flex  items-center  justify-center gap-0 md:gap-1 bg-gray-900">
      {/* <img src={userImg} alt="user" className=" w-[0px] md:w-[50vw]"/> */}
      <div class="hidden lg:flex lg:w-[30vw]">
            <img
              src={userImg}
              alt="user"
              width={300}
              height={300}
              className="w-full lg:ml-6 animate-bounce-slow img-home"
            />
      </div>
      <br></br>
      <div class="flex flex-col bg-white border-1.5 shadow-sm rounded-xl dark:bg-gray-900 border-blue-400 dark:border-blue-300 transition duration-300  lg:mb-10 sm:mb-5 ml-12">

      <div className="max-w-md w-full  px-6 py-1 rounded-md">
        {/* <h2 className=" text-[4vw] font-bold mb-4 text-white text-signup sm:text-2xl">Create Account</h2> */}
        <h2 className="text-[4vw] sm:text-3xl font-bold text-center mb-6 text-white text-signup">
        Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 form-signup">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[3vw] sm:text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="w-full px-2  py-2 sm:py-2 md:py-3 rounded-md outline-none border  border-blue-400 dark:border-blue-300 bg-transparent border-1.5 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[3vw] sm:text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              required
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="w-full px-2  py-2 sm:py-2 md:py-3 rounded-md outline-none border  border-blue-400 dark:border-blue-300 bg-transparent border-1.5 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[3vw] sm:text-sm font-medium text-white"
            >
              Password
            </label>
            <i className="w-full text-[3vw]  sm:text-sm text-gray-300">
              *(Password must be 8-12 characters long and contain 1 capital
              letter and 1 special character.)
            </i>
            <div style={{ position: 'relative' }}>
            <input
              type={inputValue.showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="w-full px-2  py-2 sm:py-2 md:py-3 rounded-md outline-none border  border-blue-400 dark:border-blue-300 bg-transparent border-1.5 text-white"
            />
            <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={togglePasswordVisibility}
              >
                {inputValue.showPassword ?  <i className="material-icons">&#x1F441;</i> : <i className="material-icons">&#x1F440;</i>}
              </div>
              </div>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-[3vw] sm:text-sm md:text-sm font-medium text-white"
            >
              Role
            </label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-2  py-2 sm:py-2 md:py-3 rounded-md outline-none border  border-blue-400 dark:border-blue-300 bg-transparent border-1.5 text-white"
              style={{ color: 'white', backgroundColor: 'transparent' }}

            >
              <option value="student" style={role === 'student' ? customStyles.student : customStyles.default}>Student</option>
              <option value="admin" style={role === 'student' ? customStyles.student : customStyles.default}>College Admin</option>

            </select>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div class="flex flex-col bg-white border-2 shadow-sm rounded-xl dark:bg-gray-900 border-blue-400 dark:border-blue-300 transition duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 lg:mb-10 sm:mb-5">

              <button
                type="submit"
                className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center "
                >
                Signup
              </button>
            </div>
            <div className="w-70 ">
              <p className="text-[3vw] sm:text-[1.5vw] md:text-[1.3vw] text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Signup;