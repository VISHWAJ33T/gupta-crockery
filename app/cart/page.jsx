"use client"
import React, { useState, useEffect } from "react";
import Loading from "./loading.jsx";
import CartItems from "@/Components/CartItems"
const page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 0);

  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <CartItems /></div>
    </>
  )
}

export default page