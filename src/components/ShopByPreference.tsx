import dietaryPreferences from "../data/dietaryPreferences";

type classProp = {
  className?: string;
};

const ShopByPreference = ({ className }: classProp) => {
  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Shop By Preference</h3>
      <ul className='flex flex-col gap-2 mt-3 items-start'>
        {dietaryPreferences.map((item, i) => (
          <li key={i} className='text-zinc-400 text-xs cursor-pointer'>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByPreference;
