import { Skeleton } from "../ui/skeleton";

const OrderDetailSkeleton = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-3'>
        Order details
      </h1>
      <div className='flex flex-col gap-2'>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className='w-full h-[120px]' />
        ))}
      </div>
    </div>
  );
};

export default OrderDetailSkeleton;
