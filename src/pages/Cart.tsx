import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useLocalStorage from "@/hooks/utilityHooks/useLocalStorage";
import { CartItem } from "@/features/cart/cartSlice";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CartListItem from "@/components/CartListItem";
import PaymentVerificationModal from "@/components/PaymentVerificationModal";
import AlertDialogCartOptions from "@/components/AlertDialogCartOptions";
import { RootState } from "@/store/store";

const Cart = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isOrderMade, setIsOrderMade] = useLocalStorage("order", false);
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const freight = 0;

  return (
    <>
      {cart.items.length > 0 ? (
        <div className='w-full'>
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
              {cart.items.map((item: CartItem, i: number) => (
                <CartListItem key={i} data={item} />
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={() => setShowAlert(true)}
            variant='outline'
            className='shadow mt-4 block md:mx-auto'>
            Clear Cart
          </Button>
          <div className='mt-10 w-full flex flex-col'>
            <ul className='space-y-1'>
              <li className='flex justify-between items-center'>
                <p className='text-sm text-neutral-500'>Subtotal</p>
                <p className='font-semibold'>
                  ${cart.cartTotalAmount.toFixed(2)}
                </p>
              </li>
              <li className='flex justify-between items-center'>
                <p className='text-sm text-neutral-500'>Freight</p>
                <p className='font-semibold'>${freight}</p>
              </li>
              <li className='border-t flex justify-between items-center py-1'>
                <p className='text-sm text-neutral-500'>Total</p>
                <p className='font-semibold'>
                  ${(cart.cartTotalAmount + freight).toFixed(2)}
                </p>
              </li>
            </ul>
            <Link
              to={"/checkout"}
              className='my-4 mx-auto sm:mx-0 sm:ml-auto bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium'>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className='w-full h-[70vh] grid'>
          <div className='flex flex-col gap-2 my-auto mx-auto'>
            <p className='text-neutral-500 text-center text-lg md:text-xl lg:text-2xl'>
              There are no burgers in your cart.
            </p>
            <Button
              onClick={() => navigate("/products")}
              className='shadow mt-4 block md:mx-auto'>
              Browse Burgers
            </Button>
          </div>
        </div>
      )}
      {isOrderMade && (
        <PaymentVerificationModal
          isOrderMade={isOrderMade}
          setIsOrderMade={setIsOrderMade}
        />
      )}
      {showAlert && (
        <AlertDialogCartOptions
          variant='clear'
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
    </>
  );
};

export default Cart;
