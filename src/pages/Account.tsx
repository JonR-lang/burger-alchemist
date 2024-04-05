import PersonalInfo from "./account-sections/PersonalInfo";
import SideBar from "@/components/SideBar";
import Address from "./account-sections/Address";
import Orders from "./account-sections/Orders";
import Settings from "./account-sections/Settings";

const Account = () => {
  return (
    <div className='flex'>
      <div className='hidden md:block bg-gradient-to-r from-transparent to-neutral-100/50   flex-initial min-w-[240px] h-[100vh] overflow-y-auto sticky top-[80px]'>
        <SideBar />
      </div>
      <div className='md:p-10 flex-1'>
        <PersonalInfo id='user' />
        <Address id='address' />
        <Orders id='orders' />
        <Settings id='settings' />
      </div>
    </div>
  );
};

export default Account;
