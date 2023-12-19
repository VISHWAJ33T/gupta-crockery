"use client";
import { useEffect, useState } from "react";
import SingleCartItem from "./SingleCartItem";
import { UserAuth } from "../../app/context/AuthContext";
import Image from "next/image"; // Import next/image component
import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateCartItemSlice } from "../../redux/slices/cartItemsSlice";
import { updateCartIdsSlice } from "../../redux/slices/cartIdsSlice";

const CartItems = ({ setLoading }) => {
  // const { user, googleSignIn, facebookSignIn } = UserAuth();
  const cartItemsSlice = useAppSelector((state) => state.cartItemsSlice);
  const cartIdsSlice = useAppSelector((state) => state.cartIdsSlice);
  const dispatch = useAppDispatch();

  const { user, googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      await googleSignIn();
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const updateQtyValue = (itemId, newQtyValue) => {
    const updatedItems = cartItemsSlice.map((item) =>
      item._id === itemId ? { ...item, qtyValue: newQtyValue } : item
    );
    const updatedIds = { ...cartIdsSlice, [itemId]: newQtyValue };

    dispatch(updateCartIdsSlice(updatedIds));
    dispatch(updateCartItemSlice(updatedItems));
  };

  const deleteItem = (itemId, title, main_img) => {
    confirmAlert({
      title: "Confirm to Remove",
      message: `Are you sure you want to remove this item from cart?`,
      childrenElement: () => (
        <div className="object-contain py-1 min-w-[160px]">
          <Image
            src={main_img || "/static/blur_data.jpeg"}
            alt="item image"
            width={160}
            height={160}
            placeholder="blur"
            className="object-contain min-h-[160px] max-h-[160px] sm:min-h-[160px] min-w-[160px]"
            blurDataURL="/static/blur_data.jpeg"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <h3>{title}</h3>
        </div>
      ),
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const updatedItems = cartItemsSlice.filter(
              (item) => item._id !== itemId
            );
            // let tempIds = cartIdsSlice;
            let tempIds = Object.keys(cartIdsSlice)
              .filter((key) => key !== itemId)
              .reduce((obj, key) => {
                obj[key] = cartIdsSlice[key];
                return obj;
              }, {});
            dispatch(updateCartIdsSlice(tempIds));
            dispatch(updateCartItemSlice(updatedItems));
            toast("Item deleted from cart successfully", {
              duration: 4000,
              position: "top-center",

              style: {
                // color: "#ff5c5c",
                color: "#3fe47e",
                // color: "#48a9f8",
                backgroundColor: "#ffffff",
                // border: "2px solid #ff5c5c",
                border: "2px solid #3fe47e",
                // border: "2px solid #48a9f8",
              },

              icon: "🗑️",

              iconTheme: {
                primary: "#131b2e",
                secondary: "#ff7b17",
              },
            });
          },
        },
        {
          label: "No",
        },
      ],
      overlayClassName: "overlay-custom-class-name",
    });
  };

  const totalAmount = cartItemsSlice.reduce(
    (total, item) =>
      total + (item.discounted_price || item.price) * item.qtyValue,
    0
  );

  const handleSaveCart = async (uid) => {
    try {
      const response = await fetch(`/api/user/${uid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          usid: user.uid,
          photoURL: user.photoURL,
          cartItems: cartIdsSlice,
        }),
      });

      // if (response.ok) {
      //   toast("Cart saved successfully", {
      //     duration: 4000,
      //     position: "top-center",

      //     style: {
      //       // color: "#ff5c5c",
      //       color: "#3fe47e",
      //       // color: "#48a9f8",
      //       backgroundColor: "#ffffff",
      //       // border: "2px solid #ff5c5c",
      //       border: "2px solid #3fe47e",
      //       // border: "2px solid #48a9f8",
      //     },

      //     icon: "🛒",

      //     iconTheme: {
      //       primary: "#131b2e",
      //       secondary: "#ff7b17",
      //     },
      //   });
      // } else {
      //   toast("Failed to save cart", {
      //     duration: 4000,
      //     position: "top-center",

      //     style: {
      //       color: "#ff5c5c",
      //       // color: "#3fe47e",
      //       // color: "#48a9f8",
      //       backgroundColor: "#ffffff",
      //       border: "2px solid #ff5c5c",
      //       // border: "2px solid #3fe47e",
      //       // border: "2px solid #48a9f8",
      //     },

      //     icon: "🛒",

      //     iconTheme: {
      //       primary: "#131b2e",
      //       secondary: "#ff7b17",
      //     },
      //   });
      //   console.error("Failed to save cart:", response.statusText);
      // }
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  useEffect(() => {
    if (user) {
      handleSaveCart(user.uid);
    }
  }, [cartIdsSlice, cartItemsSlice]);

  return (
    <div className="mx-2 sm:mx-0">
      {user ? (
        <>
          {/* <button
            onClick={(e) => {
              handleSaveCart();
            }}
            title="Save"
            className="absolute top-25 right-5 cursor-pointer flex items-center fill-white bg-black hover:bg-orange-500 active:border active:border-white rounded-md duration-100 p-2"
          >
            <svg
              viewBox="0 -0.5 25 25"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm hidden sm:block text-white font-bold pr-1">
              Save Cart
            </span>
          </button> */}
          <h2 className="text-center text-3xl font-bold w-full my-8">
            Shopping Cart
          </h2>
          {cartItemsSlice.length > 0 ? (
            <>
              {cartItemsSlice.toReversed().map((item) => (
                <SingleCartItem
                  key={item._id}
                  item={item}
                  updateQtyValue={updateQtyValue}
                  deleteItem={deleteItem}
                />
              ))}
              <div className="border-4  mt-5 w-[90%] mx-auto text-center px-5 py-5">
                <h3 className="font-bold text-2xl">Summary</h3>
                <strong className="text-lg">Total Cost</strong>
                <table className="table-auto w-full text-center">
                  <tbody>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Subtotal: </strong>
                      </td>
                      <td className="w-[50%]">
                        <strong>₹{totalAmount}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Additional Charges: </strong>
                      </td>
                      <td className="w-[50%]">NIL</td>
                    </tr>
                    <tr>
                      <td className="w-[50%]">
                        <strong>Total Amount:</strong>
                      </td>
                      <td className="w-[50%]">
                        <strong>₹{totalAmount}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img
                className="h-80"
                src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
                alt="Empty Shopping Cart"
              />
              <p className="text-center text-3xl">
                Your Shopping Cart is Empty
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">
          <div className="transition duration-150 scale-100 sm:scale-125 m-40 ease-in-out">
            <div className="form">
              <p>
                Welcome,<span>Login to access your shopping cart</span>
              </p>
              <button
                className="oauthButton"
                onClick={() => handleGoogleSignIn()}
              >
                <svg className="icon" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                  <path d="M1 1h22v22H1z" fill="none"></path>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
