import ReactStars from "react-stars"; //fix this error!
import Burger from "../assets/hero-2.png";

const ProductSnippet = () => {
  return (
    <div className='p-2 bg-lime-300 rounded flex gap-2 items-center'>
      <figure className='size-16 bg-red-300 rounded'>
        <img
          src={Burger}
          alt='product-item'
          className='size-full object-cover'
        />
      </figure>
      <div>
        <h4 className='text-sm font-semibold'>Product name</h4>
        <ReactStars
          count={5}
          value={3}
          activeColor='#ffd700'
          size={15}
          edit={false}
        />
        <span className='text-sm'>{30}</span>
      </div>
    </div>
  );
};

export default ProductSnippet;
