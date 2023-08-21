import Item from "@/models/item.js";
import { connectToDB } from "@/db/database.js";

// GET (READ)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const item = await Item.findById(params.id);
    if (!item) return new Response("Item not found", { status: 404 });

    return new Response(JSON.stringify(item), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch item", {
      status: 500,
    });
  }
};

// PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
  const {
    title,
    description,
    price,
    stock,
    isDiscounted,
    discounted_price,
    discounted_percent,
    category,
    tags,
    main_img,
    extra_imgs,
  } = await request.json();

  try {
    await connectToDB();

    const existingItem = await Item.findById(params.id);

    if (!existingItem) return new Response("Quote not found", { status: 404 });
    existingItem.title = title;
    existingItem.description = description;
    existingItem.price = price;
    existingItem.stock = stock;
    existingItem.isDiscounted = isDiscounted;
    existingItem.discounted_price = discounted_price;
    existingItem.discounted_percent = discounted_percent;
    existingItem.category = category;
    existingItem.tags = tags;
    existingItem.main_img = main_img;
    existingItem.extra_imgs = extra_imgs;

    await existingItem.save();
    return new Response(JSON.stringify(existingItem), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Item", { status: 500 });
  }
};

// DELETE (DELETE)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Item.findByIdAndRemove(params.id);
    return new Response("Item deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete item", { status: 500 });
  }
};
