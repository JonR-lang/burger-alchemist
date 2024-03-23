import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <div className='text-sm'>
      <Select>
        <SelectTrigger className='w-[180px] h-auto px-2 py-1 rounded border-primary-two/30 focus:ring-primary-two'>
          <SelectValue placeholder='Sort By' />
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
