import { connectToDB } from "@/db/database";
import Item from "@/models/item";

export const revalidate = 1; // revalidate api every 1 second

export const GET = async (request) => {
  try {
    await connectToDB();

    let query = {};

    if (request.url.includes("price=lowtohigh")) {
      query = { ...query, sort: { discounted_price: 1, price: 1 } };
    } else if (request.url.includes("price=hightolow")) {
      query = { ...query, sort: { discounted_price: -1, price: -1 } };
    }

    const queryParams = new URL(request.url).searchParams;

    const category = queryParams.get("category");
    if (category) {
      const categoryValue = category.split("%20").join(" ");
      const categoryRegex = new RegExp(categoryValue, "i");
      query = { ...query, category: categoryRegex };
    }

    const searchValue = queryParams.get("search");
    if (searchValue) {
      const searchValueFormatted = searchValue.split("%20").join(" ");
      const searchRegex = new RegExp(searchValueFormatted, "i");
      query = {
        ...query,
        $or: [
          { title: searchRegex },
          { category: searchRegex },
          { tags: { $in: [searchRegex] } },
        ],
      };
    }

    const items = await Item.find(query);

    // Sort items based on "discounted_price" and fallback to "price"
    items.sort((itemA, itemB) => {
      const priceA =
        itemA.discounted_price !== undefined
          ? itemA.discounted_price
          : itemA.price;
      const priceB =
        itemB.discounted_price !== undefined
          ? itemB.discounted_price
          : itemB.price;

      return priceA - priceB;
    });

    if (request.url.includes("price=hightolow")) {
      items.reverse(); // Reverse the order for "price=hightolow"
    }

    return new Response(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch items", {
      status: 500,
    });
  }
};
