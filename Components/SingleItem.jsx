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
    // Initialize Bag items from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock) => {
    const existingCartItem2 = cartItems.find(item => item.id === id);

    if (existingCartItem2) {
      // Item with the same ID already exists in the Bag
      alert(`${title} is already in the Bag.`);
    } else {
      // Item with the same ID doesn't exist, add it to the Bag
      const confirmed = window.confirm(`Are you sure you want to add ${title} to Bag?`);
      if (confirmed) {
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
        alert(`${title} added to Bag successfully`);
      }
    }
  };
  return (
    <div className="flex flex-col sm:flex-row mx-3 mt-5 sm:mx-5">
      <div className="item min-w-[30vw] sm:max-w-[40vw] md:max-w-[38vw] mx-3 sm:mx-5 mt-5 h-[400px] sm:h-[450px] overflow-auto shadow-md">
        <Swiper
          style={{
            "--swiper-navigation-color": "#131b2e",
            "--swiper-pagination-color": "#131b2e",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 max-h-[300px] sm:max-h-[350px]"
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
          spaceBetween={2}
          navigation={false}
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
        <p className="text-xl" dangerouslySetInnerHTML={{ __html: item.description }} />
        <div className="flex gap-x-2 items-center justify-start my-5">
          {item.isDiscounted && <span className="discount-btn">
            {item.discounted_percent}% Off
          </span>}
          <div className="flex items-center gap-x-2">
            {item.isDiscounted ? <><span className="text-xl">₹{item.discounted_price}</span>
              <span className="text-xs line-through">₹{item.price}</span></> : <span className="text-xl">₹{item.price}</span>}
          </div>
        </div>

        {item.stock !== 0 ?
          <button
            className="atbbutton"
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
            <span class="button__text">Add to Bag</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button> : <span className="text-sm text-[crimson]">This Item is out of Stock</span>}

      </div>
    </div>
  );
};

export default SingleItem;
