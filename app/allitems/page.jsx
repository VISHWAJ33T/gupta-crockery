"use client";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";
import ItemsContainer from "@/Components/single-item/ItemsContainer.jsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default"); // Track sorting order
  const [showSorts, setShowSorts] = useState(false); // Track whether sorting options are visible
  const [showFilters, setShowFilters] = useState(false); // Track whether filter options are visible
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || '';
  const search = searchParams.get("search") || '';
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemsNotFound, setItemsNotFound] = useState(false);
  const activeClass = "active-button whitespace-nowrap";
  const unactiveClass = "inactive-button whitespace-nowrap";
  // const activeClass = "bg-[#131b2e] text-white border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full";
  // const unactiveClass = "text-[#131b2e] border-[#131b2e] border whitespace-nowrap cursor-pointer font-bold py-2 px-4 rounded-full";

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    setLoading(true);
    fetchItems();
  }, [category, search, sortOrder]); // Add sortOrder to dependencies

  const fetchItems = async () => {
    setItemsNotFound(false);
    const response = await fetch(
      `/api/item?&category=${category}&search=${search}`
    );
    const responseData = await response.json();
    const data = responseData.reverse();
    // Sort data based on the selected sort order
    const sortedData = data.sort((a, b) => {
      if (sortOrder === "priceLowToHigh" || sortOrder === "priceHighToLow") {
        const priceA =
          a.isDiscounted && a.discounted_price !== ""
            ? a.discounted_price
            : a.price;
        const priceB =
          b.isDiscounted && b.discounted_price !== ""
            ? b.discounted_price
            : b.price;
        return sortOrder === "priceLowToHigh"
          ? priceA - priceB
          : priceB - priceA;
      } else if (sortOrder === "mostDiscounted") {
        const discountA = a.isDiscounted ? a.discounted_percent : 0;
        const discountB = b.isDiscounted ? b.discounted_percent : 0;
        return discountB - discountA;
      } else {
        // Default sorting (no sorting)
        return 0;
      }
    });

    setAllItems(sortedData);
    setLoading(false);
    if (!data || data.length === 0) {
      setItemsNotFound(true);
    }
  };

  const toggleSortOrder = (newSortOrder) => {
    if (sortOrder === newSortOrder) {
      setSortOrder("default"); // Toggle off if the same button is clicked again
    } else {
      setSortOrder(newSortOrder);
    }
  };

  const toggleSorts = () => {
    setShowSorts(!showSorts);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const renderCategoryLinks = (categories) => {
    return categories.map((cat) => (
      <Link
        key={cat}
        href={{
          query: {
            category: cat === "All" ? "" : cat.toLowerCase(),
            search: search,
          },
        }}
        className={`${
          category === cat.toLowerCase() || (cat === "All" && category === "")
            ? activeClass
            : unactiveClass
        }`}
      >
        {cat}
      </Link>
    ));
  };

  const categoryButtons = [
    "All",
    "Steel",
    "Plastic",
    "Aluminium",
    "Glass",
    "Brass",
    "Iron",
    "Copper",
    "Bone China",
    "Kansa",
    "Melamine",
    "Wooden",
    "Silicon",
    "Other",
  ];

  return (
    <>
      <ScrollToTop smooth color="#ff640e" />
      {loading && <Loading />}
      {!loading ? (
        itemsNotFound ? (
          <div className="flex flex-col gap-y-2 justify-center items-center py-12">
            <img
              className="text-3xl font-bold text-center h-80"
              src="https://static.thenounproject.com/png/4440881-200.png"
              alt="no items found"
            />
            <h1 className="text-3xl text-center">No items Found</h1>
          </div>
        ) : (
          <div>
            <div className="text-center overflow-x-scroll px-1 pb-3 mx-5 sm:mx-6 md:mx-10 flex gap-x-2 mt-3">
              <button
                onClick={toggleSorts}
                className={`${showSorts ? activeClass : unactiveClass}`}
              >
                Sort
              </button>
              {showSorts && (
                <>
                  {/***************************************** SORTS *****************************************/}
                  <button
                    onClick={() => toggleSortOrder("priceLowToHigh")}
                    className={`${
                      sortOrder === "priceLowToHigh"
                        ? activeClass
                        : unactiveClass
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => toggleSortOrder("priceHighToLow")}
                    className={`${
                      sortOrder === "priceHighToLow"
                        ? activeClass
                        : unactiveClass
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => toggleSortOrder("mostDiscounted")}
                    className={`${
                      sortOrder === "mostDiscounted"
                        ? activeClass
                        : unactiveClass
                    }`}
                  >
                    Most Discounted
                  </button>
                </>
              )}
              {/***************************************** FILTERS *****************************************/}
              <button
                onClick={toggleFilters}
                className={`${showFilters ? activeClass : unactiveClass}`}
              >
                Filters
              </button>
              {showFilters && renderCategoryLinks(categoryButtons)}
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-3 mt-3 mx-2 sm:mx-6 md:mx-8 place-items-center">
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
        )
      ) : null}
    </>
  );
};

export default Page;
