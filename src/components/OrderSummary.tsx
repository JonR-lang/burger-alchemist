import { useSelector } from "react-redux";
import { TbCircleCheckFilled } from "react-icons/tb";
import { RootState } from "@/store/store";
import { CouponType } from "@/types/Coupon.types";

type ClassProp = {
  className?: string;
  coupon: CouponType;
};

const OrderSummary = ({ className, coupon }: ClassProp) => {
  const freight = 0;
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className={className}>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-xl md:text-right'>Order Summary</h2>
        {coupon && (
          <div className='flex items-center gap-1 text-lef'>
            <TbCircleCheckFilled fontSize={20} className='text-green-500' />
            <p className='text-sm font-semibold text-neutral-950'>
              Coupon Applied!
            </p>
          </div>
        )}
      </div>

      <div className='px-2 border rounded py-2'>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Subtotal</p>
            <p className='font-semibold'>${cart.cartTotalAmount.toFixed(2)}</p>
          </li>
          {coupon && (
            <li className='flex justify-between items-center'>
              <p className='text-sm text-neutral-500'>Discount</p>
              <p className='font-semibold'>{coupon.coupon.discount}%</p>
            </li>
          )}

          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Freight</p>
            <p className='font-semibold'>${freight}</p>
          </li>
          <li className='border-t flex justify-between items-center py-2'>
            <p className='text-sm text-neutral-500'>Total</p>

            <p className='font-semibold'>
              $
              {coupon
                ? (
                    cart.cartTotalAmount -
                    (coupon.coupon.discount / 100) * cart.cartTotalAmount +
                    freight
                  ).toFixed(2)
                : (cart.cartTotalAmount + freight).toFixed(2)}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
