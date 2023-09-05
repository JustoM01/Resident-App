import React, { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component to wrap your app with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in the user
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
