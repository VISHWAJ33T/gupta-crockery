import clsx from "clsx";

export const SingleItemSkeletonCard = ({ isLoading }) => (
  <div
    className={clsx("rounded-2xl h-fit sm:h-[70vh] bg-gray-500/80 p-4", {
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
        isLoading,
    })}
  >
    <div className="flex flex-col sm:flex-row sm:space-x-3 sm:space-y-0 space-y-3">
      <div className="w-full shimmerBG sm:w-2/5 h-[400px] sm:h-[450px] aspect-square rounded-lg bg-gray-300" />
      <div className="sm:w-3/5 space-y-3">
        <div className="h-14 shimmerBG rounded-lg bg-gray-300" />
        <div className="h-10 shimmerBG w-11/12 rounded-lg bg-gray-300" />
        <div className="h-8 shimmerBG w-3/12 rounded-lg bg-gray-300" />
        <div className="h-8 shimmerBG w-2/12 rounded-lg bg-gray-300" />
      </div>
    </div>
  </div>
);
