"use client"
import React, { useState, useEffect } from "react";
import Loading from "./loading.jsx";
import SingleItem from "@/Components/SingleItem";

const page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 300);

  }, []);
  return (
    <>
      {loading && <Loading />} {/* Show loading screen while loading */}
      <div className={loading ? `hidden` : null}>
        <SingleItem /> {/* Render SingleItem component */}</div>
    </>
  );
};

export default page;
