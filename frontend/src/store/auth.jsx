import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component (Provide the Context value)
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [loggedInUser, setLoggedInUser] = useState("");

  let isLoggedIn = !!token;

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Logout function
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // Get User Data
  const getUserData = async () => {
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment

      const url = `${backendURL}/api/auth/user`; // // API endpoint for user data

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Send token with the request
        },
      });

      // console.log("url", url);
      // console.log("token", token);

      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data);
        console.log(data);
      } else {
        console.log("Failed to Fetch Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLocalStorage, LogoutUser, isLoggedIn, loggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth custom hook (Use the Context value)
export const useAuth = () => {
  return useContext(AuthContext);
};
