"use client";
import FormCarousel from "@/Components/FormCarousel";
import CarouselSwiper from "@/Components/CarouselSwiper";
import { useEffect, useState } from "react";
const EditCarousel = () => {
  const [submitting, setSubmitting] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;
  const [post, setPost] = useState([
    {
      deviceType: "desktop",
      imgs: [],
    },
    {
      deviceType: "mobile",
      imgs: [],
    },
  ]);

  useEffect(() => {
    const getCarouselDetails = async () => {
      const response = await fetch(`${URL}/api/landingPage/carousel`);
      const data = await response.json();
      setPost([
        {
          deviceType: data[0].deviceType,
          imgs: data[0].imgs,
        },
        {
          deviceType: data[1].deviceType,
          imgs: data[1].imgs,
        },
      ]);
    };
    getCarouselDetails();
  }, []);

  const updateCarousel = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want to Update Carousel Images?`
    );
    if (confirmed) {
      setSubmitting(true);
      try {
        const response = await fetch(`${URL}/api/landingPage/carousel`, {
          method: "PATCH",
          body: JSON.stringify({
            deviceType0: post[0].deviceType,
            imgs0: post[0].imgs,
            deviceType1: post[1].deviceType,
            imgs1: post[1].imgs,
          }),
        });
        if (response.ok) {
          alert("Carousel Updated Successfully");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    }
  };
  return (
    <div className="flex w-[100%] flex-col gap-y-3">
      <div className="sm:hidden">
        <CarouselSwiper
          allImgs={post}
          type={0}
          width={720}
          height={400}
          tempSrc="/static/Mobile Blur.png"
          blurURL="/static/Mobile Blur.png"
        />
      </div>
      <div className="hidden sm:block min-h-full">
        <CarouselSwiper
          allImgs={post}
          type={1}
          width={1440}
          height={345}
          tempSrc="/static/Desktop Blur.png"
          blurURL="/static/Desktop Blur.png"
        />
      </div>
      <div className="text-center text-3xl font-bold my-3">
        Edit Homepage Carousel
      </div>
      <FormCarousel
        type="Edit Carousel"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updateCarousel}
      />
    </div>
  );
};

export default EditCarousel;
