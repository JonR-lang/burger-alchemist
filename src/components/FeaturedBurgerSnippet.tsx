import ProductSnippet from "./ProductSnippet";
import { ProductCardType } from "@/types/ProductCard.types";

import { useFeaturedProductsData } from "@/hooks/queryhooks/useFeaturedProductsData";
import { Link } from "react-router-dom";

type classProp = {
  className?: string;
};

const FeaturedBurgerSnippet = ({ className }: classProp) => {
  const { data, isLoading, isError, error } = useFeaturedProductsData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Featured Burgers</h3>
      <div className='flex flex-col gap-2 mt-4'>
        {data?.products.splice(0, 3).map((item: ProductCardType, i: number) => (
          <Link
            to={`/products/${item._id}`}
            className='shadow-custom-a hover:scale-105 transition'
            key={i}>
            <ProductSnippet
              name={item.name}
              image={item.images[0].url}
              price={item.price}
              totalRatings={item.totalRatings}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBurgerSnippet;
