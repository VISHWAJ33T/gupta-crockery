"use client";
import Form from "@/Components/admin/Form";
import { useState } from "react";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;
  const [post, setPost] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    isDiscounted: false,
    discounted_percent: 0,
    discounted_price: 0,
    category: "",
    tags: [],
    main_img: "",
    extra_imgs: [],
    __v: 1,
  });
  const createItem = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want to Create ${post.title}?`
    );
    if (confirmed) {
      setSubmitting(true);
      try {
        const response = await fetch(`${URL}/api/item/new`, {
          method: "POST",
          body: JSON.stringify({
            title: post.title,
            description: post.description,
            price: post.price,
            stock: post.stock,
            isDiscounted: post.isDiscounted,
            discounted_percent: post.discounted_percent,
            discounted_price: post.discounted_price,
            category: post.category,
            tags: post.tags,
            main_img: post.main_img,
            extra_imgs: post.extra_imgs,
            __v: 1,
          }),
        });
        if (response.ok) {
          toast(`${post.title} Created Successfully`, {
            duration: 4000,
            position: "top-center",
            style: {
              // "backgroundColor":"#131b2e",
              // "color":"#ff7b17"
              "color":"#131b2e",
              "backgroundColor":"#ff7b17"
            },
            iconTheme: {
              primary: "#131b2e",
              secondary: "#ff7b17",
            },
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    }
  };
  return (
    <>
      <div>
        <div className="text-center text-3xl font-bold my-3">Create Item</div>
        <Form
          type="Create Item"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createItem}
        />
      </div>
    </>
  );
};

export default page;
