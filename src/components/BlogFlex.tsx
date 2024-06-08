import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useAllBlogsData } from "@/hooks/queryhooks/useAllBlogsData";
import { BlogCardType } from "@/types/BlogCard.types";
import OrderListItemSkeleton from "./skeletonui/OrderListItemSkeleton";
import { useErrorBoundary } from "react-error-boundary";

const BlogFlex = () => {
  const { data, isLoading, isError, error } = useAllBlogsData({
    category: "",
    sort: "",
  });
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading)
    return (
      <div className='hidden lg:flex'>
        {[...Array(3)].map((_, i: number) => (
          <OrderListItemSkeleton key={i} />
        ))}
      </div>
    );

  return (
    <div className='flex-1 lg:flex flex-col gap-2 hidden'>
      <h2 className='text-xl font-bold md:-mb-2'>Blog</h2>
      <small className='text-zinc-300 '>Check out the recent blog posts</small>
      <div className='rounded-lg lg:sticky lg:top-20  flex flex-col gap-3'>
        {data.slice(0, 3).map((item: BlogCardType, i: number) => (
          <BlogCard key={i} data={item} inHomePage={true} />
        ))}
      </div>
    </div>
  );
};

export default BlogFlex;
