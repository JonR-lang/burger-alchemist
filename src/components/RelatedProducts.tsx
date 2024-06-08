import ProductCard from "./ProductCard";
import { ProductCardType } from "@/types/ProductCard.types";
import { useRelatedProductsData } from "@/hooks/queryhooks/useRelatedProductsData";
import { Skeleton } from "./ui/skeleton";

const RelatedProducts = () => {
  const { data, isLoading, isError, error } = useRelatedProductsData();
  if (isLoading)
    return (
      <div className='flex md:grid grid-cols-responsive-grid gap-4 overflow-x-auto pb-4'>
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index} className='flex-1 min-w-[200px] md:min-w-0' />
        ))}
      </div>
    );

  if (isError) return <div>{error.message}</div>;
  return (
    <div className='flex flex-col gap-4 my-12'>
      <h2 className='text-2xl lg:text-3xl font-semibold'>Related Products</h2>
      <div className='flex md:grid grid-cols-responsive-grid gap-4 overflow-x-auto pb-4'>
        {data.products.map((item: ProductCardType, i: number) => (
          <ProductCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
