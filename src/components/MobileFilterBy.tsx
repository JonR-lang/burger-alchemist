import useLocalStorage from "@/hooks/useLocalStorage";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MobileFilterBy = () => {
  const [inStock, setInStock] = useLocalStorage("in-stock", true);
  const [outOfStock, setOutOfStock] = useLocalStorage("out-of-stock", false);
  const [sizeSmall, setSizeSmall] = useLocalStorage("filter-small-size", false);
  const [sizeMedium, setSizeMedium] = useLocalStorage(
    "filter-medium-size",
    false
  );
  const [sizeLarge, setSizeLarge] = useLocalStorage("filter-large-size", false);

  return (
    <div className='flex-1'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='text-center w-full py-2 '>
          <button className='flex items-center justify-center '>
            <span>Filter by</span>
            <MdOutlineKeyboardArrowDown fontSize={20} className='mt-[2px]' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='md:hidden block   translate-x-[4.6%] w-[91.5vw] rounded-tr-none rounded-tl-none '>
          <DropdownMenuLabel className='font-bold'>
            Availability
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={inStock}
            onCheckedChange={setInStock}
            onSelect={(e) => e.preventDefault()}>
            in stock
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={outOfStock}
            onCheckedChange={setOutOfStock}
            onSelect={(e) => e.preventDefault()}>
            out of stock
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className='font-bold'>Price</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <div className='flex gap-2'>
              <div className='flex-1'>
                <label htmlFor='from' className='text-sm'>
                  From
                </label>
                <input
                  type='number'
                  name='from'
                  id='from'
                  className='w-full p-2 border rounded focus:outline-none shadow-sm'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='to' className='text-sm'>
                  To
                </label>
                <input
                  type='number'
                  name='to'
                  id='to'
                  className='w-full p-2 border rounded focus:outline-none shadow-sm'
                />
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className='font-bold'>Size</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={sizeSmall}
            onCheckedChange={setSizeSmall}
            onSelect={(e) => e.preventDefault()}>
            small
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={sizeMedium}
            onCheckedChange={setSizeMedium}
            onSelect={(e) => e.preventDefault()}>
            medium
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={sizeLarge}
            onCheckedChange={setSizeLarge}
            onSelect={(e) => e.preventDefault()}>
            large
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileFilterBy;
