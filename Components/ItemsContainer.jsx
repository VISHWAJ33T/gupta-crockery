"use client";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image"; // Import next/image component


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
  setCartItems
}) => {
  const addToCart = (id, title, price, isDiscounted, discounted_price, discounted_percent, qtyValue, img_src, stock) => {
    const existingCartItem = cartItems.find(item => item.id === id);

    if (existingCartItem) {
      // Item with the same ID already exists in the cart
      alert(`${title} is already in the cart.`);
    } else {
      // Item with the same ID doesn't exist, add it to the cart
      const confirmed = window.confirm(`Are you sure you want to add ${title} to Cart?`);
      if (confirmed) {
        const newCartItem = {
          id,
          title,
          price,
          isDiscounted,
          discounted_price,
          discounted_percent,
          qtyValue,
          img_src,
          stock
        };
        const updatedCartItems = [...cartItems, newCartItem];
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        alert(`${title} added to cart successfully`);
      }
    }
  };
  const [scrollTitle, setScrollTitle] = useState(false)
  return (
    <div className="border bg-white flex flex-col justify-center items-center min-w-[150px] max-w-[150px] sm:min-w-[200px] overflow-y-hidden shadow-xl">
      {isDiscounted && (
        <span className="flex px-3 w-full justify-center text-white text-md font-bold relative left-0 h-0">
          <span className="min-w-[40px] w-[38%] bg-red-600 absolute left-0 text-center">{discounted_percent}% Off</span>

        </span>
      )}
      <Link href={{ pathname: "/item", query: { id: id } }}>
        <Image
          className="object-contain min-h-[150px] max-h-[150px] sm:min-h-[200px]"
          src={main_img || "https://media.istockphoto.com/id/586162072/photo/various-kitchen-utensils.jpg?s=612x612&w=0&k=20&c=auwz9ZHqkG_UlKw5y-8UqvMLznA2PySQ_Jt3ameL1aU="}
          alt="item image"
          layout="responsive"
          width={150}
          height={150}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCA0HBw0IBwcHBw0HBwcHDQ8ICQcNFREWFhURExMYHSggGBoxGxMTITEhMSkrLi46Fx8zODMtNygtLjcBCgoKDQcNGgcNDisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUH/8QAHhABAAIDAQEBAQEAAAAAAAAAAAECAxESEwQUMSH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcQAAIyAAgBkWxsDCOxsEtjaOy2Cewhs9gkEdjYJBHY2CQR2NgkEdjYJBHY2CWwhsbBMI7GwSNHZgZkAMEYAAAAAAIFICUdiZQmwJbLaubozkBb0XSicqE5Qaey7ZZzIzmBs7HbDOce4N3oPRg9x7g3+g9GD3HuDf6D0YPYewN/oPRh9h7A2+g9GL2P1Bs7HbH6pRlBsi5xdjjInGQGqLJRLLGRZW4NESkqrZOJBIAAYAAAACRtKSu8gheyi+Q8tmXJcE7ZVdsrPfIpvkBptmVWzMtsqq2UGyc6E52KcqM5AbpzF7MPoPQG72Hsxeg9AbvYezF6D0Bt9j9mL0HoDb7HGVh9DjIDf6nGVhjIlGQG6MiUZGKLpxcGyMicZGKLpxcG2uRdS7BW6/HcHQx2XRLLis01kFkGjBgYIAkAJBGVWSVsqMsgyZrMeW7Rnlhy2BXe6i9zyWZ72A7XU2ujeyq1gWTdHtVNkegXdn2o6PoF/Z9KIsfQL+h0p6HQLuh2p6LoF/Z9s/Q6Bpi6cXZYslFwa4unF2SLLIsDVF04uy1ssrYGqtmjFZhrZoxWB1MEtlGD55bsYLYMoMDBAEykyApZ8zRZlzg5/wBEsGWW36Jc7LIKMlme9luSWa8ghaVVrHaVcyAmS2jMlsE9nEq9nsFsSfSrZ7BZ0OlexsE+i6Q2WwWdDpXsbBdFkosoiUokGiLLK2Zq2WVkGitllbM9ZWVkGmtmnDP+sdJacMg6vzS6GP8AjnfM6GP+AuhJGDAwACZSYkEbMudqsyZwcz6XOyy6H0udlBlySzXloyM1wVWlXKdlcgjJbEkB7PaJglsbRMD2No7AHstlsgPY2iNgsiUolVCcAtrKysqYTqC+srayoqtqC+kteBjxtmAHU+V0cbn/ACuhjBdBlBgYABMAAjZkztdmXODlfS52V0fpc/KDHkZ7tOSGe8Az2VyutCuYBXKKcwWgRB6GgAPQ0BFKWi0CJHJCkY0NCHCUFEJRAJQsqhCysAnVbVXVbUF2NswMmOG354B1PmdDGwfNDfjBbBwUJQAAAJgAEbM2dplnzA5X0w5+WHS+iHPywDHkhnvDXeFF6gy2hVaGm1Vc1BnmC0umpcgq0NLOT5BXoaW8DgFOimF3BcApmC0u4LgFOj0t4PgFUQlELIolFAQiFlYOKLIoBVhbWBWq2tQTxw2/PDNjq3YKg3/PDdRkwQ2UgE4SgoSAAAEgABSz5o/xolVkgHL+irBlq6uejDloDn3qptVtvjVWxgxWohNGycaM4gYpoXDb4iMIMUY0oxtsYFlfnBz4xH5OlHzpfmBy/IvF1fzD8wOV4jwdaPmSj5gcjwHg7H5h+YHI8DjA635j/MDlRhTjC6X50o+cHPriWVxN0YE64AZceJsw41lMK/HjBZhq01hDHVbEAcGYAAADAAEhaEykGbLRkyYnQtCq1Acu+JXOF0rYkJxA53iPB0fI/IHO/OcfO6HklGMGGvzrK4GyMZxQGWMB+LXwOQZPE/Fq5HIMvkfk0cjkGfzHm0clyCjzHmv5HIKPM/NfyOQUxjSjGt5SioK4osrU4hOIAVhZCMQlAGZQYAAAAAAkpMgQmEZhZJaBXNUeFuhoFXJcrdDQK+Rys0NAhyfKehoEORys0NAr5HKzRaBDkuVmhoFfI5WaGgV8jlZoaBXyOVmhoEOT0lo9AjEJRB6ACIMADgAAAAAAAAgABAAAQAaGgAPQAAAADAADQ0QAxogA0NAANDQADQ0AA0YAAAAAABgAAAAf/9k="
          // blurDataURL="data:image/jpeg;base64,..."
        />
        {/* <img
          className="object-contain min-h-[150px] max-h-[150px] sm:min-h-[200px]"
          src={
            main_img ||
            "https://5.imimg.com/data5/BQ/BW/MY-5255112/diwali-crockery-gift-500x500.jpg"
          }
          alt="item image"
        /> */}
      </Link>
      <div className="relative h-[30px] w-[100%]">
        {scrollTitle ? <marquee behavior="scroll" scrollamount="8" direction="left" onMouseOver={() => { setScrollTitle(true) }} onMouseOut={() => { setScrollTitle(false) }} className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden">
          {title}
        </marquee> : <h3 onMouseOver={() => { setScrollTitle(true) }} onMouseOut={() => { setScrollTitle(false) }} className="cursor-default text-center bg-gray-200 px-1 w-[100%] h-[30px] text-lg overflow-y-scroll sm:overflow-hidden">
          {title}
        </h3>}
      </div>
      <div className="flex w-[100%] text-center justify-between">
        <span className="w-[45%] sm:w-[50%] border whitespace-nowrap bg-[#f3a847] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center">
          {isDiscounted ? (
            <>
              <span className="line-through text-xs text-[#383838]">
                ₹{price}
              </span>
              <span> ₹{discounted_price}</span>
            </>
          ) : (
            <span> ₹{price}</span>
          )}
        </span>
        {stock !== 0 ? <span className="hover:text-[#131b2e] w-[55%] sm:w-[50%] hover:bg-white border whitespace-nowrap hover:border-[#232f3e] bg-[#232f3e] text-white cursor-pointer  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">
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
        </span> : <span className="w-[60%] sm:w-[50%] border whitespace-nowrap bg-[crimson] text-white cursor-default  font-bold py-1 px-1 flex flex-col-reverse justify-center items-center h-[50px]">Out of Stock</span>}
      </div>
    </div>
  );
};

export default ItemsContainer;
