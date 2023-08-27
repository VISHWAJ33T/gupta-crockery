"use client";
import ItemsContainer from "@/Components/ItemsContainer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";
const page = () => {
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const search = searchParams.get("search");
  const [allItems, setAllItems] = useState([]);
  const active_class = "bg-[#131b2e] text-white";
  const unactive_class = "text-[#131b2e] border-[#131b2e]";

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    setLoading(true)
    fetchItems();
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 500); // 0.5 seconds delay
  }, [price, category,search]);

  const fetchItems = async () => {
    const response = await fetch(
      `/api/item?price=${price}&category=${category}&search=${search}`
    );
    const data = await response.json();
    setAllItems(data);
  };
  return (
    <>      {loading && <Loading />}
      <div className={loading ? `hidden` : null}>
        <div className="text-center overflow-x-scroll px-1 pb-3 mx-5 sm:mx-6 md:mx-10 justify-start flex gap-x-2 mt-3">
          <Link
            href={{
              query: {
                price: "lowtohigh",
                category: category,
                search: search,
              },
            }}
            className={`${price === "lowtohigh" ? active_class : unactive_class
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
            className={`${price === "hightolow" ? active_class : unactive_class
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
            className={`${category === "" ? active_class : unactive_class
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
            className={`${category === "steel" ? active_class : unactive_class
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
            className={`${category === "copper" ? active_class : unactive_class
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
            className={`${category === "plastic" ? active_class : unactive_class
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
            className={`${category === "glass" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Glass
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "brass",
                search: search,
              },
            }}
            className={`${category === "brass" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Brass
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "wooden",
                search: search,
              },
            }}
            className={`${category === "wooden" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Wooden
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "aluminium",
                search: search,
              },
            }}
            className={`${category === "aluminium" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Aluminium
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "bone china",
                search: search,
              },
            }}
            className={`${category === "bone china" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Bone China
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "melamine",
                search: search,
              },
            }}
            className={`${category === "melamine" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Melamine
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "silicon",
                search: search,
              },
            }}
            className={`${category === "silicon" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Silicon
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "iron",
                search: search,
              },
            }}
            className={`${category === "iron" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Iron
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "kansa",
                search: search,
              },
            }}
            className={`${category === "kansa" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Kansa
          </Link>
          <Link
            href={{
              query: {
                price: price,
                category: "other",
                search: search,
              },
            }}
            className={`${category === "other" ? active_class : unactive_class
              } border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full`}
          >
            Others
          </Link>

        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-3 mt-3 mx-5 sm:mx-6 md:mx-10 place-items-center">
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
        </div></div>
    </>
  );
};

export default page;
