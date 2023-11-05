import clsx from "clsx";

export const AllCategoriesSkeletonCard = ({ isLoading }) => (
  <div
    className={clsx(
      " rounded-[20px] bg-gray-500/80 p-4 pt-10 min-w-[250px] max-w-[250px]",
      {
        "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
          isLoading,
      }
    )}
  >
    <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3">
      <div
        className={clsx("rounded-xl bg-gray-300 h-[100px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[100px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[100px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
      <div
        className={clsx("rounded-xl bg-gray-300 h-[100px]", {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        })}
      />
    </div>
  </div>
);
