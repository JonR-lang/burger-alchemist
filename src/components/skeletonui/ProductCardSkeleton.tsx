import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "react-router-dom";
const excludedPathnames = ["/wishlist", "/products"];

export type ProductCardSkeletonProp = {
  grid?: number;
};

const ProductCardSkeleton = ({ grid }: ProductCardSkeletonProp) => {
  const { pathname } = useLocation();

  return (
    <Skeleton
      className={`${
        !excludedPathnames.includes(pathname) && "min-w-[200px]"
      } md:min-w-0 rounded-xl z-20 opacity-30 shadow-sm ${
        grid !== 1 && "aspect-[1/1.3]"
      }`}
    />
  );
};

export default ProductCardSkeleton;
