import EditAddress from "@/components/EditAddress";
import { FaLocationDot } from "react-icons/fa6";

type IdProp = {
  id?: string;
};
const Address = ({ id }: IdProp) => {
  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          My Address
        </h1>
        <EditAddress />
      </div>
      <div className='py-3'>
        <div className='px-3 py-5 border bg-neutral-100 rounded-lg flex items-center gap-3'>
          <FaLocationDot
            fontSize={25}
            aria-hidden={true}
            className='text-neutral-500'
          />
          <div>
            <p className='text-neutral-500 italic'>
              11 Nkechi Gbujie Avenue, Abayi, Aba, Abia State
            </p>
            <p className='text-neutral-500 italic'>
              Landmark: St. Bridget's College{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
