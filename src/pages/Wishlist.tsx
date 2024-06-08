import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useWishlistData } from "@/hooks/queryhooks/useWishlistData";
import { ProductCardType } from "@/types/ProductCard.types";
import SkeletonProductCard from "@/components/skeletonui/ProductCardSkeleton";
import { useErrorBoundary } from "react-error-boundary";

const Wishlist = () => {
  const { data, isLoading, isError, error } = useWishlistData();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  return (
    <div className='flex flex-col gap-3 mb-4'>
      <h1 className='text-amber-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>
        Wishlist
      </h1>
      {isLoading ? (
        <div className='grid grid-cols-responsive-grid-mobile sm:grid-cols-responsive-grid gap-2 sm:gap-4'>
          {[...Array(5)].map((_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </div>
      ) : data.length === 0 ? (
        <p className='text-center py-10 text-lg md:text-xl'>
          You have no burgers in your wishlist
        </p>
      ) : (
        <div className='grid grid-cols-responsive-grid-mobile sm:grid-cols-responsive-grid gap-2 sm:gap-4'>
          {data.map((item: ProductCardType, i: number) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
