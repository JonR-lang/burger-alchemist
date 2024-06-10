import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useFeaturedProductsData } from "@/hooks/queryhooks/useFeaturedProductsData";
import { ProductCardType } from "@/types/ProductCard.types";
import SkeletonProductCard from "./skeletonui/ProductCardSkeleton";
import { useErrorBoundary } from "react-error-boundary";

const Featured = () => {
  const { data, isLoading, isError, error } = useFeaturedProductsData();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading)
    return (
      <div className='overflow-x-auto md:overflow-x-visible w-full'>
        <section className='flex gap-4 md:grid grid-cols-3 xl:grid-cols-4 '>
          {[...Array(5)].map((_, i: number) => (
            <SkeletonProductCard key={i} />
          ))}
        </section>
      </div>
    );

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold md:-mb-2'>Featured</h2>
      <small className='text-zinc-700'>
        Check out the list of featured products!
      </small>
      <div
        id='horizontal-scroll-bar'
        className='overflow-x-auto md:overflow-x-visible pb-4 md:p-0 w-full'>
        <section className='flex gap-4 md:grid grid-cols-3 xl:grid-cols-4 '>
          {data &&
            data.products.map((item: ProductCardType, i: number) => (
              <ProductCard data={item} key={i} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default Featured;
