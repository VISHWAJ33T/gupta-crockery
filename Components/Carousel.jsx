"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CarouselContainer = () => {
  const [allImgs, setAllImgs] = useState([]);
  useEffect(() => {
    fetchImgs();
  }, []);

  const fetchImgs = async () => {
    const response = await fetch(`/api/landingPage/carousel`);
    const data = await response.json();
    setAllImgs(data);
  };
  return (
    <>
      <div className="sm:hidden">
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-pagination-color": "#131b2e",
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {allImgs.length === 0 ? null : (
            <>
              {allImgs[0].imgs.map((src) => (
                <SwiperSlide key={src}>
                  <img
                    key={src}
                    src={src}
                    alt="slider banner"
                  />
                </SwiperSlide>
              ))
              }</>
          )}
        </Swiper>
      </div>
      <div className="hidden sm:block">
        <Swiper
          style={{
            "--swiper-navigation-color": "#ffffff",
            "--swiper-pagination-color": "#131b2e",
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {allImgs.length === 0 ? null : (
            <>
              {allImgs[1].imgs.map((src) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    alt="slider banner"
                  />
                </SwiperSlide>
              ))
              }</>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default CarouselContainer;
