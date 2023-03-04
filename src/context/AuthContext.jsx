import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/index";

const Auth = createContext();

const AuthContext = ({ children }) => {


  const [user, setUser] = useState();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const uns = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
    return () => {
      uns();
    };
  }, []);

  return (
    <Auth.Provider value={{ signUp, signin, logout, user }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const userAuth = () => {
  return useContext(Auth);
};
