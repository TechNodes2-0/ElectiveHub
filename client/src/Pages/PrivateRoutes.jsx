import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import Cookies from "universal-cookie";

export default function PrivateRoutes() {
  try {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    // alert("Checking");
    if (token) {
      // alert(token);
      return <Outlet />;
    } else {
      const location = useLocation();
      return (
        <div className="h-full">
          <Navbar />
          <Error></Error>
        </div>
      );
    }
  } catch (error) {
    console.error("Error in PrivateRoutes:", error);
    // Render fallback UI or error message
    return <p>Oops! Something went wrong.</p>;
  }
}
