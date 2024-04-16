import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { Button } from "@/components/ui/button";

import Blob from "../assets/blob-2.svg";

import { useToast } from "@/components/ui/use-toast";

import { badgeVariants } from "@/components/ui/badge";
import IngredientTable from "@/components/IngredientTable";
import AddQuantityInput from "@/components/AddQuantityInput";
import DetailsAccordion from "@/components/DetailsAccordion";
import RatingsReview from "@/components/RatingsReview";
import RelatedProducts from "@/components/RelatedProducts";

import { useProductData } from "@/hooks/useProductData";

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  //Check if Id exists before using it.
  if (!id) {
    // Handle the case when id is undefined
    return <div>No product ID provided</div>;
  }

  const { data, isLoading, isError, error } = useProductData({
    productId: id,
  });
  // console.log(data);

  const AddToCart = () => {
    toast({
      variant: "yellowBorder",
      description: "Item has been added to cart.",
    });
  };

  if (isLoading) return <div>{"Loading..."}</div>;

  if (isError) return <div>{error.message}</div>;

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
            <h2 className='text-amber-900 text-2xl sm:text-3xl lg:text-4xl  font-semibold'>
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
                <p className='text-sm'>{data.burgerType.title}</p>
                <p className='text-sm'>Size: {data.size}</p>
                <p className='text-4xl font-bold text-accent-one'>
                  ${data.price}
                </p>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col gap-3 md:gap-2 md:items-center lg:items-start justify-between mt-2 md:mt-0'>
                <AddQuantityInput />
                <Button
                  className='bg-accent-one text-base md:text-sm py-6 md:py-5 font-semibold mt-2'
                  onClick={AddToCart}>
                  Add to cart
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
        burgerType={data.burgerType.title}
      />
      <RelatedProducts />
      <RatingsReview totalRatings={data.totalRatings} ratings={data.ratings} />
    </div>
  );
};

export default ProductDetails;
