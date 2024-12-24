"use client";
import React, { useState, useEffect } from "react";
import Loading from "../../../Components/loading/loading-pages/ItemPageLoading.jsx";
import SingleItem from "@/Components/single-item/SingleItem.jsx";
import { Provider } from "react-redux";
import { store } from "../../../redux/store.js";

const page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const itemId = params.id;
  const [item, setItem] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(`/api/item/${itemId}`);
    const data = await response.json();
    setItem(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Provider store={store}>
        {loading && <Loading />}
        <div className={loading ? `hidden` : null}>
          <SingleItem item={item} />
        </div>
      </Provider>
    </>
  );
};

export default page;
