import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditAccount from "@/components/EditAccount";
import { User } from "@/types/User.types";
import { getFirstLettersOfNames } from "@/utils/getFirstLettersofNames";

type InfoProp = {
  id?: string;
  user: User;
};

const PersonalInfo = ({ id, user }: InfoProp) => {
  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          My Account
        </h1>
        <EditAccount user={user} />
      </div>
      <div className='py-3 flex flex-col-reverse md:flex-row'>
        <ul className='flex-1 flex flex-col gap-3 justify-center pr-2'>
          <li className='text-lg md:text-xl'>
            <span className='inline-block  text-neutral-500 text-base'>
              Name:
            </span>
            {`${user.firstName} ${user.lastName}`}
          </li>
          <li className='text-lg md:text-xl'>
            <span className='inline-block -mt-1 text-neutral-500 text-base'>
              Mobile:
            </span>
            {user.mobile}
          </li>
          <li className='text-lg md:text-xl'>
            <span className='inline-block -mt-1 text-neutral-500 text-base'>
              Email:
            </span>
            {user.email}
          </li>
        </ul>
        <div className='md:border-l flex-1 p-10'>
          <Avatar className='size-[100px] lg:size-[200px] xl:size-[250px] mx-auto'>
            <AvatarImage src={user.picturePath} alt={user.firstName} />
            <AvatarFallback className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
              {getFirstLettersOfNames(user.firstName, user.lastName)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
