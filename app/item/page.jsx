"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "./loading.jsx";
import SingleItem from "@/Components/single-item/SingleItem.jsx";

const page = () => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/item/${itemId}`);
    const data = await response.json();
    setItem(data);
  };
  useEffect(() => {
    setTimeout(() => {
      // setLoading(false); // Set loading to false after the delay
    }, 300);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <SingleItem item={item}/>
      </div>
    </>
  );
};

export default page;
