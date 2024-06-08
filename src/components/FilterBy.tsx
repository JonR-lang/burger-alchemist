import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import useFilterByPrice from "@/hooks/filterhooks/useFilterByPrice";
import useFilterByAvailabillity from "@/hooks/filterhooks/useFilterByAvailabillity";
import useFilterBySize from "@/hooks/filterhooks/useFilterBySize";

type classProp = {
  className?: string;
};

const FilterBy = ({ className }: classProp) => {
  const [searchParams] = useSearchParams();
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

  const { handleFilterByPrice } = useFilterByPrice(
    priceFrom,
    priceTo,
    setPriceRangeError
  );

  const { handleFilterByAvailability } = useFilterByAvailabillity();

  const { handleFilterbySize } = useFilterBySize();

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
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Filter By</h3>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-amber-900'>Availability</h4>
        <RadioGroup
          onValueChange={(value: "in-stock" | "out-of-stock") =>
            handleFilterByAvailability(value)
          }>
          <div className='flex items-center gap-1 mt-2'>
            <RadioGroupItem value='in-stock' id='in-stock' className='size-3' />
            <label
              htmlFor='in-stock'
              className='text-xs cursor-pointer text-zinc-500 hover:text-neutral-800 lowercase'>
              In Stock
            </label>
          </div>
          <div className='flex items-center gap-1'>
            <RadioGroupItem
              value='out-of-stock'
              id='out-of-stock'
              className='size-3'
            />
            <label
              htmlFor='out-of-stock'
              className='text-xs cursor-pointer text-zinc-500 hover:text-neutral-800 lowercase'>
              Out of Stock
            </label>
          </div>
        </RadioGroup>
      </div>
      <div className='mt-4 flex flex-col'>
        <h4 className='text-sm font-semibold text-amber-900'>Price</h4>
        <div className='flex gap-2 text-zinc-400'>
          <div>
            <label htmlFor='from' className='text-xs'>
              From
            </label>
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
              className='w-full p-1 border rounded  focus:outline-none focus:border-neutral-600  shadow-sm'
            />
          </div>
          <div>
            <label htmlFor='to' className='text-xs'>
              To
            </label>
            <input
              type='number'
              inputMode='numeric'
              name='to'
              onBlur={() => setPriceRangeError("")}
              value={priceTo || 0}
              onChange={handlePriceToInput}
              id='to'
              className='w-full p-1 border rounded focus:outline-none focus:border-neutral-600 shadow-sm'
            />
          </div>
        </div>
        <p className='text-xs text-red-600 text-center mt-1'>
          {priceRangeError && priceRangeError}
        </p>
        <div className='flex items-center gap-2'>
          <Button
            variant='secondary'
            onClick={handleResetPriceInputs}
            disabled={!!!priceTo || !!!priceFrom}
            className='mt-2'>
            Reset
          </Button>
          <Button
            variant='secondary'
            onClick={handleFilterByPrice}
            disabled={!!!priceTo || !!!priceFrom}
            className='mt-2'>
            Apply Filter
          </Button>
        </div>
      </div>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-amber-900'>Size</h4>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox
            id='single'
            checked={size.includes("single")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("single", value)
            }
          />
          <label
            htmlFor='single'
            className='text-xs text-zinc-500 cursor-pointer hover:text-neutral-800'>
            single
          </label>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox
            id='double'
            checked={size.includes("double")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("double", value)
            }
          />
          <label
            htmlFor='double'
            className='text-xs text-zinc-500 cursor-pointer hover:text-neutral-800'>
            double
          </label>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox
            id='triple'
            checked={size.includes("triple")}
            onCheckedChange={(value: boolean) =>
              handleFilterbySize("triple", value)
            }
          />
          <label
            htmlFor='triple'
            className='text-xs text-zinc-500 cursor-pointer hover:text-neutral-800'>
            triple
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
