const BurgerTags = () => {
  return (
    <div className='bg-white rounded-lg p-2'>
      <h3 className='font-semibold'>Burger tags</h3>
      <div className='flex gap-[6px] flex-wrap mt-4'>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Red
        </span>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Green
        </span>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Green
        </span>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Green
        </span>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Green
        </span>
        <span className='bg-zinc-200 text-zinc-600 text-xs p-1 rounded-sm'>
          Green
        </span>
      </div>
    </div>
  );
};

export default BurgerTags;
