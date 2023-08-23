"use client";
import Form from "@/Components/Form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditItem = () => {
    const searchParams = useSearchParams();
    const itemId = searchParams.get("id");
    const [submitting, setSubmitting] = useState(false);
    const URL = process.env.NEXT_PUBLIC_URL
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
    });

    useEffect(() => {
        const getItemDetails = async () => {
            const response = await fetch(`${URL}/api/item/${itemId}`);
            const data = await response.json();
            setPost({
                title: data.title,
                description: data.description,
                price: data.price,
                stock: data.stock,
                isDiscounted: data.isDiscounted,
                discounted_percent: data.discounted_percent,
                discounted_price: data.discounted_price,
                category: data.category,
                tags: data.tags,
                main_img: data.main_img,
                extra_imgs: data.extra_imgs,
            });
        };
        if (itemId) getItemDetails();
    }, [itemId]);

    const updateItem = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if (!itemId) return alert("Item Id not found");
        try {
            const response = await fetch(`${URL}/api/item/${itemId}`, {
                method: "PATCH",
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
                }),
            });
            if (response.ok) {
                alert("Item Updated Successfully")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <div className="text-center text-3xl font-bold my-3">Edit Item</div>
            <Form
                type="Edit Item"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updateItem}
            />
        </div>
    );
};

export default EditItem;
