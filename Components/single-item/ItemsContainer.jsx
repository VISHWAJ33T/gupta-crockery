"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { UserAuth } from "../../app/context/AuthContext";
import Image from "next/image";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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
  const { user, googleSignIn, Admins } = UserAuth();
  const [confirmDel, setConfirmDel] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;
  const DeleteItem = async () => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setConfirmDel(true),
        },
        {
          label: "No",
          // onClick: setConfirmDel(false),
        },
      ],
      overlayClassName: "overlay-custom-class-name",
    });
  };
  useEffect(() => {
    const handleDel = async () => {
      if (confirmDel === true) {
        if (!id)
          return confirmAlert({
            title: `Invalid Item`,
            buttons: [
              {
                label: "Ok",
              },
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            keyCodeForClose: [8, 32],
            overlayClassName: "overlay-custom-class-name",
          });
        try {
          const response = await fetch(`${URL}/api/item/${id}`, {
            method: "DELETE",
          });
          if (response.status === 500) {
            confirmAlert({
              title: `Error 500`,
              message:
                "There was some error trying to delete this item. Please try again",
              buttons: [
                {
                  label: "Ok",
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,
              keyCodeForClose: [8, 32],
              overlayClassName: "overlay-custom-class-name",
            });
          }
          if (response.ok) {
            confirmAlert({
              title: `Item Deleted Successfully`,
              buttons: [
                {
                  label: "Ok",
                },
              ],
              closeOnEscape: true,
              closeOnClickOutside: true,
              keyCodeForClose: [8, 32],
              overlayClassName: "overlay-custom-class-name",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleDel();
    return setConfirmDel(false);
  }, [confirmDel]);

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
    if (!user || user === null) {
      confirmAlert({
        title: `You need to login first to add this item to cart`,
        buttons: [
          {
            label: "Login later",
          },
          {
            label: "Login Now",
            onClick: () => {
              googleSignIn();
            },
          },
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        overlayClassName: "overlay-custom-class-name",
      });
    } else {
      const existingCartItem = cartItems.find((item) => item.id === id);

      if (existingCartItem) {
        confirmAlert({
          title: `${title} is already in the cart.`,
          buttons: [
            {
              label: "Ok",
            },
          ],
          closeOnEscape: true,
          closeOnClickOutside: true,
          keyCodeForClose: [8, 32],
          willUnmount: () => {},
          afterClose: () => {},
          onClickOutside: () => {},
          onKeypress: () => {},
          onKeypressEscape: () => {},
          overlayClassName: "overlay-custom-class-name",
        });
      } else {
        confirmAlert({
          title: "Confirm to Add",
          message: `Are you sure you want to add this to cart?`,
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
                handleAdc(
                  id,
                  title,
                  price,
                  isDiscounted,
                  discounted_price,
                  discounted_percent,
                  qtyValue,
                  img_src,
                  stock
                );
              },
            },
            {
              label: "No",
            },
          ],
          overlayClassName: "overlay-custom-class-name",
        });
      }
    }
  };
  const handleAdc = async (
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
    await setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    confirmAlert({
      title: `${title} added to cart successfully`,
      buttons: [{ label: "Ok" }],
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "overlay-custom-class-name",
    });
  };
  const [scrollTitle, setScrollTitle] = useState(false);
  return (
    <>
      {/*********************************************** Mobile***********************************************/}
      <div
        className="sm:hidden border flex bg-white  flex-col justify-center items-center min-w-[160px] max-w-[160px] overflow-hidden rounded-[10px]"
      >
        <span className="cursor-default flex px-3 w-full justify-center z-[2] text-white text-md font-bold relative left-0 h-0">
          {isDiscounted == true && (
            <span className="min-w-[40px] w-[38%] bg-red-600 absolute left-0 text-center">
              {discounted_percent}% Off
            </span>
          )}
          {user && Admins && Admins.includes(user.email) && (
            <div className="w-[100%] flex justify-end absolute p-1 gap-x-1">
              <Link
                href={{
                  pathname: "Admin729/editItem",
                  query: { id: id },
                }}
                className="edit-button"
              >
                <svg className="edit-svgIcon" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                </svg>
              </Link>
              <button className="delete-button" onClick={DeleteItem}>
                <svg className="delete-svgIcon" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
            </div>
          )}
        </span>

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
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-hidden truncate ..."
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
        className="hidden sm:flex border bg-white flex-col justify-center items-center min-w-[230px] max-w-[230px] overflow-hidden shadow-xl rounded-[10px]"
      >
        <span className="cursor-default w-[100%] flex px-3 justify-center z-[2] text-white text-md font-bold relative left-0 h-0">
          {isDiscounted == true && (
            <span className="min-w-[40px] w-[38%] bg-red-600 absolute left-0 text-center">
              {discounted_percent}% Off
            </span>
          )}
          {user && Admins && Admins.includes(user.email) && (
            <div className="w-[100%] flex justify-end absolute p-1 gap-x-1">
              <Link
                href={{
                  pathname: "Admin729/editItem",
                  query: { id: id },
                }}
                className="edit-button"
              >
                <svg className="edit-svgIcon" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                </svg>
              </Link>
              <button className="delete-button" onClick={DeleteItem}>
                <svg className="delete-svgIcon" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
            </div>
          )}
        </span>

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
              className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-hidden truncate ..."
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
