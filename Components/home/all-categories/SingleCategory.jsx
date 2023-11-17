"use client";
import Image from "next/image"; // Import next/image component
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleCategory = ({ heading }) => {
  const [allData, setAllData] = useState([]);

  const fallbackImageUrl = `data:image/svg+xml;base64,${toBase64(
    shimmer(100, 100)
  )}`;
  const isValidImageUrl = (url) => {
    return url && (url.startsWith("https://") || url.startsWith("data:image"));
  };

  const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#d9dade" offset="20%" />
        <stop stop-color="#ffffff" offset="50%" />
        <stop stop-color="#d9dade" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#d9dade" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/landingPage/categoryImgs/${heading}`, {
      cache: "force-cache",
    });
    const data = await response.json();
    setAllData(data);
  };
  const scrollIntoTheView = (id) => {
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div
      className={`SingleCategory min-w-[250px] rounded-[20px] items-start justify-center ${heading}-style py-4 pt-2 px-4 `}
    >
      <h2
        onClick={() => scrollIntoTheView(heading)}
        className="category-heading text-2xl text-[#ffffff] outline-8 pb-2 w-full block text-center font-bold cursor-pointer"
      >
        {heading}
      </h2>
      <div className={`grid grid-cols-2 gap-2`}>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.nametl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtl) ? (
            <Image
              src={allData.imgtl}
              alt={allData.nametl}
              width={100}
              height={100}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100)
              )}`}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
              style={{
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={fallbackImageUrl}
              alt={allData.nametl}
              width={100}
              height={100}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.nametr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgtr) ? (
            <Image
              src={allData.imgtr}
              alt={allData.nametr}
              width={100}
              height={100}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100)
              )}`}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
              style={{
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={fallbackImageUrl}
              alt={allData.nametr}
              width={100}
              height={100}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.namebl },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbl) ? (
            <Image
              src={allData.imgbl}
              alt={allData.namebl}
              width={100}
              height={100}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100)
              )}`}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
              style={{
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={fallbackImageUrl}
              alt={allData.namebl}
              width={100}
              height={100}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
            />
          )}
        </Link>
        <Link
          href={{
            pathname: "/allitems",
            query: { category: "", search: allData.namebr },
          }}
          className="text-center flex items-center justify-center"
        >
          {isValidImageUrl(allData.imgbr) ? (
            <Image
              src={allData.imgbr}
              alt={allData.namebr}
              width={100}
              height={100}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(100, 100)
              )}`}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
              style={{
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={fallbackImageUrl}
              alt={allData.namebr}
              width={100}
              height={100}
              className=" bg-white w-[100px] h-[100px] object-contain rounded-[10px]"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default SingleCategory;
