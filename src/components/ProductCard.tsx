import Burger from "../assets/hero-2.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className='min-w-[200px] md:min-w-0 aspect-[1/1.3] group rounded-xl p-2 relative z-20 border border-primary-two/20 shadow-sm'>
      <figure className='relative w-full aspect-square h-fit'>
        <img
          src={Burger}
          alt='burger'
          className='absolute group-hover:scale-110 transition duration-500 group-hover:rotate-[-12deg] md:group-hover:-translate-y-14 cursor-pointer drop-shadow-lg'
        />
        <button className='absolute right-1 top-1 z-20 text-black/20'>
          <CiHeart fontSize={27} />
        </button>
      </figure>
      <div className='p-1 flex flex-col'>
        <div className='flex w-full justify-between items-center'>
          <p className='font-semibold relative after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-fit after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-amber-900  text-amber-900'>
            Burger Name
          </p>
          <span className='flex items-center gap-1'>
            <MdOutlineStar fontSize={20} color='gold' />
            <span className='text-xs'>3.5</span>
          </span>
        </div>
        <div className='text-xl font-bold text-accent-one mt-1'>$33</div>
      </div>
    </div>
  );
};

export default ProductCard;
