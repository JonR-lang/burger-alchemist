import OrderListItem from "@/components/OrderListItem";

const Orders = () => {
  return (
    <div>
      <h1 className='my-3 font-semibold text-3xl lg:text-4xl xl:text-5xl'>
        Orders
      </h1>
      <div>
        <div className='flex flex-col gap-3'>
          {Array(3)
            .fill("sem")
            .map((item) => (
              <OrderListItem />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
