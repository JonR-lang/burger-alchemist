import BlogImage from "../assets/hamburger-icon-1.png";

import { Link } from "react-router-dom";

import { badgeVariants } from "@/components/ui/badge";

import { CiHeart } from "react-icons/ci";
import { FaComments } from "react-icons/fa";
import BlogCard from "@/components/BlogCard";

const BlogDetails = () => {
  return (
    <div className='flex flex-col gap-3 w-full max-w-3xl mx-auto'>
      <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-semibold md:my-2'>
        Blog Title
      </h1>
      <div>
        <figure>
          <img
            src={BlogImage}
            alt='blog-image'
            className='w-full aspect-video object-cover bg-red-200'
          />
        </figure>
        <div className='text-sm flex items-center justify-between text-neutral-500'>
          <p>By Admin</p>
          <p>20 views</p>
        </div>
      </div>

      <div className='space-x-2'>
        {Array(4)
          .fill("eddy")
          .map((item, i) => (
            <Link
              key={i}
              to='/'
              className={`${badgeVariants({
                variant: "secondary",
              })} bg-neutral-200`}>
              tag
            </Link>
          ))}
      </div>

      <article className='mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sequi
        aspernatur! Quisquam consequuntur quibusdam recusandae optio explicabo
        obcaecati cum voluptatem iure. Nam rem deserunt praesentium debitis
        quis, quam porro. Perferendis optio laborum minima unde numquam ex
        exercitationem velit atque odio repudiandae nulla, vel consequatur iusto
        neque obcaecati, id, adipisci nostrum rem quaerat maiores sint at
        dolore? Deserunt ex delectus, temporibus provident, facilis atque
        aperiam natus, unde earum numquam magni perferendis consequuntur amet
        tempore consequatur inventore officiis voluptatem voluptatibus ipsam
        veritatis culpa quidem iure dolor laudantium? Beatae nemo omnis
        consectetur itaque sed ducimus reprehenderit praesentium recusandae! Hic
        ratione deserunt impedit dignissimos?
      </article>

      <div className='border-t pt-3 text-neutral-500 flex gap-3 items-center'>
        <div className='flex items-center gap-[2px]'>
          <button>
            <CiHeart fontSize={25} aria-hidden={true} />
            <span className='sr-only'>Like article</span>
          </button>
          <p className='text-sm mt-[3px]'>{"50"}</p>
        </div>
        <div className='flex items-center gap-[2px]'>
          <button className='text-neutral-400'>
            <FaComments fontSize={25} aria-hidden={true} />
            <span className='sr-only'>Like article</span>
          </button>
          <p className='text-sm mt-[3px]'>{"31"}</p>
        </div>
      </div>
      <div>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold my-3'>
          You may also like
        </h3>
        <div className='flex md:grid grid-cols-responsive-grid gap-3 overflow-x-auto pb-4'>
          {Array(3)
            .fill(3)
            .map((item, i) => (
              <BlogCard key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
