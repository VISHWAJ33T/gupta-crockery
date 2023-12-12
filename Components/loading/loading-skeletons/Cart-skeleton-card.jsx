import clsx from "clsx";

export const CartSkeletonCard = ({ isLoading }) => (
  <div
    className={clsx("rounded-2xl h-[200px] sm:h-[230px]  bg-gray-500/80 p-4", {
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
        isLoading,
    })}
  >
    <div className="flex space-x-3">
      <div className="w-[100px] shimmerBG sm:w-[200px] h-[100px] sm:h-[200px] aspect-square rounded-lg bg-gray-300" />
      <div className="w-2/3 space-y-3">
        <div className="h-12 shimmerBG rounded-lg bg-gray-300" />
        <div className="h-3 shimmerBG w-11/12 rounded-lg bg-gray-300" />
        <div className="h-3 shimmerBG w-8/12 rounded-lg bg-gray-300" />
      </div>
    </div>
  </div>
);
