import { useSearchParams } from "react-router-dom";

const useFilterByPrice = (
  priceFrom: number,
  priceTo: number,
  setError: (error: string) => void
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterByPrice = () => {
    if (priceFrom > priceTo) {
      setError("Invalid Price Range!");
      return;
    }

    searchParams.set("minPrice", priceFrom.toString());
    searchParams.set("maxPrice", priceTo.toString());
    setSearchParams(searchParams, { replace: true });
  };

  return { handleFilterByPrice } as const;
};

export default useFilterByPrice;
