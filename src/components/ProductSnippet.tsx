import Burger from "../assets/hero-2.png";

//For react-rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type ClassProp = {
  className?: string;
};

const ProductSnippet = ({ className }: ClassProp) => {
  return (
    <div className={`${className} p-2 rounded flex gap-1 items-center`}>
      <figure className='size-24 rounded'>
        <img
          src={Burger}
          alt='product-item'
          className='size-full object-cover'
        />
      </figure>
      <div className='space-y-1'>
        <h4 className='text-base font-semibold leading-4'>Product name</h4>
        <Rating
          style={{ maxWidth: 79 }}
          value={3.7}
          readOnly={true}
          className='-ml-[3px] -translate-y-1'
        />
        <span className='text-base font-bold'>{"$30"}</span>
      </div>
    </div>
  );
};

export default ProductSnippet;
