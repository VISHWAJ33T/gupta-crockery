"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image component

const SingleCategory = ({ heading }) => {
  const [allData, setAllData] = useState([]);

  const fallbackImageUrl =
    "https://s3.envato.com/files/407753606/IMG_8092%20%202a.jpg";

  const isValidImageUrl = (url) => {
    return url && (url.startsWith("https://") || url.startsWith("data:image"));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/landingPage/categoryImgs/${heading}`);
    const data = await response.json();
    setAllData(data);
  };

  return (
    <div className={`min-w-[250px] items-start justify-center ${heading}-style py-4 pt-2 px-4 `}>
      <a href={`#${heading}`} className="text-2xl text-white outline-8 pb-2 w-full block text-center font-bold cursor-pointer">
        {heading}
      </a>
      <div className={`grid grid-cols-2 gap-2`}>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.nametl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtl) ? (
            <Image
              src={allData.imgtl}
              alt={allData.nametl}
              width={100}
              height={100}
              layout="fixed"
              objectFit="contain"
              className="bg-white w-[100px] h-[100px] object-fill"
            />
          ) : (
            <img src={fallbackImageUrl} alt={allData.nametl} width={100} height={100} className="bg-white w-[100px] h-[100px] object-fill" />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.nametr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtr) ? (
            <Image
              src={allData.imgtr}
              alt={allData.nametr}
              width={100}
              height={100}
              layout="fixed"
              objectFit="contain"
              className="bg-white w-[100px] h-[100px] object-fill"
            />
          ) : (
            <img src={fallbackImageUrl} alt={allData.nametr} width={100} height={100} className="bg-white w-[100px] h-[100px] object-fill" />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.namebl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbl) ? (
            <Image
              src={allData.imgbl}
              alt={allData.namebl}
              width={100}
              height={100}
              layout="fixed"
              objectFit="contain"
              className="bg-white w-[100px] h-[100px] object-fill"
            />
          ) : (
            <img src={fallbackImageUrl} alt={allData.namebl} width={100} height={100} className="bg-white w-[100px] h-[100px] object-fill" />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { price: "", category: "", search: allData.namebr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbr) ? (
            <Image
              src={allData.imgbr}
              alt={allData.namebr}
              width={100}
              height={100}
              layout="fixed"
              objectFit="contain"
              className="bg-white w-[100px] h-[100px] object-fill"
            />
          ) : (
            <img src={fallbackImageUrl} alt={allData.namebr} width={100} height={100} className="bg-white w-[100px] h-[100px] object-fill" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;