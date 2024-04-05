import BlogImage from "../assets/hamburger-icon-1.png";
import { useLocation, Link } from "react-router-dom";

const BlogCard = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to='/blogs/:id'
      className={`flex items-center rounded-lg p-2 border gap-3 custom-shadow ${
        pathname.includes("/blog") &&
        "flex-col items-stretch min-w-[250px] md:min-w-0"
      }`}>
      <figure className='bg-lime-200 overflow-hidden rounded-lg flex-1'>
        <img
          src={BlogImage}
          alt='blog-image'
          className='size-full object-cover'
        />
      </figure>
      <div
        className={`flex flex-col  ${
          !pathname.includes("/blog") && "flex-[2]"
        } `}>
        <h3 className='font-semibold'>Blog name</h3>
        <small>Author</small>
        <p>A small part of the blog</p>
        <small>date posted</small>
      </div>
    </Link>
  );
};

export default BlogCard;
