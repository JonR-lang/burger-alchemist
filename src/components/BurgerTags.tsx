type classProp = {
  className?: string;
};

const BurgerTags = ({ className }: classProp) => {
  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Burger tags</h3>
      <div className='flex gap-[6px] flex-wrap mt-4 text-xs'>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Red</span>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Green</span>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Green</span>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Green</span>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Green</span>
        <span className='bg-zinc-200/50 text-zinc-600 p-1 rounded'>Green</span>
      </div>
    </div>
  );
};

export default BurgerTags;
