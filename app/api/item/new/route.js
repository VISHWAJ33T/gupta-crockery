import Item from "@/models/item";
import { connectToDB } from "@/db/database";
export const POST = async (req) => {
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
  } = await req.json();

  try {
    await connectToDB();

    const newItem = new Item({
      title: title,
      description: description,
      price: price,
      stock: stock,
      isDiscounted: isDiscounted,
      discounted_price: discounted_price,
      discounted_percent: discounted_percent,
      category: category,
      tags: tags,
      main_img: main_img,
      extra_imgs: extra_imgs,
    });
    await newItem.save();
    return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Item", { status: 500 });
  }
};
