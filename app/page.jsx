import CarouselContainer from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import CategoryContainer from "@/Components/CategoryContainer";
export default function Home() {

  return (
    <>
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
