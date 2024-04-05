import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const OrderListItem = () => {
  return (
    <Link
      to={":id"}
      className='p-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg border space-y-1 relative'>
      <div>
        <h3 className='font-medium'>OrderId: #1234</h3>
        <p className='text-xs text-neutral-500 italic'>{Date.now()}</p>
      </div>

      <p className='leading-5'>Mira Burger, Rebound burger and others</p>
      <p className='leading-5 text-sm text-neutral-500'>Amount Paid: 200</p>
      <div className='flex gap-1 items-center'>
        <FiCheckCircle
          fontSize={15}
          aria-hidden={true}
          className='text-green-500 absolute top-3 right-2 sm:static'
        />
        <p className='text-sm font-medium hidden sm:block'>Delivered</p>
      </div>
    </Link>
  );
};

export default OrderListItem;
