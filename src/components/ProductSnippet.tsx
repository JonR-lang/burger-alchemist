//For react-rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type ProductSnippetProp = {
  className?: string;
  name: string;
  image: string;
  totalRatings: number;
  price: number;
};

const ProductSnippet = ({
  className,
  name,
  image,
  totalRatings,
  price,
}: ProductSnippetProp) => {
  //note that the parent div was given a padding of 0 because of its situation in the cart page. Also the size of the text of the product name is also reduced because of same reason.
  return (
    <div className={`${className} p-0 sm:p-2 rounded flex gap-1 items-center`}>
      <figure className='size-24 min-w-24 rounded'>
        <img src={image} alt={name} className='size-full object-cover' />
      </figure>
      <div className='space-y-2'>
        <h4 className='text-sm font-semibold leading-4 text-neutral-900'>
          {name}
        </h4>
        <Rating
          style={{ maxWidth: 79 }}
          value={totalRatings}
          readOnly={true}
          className='-ml-[3px] -translate-y-1'
        />
        <span className='text-base font-bold text-accent-one'>${price}</span>
      </div>
    </div>
  );
};

export default ProductSnippet;
