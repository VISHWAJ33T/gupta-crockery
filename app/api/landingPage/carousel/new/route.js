import CarouselImgs from "@/models/carousel.js";
import { connectToDB } from "@/db/database.js";

// POST (EDIT)
export const POST = async (req) => {
  const { deviceType, imgs } = await req.json();

  try {
    await connectToDB();
    const newCarousel = new CarouselImgs({
      deviceType: deviceType,
      imgs: imgs,
    });
    await newCarousel.save();
    return new Response(JSON.stringify(newCarousel), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Carousel", { status: 500 });
  }
};
