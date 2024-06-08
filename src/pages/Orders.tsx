import { useEffect } from "react";
import OrderListItem from "@/components/OrderListItem";
import OrderListItemSkeleton from "@/components/skeletonui/OrderListItemSkeleton";
import { useAllUserOrders } from "@/hooks/queryhooks/useAllUserOrdersData";
import { Order } from "@/types/Order.types";
import { useErrorBoundary } from "react-error-boundary";
const Orders = () => {
  const { data, isLoading, isError, error } = useAllUserOrders();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  return (
    <div>
      <h1 className='my-3 font-semibold text-3xl lg:text-4xl xl:text-5xl'>
        Orders
      </h1>

      <div className='flex flex-col gap-3'>
        {isLoading &&
          [...Array(10)].map((_, i: number) => (
            <OrderListItemSkeleton key={i} />
          ))}
        {data &&
          data.map((item: Order) => (
            <OrderListItem key={item._id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default Orders;
