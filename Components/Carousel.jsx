"use client";
import { useEffect, useState } from "react";
import CarouselSwiper from "./CarouselSwiper";

const CarouselContainer = () => {
  const [allImgs, setAllImgs] = useState([]);

  const fetchImgs = async () => {
    const response = await fetch(`/api/landingPage/carousel`);
    // const response = await fetch(`/api/landingPage/carousel`, { cache: 'force-cache' });
    const data = await response.json();
    setAllImgs(data);
  };
  useEffect(() => {
    fetchImgs();
  }, []);
  return <>
    <div className="sm:hidden">
      <CarouselSwiper allImgs={allImgs} type={0} width={720} height={400} tempSrc="/static/Mobile Blur.png" blurURL="/static/Mobile Blur.png" />
    </div>
    <div className="hidden sm:block min-h-full">
      <CarouselSwiper allImgs={allImgs} type={1} width={1440} height={345} tempSrc="/static/Desktop Blur.png" blurURL="/static/Desktop Blur.png" />
    </div>
  </>;
};

export default CarouselContainer;
