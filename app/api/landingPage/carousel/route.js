import CarouselImgs from "@/models/carousel.js";
import { connectToDB } from "@/db/database.js";

// GET (READ)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const carousel = await CarouselImgs.find();
    if (!carousel) return new Response("Carousel not found", { status: 404 });

    return new Response(JSON.stringify(carousel), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch Carousel", {
      status: 500,
    });
  }
};

// PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
  const { deviceType0, imgs0, deviceType1, imgs1 } = await request.json();

  try {
    await connectToDB();

    const existingCarousel0 = await CarouselImgs.findOne({
      deviceType: deviceType0,
    });
    if (!existingCarousel0)
      return new Response("Carousel 0 not found", { status: 404 });
    existingCarousel0.imgs = imgs0;

    const existingCarousel1 = await CarouselImgs.findOne({
      deviceType: deviceType1,
    });

    if (!existingCarousel1)
      return new Response("Carousel 1 not found", { status: 404 });
    existingCarousel1.imgs = imgs1;

    await existingCarousel0.save();
    await existingCarousel1.save();
    return new Response(JSON.stringify(existingCarousel0, existingCarousel1), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to update Carousel", { status: 500 });
  }
};
