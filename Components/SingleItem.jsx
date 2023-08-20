"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // Initialize cart items from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (id, title, price, qtyValue) => {
    const newCartItem = { id, title, price, qtyValue };
    const updatedCartItems = [...cartItems, newCartItem];

    // Update state and local storage with new cart items
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    window.location.reload();
    // Update cart items count in local storage
    // localStorage.setItem("cartItemsCount", updatedCartItems.length);
  };
  return (
    <div className="  flex flex-col sm:flex-row mx-3 mt-5 sm:mx-5">
      <div className=" item min-w-[30vw] sm:max-w-[40vw] md:max-w-[38vw] mx-3 sm:mx-5 mt-5 h-[400px] sm:h-[450px] overflow-auto">
        <Swiper
          style={{
            "--swiper-navigation-color": "#131b2e",
            "--swiper-pagination-color": "#131b2e",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 max-h-[300px]"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={2}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-3 sm:mx-5">
        <h2 className="font-bold text-3xl mt-5">Title</h2>
        <p className="text-xl">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione autem ducimus reiciendis deserunt nobis debitis alias!
          Deleniti facere perferendis at temporibus, eligendi praesentium quas
          modi ex veniam illo. Natus exercitationem qui assumenda nesciunt
          facere cum ipsam accusantium rerum adipisci aliquam similique, labore
          corrupti quos veritatis! Sunt, veniam!
        </p>
        <div className="flex items-center gap-x-4 mt-5 text-lg">
          <span className="text-xl">1000₹</span>
          <span className="hover:text-[#131b2e] hover:bg-white border whitespace-nowrap hover:border-[#232f3e] bg-[#232f3e] text-white cursor-pointer  font-bold py-2 px-4 rounded-full ">
            <button
              onClick={() => {
                // You can adjust the item ID, title, and price as needed
                addToCart(cartItems.length + 1, "Item Name", 1000, 1);
              }}
            >
              Add to cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
