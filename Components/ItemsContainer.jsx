"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const ItemsContainer = ({
  id,
  title,
  main_img,
  price,
  isDiscounted,
  discounted_price,
  discounted_percent,
  stock,
}) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock) => {
    const newCartItem = { id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock };
    const updatedCartItems = [...cartItems, newCartItem];

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Item Added to cart successfully");
  };
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center min-w-[150px] max-w-[150px] sm:min-w-[200px] overflow-y-hidden">
      <Link href={{ pathname: "/item", query: { id: id } }}>
        {isDiscounted && (
          <span className="flex px-3 justify-center text-white text-md font-bold absolute bg-red-600 ">
            {discounted_percent}% Off
          </span>
        )}
        <img
          className="border"
          src={
            main_img ||
            "https://5.imimg.com/data5/BQ/BW/MY-5255112/diwali-crockery-gift-500x500.jpg"
          }
          alt="item image"
        />
        <h3 className="text-center px-1 h-[30px] text-lg overflow-y-scroll">
          {title}
        </h3>
      </Link>
      <div className="flex w-[100%] text-center justify-between">
        <span className="w-[40%] sm:w-[50%] border whitespace-nowrap bg-[#f3a847] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center">
          {isDiscounted ? (
            <>
              <span className=" line-through text-xs text-[#383838]">
                {price}₹
              </span>
              <span> {discounted_price}₹</span>
            </>
          ) : (
            <span> {price}₹</span>
          )}
        </span>
        <span className="hover:text-[#131b2e] w-[60%] sm:w-[50%] hover:bg-white border whitespace-nowrap hover:border-[#232f3e] bg-[#232f3e] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
          <button
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
            Add to cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default ItemsContainer;
