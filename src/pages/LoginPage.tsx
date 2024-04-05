import LoginCard from "@/components/LoginCard";
import "react-phone-number-input/style.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className='grid place-content-center w-full min-h-screen place-items-center p-2 burger-pattern overflow-y-auto'>
      <div id='overlay' className='bg-white/80 fixed inset-0'></div>
      <button
        onClick={() => navigate(-1)}
        className='border border-primary-two rounded-full p-2 shadow fixed top-4 left-4 z-20 bg-white'>
        <IoMdArrowBack
          fontSize={30}
          aria-hidden={true}
          className='text-neutral-500'
        />
        <span className='sr-only'>Go Back to previous page.</span>
      </button>
      <LoginCard />
    </div>
  );
};

export default LoginPage;
