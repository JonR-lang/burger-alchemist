import { Link } from "react-router-dom";

import AddQuantityInput from "@/components/AddQuantityInput";
import ProductSnippet from "@/components/ProductSnippet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ingredients = [
  { name: "Double Beef Patty", type: "Protein" },
  { name: "Artisanal Bun", type: "Bread" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Tomato", type: "Vegetable" },
  { name: "Special House Sauce", type: "Condiment" },
];

const Cart = () => {
  return (
    <div>
      <Table className='w-full text-sm border-b'>
        <TableHeader>
          <TableRow className=''>
            <TableHead>Product</TableHead>
            <TableHead className='hidden sm:table-cell'>Price</TableHead>
            <TableHead className='text-center hidden sm:table-cell'>
              Quantity
            </TableHead>
            <TableHead className='text-right'>Total</TableHead>
            <TableHead className='text-right sm:hidden'>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.map((item, i) => (
            <TableRow key={i} className='h-32 relative'>
              <TableCell>
                <ProductSnippet className='' />
              </TableCell>
              <TableCell className='hidden sm:table-cell'>{"$300"}</TableCell>
              <TableCell className='hidden sm:table-cell'>
                <AddQuantityInput className='flex w-fit mx-auto' />
              </TableCell>
              <TableCell className='text-right'>{"$500"}</TableCell>
              <TableCell className='sm:hidden'>
                <AddQuantityInput className='flex flex-col w-fit ml-auto' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='mt-10 w-full flex flex-col'>
        <ul className='space-y-1'>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Subtotal</p>
            <p className='font-semibold'>{"$3000"}</p>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Freight</p>
            <p className='font-semibold'>{"$300"}</p>
          </li>
          <li className='border-t flex justify-between items-center py-1'>
            <p className='text-sm text-neutral-500'>Total</p>
            <p className='font-semibold'>{"$3000"}</p>
          </li>
        </ul>
        <Link
          to={"/checkout"}
          className='my-4 mx-auto sm:mx-0 sm:ml-auto bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium'>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
