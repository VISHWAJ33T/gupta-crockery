import CarouselContainer from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import CategoryContainer from "@/Components/CategoryContainer";
export default function Home() {

  return (
    <>
      <div className="w-[100vw] lg:relative">
        {/* <div className="h-[25vh] sm:h-[50vh] xl:h-[55vh] w-[100vw]"> */}
        <CarouselContainer />
      </div>
      <div className="lg:relative z-50 lg:top-[0]"><Categories /></div>

      <div className="lg:relative z-50 lg:top-[0] flex flex-col gap-y-6">
        <CategoryContainer category="steel" />
        <CategoryContainer category="copper" />
        <CategoryContainer category="plastic" />
        <CategoryContainer category="glass" />
        <CategoryContainer category="wooden" />
        <CategoryContainer category="brass" />
        <CategoryContainer category="aluminium" />
        <CategoryContainer category="bone china" />
        <CategoryContainer category="melamine" />
        <CategoryContainer category="silicon" />
        <CategoryContainer category="iron" />
        <CategoryContainer category="Kansa" />
      </div>
    </>
  );
}
