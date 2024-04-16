import { CiHeart } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { ProductCardType } from "@/types/ProductCard.types";

import { useToast } from "@/components/ui/use-toast";

export type ProductCardProp = {
  grid?: number;
  page?: number;
  setGrid?: (number: number) => void;
  data: ProductCardType;
};

const excludedPathnames = ["/wishlist", "/products"];

const ProductCard = ({
  grid,
  data: { name, images, slug, totalRatings, price, description, _id: id },
}: ProductCardProp) => {
  const { pathname } = useLocation();
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      variant: "yellowBorder",
      description: "Item has been added to cart.",
    });
  };

  return (
    <Link
      to={`/products/${id}`}
      className={`${
        !excludedPathnames.includes(pathname) && "min-w-[200px]"
      } md:min-w-0 group rounded-xl p-[6px] sm:p-2 relative z-20 border border-primary-two/20 shadow-sm bg-white flex  ${
        grid === 1
          ? "flex-row justify-between items-center"
          : "flex-col aspect-[1/1.3]"
      }`}>
      <figure
        className={`relative w-[90%] self-center aspect-square ${
          grid === 1 && "flex-1 w-full"
        }`}>
        <img
          src={images[0].url}
          alt={slug}
          className='absolute group-hover:scale-110 transition duration-500 group-hover:rotate-[-12deg] md:group-hover:-translate-y-14 cursor-pointer drop-shadow-lg'
        />
      </figure>
      <div
        className={`p-1 flex flex-col flex-1 justify-between gap-1 ${
          grid === 1 && "flex-[1.5] sm:flex-[2] lg:flex-[4] gap-2 lg:gap-3 py-2"
        } ${grid === 2 && "gap-1 lg:gap-2"}`}>
        <h4
          className={`font-semibold cursor-pointer w-fit  text-amber-900 leading-4 ${
            (grid === 2 || grid === 1 || grid === 3) &&
            "text-base md:text-xl font-bold"
          }`}>
          {name.length > 14 ? name.slice(0, 13) + "..." : name}
        </h4>

        <p
          className={`${
            grid === 1
              ? "hidden sm:block"
              : grid === 2
              ? "hidden lg:block"
              : "hidden"
          } `}>
          {grid !== 1 && description.length > 110
            ? description.slice(0, 110) + "..."
            : description}
        </p>
        <span
          className={`text-xl font-bold text-accent-one ${
            grid === 1 && "text-2xl md:text-3xl xl:text-4xl"
          } ${grid === 2 && "md:text-3xl xl:text-4xl"}`}>
          ${price}
        </span>
        <div className='w-full flex items-center justify-between '>
          <span
            className={`flex items-center gap-[2px] bg-amber-200 p-1 rounded ${
              grid === 1 && "hidden"
            }`}>
            <Rating
              value={1}
              items={1}
              readOnly={true}
              style={{ maxWidth: 15 }}
            />
            <span className='text-xs mt-[3px]'>
              {totalRatings ? totalRatings.toFixed(1) : 0}
            </span>
          </span>
          <button
            className='sm:-mt-[7px] text-accent-one'
            onClick={handleClick}>
            <TbShoppingBagPlus fontSize={25} aria-hidden={true} />
            <span className='sr-only'>Add to Cart</span>
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col items-center gap-1 h-full ${
          grid !== 1 && "hidden"
        }`}>
        <button className={` text-black/20 `}>
          <CiHeart fontSize={27} />
        </button>
        <div
          className={`w-4 sm:w-5 ${
            grid === 1
              ? "block sm:absolute sm:top-[50%] sm:-translate-y-[50%]"
              : "hidden"
          }`}>
          <Rating
            style={{ width: "100%", objectFit: "contain" }}
            value={totalRatings}
            orientation='vertical'
            readOnly={true}
          />
        </div>
      </div>

      {/* This wishList button is for the grid display, it disappears in the list display. */}

      <button
        className={`absolute right-1 top-1 z-20 text-black/20 ${
          grid === 1 && "hidden"
        }`}>
        <CiHeart fontSize={27} />
      </button>
    </Link>
  );
};

export default ProductCard;
