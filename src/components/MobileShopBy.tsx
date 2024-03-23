import dietaryPreferences from "@/data/dietaryPreferences";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MobileShopBy = () => {
  return (
    <div className='flex-1'>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className='text-center w-full py-2 border-l'>
          <button className='flex items-center justify-center '>
            <span>Shop by</span>
            <MdOutlineKeyboardArrowDown fontSize={20} className='mt-[2px]' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='md:hidden block relative translate-x-[-4.6%] w-[91.5vw] rounded-tr-none rounded-tl-none '>
          <DropdownMenuLabel className='font-bold'>
            Dietary Preferences
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dietaryPreferences.map((item, i) => (
            <DropdownMenuItem key={i} className=''>
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileShopBy;
