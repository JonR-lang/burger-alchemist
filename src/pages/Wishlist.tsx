import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  return (
    <div className='flex flex-col gap-3 mb-4'>
      <h1 className='text-amber-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold'>
        Wishlist
      </h1>
      <div className='grid grid-cols-responsive-grid-mobile sm:grid-cols-responsive-grid gap-2 sm:gap-4'>
        {Array(9)
          .fill("red")
          .map((item, i) => (
            <ProductCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
