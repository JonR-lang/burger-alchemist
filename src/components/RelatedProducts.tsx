import ProductCard from "./ProductCard";
import { ProductCardType } from "@/types/ProductCard.types";
import { useRelatedProductsData } from "@/hooks/useRelatedProductsData";

const RelatedProducts = () => {
  const { data, isLoading, isError, error } = useRelatedProductsData();
  if (isLoading) return <div> This content is Loading</div>;

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
