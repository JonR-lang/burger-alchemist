import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "react-router-dom";
const excludedPathnames = ["/wishlist", "/products"];

export type SkeletonProductCardProp = {
  grid?: number;
};

const SkeletonProductCard = ({ grid }: SkeletonProductCardProp) => {
  const { pathname } = useLocation();

  return (
    <Skeleton
      className={`${
        !excludedPathnames.includes(pathname) && "min-w-[200px]"
      } md:min-w-0 rounded-xl z-20 opacity-30 shadow-sm ${
        grid === 1
          ? "flex-row justify-between items-center"
          : "flex-col aspect-[1/1.3]"
      }`}
    />
  );
};

export default SkeletonProductCard;
