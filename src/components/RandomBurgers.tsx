import ProductSnippet from "./ProductSnippet";

const RandomBurgers = () => {
  return (
    <div className='bg-white rounded-lg p-2'>
      <h3 className='font-semibold'>Random Burgers</h3>
      <div className='flex flex-col gap-2 mt-4'>
        {Array(2)
          .fill("ed")
          .map((item, i) => (
            <ProductSnippet key={i} />
          ))}
      </div>
    </div>
  );
};

export default RandomBurgers;
