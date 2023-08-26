import CategoriesImgs from "@/models/categoriesImg.js";
import { connectToDB } from "@/db/database.js";

// GET (READ)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const item = await CategoriesImgs.findOne({
      categoryType: params.category,
    });
    if (!item) return new Response("Category not found", { status: 404 });

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
  const { imgtl, nametl, imgtr, nametr, imgbl, namebl, imgbr, namebr } =
    await request.json();

  try {
    await connectToDB();

    const existingItem = await CategoriesImgs.findOne({
      categoryType: params.category,
    });

    if (!existingItem)
      return new Response("Category not found", { status: 404 });
    existingItem.imgtl = imgtl;
    existingItem.nametl = nametl;
    existingItem.imgtr = imgtr;
    existingItem.nametr = nametr;
    existingItem.imgbl = imgbl;
    existingItem.namebl = namebl;
    existingItem.imgbr = imgbr;
    existingItem.namebr = namebr;

    await existingItem.save();
    return new Response(JSON.stringify(existingItem), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Item", { status: 500 });
  }
};
