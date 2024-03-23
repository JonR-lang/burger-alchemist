import { Checkbox } from "@/components/ui/checkbox";

type classProp = {
  className?: string;
};

const FilterBy = ({ className }: classProp) => {
  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Filter By</h3>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-amber-900'>Availability</h4>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox id='in-stock' />
          <label
            htmlFor='in-stock'
            className='text-xs cursor-pointer text-zinc-500 lowercase'>
            In Stock
          </label>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox id='out-of-stock' />
          <label
            htmlFor='out-of-stock'
            className='text-xs cursor-pointer text-zinc-500 lowercase'>
            Out of Stock
          </label>
        </div>
      </div>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-amber-900'>Price</h4>
        <div className='flex gap-2 text-zinc-400'>
          <div>
            <label htmlFor='from' className='text-xs'>
              From
            </label>
            <input
              type='number'
              name='from'
              id='from'
              className='w-full p-1 border rounded focus:outline-none shadow-sm'
            />
          </div>
          <div>
            <label htmlFor='to' className='text-xs'>
              To
            </label>
            <input
              type='number'
              name='to'
              id='to'
              className='w-full p-1 border rounded focus:outline-none shadow-sm'
            />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-amber-900'>Size</h4>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox id='small' />
          <label
            htmlFor='small'
            className='text-xs text-zinc-500 cursor-pointer'>
            small
          </label>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox id='medium' />
          <label
            htmlFor='medium'
            className='text-xs text-zinc-500 cursor-pointer'>
            medium
          </label>
        </div>
        <div className='flex items-center gap-1 mt-2'>
          <Checkbox id='large' />
          <label
            htmlFor='large'
            className='text-xs text-zinc-500 cursor-pointer'>
            large
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
