"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CarouselSwiper from "./CarouselSwiper";
import { UserAuth } from "../../../app/context/AuthContext";
const CarouselContainer = () => {
  const [allImgs, setAllImgs] = useState([]);
  const { user, Admins } = UserAuth();
  const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#b3b3b3" offset="20%" />
        <stop stop-color="#e0e0e0" offset="50%" />
        <stop stop-color="#b3b3b3" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#b3b3b3" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const fetchImgs = async () => {
    const response = await fetch(`/api/landingPage/carousel`);
    const data = await response.json();
    setAllImgs(data);
  };
  useEffect(() => {
    fetchImgs();
  }, []);
  return (
    <>
      {user && Admins && Admins.includes(user.email) && (
        <div className="flex z-[100] justify-end absolute right-4 p-1 gap-x-1">
          <Link href="Admin729/editCarouselImgs" className="edit-button">
            <svg className="edit-svgIcon" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
          </Link>
        </div>
      )}
      <div className="sm:hidden">
        <CarouselSwiper
          allImgs={allImgs}
          type={0}
          width={720}
          height={400}
          // tempSrc="/static/Mobile Blur.png"
          tempSrc={`data:image/svg+xml;base64,${toBase64(shimmer(720, 400))}`}
          blurURL={`data:image/svg+xml;base64,${toBase64(shimmer(720, 400))}`}
        />
      </div>
      <div className="hidden sm:block min-h-full">
        <CarouselSwiper
          allImgs={allImgs}
          type={1}
          width={1440}
          height={345}
          // tempSrc="/static/Desktop Blur.jpg"
          tempSrc={`data:image/svg+xml;base64,${toBase64(shimmer(1440, 345))}`}
          blurURL={`data:image/svg+xml;base64,${toBase64(shimmer(1440, 345))}`}
        />
      </div>
    </>
  );
};

export default CarouselContainer;
