import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function PrivateRoutes() {
  try {
    const cookies = new Cookies();
    const token = cookies.get('TOKEN');
    // alert("Checking");
    if (token) {
      // alert(token);
      return <Outlet />;
    } else {
      const location = useLocation();
      return (
        <div>
          <p>You need to log in to access this page.</p>
          <Link to={{ pathname: '/login', state: { from: location } }}>
            Go to Login
          </Link>
        </div>
      );
    }
  } catch (error) {
    console.error('Error in PrivateRoutes:', error);
    // Render fallback UI or error message
    return <p>Oops! Something went wrong.</p>;
  }
}
