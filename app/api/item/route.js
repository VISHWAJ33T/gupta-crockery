import { connectToDB } from "@/db/database";
import Item from "@/models/item";

export const revalidate = 1; // revalidate api every 1 second

export const GET = async (request) => {
  try {
    await connectToDB();

    let query = {};

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

    return new Response(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new Response("failed to fetch items", {
      status: 500,
    });
  }
};
