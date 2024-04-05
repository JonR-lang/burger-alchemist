import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className='flex flex-col gap-4 my-12'>
      <h2 className='text-2xl lg:text-3xl font-semibold'>Related Products</h2>
      <div className='flex md:grid grid-cols-responsive-grid gap-4 overflow-x-auto pb-4'>
        {Array(5)
          .fill(10)
          .map((item, i) => (
            <ProductCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
