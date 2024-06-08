import { useErrorBoundary } from "react-error-boundary";
import DreamerSVG from "../assets/undraw_dreamer.svg";
import { Button } from "./ui/button";

const ErrorComponent = ({ error }: { error: Error }) => {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className='min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-4 gap-2'>
      <img src={DreamerSVG} alt='error' className='w-full max-w-sm' />
      {error.message.startsWith("Cannot read") ? (
        <p className='text-center text-base my-1'>Something went wrong!</p>
      ) : (
        <p className='text-center text-base my-1'>{error.message}</p>
      )}
      <Button onClick={resetBoundary}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
