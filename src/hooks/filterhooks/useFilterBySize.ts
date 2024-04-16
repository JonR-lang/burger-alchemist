import { useSearchParams } from "react-router-dom";

const useFilterBySize = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterbySize = (filter: string, value: boolean) => {
    const existingFilters = searchParams.getAll("size");
    if (value) {
      if (existingFilters.length > 0) {
        searchParams.append("size", filter);
      } else {
        searchParams.set("size", filter);
      }
      setSearchParams(searchParams, { replace: true });
    } else {
      searchParams.delete("size", filter);
      setSearchParams(searchParams, { replace: true });
    }
  };

  return { handleFilterbySize } as const;
};

export default useFilterBySize;
