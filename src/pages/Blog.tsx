import BlogCard from "@/components/BlogCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "@/components/Pagination";
import BlogCategories from "@/components/BlogCategories";

const Blog = () => {
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
            <Select>
              <SelectTrigger className='w-[180px] h-auto p-2 rounded-full border-primary-two/30 focus:ring-primary-two'>
                <SelectValue placeholder='Sort By' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='title-ascending'>
                  Alphabetically, A-Z
                </SelectItem>
                <SelectItem value='title-descending'>
                  Alphabetically, Z-A
                </SelectItem>
                <SelectItem value='created-ascending'>Older</SelectItem>
                <SelectItem value='created-descending'>Newer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
          {Array(8)
            .fill("red")
            .map((item, i) => (
              <BlogCard key={i} />
            ))}
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Blog;
