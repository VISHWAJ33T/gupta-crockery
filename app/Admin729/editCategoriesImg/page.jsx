"use client";
import FormCategoryImgs from "@/Components/FormCategoryImgs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditCategoryImg = () => {
    const [categoryType, setCategoryType] = useState("")
    const [submitting, setSubmitting] = useState(false);
    const URL = process.env.NEXT_PUBLIC_URL
    const [post, setPost] = useState({
        "categoryType": "",
        "imgtl": "",
        "nametl": "",
        "imgtr": "",
        "nametr": "",
        "imgbl": "",
        "namebl": "",
        "imgbr": "",
        "namebr": ""
    });

    useEffect(() => {
        const getCategoryImgDetails = async () => {
            const response = await fetch(`${URL}/api/landingPage/categoryImgs/${categoryType}`);
            const data = await response.json();
            setPost({
                categoryType: data.categoryType,
                imgtl: data.imgtl,
                nametl: data.nametl,
                imgtr: data.imgtr,
                nametr: data.nametr,
                imgbl: data.imgbl,
                namebl: data.namebl,
                imgbr: data.imgbr,
                namebr: data.namebr,
            });
        };
        if (categoryType !== "") getCategoryImgDetails();
    }, [categoryType]);

    const updateCategoryImg = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if (!categoryType) return alert("Category type not found");
        try {
            const response = await fetch(`${URL}/api/landingPage/categoryImgs/${categoryType}`, {
                method: "PATCH",
                body: JSON.stringify({
                    imgtl: post.imgtl,
                    nametl: post.nametl,
                    imgtr: post.imgtr,
                    nametr: post.nametr,
                    imgbl: post.imgbl,
                    namebl: post.namebl,
                    imgbr: post.imgbr,
                    namebr: post.namebr,
                }),
            });
            if (response.ok) {
                alert("Category Updated Successfully")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <div className="text-center text-3xl font-bold my-3">Edit Category Img</div>
            <label className="text-center justify-center text-xl flex gap-3">
                <span className="w-[100px] text-gray-700">Category Type</span>
                <select
                    className="min-w-[200px] px-3 sm:w-[400px]"
                    name="categoryType"
                    id="categoryType"
                    value={categoryType}
                    required
                    onChange={(e) => setCategoryType(e.target.value)}
                >
                    <option value="" default>Select</option>
                    <option value="Steel">Steel</option>
                    <option value="Copper">Copper</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Glass">Glass</option>
                    <option value="Brass">Brass</option>
                    <option value="Wooden">Wooden</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="Bone china">Bone China</option>
                    <option value="Melamine">Melamine</option>
                    <option value="Silicon">Silicon</option>
                    <option value="Iron">Iron</option>
                    <option value="Kansa">Kansa</option>
                </select>
            </label>
            <FormCategoryImgs
                type="Edit Category Images"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updateCategoryImg}
            />
        </div>
    );
};

export default EditCategoryImg;
