"use client";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUserInDatabase = async () => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      try {
        const response = await fetch("/api/user/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usid: uid,
            name: displayName,
            email: email,
            photoURL: photoURL,
            cartItems: [],
          }),
        });

        if (response.status === 201) {
          console.log("User created successfully");
        } else if (response.status === 200) {
          console.log("User Already Exists");
        } else {
          console.error("Failed to create user");
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };
  const Admins = ["vishwajeety14122@gmail.com", "yvishwajeet2004@gmail.com", "chiraggupta182002@gmail.com", "nandlal6728@gmail.com"];
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && user) {
        createUserInDatabase();
      }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, Admins, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
