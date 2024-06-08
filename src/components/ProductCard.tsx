import { PiHeartFill, PiHeartLight } from "react-icons/pi";
import { TbShoppingBagPlus, TbShoppingBagCheck } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { ProductCardType } from "@/types/ProductCard.types";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import { RootState } from "@/store/store";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { useWishlistData } from "@/hooks/queryhooks/useWishlistData";
import { useToggleWishlist } from "@/hooks/queryhooks/useToggleWishlist";

//TYPES
export type ProductCardProp = {
  grid?: number;
  page?: number;
  setGrid?: (number: number) => void;
  data: ProductCardType;
};

const excludedPathnames = ["/wishlist", "/products"];

const ProductCard = ({
  grid,
  data: { name, images, slug, totalRatings, price, description, size, _id: id },
}: ProductCardProp) => {
  const savedUser = useSelector((state: RootState) => state.auth.user);
  const cart = useSelector((state: RootState) => state.cart);

  const { data: wishlist } = savedUser ? useWishlistData("_id") : { data: [] };
  const { mutate: toggleWishlist } = useToggleWishlist();

  const { pathname } = useLocation();
  const { toast } = useToast();
  const dispatch = useDispatch();

  //Check if the product exists in the cart.
  const cartIndex = cart.items
    ? cart.items.findIndex((item) => item.product === id)
    : -1;

  //Check if the product is in the user's wishlist
  const wishlistIndex = wishlist
    ? wishlist.findIndex((item: string) => item === id)
    : -1;

  const handleAddToCart = (
    product: string,
    name: string,
    price: number,
    image: string,
    totalRatings: number,
    size: string
  ) => {
    const quantity = 1;
    const subtotal = quantity * price;
    toast({
      variant: "yellowBorder",
      description:
        cartIndex < 0
          ? `You added ${name} to your cart!`
          : `You removed ${name} from your cart!`,
    });

    cartIndex < 0
      ? dispatch(
          addToCart({
            product,
            name,
            price,
            quantity,
            subtotal,
            image,
            totalRatings,
            size,
          })
        )
      : dispatch(removeFromCart({ product, subtotal }));
  };

  const handleToggleWishlist = () => {
    toggleWishlist(
      {
        _id: id,
        name,
        images,
        slug,
        description,
        totalRatings,
        price,
        size,
      },
      {
        onSuccess: (_data, variables) => {
          toast({
            variant: "yellowBorder",
            description: `${variables.name} has been ${
              wishlistIndex < 0
                ? "added to your wishlist"
                : "removed from your wishlist"
            }`,
          });
        },
        onError: (error) => {
          console.log(error);
          toast({
            variant: "destructive",
            description: error.message,
          });
        },
      }
    );
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
            className={`sm:-mt-[7px] ${
              cartIndex < 0
                ? "text-accent-one hover:text-neutral-800 rounded"
                : "text-neutral-800 hover:text-accent-one"
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(
                id,
                name,
                price,
                images[0].url,
                totalRatings,
                size
              );
            }}>
            {cartIndex < 0 ? (
              <TbShoppingBagPlus fontSize={25} aria-hidden={true} />
            ) : (
              <TbShoppingBagCheck fontSize={25} aria-hidden={true} />
            )}
            {cartIndex < 0 ? (
              <span className='sr-only'>Add to Cart</span>
            ) : (
              <span className='sr-only'>Product in your cart</span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col items-center gap-1 h-full ${
          grid !== 1 && "hidden"
        }`}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggleWishlist();
          }}
          className={` text-black/20 `}>
          <span className='sr-only'>Add to Wishlist</span>
          {wishlistIndex < 0 ? (
            <PiHeartLight fontSize={27} />
          ) : (
            <PiHeartFill fontSize={27} className='text-red-600' />
          )}
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
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggleWishlist();
        }}
        className={`absolute right-1 top-1 z-20 text-black/20 ${
          grid === 1 && "hidden"
        }`}>
        <span className='sr-only'>Add to Wishlist</span>
        {wishlistIndex < 0 ? (
          <PiHeartLight fontSize={27} className='hover:text-red-600' />
        ) : (
          <PiHeartFill fontSize={27} className='text-red-600' />
        )}
      </button>
    </Link>
  );
};

export default ProductCard;
