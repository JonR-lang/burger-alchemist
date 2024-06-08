import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { addToCart } from "@/features/cart/cartSlice";
import { useProductData } from "@/hooks/queryhooks/useProductData";
import scrollToTop from "@/utils/scrollToTop";
import Blob from "../assets/blob-2.svg";

import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import IngredientTable from "@/components/IngredientTable";
import AddQuantityInput from "@/components/AddQuantityInput";
import DetailsAccordion from "@/components/DetailsAccordion";
import RatingsReview from "@/components/RatingsReview";
import RelatedProducts from "@/components/RelatedProducts";
import ProductDetailSkeleton from "@/components/skeletonui/ProductDetailSkeleton";
import { RootState } from "@/store/store";

const ProductDetails = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Check if Id exists before using it.
  if (!id) {
    // Handle the case when id is undefined
    return <div>No product ID provided</div>;
  }

  const { data, isLoading, isError, error } = useProductData({
    productId: id,
  });

  const handleAddToCart = (
    product: string,
    name: string,
    price: number,
    image: string,
    totalRatings: number,
    size: string
  ) => {
    const subtotal = quantity * price;
    toast({
      variant: "yellowBorder",
      description: "Item has been added to cart.",
    });
    dispatch(
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
    );
  };

  //Check if the product exists in the cart.
  const cartIndex = cart.items
    ? cart.items.findIndex((item) => item.product === id)
    : -1;

  useEffect(() => {
    scrollToTop();
  }, [id]);

  if (isLoading) return <ProductDetailSkeleton />;

  if (isError)
    return (
      <div className='h-[70vh] grid place-content-center place-items-center'>
        <p className='mx-auto text-center text-neutral-700 text-lg'>
          {error.message.includes("404")
            ? "Oops! This burger is either out of stock or does not exist!"
            : error.message}
        </p>
        <button
          onClick={() => navigate(-1)}
          className='bg-neutral-700 text-white px-5 py-[6px] rounded-md button-shadow my-4 text-lg'>
          Continue surfing
        </button>
      </div>
    );

  return (
    <div>
      <div className='flex flex-col md:flex-row items-center'>
        <figure className='relative flex-1 grid place-items-center'>
          <img
            src={data.images[0].url}
            alt={data.slug}
            className='relative z-10 drop-shadow-lg'
          />
          <img
            src={Blob}
            alt='blob-underlay'
            aria-hidden={true}
            className='absolute drop-shadow-lg opacity-90'
          />
        </figure>
        <div className='flex flex-col gap-2 lg:gap-3 px-4 py-8 pb-4 md:py-4 flex-1 // -mr-4 -ml-4 sm:-mr-8 sm:-ml-8 md:-mr-0 md:-ml-0 // rounded-tr-[50px] rounded-tl-[50px] md:rounded-tr-none md:rounded-tl-none // border '>
          <div className='flex items-center justify-between'>
            <h2 className='text-amber-900 text-2xl sm:text-3xl lg:text-4xl font-semibold'>
              {data.name}
            </h2>
            <p className='md:hidden text-3xl mr-1 font-bold text-accent-one'>
              ${data.price}
            </p>
          </div>

          <p className='text-sm lg:text-base'>{data.description}</p>
          <div className='flex md:items-center gap-2 md:gap-4 justify-between flex-col md:flex-row'>
            <div className='space-x-2'>
              {data.dietaryPreferences.map((item: string, i: number) => (
                <Link
                  key={i}
                  to={`/products?dietaryPreference=${item}`}
                  className={`${badgeVariants({
                    variant: "secondary",
                  })} bg-neutral-200`}>
                  {item}
                </Link>
              ))}
            </div>
            <div className='w-28'>
              <Rating
                style={{ width: "100%", objectFit: "contain" }}
                value={data.totalRatings}
                readOnly={true}
              />
            </div>
          </div>
          <div className='flex justify-between lg:mt-2 '>
            <div className='flex flex-col gap-4 justify-between w-full lg:w-auto'>
              <div className='hidden md:flex flex-col gap-2'>
                <p className='text-sm'>{data?.burgerType?.title}</p>
                <p className='text-sm'>Size: {data?.size}</p>
                <p className='text-4xl font-bold text-accent-one'>
                  ${data.price.toFixed(2)}
                </p>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col gap-3 md:gap-2 md:items-center lg:items-start justify-between mt-2 md:mt-0'>
                {cartIndex < 0 && (
                  <AddQuantityInput value={quantity} setValue={setQuantity} />
                )}
                <Button
                  className={`${
                    cartIndex < 0 ? "bg-accent-one" : "bg-neutral-900"
                  } text-base md:text-sm py-6 md:py-5 font-semibold mt-2`}
                  onClick={() =>
                    handleAddToCart(
                      data._id,
                      data.name,
                      data.price,
                      data.images[0].url,
                      data.totalRatings,
                      data.size
                    )
                  }
                  disabled={cartIndex >= 0}
                  aria-disabled={cartIndex >= 0}>
                  {cartIndex < 0 ? "Add to cart" : "Added to cart"}
                </Button>
              </div>
            </div>

            <div className='hidden lg:block rounded-lg border-2 border-primary-two overflow-hidden w-[200px] self-end '>
              <IngredientTable tableData={data.ingredients} />
            </div>
          </div>
        </div>
      </div>
      <DetailsAccordion
        size={data.size}
        ingredients={data.ingredients}
        burgerType={data?.burgerType?.title}
      />
      <RelatedProducts />
      <RatingsReview
        productId={data._id}
        totalRatings={data.totalRatings}
        ratings={data.ratings}
      />
    </div>
  );
};

export default ProductDetails;
