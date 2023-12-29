import React from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  decrementCartIdQty,
  incrementCartIdQty,
} from "../../redux/slices/cartIdsSlice";
import {
  incrementCartItemQty,
  decrementCartItemQty,
} from "../../redux/slices/cartItemsSlice";
const NavCartItem = ({ item }) => {
  const cartIdsSlice = useAppSelector((state) => state.cartIdsSlice);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex text-center items-center gap-y-3 w-[100%] p-3">
        <img
          src={item.main_img}
          alt="item image"
          className="w-3/12 xs:w-2/12 aspect-square bg-white object-contain rounded-[20px] shadow-lg"
        />
        <span className="w-8/12 sx:w-9/12 text-left flex flex-col text-xl px-3">
          <span className="overflow-hidden max-h-[62px] text-ellipsis">
            {item.title}
          </span>
          <span className="flex gap-x-2 items-center">
            <span>₹{item.discounted_price}</span>
            <span className="line-through text-sm">₹{item.price}</span>
          </span>
        </span>
        {/* <span className="w-1/12 text-xl text-end px-3"> */}
        {item.stock !== 0 &&
          (cartIdsSlice[item._id] !== undefined ||
            (null && cartIdsSlice[item._id] >= 0)) && (
            <span className="w-1/12 text-xl text-start flex items-center xs:gap-x-3 gap-x-2">
              <button
                className={`${
                  cartIdsSlice[item._id] === 0 &&
                  "opacity-50 pointer-events-none"
                } w-1/3 transition ease-in-out duration-300 hover:scale-[150%]`}
                onClick={() => {
                  dispatch(decrementCartIdQty(item._id));
                  dispatch(decrementCartItemQty(item._id));
                }}
              >
                -
              </button>
              <span
                title="Go to Cart"
                className="w-1/3 transition ease-in-out duration-300 active:scale-[110%]"
              >
                {item.qtyValue}
              </span>
              <button
                className={`w-1/3 transition ease-in-out duration-300 hover:scale-[150%] ${
                  cartIdsSlice[item._id] >= item.stock &&
                  "pointer-events-none opacity-50"
                }`}
                onClick={() => {
                  dispatch(incrementCartIdQty(item._id));
                  dispatch(incrementCartItemQty(item._id));
                }}
              >
                +
              </button>
            </span>
          )}
      </div>
      <hr className="h-px mx-2 bg-gray-200 border-0 "></hr>
    </>
  );
};

export default NavCartItem;
