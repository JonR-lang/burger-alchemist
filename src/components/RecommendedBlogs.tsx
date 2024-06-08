import { useEffect } from "react";
import { useAllBlogsData } from "@/hooks/queryhooks/useAllBlogsData";
import BlogCard from "./BlogCard";
import { BlogCardType } from "@/types/BlogCard.types";
import { useErrorBoundary } from "react-error-boundary";

type RecommendedBlogsProp = {
  category: string;
};

const RecommendedBlogs = ({ category }: RecommendedBlogsProp) => {
  const { data, isLoading, isError, error } = useAllBlogsData({
    category,
    sort: "",
  });
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='flex md:grid grid-cols-responsive-grid gap-3 overflow-x-auto pb-4'>
      {data.map((item: BlogCardType, i: number) => (
        <BlogCard key={i} data={item} />
      ))}
    </div>
  );
};

export default RecommendedBlogs;
