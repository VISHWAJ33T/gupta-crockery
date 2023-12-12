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
        priority: 1,
      },
      {
        loc: `${baseUrl}/Items`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=Kansa`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=aluminium`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=bone+china`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=brass`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=copper`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=glass`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=iron`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=melamine`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=plastic`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=silicon`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=steel`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/Items?category=wooden`,
        lastmod: new Date().toISOString(),
        priority: 0.6,
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

