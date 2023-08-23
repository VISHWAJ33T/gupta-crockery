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

  const addToCart = (id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock) => {
    const existingCartItem2 = cartItems.find(item => item.id === id);

    if (existingCartItem2) {
      // Item with the same ID already exists in the cart
      alert(`${title} is already in the cart.`);
    } else {
      // Item with the same ID doesn't exist, add it to the cart
      const newCartItem = {
        id,
        title,
        price,
        isDiscounted,
        discounted_price,
        discounted_percent,
        qtyValue,
        img_src,
        stock
      };
      const updatedCartItems = [...cartItems, newCartItem];

      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      alert(`${title} added to cart successfully`);
    }
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
            {item.isDiscounted ? <><span className="text-xl">₹{item.discounted_price}</span>
              <span className="text-xs line-through">₹{item.price}</span></> : <span className="text-xl">₹{item.price}</span>}

          </div>
          {item.stock !== 0 ? <span className="hover:text-[#131b2e] hover:bg-white border whitespace-nowrap hover:border-[#232f3e] bg-[#232f3e] text-white cursor-pointer  font-bold py-2 px-4 rounded-full ">
            <button
              onClick={() => {
                addToCart(
                  item._id,
                  item.title,
                  item.price,
                  item.isDiscounted,
                  item.discounted_price,
                  item.discounted_percent,
                  1,
                  item.main_img,
                  item.stock
                );
              }}
            >
              Add to cart
            </button>
          </span> : <span className="text-sm text-[crimson]">This Item is out of Stock</span>}

        </div>
      </div>
    </div>
  );
};

export default SingleItem;
