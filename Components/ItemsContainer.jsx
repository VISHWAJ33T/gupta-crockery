"use client";
import Link from "next/link";
import { useState } from "react";
import { UserAuth } from "../app/context/AuthContext";
import Image from "next/image"; // Import next/image component

const ItemsContainer = ({
  id,
  title,
  main_img,
  price,
  isDiscounted,
  discounted_price,
  discounted_percent,
  stock,
  cartItems,
  setCartItems,
}) => {
  const { user, googleSignIn } = UserAuth();
  const addToCart = (
    id,
    title,
    price,
    isDiscounted,
    discounted_price,
    discounted_percent,
    qtyValue,
    img_src,
    stock
  ) => {
    if (!user) {
      alert("Please login first to add this item to cart");
      return googleSignIn();
    }
    const existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      // Item with the same ID already exists in the Bag
      alert(`${title} is already in the Bag.`);
    } else {
      // Item with the same ID doesn't exist, add it to the Bag
      const confirmed = window.confirm(
        `Are you sure you want to add ${title} to Bag?`
      );
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
          stock,
        };
        const updatedCartItems = [...cartItems, newCartItem];
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        alert(`${title} added to Bag successfully`);
      }
    }
  };
  const [scrollTitle, setScrollTitle] = useState(false);
  return (
    <>
      {/*********************************************** Mobile***********************************************/}
      <div
        draggable="true"
        className="sm:hidden border flex bg-white  flex-col justify-center items-center min-w-[160px] max-w-[160px] overflow-hidden shadow-xl"
      >
        {isDiscounted == true && (
          <span className="cursor-default flex px-3 w-full justify-center z-50 text-white text-md font-bold relative left-0 h-0">
            <span className="min-w-[40px] w-[38%] bg-red-600 absolute left-0 text-center">
              {discounted_percent}% Off
            </span>
          </span>
        )}
        <Link
          href={{ pathname: "/item", query: { id: id } }}
          className="object-contain min-h-[160px] max-h-[160px] min-w-[160px] max-w-[160px]"
        >
          <Image
            src={main_img || "/static/blur_data.jpeg"}
            alt="item image"
            width={160}
            height={160}
            placeholder="blur"
            className="object-contain min-h-[160px] max-h-[160px] sm:min-h-[160px] sm:min-w-[160px]"
            blurDataURL="/static/blur_data.jpeg"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
        <div className="relative h-[30px] w-[100%]">
          {scrollTitle ? (
            <marquee
              behavior="scroll"
              scrollamount="8"
              direction="left"
              onClick={() => {
                setScrollTitle(!scrollTitle);
              }}
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden"
            >
              {title}
            </marquee>
          ) : (
            <h3
              onClick={() => {
                setScrollTitle(!scrollTitle);
              }}
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden"
            >
              {title}
            </h3>
          )}
        </div>
        <div className="flex w-[100%] text-center justify-between">
          <span className="w-[50%] whitespace-nowrap bg-[#131b2e] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center">
            {isDiscounted == true ? (
              <>
                <span className="line-through text-xs text-[#b9b9b9]">
                  ₹{price}
                </span>
                <span> ₹{discounted_price}</span>
              </>
            ) : (
              <span> ₹{price}</span>
            )}
          </span>
          {stock !== 0 ? (
            <span className="w-[50%] transition ease-in-out duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 hover:bg-[orange] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
              <button
                className="transition ease-in-out duration-300 active:scale-[110%]"
                onClick={() => {
                  addToCart(
                    id,
                    title,
                    price,
                    isDiscounted,
                    discounted_price,
                    discounted_percent,
                    1,
                    main_img,
                    stock
                  );
                }}
              >
                Add to Cart
              </button>
            </span>
          ) : (
            <span className="w-[50%] whitespace-wrap bg-gradient-to-r from-red-500 to-red-600 brightness-110 text-white cursor-default  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/*********************************************** Desktop ***********************************************/}
      <div
        draggable="true"
        className="hidden sm:flex border bg-white flex-col justify-center items-center min-w-[230px] max-w-[230px] overflow-hidden shadow-xl"
      >
        {isDiscounted == true && (
          <span className="cursor-default flex px-3 w-full justify-center z-50 text-white text-md font-bold relative left-0 h-0">
            <span className="min-w-[40px] w-[38%] bg-red-600 absolute left-0 text-center">
              {discounted_percent}% Off
            </span>
          </span>
        )}
        <Link
          href={{ pathname: "/item", query: { id: id } }}
          className="object-contain min-h-[230px] max-h-[230px] min-w-[230px] max-w-[230px]"
        >
          <Image
            src={main_img || "/static/blur_data.jpeg"}
            alt="item image"
            width={230}
            height={230}
            placeholder="blur"
            className="object-contain min-h-[230px] max-h-[230px] sm:min-h-[230px] sm:min-w-[230px]"
            blurDataURL="/static/blur_data.jpeg"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
        <div className="relative h-[30px] w-[100%]">
          {scrollTitle ? (
            <marquee
              behavior="scroll"
              scrollamount="8"
              direction="left"
              onClick={() => {
                setScrollTitle(!scrollTitle);
              }}
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden"
            >
              {title}
            </marquee>
          ) : (
            <h3
              onClick={() => {
                setScrollTitle(!scrollTitle);
              }}
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden"
            >
              {title}
            </h3>
          )}
        </div>
        <div className="flex w-[100%] text-center justify-between">
          <span className="w-[50%] whitespace-nowrap bg-[#131b2e] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center">
            {isDiscounted == true ? (
              <>
                <span className="line-through text-xs text-[#b9b9b9]">
                  ₹{price}
                </span>
                <span> ₹{discounted_price}</span>
              </>
            ) : (
              <span> ₹{price}</span>
            )}
          </span>
          {stock !== 0 ? (
            <span className="w-[50%] whitespace-nowrap transition ease-in-out duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 hover:bg-[orange] text-white cursor-pointer font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
              <button
                className="transition ease-in-out duration-300 active:scale-[110%]"
                onClick={() => {
                  addToCart(
                    id,
                    title,
                    price,
                    isDiscounted,
                    discounted_price,
                    discounted_percent,
                    1,
                    main_img,
                    stock
                  );
                }}
              >
                Add to Cart
              </button>
            </span>
          ) : (
            <span className="w-[50%] whitespace-nowrap bg-gradient-to-r from-red-500 to-red-600 brightness-110 text-white cursor-default  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemsContainer;
