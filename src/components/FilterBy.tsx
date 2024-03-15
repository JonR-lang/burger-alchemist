const FilterBy = () => {
  return (
    <div className='bg-white rounded-lg p-2'>
      <h3 className='font-semibold'>Filter By</h3>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold'>Availability</h4>
        <div className='flex items-center gap-1 mt-1'>
          <input type='checkbox' name='in-stock' id='in-stock' />
          <label htmlFor='in-stock' className='text-sm text-zinc-500 lowercase'>
            In Stock
          </label>
        </div>
        <div className='flex items-center gap-1 mt-1'>
          <input type='checkbox' name='out-of-stock' id='out-of-stock' />
          <label
            htmlFor='out-of-stock'
            className='text-sm text-zinc-500 lowercase'>
            Out of Stock
          </label>
        </div>
      </div>
      <div className='mt-4'>
        <h4 className='text-sm font-semibold'>Price</h4>
        <div className='flex gap-2'>
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
        <h4 className='text-sm font-semibold'>Size</h4>
        <div className='flex items-center gap-1 mt-1'>
          <input type='checkbox' name='small' id='small' />
          <label htmlFor='small' className='text-sm text-zinc-500'>
            small
          </label>
        </div>
        <div className='flex items-center gap-1 mt-1'>
          <input type='checkbox' name='medium' id='medium' />
          <label htmlFor='medium' className='text-sm text-zinc-500'>
            medium
          </label>
        </div>
        <div className='flex items-center gap-1 mt-1'>
          <input type='checkbox' name='large' id='large' />
          <label htmlFor='large' className='text-sm text-zinc-500'>
            large
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
