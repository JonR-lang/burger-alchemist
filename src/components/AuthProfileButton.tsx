import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserData } from "@/hooks/queryhooks/useUserData";
import { getFirstLettersOfNames } from "@/utils/getFirstLettersofNames";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RootState } from "@/store/store";

const AuthProfileButton = () => {
  const savedUser = useSelector((state: RootState) => state.auth.user);
  const {
    data: user,
    isLoading,
    error,
  } = useUserData(savedUser ? savedUser.id : null);


  return (
    <div>
      {savedUser && user ? (
        <Link to='/account'>
          <Avatar className='hidden md:block'>
            <AvatarImage src={user.picturePath} alt={user.firstName} />
            <AvatarFallback className='hover:bg-neutral-700 hover:text-neutral-200 transition duration-500'>
              {getFirstLettersOfNames(user.firstName, user.lastName)}
            </AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link
          to='/login'
          className='bg-accent-one text-white px-4 py-[6px] rounded-md button-shadow hidden md:block'>
          Log in
        </Link>
      )}
    </div>
  );
};

export default AuthProfileButton;
