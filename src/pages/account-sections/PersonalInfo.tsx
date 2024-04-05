import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditAccount from "@/components/EditAccount";

type IdProp = {
  id?: string;
};
const PersonalInfo = ({ id }: IdProp) => {
  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          My Account
        </h1>
        <EditAccount />
      </div>
      <div className='py-3 flex flex-col-reverse md:flex-row'>
        <ul className='flex-1 flex flex-col gap-3 justify-center pr-2'>
          <li className='text-lg md:text-xl'>
            <span className='inline-block  text-neutral-500 text-base'>
              Name:
            </span>{" "}
            Johnny Iroele
          </li>
          <li className='text-lg md:text-xl'>
            <span className='inline-block -mt-1 text-neutral-500 text-base'>
              Mobile:
            </span>{" "}
            08063197455
          </li>
          <li className='text-lg md:text-xl'>
            <span className='inline-block -mt-1 text-neutral-500 text-base'>
              Email:
            </span>{" "}
            iroelejohnny@gmail.com
          </li>
        </ul>
        <div className='md:border-l flex-1 p-10'>
          <Avatar className='size-[100px] lg:size-[200px] xl:size-[250px] mx-auto'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
