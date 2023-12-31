import clsx from "clsx";

export const CarouselSkeletonCard = ({ isLoading }) => (
  <div
    className={clsx(
      " flex aspect-[720/400] sm:aspect-[1440/345] items-center justify-center w-[100vw] p-3 sm:p-5",
      {
        "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
          isLoading,
      }
    )}
  >
    <div
      className={clsx("shimmerBG rounded-lg h-[100%] w-[100%]", {
        "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
          isLoading,
      })}
    />
  </div>
);
