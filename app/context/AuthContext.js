"use client";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  // FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUserInDatabase = async () => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      try {
        const userExists = await fetch(`/api/user/${uid}`);
        if (userExists.status === 200) {
          console.log("Hi " + displayName + ", Welcome Back")
        } else {
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
          } else {
            console.error("Failed to create user");
          }
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };

  // const facebookSignIn = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider)
  //     // signInWithRedirect(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log("Facebook sign-in error:", error);
  //     });
  // };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const Admins = ["vishwajeety14122@gmail.com", "yvishwajeet2004@gmail.com", "chiraggupta182002@gmail.com", "nandlal6728@gmail.com", "anshugupta4742@gmail.com"];
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
    // <AuthContext.Provider value={{ user, Admins, googleSignIn, facebookSignIn, logOut }}>
    <AuthContext.Provider value={{ user, Admins, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
