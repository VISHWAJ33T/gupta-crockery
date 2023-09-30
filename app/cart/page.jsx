"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading.jsx";
import CartItems from "@/Components/CartItems";
// import { UserAuth } from "../context/AuthContext";
const page = () => {
  // const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  // const handleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 50));
  //     if (!user) {
  //       handleSignIn();
  //     }
  //     setLoading(false);
  //   };
  //   checkAuthentication();
  // }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <CartItems />
      </div>
    </>
  );
};

export default page;
