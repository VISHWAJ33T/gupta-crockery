import { getServerSideSitemap } from 'next-sitemap'
import { connectToDB } from "@/db/database";
import Item from "@/models/item";
const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;

export const revalidate = 1; // revalidate API every 1 second
export const GET = async (request) => {
  try {
    await connectToDB();


    const items = await Item.find();
    const sitemapItems = items.map(item => ({
      loc: `${baseUrl}/item/${item._id}`,
      lastmod: new Date().toISOString(), // Set last modification time (replace with actual modification time)
      priority: 0.7, // Set priority value
    }));
    const additionalItems = [
      {
        loc: `${baseUrl}`,
        lastmod: new Date().toISOString(),
        priority: 0.5,
      },
      {
        loc: `${baseUrl}/Items`,
        lastmod: new Date().toISOString(),
        priority: 0.5,
      },
    ];

    sitemapItems.push(...additionalItems);

    return getServerSideSitemap(sitemapItems);
    // return getServerSideSitemapIndex(JSON.stringify(items))
  } catch (error) {
    return new Response("failed to fetch items", {
      status: 500,
    });
  }
};

