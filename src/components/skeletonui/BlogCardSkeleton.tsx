import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "react-router-dom";

const BlogCardSkeleton = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`h-[300px] rounded-lg custom-shadow ${
        pathname.includes("/blog") && "min-w-[250px] md:min-w-0"
      }`}>
      <Skeleton className='size-full' />
    </div>
  );
};

export default BlogCardSkeleton;
