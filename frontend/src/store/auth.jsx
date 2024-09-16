import { createContext, useContext } from 'react'; 

// Create the context
export const AuthContext = createContext();

// AuthProvider component (Provide the Context value)
export const AuthProvider = ({ children }) => {
  const storeTokenInLocalStorage = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider value={{ storeTokenInLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth custom hook (Use the Context value)
export const useAuth = () => {
  return useContext(AuthContext); 
};
