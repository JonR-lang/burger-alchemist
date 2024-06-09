import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useTimer from "@/hooks/utilityHooks/useTimer";
import io from "socket.io-client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FaCircleCheck } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { clearCart } from "@/features/cart/cartSlice";

type pvmProp = {
  isOrderMade: boolean;
  setIsOrderMade: (value: boolean) => void;
};

const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL;
const PaymentVerificationModal = ({ isOrderMade, setIsOrderMade }: pvmProp) => {
  const [verification, setVerification] = useState<
    "pending" | "success" | "error"
  >("pending");
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const dispatch = useDispatch();
  const { timer, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    startTimer();
    setIsOrderMade(true);
    const savedUser = JSON.parse(localStorage.getItem("user")!);

    const socket = io(websocketUrl);

    socket.on("connect", () => {
      socket.emit("register", savedUser.id);
    });

    socket.on("paymentVerified", (data) => {
      setVerification("success");
      setMessage(data.message);
      setOrderId(data.orderId);
    });

    return () => {
      setVerification("pending");
      setIsOrderMade(false);
      socket.disconnect();
      setMessage("");
      setOrderId("");
    };
  }, []);

  useEffect(() => {
    if (timer > 20) {
      setVerification("error");
      stopTimer();
    }
  }, [timer]);

  const handleCloseModalOnSucess = () => {
    setIsOrderMade(false);
    dispatch(clearCart());
  };

  const handleCloseModalOnError = () => {
    setIsOrderMade(false);
  };

  return (
    <div>
      <AlertDialog open={isOrderMade}>
        <AlertDialogContent className='w-[90%] rounded-lg max-w-md'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-center md:text-xl'>
              {verification === "success"
                ? "Payment Verified"
                : verification === "pending"
                ? "Verfiying Payment"
                : "Error"}
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div>
                {verification === "success" && (
                  <div className='flex w-full flex-col gap-5'>
                    <FaCircleCheck className='text-7xl sm:text-8xl mx-auto text-green-700 drop-shadow-2xl' />
                    <div>
                      <p className='text-base text-center md:text-lg'>
                        {message}
                      </p>
                      <p className='md:text-base text-center'>
                        Order Id:{" "}
                        <span className='text-black font-semibold tracking-wider'>
                          {orderId}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                {verification === "pending" && (
                  <div>
                    <p className='text-base text-center md:text-lg'>
                      Please hold on while we verify your payment. Do not close
                      this page.
                    </p>
                    <div
                      className='flex flex-row gap-2 items-center justify-center my-4 py-2'
                      aria-hidden={true}>
                      <div className='size-5 rounded-full bg-accent-one animate-bounce [animation-delay:.7s]'></div>
                      <div className='size-5 rounded-full bg-accent-one animate-bounce [animation-delay:.3s]'></div>
                      <div className='size-5 rounded-full bg-accent-one animate-bounce [animation-delay:.7s]'></div>
                      <p className='sr-only'>Verifying...</p>
                    </div>
                  </div>
                )}
                {verification === "error" && (
                  <div>
                    <MdErrorOutline className='text-7xl sm:text-8xl mx-auto text-red-600 drop-shadow-2xl' />
                    <p className='text-base text-center md:text-lg'>
                      There was an error trying to verify your payment. Check
                      the orders section of your accout to verify manually.
                    </p>
                  </div>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          {verification === "success" && (
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleCloseModalOnSucess}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          )}
          {verification === "error" && (
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleCloseModalOnError}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PaymentVerificationModal;
