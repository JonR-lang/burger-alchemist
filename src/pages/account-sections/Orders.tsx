import { Link } from "react-router-dom";

type IdProp = {
  id?: string;
};

const Orders = ({ id }: IdProp) => {
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
          {Array(3)
            .fill("e")
            .map((item, i) => (
              <li
                key={i}
                className='rounded-lg p-3 border flex flex-col gap-2 relative'>
                <p className='font-semibold'>Order Id: 302984284028423</p>
                <p className='text-sm'>
                  On the 13th of March, you ordered mammy water burger, reeze
                  burger and others worth 23$.
                </p>
                <p className='text-neutral-500 text-xs italic'>
                  13th March, 2024
                </p>
                <span
                  aria-label='Delivered'
                  className='size-2 absolute inline-block bg-green-500 bottom-4 rounded-full right-3'></span>
              </li>
            ))}
        </ul>
      </div>
      <Link to={"/orders"} className='inline-block underline my-2'>
        View More
      </Link>
    </section>
  );
};

export default Orders;
