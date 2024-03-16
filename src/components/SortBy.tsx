import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <div className='flex items-center gap-2 text-sm'>
      <span>Sort by:</span>
      <Select>
        <SelectTrigger className='w-[180px] h-auto px-2 py-1 rounded'>
          <SelectValue placeholder='Featured' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='best-selling'>Best Selling</SelectItem>
          <SelectItem value='title-ascending'>Alphabetically, A-Z</SelectItem>
          <SelectItem value='title-descending'>Alphabetically, Z-A</SelectItem>
          <SelectItem value='price-ascending'>Price, low to high</SelectItem>
          <SelectItem value='price-descending'>Price, high to low</SelectItem>
          <SelectItem value='created-ascending'>Older</SelectItem>
          <SelectItem value='created-descending'>Newer</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBy;
