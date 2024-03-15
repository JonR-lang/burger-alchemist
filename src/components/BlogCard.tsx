import BlogImage from "../assets/hamburger-icon-1.png";

const BlogCard = () => {
  return (
    <div className='flex items-center rounded-lg p-2 border gap-3 custom-shadow'>
      <figure className='bg-lime-200 overflow-hidden rounded-lg flex-1'>
        <img src={BlogImage} alt='blog-image' className='size-full' />
      </figure>
      <div className='flex flex-col flex-[2]'>
        <h3 className='font-semibold'>Blog name</h3>
        <small>Author</small>
        <p>A small part of the blog</p>
        <small>date posted</small>
      </div>
    </div>
  );
};

export default BlogCard;
