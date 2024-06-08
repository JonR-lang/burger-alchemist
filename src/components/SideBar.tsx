import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { User } from "@/types/User.types";
import { getFirstLettersOfNames } from "@/utils/getFirstLettersofNames";

const isActiveStyle = "p-3 bg-purple-500 rounded-lg";
const isNotActiveStyle = "p-3 rounded-lg";

type SideBarProp = {
  user: User;
};

const SideBar = ({ user }: SideBarProp) => {
  const [isActive] = useState(false);
  const { hash } = useLocation();

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element)
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const elementId = hash.replace("#", "");
    setTimeout(() => {
      scrollIntoView(elementId);
    }, 0);
  }, [hash]);

  return (
    <div className='w-full px-2 py-4'>
      <div className=''>
        <Avatar className='size-[70px] mx-auto'>
          <AvatarImage src={user.picturePath} alt={user.firstName} />
          <AvatarFallback>
            {getFirstLettersOfNames(user.firstName, user.lastName)}
          </AvatarFallback>
        </Avatar>
        <h2 className='text-center text-xl font-semibold my-2 tracking-wider'>
          {`${user.firstName} ${user.lastName}`}
        </h2>
      </div>
      <div className='flex flex-col gap-1 text-center'>
        <Link
          to=''
          onClick={() => scrollIntoView("user")}
          className={`${isActive ? isActiveStyle : isNotActiveStyle}`}>
          Personal Info
        </Link>
        <Link
          to='/account/#address'
          onClick={() => scrollIntoView("address")}
          className={`${isActive ? isActiveStyle : isNotActiveStyle}`}>
          Address
        </Link>
        <Link
          to={"/orders"}
          className={`${isActive ? isActiveStyle : isNotActiveStyle}`}>
          My Orders
        </Link>
        <Link
          to='/account/#settings'
          onClick={() => scrollIntoView("settings")}
          className={`${isActive ? isActiveStyle : isNotActiveStyle}`}>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
