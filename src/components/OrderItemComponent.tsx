import ProductSnippet from "./ProductSnippet";
import { Skeleton } from "./ui/skeleton";
import { useProductData } from "@/hooks/queryhooks/useProductData";
type OICProp = {
  productId: string;
};
const OrderItemComponent = ({ productId }: OICProp) => {
  const { data, isLoading, isError, error } = useProductData({ productId });
  if (isLoading) return <Skeleton className='w-[100px] aspect-square' />;
  if (isError) return <div>{error.message}</div>;

  return (
    <ProductSnippet
      name={data?.name}
      image={data?.images[0].url}
      totalRatings={data?.totalRatings}
      price={data?.price}
    />
  );
};

export default OrderItemComponent;
