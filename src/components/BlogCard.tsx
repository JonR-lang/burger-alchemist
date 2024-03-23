import BlogImage from "../assets/hamburger-icon-1.png";
import { useLocation } from "react-router-dom";

const BlogCard = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`flex items-center rounded-lg p-2 border gap-3 custom-shadow ${
        pathname === "/blog" && "flex-col items-stretch"
      }`}>
      <figure className='bg-lime-200 overflow-hidden rounded-lg flex-1'>
        <img
          src={BlogImage}
          alt='blog-image'
          className='size-full object-cover'
        />
      </figure>
      <div className={`flex flex-col  ${pathname !== "/blog" && "flex-[2]"} `}>
        <h3 className='font-semibold'>Blog name</h3>
        <small>Author</small>
        <p>A small part of the blog</p>
        <small>date posted</small>
      </div>
    </div>
  );
};

export default BlogCard;
