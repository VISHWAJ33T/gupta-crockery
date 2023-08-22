"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleItem = () => {
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
    alert("Item added to cart successfully");
    // window.location.reload();
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
            <img src={item.main_img} alt="item image" />
          </SwiperSlide>
          {(item.extra_imgs && item.extra_imgs.length !== 0 && item.extra_imgs[0] !== "") ?
            item.extra_imgs.map((src) => (
              <SwiperSlide key={src} >
                <img src={src || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} alt="item image" />
              </SwiperSlide>
            )) : null}
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
            <img src={item.main_img} alt="item image" />
          </SwiperSlide>
          {(item.extra_imgs && item.extra_imgs.length !== 0 && item.extra_imgs[0] !== "") ?
            item.extra_imgs.map((src) => (
              <SwiperSlide key={src} >
                <img src={src
                  || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                } alt="item image" />
              </SwiperSlide>
            )) : null}

        </Swiper>
      </div>
      <div className="mx-3 sm:mx-5">
        <h2 className="font-bold text-3xl mt-5">{item.title}</h2>
        <p className="text-xl">
          {item.description}
        </p>
        {item.isDiscounted && <div className="flex items-center justify-start mt-5">
          <span className="border whitespace-nowrap bg-[crimson] cursor-default text-white font-bold py-2 px-4 rounded-lg ">
            {item.discounted_percent}% Off
          </span>
        </div>}
        <div className="flex items-center gap-x-4 mt-3 mx-1 text-lg">
          <div className="flex justify-center items-center gap-x-2">
            {item.isDiscounted ? <><span className="text-xl">{item.discounted_price}₹</span>
              <span className="text-xs line-through">{item.price}₹</span></> : <span className="text-xl">{item.price}₹</span>}

          </div>
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
