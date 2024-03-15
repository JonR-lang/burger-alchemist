import BlogCard from "./BlogCard";

const BlogFlex = () => {
  return (
    <div className='flex-1 lg:flex flex-col gap-2 hidden'>
      <h2 className='text-xl font-bold md:-mb-2'>Blog</h2>
      <small className='text-zinc-300 '>Check out the recent blog posts</small>
      <div className='rounded-lg lg:sticky lg:top-20  flex flex-col gap-3'>
        {Array(3)
          .fill("Es")
          .map((item: any, i) => (
            <BlogCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default BlogFlex;
