import { useEffect } from "react";
import { useAllBlogsData } from "@/hooks/queryhooks/useAllBlogsData";
import { BlogCardType } from "@/types/BlogCard.types";
import BlogCard from "@/components/BlogCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCategories from "@/components/BlogCategories";
import { useSearchParams } from "react-router-dom";
import BlogCardSkeleton from "@/components/skeletonui/BlogCardSkeleton";
import { useErrorBoundary } from "react-error-boundary";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";
  const { data, isLoading, isError, error } = useAllBlogsData({
    category,
    sort,
  });
  const { showBoundary } = useErrorBoundary();

  const handleSort = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  return (
    <div className='flex flex-col gap-6 pb-4'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>
        Blog
      </h1>

      <BlogCategories />

      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold text-2xl tracking-wide'>Articles</h2>
          <div>
            <Select onValueChange={(value) => handleSort(value)}>
              <SelectTrigger className='w-[180px] h-auto p-2 rounded-full border-primary-two/30 focus:ring-primary-two'>
                <SelectValue placeholder='Sort By' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='createdAt'>Older</SelectItem>
                <SelectItem value='-createdAt'>Newer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
          {isLoading &&
            [...Array(10)].map((_, i: number) => <BlogCardSkeleton key={i} />)}
          {data &&
            data.map((item: BlogCardType, i: number) => (
              <BlogCard key={i} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
