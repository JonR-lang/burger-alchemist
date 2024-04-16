import { useSearchParams } from "react-router-dom";

const useFilterByAvailabillity = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterByAvailability = (value: "in-stock" | "out-of-stock") => {
    if (value === "in-stock") {
      searchParams.set("quantity", "1");
      setSearchParams(searchParams, { replace: true });
    } else if (value === "out-of-stock") {
      searchParams.set("quantity", "0");
      setSearchParams(searchParams, { replace: true });
    } else {
      searchParams.delete("quantity");
      setSearchParams(searchParams, { replace: true });
    }
  };

  return { handleFilterByAvailability } as const;
};

export default useFilterByAvailabillity;
