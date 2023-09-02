import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const[localtoken,setlocalToken]=useState(null);

  // Function to save token to localStorage
  const saveTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("authToken", jwtToken);
  };

  // Function to retrieve token from localStorage on page load
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };

  // Check token in localStorage on initial mount
  useEffect(() => {
    const storedToken = getTokenFromLocalStorage();
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const login = (jwtToken) => {
    console.log("setting token");
    setIsLoggedIn(true);
    setToken(jwtToken);

    // Save the token to localStorage
    saveTokenToLocalStorage(jwtToken);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);

    // Clear the token from localStorage
    localStorage.removeItem("authToken");
  };

  const value = {
    isLoggedIn,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthContext, AuthProvider };
