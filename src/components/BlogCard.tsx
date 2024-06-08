import { BlogCardType } from "@/types/BlogCard.types";
import { useLocation, Link } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";

type BlogCardProp = {
  data: BlogCardType;
  inHomePage?: boolean;
};

const BlogCard = ({ data, inHomePage }: BlogCardProp) => {
  const { pathname } = useLocation();
  const blogImage = data.images[0].url;
  const dateCreated = formatDistanceToNow(new Date(data.createdAt), {
    addSuffix: true,
  });

  return (
    <Link
      to={`/blogs/${data._id}`}
      className={`flex items-center rounded-lg p-2 border gap-3 custom-shadow ${
        pathname.includes("/blog") &&
        "flex-col items-stretch min-w-[250px] md:min-w-0"
      }`}>
      <figure className='bg-lime-200 overflow-hidden rounded-lg flex-1'>
        <img
          src={blogImage}
          alt={data.title}
          className='size-full object-cover'
        />
      </figure>
      <div
        className={`flex flex-col  ${
          !pathname.includes("/blog") && "flex-[2]"
        } `}>
        <h3 className='font-semibold'>{data.title}</h3>
        <small
          className={`text-neutral-500 ${
            inHomePage && "hidden"
          }`}>{`${data.author.firstName} ${data.author.lastName}`}</small>
        <p className={`${inHomePage && "hidden"}`}>
          {data.body.slice(0, 100)} ....
        </p>
        <small className={`text-neutral-500 mt-1`}>{dateCreated}</small>
      </div>
    </Link>
  );
};

export default BlogCard;
