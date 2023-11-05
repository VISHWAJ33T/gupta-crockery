import clsx from "clsx";

export const AllCategoriesSkeletonCard = ({ isLoading }) => (
  <div
    className={clsx("rounded-xl bg-gray-500/80 p-3 pt-10 min-w-[250px] max-w-[250px]", {
      "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
        isLoading,
    })}
  >
    <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2">
      <div
        className={clsx("rounded-xl bg-gray-300 h-[125px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[125px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[125px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[125px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
    </div>
  </div>
);
