"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
const SingleCategory = ({
  heading,
}) => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/landingPage/categoryImgs/${heading}`);
    const data = await response.json();
    setAllData(data);
  };
  return (
    <div className={`min-w-[210px] items-start justify-center ${heading}-style py-4 pt-2 px-4 `}>
      <a href={`#${heading}`} className="text-2xl text-white outline-8 pb-2 w-full block text-center font-bold cursor-pointer">
        {heading}
      </a>
      <div className={`grid grid-cols-2 gap-2`}>
        {/* <div className="grid grid-cols-2 gap-y-1 py-1  bg-slate-400"> */}
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.nametl },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={allData.imgtl} alt={allData.nametl} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.nametr },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={allData.imgtr} alt={allData.nametr} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.namebl },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={allData.imgbl} alt={allData.namebl} />
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.namebr },
          }}
          className="text-center flex items-center justify-center"
        >
          <img className="w-[100px] h-[100px]" src={allData.imgbr} alt={allData.namebr} />
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
