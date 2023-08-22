"use client";
import ItemsContainer from "@/Components/ItemsContainer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const search = searchParams.get("search");
  const [allItems, setAllItems] = useState([]);
  const active_class = "bg-[#131b2e] text-white";
  const unactive_class = "text-[#131b2e] border-[#131b2e]";

  useEffect(() => {
    fetchItems();
  }, [price, category]);

  const fetchItems = async () => {
    const response = await fetch(
      `/api/item?price=${price}&category=${category}&search=${search}`
    );
    const data = await response.json();
    setAllItems(data);
  };
  return (
    <>
      <div className="text-center overflow-x-scroll px-1 pb-2 mx-5 sm:mx-6 md:mx-10 justify-start xl:justify-center flex gap-x-2 mt-3">
        <Link
          href={{
            query: {
              price: "lowtohigh",
              category: category,
              search: search,
            },
          }}
          className={`${
            price === "lowtohigh" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Prize: Low to High
        </Link>
        <Link
          href={{
            query: {
              price: "hightolow",
              category: category,
              search: search,
            },
          }}
          className={`${
            price === "hightolow" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Prize: High to Low
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "",
              search: "",
            },
          }}
          className={`${
            category === "" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          All
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "steel",
              search: search,
            },
          }}
          className={`${
            category === "steel" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Steel
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "copper",
              search: search,
            },
          }}
          className={`${
            category === "copper" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Copper
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "plastic",
              search: search,
            },
          }}
          className={`${
            category === "plastic" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Plastic
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "glass",
              search: search,
            },
          }}
          className={`${
            category === "glass" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Glass
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "wooden",
              search: search,
            },
          }}
          className={`${
            category === "wooden" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Wooden
        </Link>
        <Link
          href={{
            query: {
              price: price,
              category: "thermal",
              search: search,
            },
          }}
          className={`${
            category === "thermal" ? active_class : unactive_class
          } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
        >
          Thermal
        </Link>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-3 mt-3 mx-5 sm:mx-6 md:mx-10 place-items-center">
        {allItems.map((item) => (
          <ItemsContainer
            key={item._id}
            title={item.title}
            main_img={item.main_img}
            price={item.price}
            isDiscounted={item.isDiscounted}
            discounted_price={item.isDiscounted ? item.discounted_price : ""}
            discounted_percent={
              item.isDiscounted ? item.discounted_percent : ""
            }
          />
        ))}
      </div>
    </>
  );
};

export default page;
