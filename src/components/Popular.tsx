import ProductCard from "./ProductCard";

const Popular = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold md:-mb-2'>Popular</h2>
      <small className='text-zinc-300'>
        Check out the list of popular products!
      </small>
      <div
        id='horizontal-scroll-bar'
        className='overflow-x-auto md:overflow-x-visible pb-4 md:p-0 w-full'>
        <section className='flex gap-4 md:grid grid-cols-3 xl:grid-cols-4 '>
          {Array(6)
            .fill("Es")
            .map((item: any, i) => (
              <ProductCard key={i} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default Popular;
