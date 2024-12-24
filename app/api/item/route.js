import { connectToDB } from "@/db/database";
import Item from "@/models/item";

export const revalidate = 1; // revalidate API every 1 second

export const GET = async (request) => {
  try {
    await connectToDB();

    let query = {};

    const queryParams = new URL(request.url).searchParams;

    const category = queryParams.get("category");
    if (category) {
      const categoryValue = category.replace(/%20/g, " "); // Replace %20 with spaces
      const categoryRegex = new RegExp(categoryValue, "i");
      query = { ...query, category: categoryRegex };
    }

    const searchValue = queryParams.get("search");
    if (searchValue) {
      const searchValueFormatted = searchValue.replace(/%20/g, " "); // Replace %20 with spaces
      const searchWords = searchValueFormatted.split(" ");
      const wordRegexes = searchWords.map((word) => new RegExp(word, "i"));

      const orQueries = wordRegexes.map((wordRegex) => ({
        $or: [
          { title: wordRegex },
          { category: wordRegex },
          { tags: { $in: [wordRegex] } },
        ],
      }));

      query = {
        ...query,
        $and: orQueries,
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
