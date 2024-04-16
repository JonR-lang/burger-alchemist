import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelect = (value: string) => {
    searchParams.set("sort", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Select onValueChange={(value) => handleSelect(value)}>
      <SelectTrigger className='w-[180px] h-auto px-2 py-1 rounded border-primary-two/30 focus:ring-primary-two text-sm'>
        <SelectValue placeholder='Sort By' />
      </SelectTrigger>
      <SelectContent className='text-sm'>
        <SelectItem value='-sold'>Best Selling</SelectItem>
        <SelectItem value='name'>Alphabetically, A-Z</SelectItem>
        <SelectItem value='-name'>Alphabetically, Z-A</SelectItem>
        <SelectItem value='price'>Price, low to high</SelectItem>
        <SelectItem value='-price'>Price, high to low</SelectItem>
        <SelectItem value='createdAt'>Older</SelectItem>
        <SelectItem value='-createdAt'>Newer</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
