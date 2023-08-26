"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemsContainer from "./ItemsContainer";

const CategoryContainer = ({ cartItems, setCartItems, category }) => {

  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, []);

  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`/api/item?category=${category}`);
    const data = await response.json();
    setAllItems(data);
  };
  return (
    <>
      {allItems.length === 0 ? null : (
        <div className=" mx-[15px] sm:mx-[20px] scroll-view shadow-2xl" id={`${category[0].toUpperCase() + category.slice(1)}`}>
          <Link
            href={{
              pathname: "/allitems",
              query: { price: "", category: category, search: "" },
            }}
            className="text-2xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-2"
          >
            {category[0].toUpperCase() + category.slice(1)}
          </Link>
          <div className="flex items-container-container overflow-x-auto gap-x-3 py-3">
            {allItems.map((item) => (
              <ItemsContainer
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                stock={item.stock}
                isDiscounted={item.isDiscounted}
                discounted_percent={
                  item.isDiscounted ? item.discounted_percent : ""
                }
                discounted_price={
                  item.isDiscounted ? item.discounted_price : ""
                }
                main_img={item.main_img}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryContainer;
