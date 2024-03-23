import ProductSnippet from "./ProductSnippet";

type classProp = {
  className?: string;
};

const RandomBurgers = ({ className }: classProp) => {
  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Random Burgers</h3>
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
