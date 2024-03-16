import FilterBy from "../components/FilterBy";
import BurgerTags from "../components/BurgerTags";
import ShopByPreference from "../components/ShopByPreference";
import RandomBurgers from "../components/RandomBurgers";
import SortBy from "../components/SortBy";

const Kitchen = () => {
  return (
    <div className='bg-red-200 py-2 flex gap-2'>
      <div className='flex flex-col gap-3 max-w-[250px]'>
        <ShopByPreference />
        <FilterBy />
        <BurgerTags />
        <RandomBurgers />
      </div>
      <div className='flex-1'>
        <div className='bg-white py-1 px-2 rounded'>
          <SortBy />
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
