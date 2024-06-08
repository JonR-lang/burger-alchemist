import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SICProp = {
  value: string;
  setValue: (value: string) => void;
  DialogClose: typeof DialogPrimitive.Close;
};

const SearchInputComponent = ({ value, setValue, DialogClose }: SICProp) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products?search=${value}`);
  };

  return (
    <div>
      <div className='flex items-center gap-2'>
        <Label htmlFor='search' className='block w-full'>
          <Input
            id='search'
            type='search'
            value={value}
            className='w-full'
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
        <DialogClose
          type='submit'
          onClick={handleSearch}
          disabled={!value}
          aria-disabled={!value}
          className='bg-neutral-900 text-white rounded-md px-3 h-full py-1'>
          <IoSearchOutline
            fontSize={25}
            aria-hidden={true}
            className='hover:scale-125 transition duration-300'
          />
          <span className='sr-only'>Search.</span>
        </DialogClose>
      </div>
    </div>
  );
};

export default SearchInputComponent;
