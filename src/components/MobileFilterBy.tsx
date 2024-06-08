import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFilterByPrice from "@/hooks/filterhooks/useFilterByPrice";
import useFilterByAvailabillity from "@/hooks/filterhooks/useFilterByAvailabillity";

import { Button } from "./ui/button";

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
import useFilterBySize from "@/hooks/filterhooks/useFilterBySize";

const MobileFilterBy = () => {
  const [searchParams] = useSearchParams();
  //Availability
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  //Price
  const [priceFrom, setPriceFrom] = useState(() => {
    const minPrice = searchParams.get("minPrice") || "";
    return parseInt(minPrice);
  });
  const [priceTo, setPriceTo] = useState(() => {
    const maxPrice = searchParams.get("maxPrice") || "";
    return parseInt(maxPrice);
  });
  const [priceRangeError, setPriceRangeError] = useState("");

  const size = searchParams.getAll("size") || [];
  const quantity = searchParams.get("quantity") || "";

  const { handleFilterByPrice } = useFilterByPrice(
    priceFrom,
    priceTo,
    setPriceRangeError
  );
  const { handleFilterByAvailability } = useFilterByAvailabillity();
  const { handleFilterbySize } = useFilterBySize();

  const handleInStockChange = () => {
    setInStock(true);
    setOutOfStock(false);
    handleFilterByAvailability("in-stock");
  };

  const handleOutOfStockChange = () => {
    setOutOfStock(true);
    setInStock(false);
    handleFilterByAvailability("out-of-stock");
  };

  const handlePriceToInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceTo(parseInt(e.target.value));
    if (parseInt(e.target.value) > priceFrom) {
      setPriceRangeError("");
    }
  };

  const handleResetPriceInputs = () => {
    setPriceFrom(0);
    setPriceTo(0);
    setPriceRangeError("");
  };

  return (
    <div className='flex-1'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='text-center w-full py-2 '>
          <button className='flex items-center justify-center '>
            <span>Filter by</span>
            <MdOutlineKeyboardArrowDown fontSize={20} className='mt-[2px]' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='md:hidden block translate-x-[4.6%] w-[91.5vw] rounded-tr-none rounded-tl-none '>
          <DropdownMenuLabel className='font-bold'>
            Availability
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={quantity == "1"}
            onCheckedChange={handleInStockChange}
            onSelect={(e) => e.preventDefault()}>
            In stock
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={quantity == "0"}
            onCheckedChange={handleOutOfStockChange}
            onSelect={(e) => e.preventDefault()}>
            Out of stock
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className='font-bold'>Price</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <div className='flex flex-col'>
              <div className='flex gap-2 text-zinc-600'>
                <div>
                  <label htmlFor='from'>From</label>
                  <input
                    inputMode='numeric'
                    type='number'
                    name='from'
                    onBlur={() => setPriceRangeError("")}
                    value={priceFrom || 0}
                    onChange={(e) => {
                      setPriceFrom(parseInt(e.target.value));
                    }}
                    id='from'
                    className='w-full p-1 border rounded focus:outline-none shadow-sm text-base'
                  />
                </div>
                <div>
                  <label htmlFor='to'>To</label>
                  <input
                    type='number'
                    inputMode='numeric'
                    name='to'
                    onBlur={() => setPriceRangeError("")}
                    value={priceTo || 0}
                    onChange={handlePriceToInput}
                    id='to'
                    className='w-full p-1 border rounded focus:outline-none shadow-sm text-base'
                  />
                </div>
              </div>
              <p className='text-sm text-red-600 mt-1 self-start'>
                {priceRangeError && priceRangeError}
              </p>
              <div className='flex gap-2 w-full'>
                <Button
                  variant='secondary'
                  onClick={handleResetPriceInputs}
                  disabled={!!!priceTo || !!!priceFrom}
                  className='mt-2 flex-1'>
                  Reset
                </Button>
                <Button
                  variant='secondary'
                  onClick={handleFilterByPrice}
                  disabled={!!!priceTo || !!!priceFrom}
                  className='mt-2 flex-1 '>
                  Apply Filter
                </Button>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className='font-bold'>Size</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={size.includes("single")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("single", value)
            }
            onSelect={(e) => e.preventDefault()}>
            Single
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={size.includes("double")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("double", value)
            }
            onSelect={(e) => e.preventDefault()}>
            Double
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={size.includes("triple")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("triple", value)
            }
            onSelect={(e) => e.preventDefault()}>
            Triple
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileFilterBy;
