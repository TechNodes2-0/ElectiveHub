import React from "react";
import { Route, Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (
    // this route takes other routes assigned to it from the App.js and return the same route if condition is met
    <Route
      {...rest}
      render={(props) => {
        // get cookie from browser if logged in
        const token = cookies.get("TOKEN");

        // returns route if there is a valid token set in the cookie
        if (token) {
          return <Component {...props} />;
        } else {
          // sets the location a user was about to access before being redirected to login
          const { location } = props;

          return (
            <div>
              <p>You need to log in to access this page.</p>
              <Link to={{ pathname: "/", state: { from: location } }}>
                Go to Login
              </Link>
            </div>
          );
        }
      }}
    />
  );
}
