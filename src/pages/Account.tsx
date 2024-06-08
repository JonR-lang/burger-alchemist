import { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "./account-sections/PersonalInfo";
import SideBar from "@/components/SideBar";
import Address from "./account-sections/Address";
import Orders from "./account-sections/Orders";
import Settings from "./account-sections/Settings";
import { useUserData } from "@/hooks/queryhooks/useUserData";
import { RootState } from "@/store/store";
import AccountPageSkeleton from "@/components/skeletonui/AccountPageSkeleton";
import { useErrorBoundary } from "react-error-boundary";

const Account = () => {
  const savedUser = useSelector((state: RootState) => state.auth.user)!;
  const { data: user, isLoading, isError, error } = useUserData(savedUser.id);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading) return <AccountPageSkeleton />;

  return (
    <div className='flex'>
      <div className='hidden md:block bg-gradient-to-r from-transparent to-neutral-100/50 flex-initial min-w-[240px] h-[100vh] overflow-y-auto sticky top-[80px]'>
        <SideBar user={user} />
      </div>
      <div className='md:p-10 flex-1'>
        <PersonalInfo id='user' user={user} />
        <Address id='address' address={user.address} />
        <Orders id='orders' />
        <Settings id='settings' />
      </div>
    </div>
  );
};

export default Account;
