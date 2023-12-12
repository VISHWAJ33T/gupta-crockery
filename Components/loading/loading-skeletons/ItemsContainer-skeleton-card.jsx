import clsx from 'clsx';

export const ItemsContainerSkeletonCard = ({ isLoading }) => (
    <div
        className={clsx('rounded-lg bg-gray-300 min-w-[160px] max-w-[160px] sm:min-w-[230px] sm:max-w-[230px]', {
            'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
                isLoading,
        })}
    >
        <div>
            {/* <div className="h-[160px] sm:h-[230px] rounded-lg bg-gray-300" /> */}
            <div className={clsx('shimmerBG rounded-t-lg h-[160px] sm:h-[230px]', {
            'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent':
                isLoading,
        })} />
            <div className="h-[30px] bg-gray-200" />
            <div className='flex w-[100%]'>
            <div className="h-[45px] w-1/2 bg-[#131b2e] text-white cursor-pointer font-bold py-1 px-1 flex flex-col-reverse justify-center items-center" >Loading...</div>
            <div className="h-[45px] w-1/2 text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:brightness-110 hover:bg-[orange] text-white cursor-pointer font-bold py-1 px-1 flex flex-col-reverse justify-center items-center" >Add to Cart</div>
            </div>
            {/* <div className="h-3 w-11/12 rounded-lg bg-gray-300" />
            <div className="h-3 w-8/12 rounded-lg bg-gray-300" /> */}
        </div>
    </div>
);