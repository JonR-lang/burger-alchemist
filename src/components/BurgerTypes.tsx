import { useBurgerTypeData } from "@/hooks/queryhooks/useBurgerTypeData";

import { Link } from "react-router-dom";

import { badgeVariants } from "@/components/ui/badge";

type classProp = {
  className?: string;
};

type BurgerTypeProp = {
  title: string;
  _id: string;
};
const BurgerTags = ({ className }: classProp) => {
  const { data, isLoading, isError, error } = useBurgerTypeData();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Burger Types</h3>
      <div className='flex gap-[6px] flex-wrap mt-4 text-xs'>
        {data?.map((burgerType: BurgerTypeProp, i: number) => (
          <Link
            to={`/products?burgerType=${burgerType._id}`}
            key={i}
            className={`${badgeVariants({
              variant: "secondary",
            })} bg-neutral-100 font-normal text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100`}>
            {burgerType.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerTags;
