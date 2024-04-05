import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { Button } from "@/components/ui/button";

import Blob from "../assets/blob-2.svg";
import BurgerImage from "../assets//hero-1.png";

import { badgeVariants } from "@/components/ui/badge";
import IngredientTable from "@/components/IngredientTable";
import AddQuantityInput from "@/components/AddQuantityInput";
import DetailsAccordion from "@/components/DetailsAccordion";
import RatingsReview from "@/components/RatingsReview";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center'>
        <figure className='relative flex-1 grid place-items-center'>
          <img
            src={BurgerImage}
            alt='burger-image'
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
              Burger Name
            </h2>
            <p className='md:hidden text-3xl mr-1 font-bold text-accent-one'>
              {"$20"}
            </p>
          </div>

          <p className='text-sm lg:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, optio
            vel voluptatibus maxime aperiam beatae enim iure officiis commodi
            libero sapiente soluta ducimus, repellendus repudiandae.
          </p>
          <div className='flex md:items-center gap-2 md:gap-4 justify-between flex-col md:flex-row'>
            <div className='space-x-2'>
              {Array(4)
                .fill("eddy")
                .map((item, i) => (
                  <Link
                    key={i}
                    to='/'
                    className={`${badgeVariants({
                      variant: "secondary",
                    })} bg-neutral-200`}>
                    tag
                  </Link>
                ))}
            </div>
            <div className='w-28'>
              <Rating
                style={{ width: "100%", objectFit: "contain" }}
                value={4}
                readOnly={true}
              />
            </div>
          </div>
          <div className='flex justify-between lg:mt-2 '>
            <div className='flex flex-col gap-4 justify-between w-full lg:w-auto'>
              <div className='hidden md:flex flex-col gap-2'>
                <p className='text-sm'>{"Gourmet"}</p>
                <p className='text-sm'>Size: {"medium"}</p>
                <p className='text-4xl font-bold text-accent-one'>{"$20"}</p>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col gap-3 md:gap-2 md:items-center lg:items-start justify-between mt-2 md:mt-0'>
                <AddQuantityInput />
                <Button className='bg-accent-one text-base md:text-sm py-6 md:py-5 font-semibold mt-2'>
                  Add to cart
                </Button>
              </div>
            </div>

            <div className='hidden lg:block rounded-lg border-2 border-primary-two overflow-hidden w-[200px] self-end '>
              <IngredientTable />
            </div>
          </div>
        </div>
      </div>
      <DetailsAccordion />
      <RelatedProducts />
      <RatingsReview />
    </div>
  );
};

export default ProductDetails;
