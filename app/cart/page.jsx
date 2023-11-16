"use client";
import ScrollToTop from "react-scroll-to-top";
import React, { useState, useEffect } from "react";
import Loading from "./loading.jsx";
import CartItems from "@/Components/cart/CartItems.jsx";
const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
      <ScrollToTop smooth color="#ff640e" />
      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <CartItems setLoading={setLoading} />
      </div>
    </>
  );
};

export default page;
