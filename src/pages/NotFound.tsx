import { useNavigate } from "react-router-dom";
import NotFoundSVG from "../assets/page-not-found.svg";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-4 gap-2'>
      <img src={NotFoundSVG} alt='error' className='w-full max-w-sm' />
      <p>The page you seek does not exist!</p>
      <Button onClick={() => navigate("/")} className='my-2 bg-accent-one'>
        Go back Home
      </Button>
    </div>
  );
};

export default NotFound;
