import dietaryPreferences from "../data/dietaryPreferences";

const ShopByPreference = () => {
  return (
    <div className='bg-white rounded p-2'>
      <h3 className='font-semibold'>Shop By Preference</h3>
      <ul className='flex flex-col gap-2 mt-3 items-start'>
        {dietaryPreferences.map((item) => (
          <li className='text-zinc-400 text-sm cursor-pointer'>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByPreference;
