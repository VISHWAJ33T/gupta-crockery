import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateCartItemSlice } from "../../redux/slices/cartItemsSlice";
import { updateCartIdsSlice } from "../../redux/slices/cartIdsSlice";

const cartIcon = ({ user }) => {
  const cartItemsSlice = useAppSelector((state) => state.cartItemsSlice);
  const cartIdsSlice = useAppSelector((state) => state.cartIdsSlice);
  const dispatch = useAppDispatch();
  const [cartItemsCount, setCartItemsCount] = useState(cartItemsSlice.length);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchItemsFromServerAndLocal = async (uid) => {
      try {
        const response1 = await fetch(`/api/user/${uid}`);
        if (response1.ok) {
          const data1 = await response1.json();
          const serverItemsIds = data1.cartItems || {};
          const localItemsIds =
            JSON.parse(localStorage.getItem("cartItems")) || {};
          let uniqueItemsIds = [];
          let uniqueItemsQtys = [];
          const mergedItemsIds = Object.keys(serverItemsIds).concat(
            Object.keys(localItemsIds)
          );
          const mergedItemsQtys = Object.values(serverItemsIds).concat(
            Object.values(localItemsIds)
          );
          uniqueItemsIds = mergedItemsIds.filter(function (item, i, ar) {
            return ar.indexOf(item) === i;
          });
          for (let i = 0; i < uniqueItemsIds.length; i++) {
            const n = mergedItemsIds.indexOf(uniqueItemsIds[i]);
            uniqueItemsQtys.push(mergedItemsQtys[n]);
          }

          const fetchItems = async () => {
            const promises = uniqueItemsIds.map(async (id) => {
              const response2 = await fetch(`/api/item/${id}`);
              return response2.json();
            });
            let allItems = await Promise.all(promises);
            let allIds = {};

            for (let i = 0; i < allItems.length; i++) {
              allIds = { ...allIds, [uniqueItemsIds[i]]: uniqueItemsQtys[i] };
              allItems[i].qtyValue = uniqueItemsQtys[i];
            }
            dispatch(updateCartIdsSlice(allIds));
            dispatch(updateCartItemSlice(allItems));
          };

          fetchItems();
        } else {
          console.error("Failed to fetch cart items:", response1.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (user) {
      fetchItemsFromServerAndLocal(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cartItems", JSON.stringify(cartIdsSlice));
    } else {
      setMounted(true);
    }
  }, [cartIdsSlice]);

  useEffect(() => {
    setCartItemsCount(Object.keys(cartIdsSlice).length);
  }, [cartIdsSlice]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const promises = Object.keys(cartIdsSlice).map(async (id) => {
//         const response = await fetch(`/api/item/${id}`);
//         return response.json();
//       });
//       let allItems = await Promise.all(promises);

//       for (let i = 0; i < allItems.length; i++) {
//         allItems[i].qtyValue = Object.values(cartIdsSlice)[i];
//       }
//       dispatch(updateCartItemSlice(allItems));
//     };
//     fetchItems();
//   }, [cartIdsSlice]);

  return (
    <>
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/cart`}
        className="flex justify-center items-center aspect-square min-h-[30px]"
      >
        <div className="w-0">
          <span className="NavCartCount">
            {cartItemsCount ? cartItemsCount : 0}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 576 512"
          fill="rgb(17, 17, 17)"
          className="cart invert"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
        </svg>
      </Link>
    </>
  );
};

export default cartIcon;
