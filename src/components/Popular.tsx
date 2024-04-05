import ProductCard from "./ProductCard";
import { usePopularProductsData } from "@/hooks/usePopularProductsData";
import { ProductCardType } from "@/types/ProductCard.types";

const Popular = () => {
  const { data, isLoading, isError, error } = usePopularProductsData();

  if (isLoading) return <div> This content is Loading</div>;

  if (isError) return <div>{error.message}</div>;
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold md:-mb-2'>Popular</h2>
      <small className='text-zinc-300'>
        Check out the list of popular products!
      </small>
      <div
        id='horizontal-scroll-bar'
        className='overflow-x-auto md:overflow-x-visible pb-4 md:p-0 w-full'>
        <section className='flex gap-4 md:grid grid-cols-3 xl:grid-cols-4 '>
          {data.products.map((item: ProductCardType, i: number) => (
            <ProductCard data={item} key={i} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Popular;
