// clerkStub.jsx
// Provides authentication context (AuthProvider) and hook (useAuth) for managing login state in the ZenJob Clone frontend.
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(null); // You can expand this with user info if needed

  useEffect(() => {
    setIsSignedIn(!!localStorage.getItem('token'));
  }, []);

  const signIn = (token) => {
    localStorage.setItem('token', token);
    setIsSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 