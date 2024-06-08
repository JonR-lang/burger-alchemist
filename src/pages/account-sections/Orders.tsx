import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Order } from "@/types/Order.types";
import { useAllUserOrders } from "@/hooks/queryhooks/useAllUserOrdersData";
import { format } from "date-fns";
import OrderListItemSkeleton from "@/components/skeletonui/OrderListItemSkeleton";
import { useErrorBoundary } from "react-error-boundary";

type OrderProp = {
  id?: string;
};

const Orders = ({ id }: OrderProp) => {
  const { data, isLoading, isError, error } = useAllUserOrders();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          My Orders
        </h1>
      </div>
      <div className='mt-2'>
        <div className='flex justify-between items-center my-3'>
          <h3 className='font-semibold'>Recent orders</h3>
          <div className='text-xs flex gap-2'>
            <div className='flex justify-between items-center gap-1'>
              <span className='inline-block size-2 bg-orange-300 rounded-full'></span>
              <p>pending</p>
            </div>
            <div className='flex justify-between items-center gap-1'>
              <span className='inline-block size-2 bg-green-500 rounded-full'></span>
              <p>delivered</p>
            </div>
          </div>
        </div>
        <ul className='flex flex-col gap-3'>
          {isLoading &&
            [...Array(4)].map((_, i: number) => (
              <OrderListItemSkeleton key={i} />
            ))}
          {data &&
            data.slice(0, 4).map((item: Order, i: number) => (
              <li
                key={i}
                className='rounded-lg p-3 border flex flex-col gap-2 relative shadow-custom-a'>
                <Link to={`/orders/${item._id}`} className='size-full'>
                  <p className='font-semibold'>Order Id: {item._id}</p>
                  <p className='text-sm'>
                    {"On "}
                    <span className='font-semibold'>
                      {format(item.createdAt, "PPPP")},
                    </span>
                    <span> you ordered </span>
                    {item.items.length === 1 &&
                      item.items.map((item) => item.product.name) +
                        ` worth $${item.totalAmount}.`}
                    {item.items.length === 2 &&
                      item.items.map(
                        (item) => " " + item.product.name + " and"
                      ) + ` worth $${item.totalAmount}.`}
                    {item.items.length > 2 &&
                      item.items
                        .slice(0, 2)
                        .map((item) => " " + item.product.name) +
                        ` and others worth $${item.totalAmount}.`}
                  </p>
                  <p className='text-neutral-500 text-xs italic'>
                    {format(item.createdAt, "PPP")}
                  </p>
                  <span
                    aria-label='status'
                    className={`size-2 absolute inline-block ${
                      item.status == "pending" && "bg-orange-400"
                    } ${item.status == "delivered" && "bg-green-500"} ${
                      item.status == "cancelled" && "bg-red-500"
                    } bottom-4 rounded-full right-3`}></span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <Link
        to={"/orders"}
        className='inline-block md:underline my-2 bg-neutral-800 md:bg-transparent text-white md:text-black rounded md:rounded-none w-full md:w-auto text-center p-2 md:p-0'>
        View More
      </Link>
    </section>
  );
};

export default Orders;
