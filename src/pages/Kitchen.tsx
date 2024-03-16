import FilterBy from "../components/FilterBy";
import BurgerTags from "../components/BurgerTags";
import ShopByPreference from "../components/ShopByPreference";
import RandomBurgers from "../components/RandomBurgers";
import SortBy from "../components/SortBy";
import DisplayStyle from "@/components/DisplayStyle";

const Kitchen = () => {
  return (
    <div className='bg-red-200 py-2 flex gap-2'>
      <div className='hidden md:flex flex-col gap-3 max-w-[250px]'>
        <ShopByPreference />
        <FilterBy />
        <BurgerTags />
        <RandomBurgers />
      </div>
      <div className='flex-1'>
        <div className='bg-white py-1 px-2 rounded flex items-center justify-between'>
          <SortBy />
          <div className='flex items-center gap-1'>
            <span id='total-products'>{21} products</span>
            <DisplayStyle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
