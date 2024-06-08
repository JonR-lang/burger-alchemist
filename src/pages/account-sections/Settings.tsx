import AlertDialogLogout from "@/components/AlertDialogLogout";
import ChangePassword from "@/components/ChangePassword";

import { CiWarning } from "react-icons/ci";

type SettingProp = {
  id?: string;
};

const Settings = ({ id }: SettingProp) => {
  return (
    <section id={id}>
      <div className='pb-1 lg:pb-2 border-b flex justify-between items-center'>
        <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold tracking-wide'>
          Settings
        </h1>
      </div>
      <div className='flex flex-col gap-3 my-3'>
        <ChangePassword />
        <AlertDialogLogout variant='logout' />
        <div className='flex gap-1 items-center'>
          <CiWarning fontSize={25} className='text-yellow-500' />
          <h4 className=''>Danger Zone!</h4>
        </div>
        <AlertDialogLogout variant='delete' />
      </div>
    </section>
  );
};

export default Settings;
