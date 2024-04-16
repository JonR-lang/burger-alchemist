import { axiosInstance } from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

//This might be the most confusing part of the whole code. Note that the useAllProductsData function is defined here. It takes in several parameters which it in turn passes into the fetch function which is called into it. This means that all arguments passed into the useAllproducts data are ultimately passed into the fetch function. Axios luckily for me, makes fetching data so easy. You can easily pass in the parameters that you want, even based on certain conditions. Look at the code in the fetch function to understand better. The params is an object which take in key value pairs. The key is always a string, the value can be an object(like price), a string, a number or an array(like size). Note that depending on how your backend receives query params, that is how you will pass in the params here. Use postman to test how  your backend receives the parameters, then configure the same thing here. ALSO you should note that all the keys in the params object are actual field keys in my data base, except the golden four which are special keys defined in my express server(page, sort, limit and fields).

type Prop = {
  page: number;
  preference: string;
  quantityFilter: string;
  sort: string;
  minPrice: string;
  maxPrice: string;
  size: string[];
};

const fetchAllProducts = ({
  page,
  preference,
  quantityFilter,
  sort,
  minPrice,
  maxPrice,
  size,
}: Prop) => {
  //Quantity which filters based on the availability
  let quantityParam;
  if (quantityFilter && quantityFilter !== "1") {
    quantityParam = { lte: quantityFilter };
  } else if (quantityFilter && quantityFilter === "1") {
    quantityParam = { gte: quantityFilter };
  }

  //Filter by Price
  let price: any = {};
  if (minPrice && maxPrice) {
    price = { gte: parseInt(minPrice), lte: parseInt(maxPrice) };
  } else if (!minPrice && !maxPrice) {
    price = undefined;
  }

  //If you ever come back to this confused, just try to interact with the filter and sorting in the website and see what is logged to the console in you node js server, to see the shape/structure of the query.

  // Below is what the size array looks like it looks like
  ("GET /api/products?page=1&size[]=double&size[]=triple HTTP/1.1");

  const params = {
    page,
    sort: sort || undefined,
    dietaryPreferences: preference || undefined,
    quantity: quantityParam || undefined,
    price: price || undefined,
    size: size.length > 0 ? size : undefined,
  };

  const AllProducts = axiosInstance
    .get(`products`, { params })
    .then((response) => response.data);
  return AllProducts;
};

export const useAllProductsData = ({
  page,
  preference,
  quantityFilter,
  sort,
  minPrice,
  maxPrice,
  size,
}: Prop) => {
  let queryKeyParams = { page } as Record<
    string,
    string | number | Record<string, string | number> | string[]
  >;

  if (preference) queryKeyParams.preference = preference;
  if (minPrice && maxPrice) queryKeyParams.price = { minPrice, maxPrice };
  if (quantityFilter) queryKeyParams.quantityFilter = quantityFilter;
  if (sort) queryKeyParams.sort = sort;
  if (size.length > 0) queryKeyParams.size = size;

  const queryKey = ["Products", queryKeyParams];

  return useQuery({
    queryKey: queryKey,
    queryFn: () =>
      fetchAllProducts({
        page,
        preference,
        quantityFilter,
        sort,
        minPrice,
        maxPrice,
        size,
      }),
  });
};
