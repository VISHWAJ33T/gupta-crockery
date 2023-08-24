import Head from 'next/head';
import CarouselContainer from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import CategoryContainer from "@/Components/CategoryContainer";
export default function Home() {

  return (
    <>
      <Head><link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" /></Head>
      <div className="w-[100vw]">
        {/* <div className="h-[25vh] sm:h-[50vh] xl:h-[55vh] w-[100vw]"> */}
        <CarouselContainer />
      </div>
      <Categories />
      <div className="flex flex-col gap-y-10">
        <CategoryContainer category="steel" />
        <CategoryContainer category="copper" />
        <CategoryContainer category="plastic" />
        <CategoryContainer category="glass" />
        <CategoryContainer category="wooden" />
        <CategoryContainer category="thermal" /></div>
    </>
  );
}
