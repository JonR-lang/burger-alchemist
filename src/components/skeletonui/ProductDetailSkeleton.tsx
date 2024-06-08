import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row h-[80vh] gap-2'>
      <Skeleton className='size-full flex-1' />
      <div className='flex flex-col gap-2 lg:gap-3 px-4 py-8 pb-4 md:py-4 flex-1 '>
        <Skeleton className='w-3/4 h-12' />
        <div className='flex flex-col gap-2 mt-4'>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} className='w-full h-4' />
          ))}
        </div>
        <div className='flex justify-between w-full  mt-4'>
          <div className='flex gap-2'>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className='w-16 h-8' />
            ))}
          </div>
          <Skeleton className='h-10 w-36' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
