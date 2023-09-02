import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Cookies from "universal-cookie";

import StudentNavbar from '../Components/StudentNavbar'
import StudentList from '../Components/Student/StudentList';

export default function StudentHome() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const token = cookies.get("TOKEN");
  useEffect(() => {
    const verifyCookie = async () => {


      console.log(token);
      if (!token) {
        console.log("1");
        navigate("/login");
      } else {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/yaae`, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },

            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          });

          const { status, user } = response.data;

          if (status && user) {
            // alert(user.username);
            console.log(user.username);
            setUsername(user.username);
          } else {
            console.log("2");
            cookies.remove("TOKEN", { path: "/login" });

            navigate("/login");
          }
        } catch (error) {
          console.log("3");
          console.error(error);
          cookies.remove("TOKEN", { path: "/login" });

          navigate("/Signup");
        }
      }
    };

    verifyCookie();
  }, [cookies, navigate]);

  const handleLogout = () => {
    console.log("4");
    cookies.remove("TOKEN", { path: "/" });
    console.log(cookies.get("TOKEN"));

    if (token) {
      console.log("cookie is here");
      console.log(cookies.cookies.TOKEN);
    }
    else {
      console.log("cookie is not here");
    }

    navigate("/login");
  };

  return (

    <div>
      <StudentNavbar />
      <StudentList token={token} />

    </div>
  )
}
