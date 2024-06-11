import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlinePending } from "react-icons/md";
import { format } from "date-fns";
import { Order } from "@/types/Order.types";

type OrderListItemProp = {
  data: Order;
};

const OrderListItem = ({ data }: OrderListItemProp) => {
  return (
    <Link
      to={data._id}
      className='p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg border space-y-1 relative'>
      <div>
        <h3 className='font-medium'>OrderId: #{data._id}</h3>
        <p className='text-xs text-neutral-500 italic'>
          {format(data.createdAt, "PPPP")},
        </p>
      </div>

      <p className='leading-5'>
        {"On "}
        <span className='font-semibold'>{format(data.createdAt, "PPPP")},</span>
        <span> you ordered </span>
        {data.items.length === 1 &&
          data.items.map((item) => item.product.name) +
            ` worth $${data.totalAmount.toFixed(2)}.`}
        {data.items.length === 2 &&
          data.items.map((item) => " " + item.product.name + " and") +
            ` worth $${data.totalAmount.toFixed(2)}.`}
        {data.items.length > 2 &&
          data.items.slice(0, 2).map((item) => " " + item.product.name) +
            ` and others worth $${data.totalAmount.toFixed(2)}.`}
      </p>
      <p className='leading-5 text-sm text-neutral-500'>
        Amount Paid: ${data.totalAmount.toFixed(2)}
      </p>
      <div className='flex gap-1 items-center'>
        {data.status === "delivered" && (
          <FiCheckCircle
            fontSize={15}
            aria-hidden={true}
            className='text-green-500 absolute top-3 right-2 sm:static'
          />
        )}
        {data.status === "pending" && (
          <MdOutlinePending
            fontSize={17}
            aria-hidden={true}
            className='text-orange-400 absolute bottom-5 right-2 sm:static'
          />
        )}
        {data.status === "cancelled" && (
          <RxCrossCircled
            fontSize={17}
            aria-hidden={true}
            className='text-red-500 absolute top-3 right-2 sm:static'
          />
        )}

        <p className='text-sm font-medium hidden sm:block'>{data.status}</p>
      </div>
    </Link>
  );
};

export default OrderListItem;
