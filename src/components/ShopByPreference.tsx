import { useSearchParams } from "react-router-dom";
import dietaryPreferences from "../data/dietaryPreferences";

type PreferenceProp = {
  className?: string;
};

const ShopByPreference = ({ className }: PreferenceProp) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (preference: string) => {
    searchParams.set("dietaryPreference", preference);
    searchParams.set("page", "1");
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className={className}>
      <h3 className='font-semibold text-amber-900'>Shop By Preference</h3>
      <ul className='flex flex-col gap-2 mt-3 items-start'>
        {dietaryPreferences.map((item, i) => (
          <li key={i} className='text-zinc-400 text-xs cursor-pointer'>
            <button onClick={() => handleClick(item.name)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopByPreference;
