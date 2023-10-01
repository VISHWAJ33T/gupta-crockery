"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ItemsContainer from "./ItemsContainer";

const CategoryContainer = ({ cartItems, setCartItems, category }) => {
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
      <div
        className=" mx-[15px] sm:mx-[20px] scroll-view shadow-2xl"
        id={`${category[0].toUpperCase() + category.slice(1)}`}
      >
        <Link
          href={{
            pathname: "/allitems",
            query: { category: category, search: "" },
          }}
          className="text-2xl font-bold text-black cursor-pointer w-fit relative left-1 sm:left-2 top-2"
        >
          {category[0].toUpperCase() + category.slice(1)}
        </Link>
        {allItems.length === 0 ? (
          <div className="flex items-container-container pointer-events-none overflow-x-auto gap-x-3 py-3">
            {(() => {
              let singleRow = [];
              for (let i = 0; i < 20; i++) {
                singleRow.push(
                  <ItemsContainer
                    key={i}
                    id="Loading Item"
                    title="Loading..."
                    price="..."
                    stock={1}
                    isDiscounted={false}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    main_img="data:image/jpeg;base64,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"
                  />
                );
              }
              return singleRow;
            })()}
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default CategoryContainer;
