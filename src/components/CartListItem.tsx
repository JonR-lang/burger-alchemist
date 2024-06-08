import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddQuantityInput from "@/components/AddQuantityInput";
import ProductSnippet from "@/components/ProductSnippet";
import { useDispatch } from "react-redux";

import { TableCell, TableRow } from "@/components/ui/table";
import { CartItem, modifyQuantity } from "@/features/cart/cartSlice";

type CartListItemProp = {
  data: CartItem;
};

const CartListItem = ({ data }: CartListItemProp) => {
  const [quantity, setQuantity] = useState(data.quantity || 1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modifyQuantity({ product: data.product, quantity }));
  }, [quantity]);

  const product = { productId: data.product, subtotal: data.subtotal };

  return (
    <TableRow className='h-32 relative'>
      <TableCell>
        <Link to={`/products/${data.product}`}>
          <ProductSnippet
            className=''
            name={data.name}
            image={data.image}
            price={data.price}
            totalRatings={data.totalRatings}
          />
        </Link>
      </TableCell>
      <TableCell className='hidden sm:table-cell'>
        ${data.price.toFixed(2)}
      </TableCell>
      <TableCell className='hidden sm:table-cell'>
        <AddQuantityInput
          product={product}
          value={quantity}
          setValue={setQuantity}
          className='flex w-fit mx-auto'
        />
      </TableCell>
      <TableCell className='text-right'>${data.subtotal.toFixed(2)}</TableCell>
      <TableCell className='sm:hidden'>
        <AddQuantityInput
          product={product}
          value={quantity}
          setValue={setQuantity}
          className='flex flex-col w-fit ml-auto'
        />
      </TableCell>
    </TableRow>
  );
};

export default CartListItem;
