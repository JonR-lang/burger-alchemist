import { Skeleton } from "../ui/skeleton";

const BlogDetailSkeleton = () => {
  return (
    <div className='flex flex-col gap-3 w-full max-w-3xl mx-auto'>
      <Skeleton className='w-4/5 h-12 mx-auto' />
      <Skeleton className='w-full aspect-video' />
      <div className='flex items-center justify-between'>
        <Skeleton className='w-12 h-4 rounded-sm' />
        <Skeleton className='w-12 h-4 rounded-sm' />
      </div>
      <Skeleton className='w-12 h-5 rounded' />
      <div className='flex flex-col gap-2'>
        {[...Array(30)].map((_, i) => (
          <Skeleton key={i} className='w-full h-2 rounded' />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
