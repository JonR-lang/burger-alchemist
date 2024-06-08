import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import SearchInputComponent from "./SearchInputComponent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchedProductsData } from "@/hooks/queryhooks/useAllSearchedProductsData";
import useDebounce from "@/hooks/utilityHooks/useDebounce";

const SearchDialog = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const randomNumber = useMemo(() => {
    return Math.random() > 0.5 ? 1 : 0;
  }, []);
  const { data, isLoading, isError, error, refetch } = useSearchedProductsData({
    search: debouncedValue,
    isEnabled: !!debouncedValue,
  });

  useEffect(() => {
    if (!!debouncedValue) refetch();
  }, [debouncedValue]);

  if (isError) console.log(error.message);

  return (
    <Dialog onOpenChange={(open: boolean) => !open && setValue("")}>
      <DialogTrigger asChild>
        <button>
          <IoSearchOutline
            fontSize={25}
            aria-hidden={true}
            className='hover:scale-125 transition duration-300'
          />
          <span className='sr-only'>Search Products.</span>
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px] md:max-w-[600px] top-0 translate-y-[1%] md:translate-y-[-50%] md:top-[50%]'>
        <DialogHeader>
          <DialogTitle>Search Burgers</DialogTitle>
          <DialogDescription>
            {randomNumber === 1
              ? " Search by name to find your favorite burger or discover new ones."
              : "Explore burgers by name, category, including classic, gourmet, vegan, and more."}
          </DialogDescription>
          <SearchInputComponent
            value={value}
            setValue={setValue}
            DialogClose={DialogClose}
          />
        </DialogHeader>
        {isLoading ? (
          <div>
            <p>Searching...</p>
          </div>
        ) : (
          <div className='py-4'>
            {data ? (
              <div>
                {data?.products.length > 0 ? (
                  <ul className='max-h-[30vh] overflow-y-auto'>
                    {data.products.map(
                      (item: { _id: string; name: string }, i: number) => (
                        <li key={i} className=''>
                          <DialogClose asChild>
                            <Link
                              to={`/products/${item._id}`}
                              className='size-full block px-1 py-[6px] hover:bg-neutral-200 rounded-sm'>
                              {item.name}
                            </Link>
                          </DialogClose>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <div>
                    <p className='text-neutral-600'>
                      No products matched your search term.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p className='text-neutral-600'>
                  Start typing to discover burgers!
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
