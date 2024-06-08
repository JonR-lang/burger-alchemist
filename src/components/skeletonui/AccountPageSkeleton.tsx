import { Skeleton } from "../ui/skeleton";

const AccountPageSkeleton = () => {
  return (
    <div className='flex gap-3'>
      <Skeleton className='h-[100vh] min-w-[240px] hidden md:block' />
      <div className='flex flex-col gap-3 flex-1'>
        <Skeleton className='h-[200px] w-full' />
        <Skeleton className='h-[200px] w-full' />
        <Skeleton className='h-[200px] w-full' />
        <Skeleton className='h-[200px] w-full' />
      </div>
    </div>
  );
};

export default AccountPageSkeleton;
