"use client";
import ScrollToTop from "react-scroll-to-top";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import React, { useState, useEffect } from "react";
import Loading from "../../Components/loading/loading-pages/CartPageLoading.jsx";
import CartItems from "@/Components/cart/CartItems.jsx";
const page = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      <Provider store={store}>
        <ScrollToTop smooth color="#ff640e" />
        {loading && <Loading />}
        <div className={loading ? `hidden` : null}>
          <CartItems setLoading={setLoading} />
        </div>
      </Provider>
    </>
  );
};

export default page;
