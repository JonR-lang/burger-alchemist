import useLocalStorage from "@/hooks/useLocalStorage";

// components
import FilterBy from "../components/FilterBy";
import BurgerTags from "../components/BurgerTags";
import ShopByPreference from "../components/ShopByPreference";
import RandomBurgers from "../components/RandomBurgers";
import SortBy from "../components/SortBy";
import DisplayStyle from "../components/DisplayStyle";
import ProductCard from "../components/ProductCard";
import MobileFilterBy from "@/components/MobileFilterBy";
import MobileShopBy from "@/components/MobileShopBy";
import Pagination from "@/components/Pagination";

const Kitchen = () => {
  const [grid, setGrid] = useLocalStorage("gridNumber", 2);

  return (
    <div className='pb-4'>
      <div className='py-2 flex gap-2 sm:gap-4 text-sm'>
        <div className='hidden md:block'>
          <div className='sticky top-[-200px] flex flex-col gap-3 max-w-[250px]'>
            <ShopByPreference className='bg-white rounded-lg p-3 shadow-sm border' />
            <FilterBy className='bg-white rounded-lg p-3 shadow-sm border' />
            <BurgerTags className='bg-white rounded-lg p-3 shadow-sm border' />
            <RandomBurgers className='bg-white rounded-lg p-3 shadow-sm border' />
          </div>
        </div>

        <div className='flex-1'>
          <div className='flex md:hidden mb-2'>
            <div className='shadow-sm border md:z-30 flex w-full'>
              <MobileFilterBy />
              <MobileShopBy />
            </div>
          </div>
          <div className='bg-white py-1 px-2 rounded flex items-center justify-between shadow-sm border relative md:z-30'>
            <SortBy />
            <div className='flex items-center gap-2'>
              <span id='total-products' className='hidden sm:inline-block'>
                {21} products
              </span>
              <DisplayStyle grid={grid} setGrid={setGrid} />
            </div>
          </div>
          <div
            className={`grid ${
              grid === 4 && "grid-cols-4"
            } grid-cols-${grid} gap-3 sm:gap-4 py-4`}>
            {Array(10)
              .fill("ed")
              .map((item, i) => (
                <ProductCard grid={grid} setGrid={setGrid} key={i} />
              ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Kitchen;
