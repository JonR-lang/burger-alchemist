import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <div className='flex items-center gap-2'>
      <span>Sort by:</span>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Best Selling' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='best-selling'>Best Selling</SelectItem>
          <SelectItem value='title-ascending'>Alphabetically, A-Z</SelectItem>
          <SelectItem value='title-descending'>Alphabetically, Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBy;
