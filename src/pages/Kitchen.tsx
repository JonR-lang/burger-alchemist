import { useSearchParams } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useAllProductsData } from "@/hooks/useAllProductsData";

import { ProductCardType } from "@/types/ProductCard.types";

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
import SkeletonProductCard from "@/components/SkeletonProductCard";

const totalProductsPerPage = 10;

const Kitchen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const preference = searchParams.get("dietaryPreference") || "";
  const quantityFilter = searchParams.get("quantity") || "";
  const sort = searchParams.get("sort") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const size = searchParams.getAll("size") || [];

  const [grid, setGrid] = useLocalStorage("gridNumber", 2);

  const { data, isLoading, isError, error } = useAllProductsData({
    page,
    preference,
    quantityFilter,
    sort,
    minPrice,
    maxPrice,
    size,
  });

  const handleNextPage = () => {
    const pagesCount = Math.ceil(data.totalCount / totalProductsPerPage);
    if (page != pagesCount) {
      searchParams.set("page", `${page + 1}`);
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handleGoToPage = (pageNumber: number) => {
    searchParams.set("page", `${pageNumber}`);
    setSearchParams(searchParams, { replace: true });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      searchParams.set("page", `${page - 1}`);
      setSearchParams(searchParams, { replace: true });
    }
  };

  if (isError) return <div>{error.message}</div>;

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
          {isLoading ? (
            <div
              className={`grid ${
                grid === 4 && "grid-cols-4"
              } grid-cols-${grid} gap-3 sm:gap-4 py-4`}>
              {[...Array(10)].map((_, i) => (
                <SkeletonProductCard grid={grid} key={i} />
              ))}
            </div>
          ) : (
            <div
              className={`grid ${
                grid === 4 && "grid-cols-4"
              } grid-cols-${grid} gap-3 sm:gap-4 py-4 relative `}>
              {data.products.map((item: ProductCardType, i: number) => (
                <ProductCard
                  data={item}
                  page={page}
                  grid={grid}
                  setGrid={setGrid}
                  key={i}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Pagination
        page={page}
        totalProducts={data && data.totalCount}
        totalProductsPerPage={totalProductsPerPage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onGoToPage={handleGoToPage}
      />
    </div>
  );
};

export default Kitchen;
