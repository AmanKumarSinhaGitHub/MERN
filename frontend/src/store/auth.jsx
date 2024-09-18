import { createContext, useContext, useState } from 'react'; 

// Create the context
export const AuthContext = createContext();

// AuthProvider component (Provide the Context value)
export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  let isLoggedIn = !!token;

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Logout function
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ storeTokenInLocalStorage, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth custom hook (Use the Context value)
export const useAuth = () => {
  return useContext(AuthContext); 
};
