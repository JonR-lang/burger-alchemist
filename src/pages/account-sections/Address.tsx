import EditAddress from "@/components/EditAddress";
import { FaLocationDot } from "react-icons/fa6";
import { UserAddress } from "@/types/User.types";

type AddressProp = {
  id?: string;
  address: UserAddress;
};
const Address = ({ id, address }: AddressProp) => {
  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          My Address
        </h1>
        <EditAddress address={address} />
      </div>
      <div className='py-3'>
        <div className='px-3 py-5 border bg-neutral-100 rounded-lg flex items-center gap-3'>
          <FaLocationDot
            fontSize={25}
            aria-hidden={true}
            className='text-neutral-500'
          />
          {address.state && address.city && address.street ? (
            <div>
              <p className='text-neutral-500 italic'>
                {`${address.street && address.street}, ${
                  address.city && address.city
                }, ${address.state && address.state} state.`}
              </p>
              <p className='text-neutral-500 italic'>
                Landmark:{" "}
                {address.landmark ? address.landmark : "None provided"}
              </p>
            </div>
          ) : (
            <div>
              <p className='text-neutral-500'>
                No Address has been provided by you.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Address;
