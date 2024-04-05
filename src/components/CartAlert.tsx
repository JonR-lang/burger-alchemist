import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertProp = {
  setShowAlert: (showAlert: boolean) => void;
};

const CartAlert = ({ setShowAlert }: AlertProp) => {
  const handleClick = () => {
    setShowAlert(false);
  };
  return (
    <div
      className='fixed inset-0 grid place-content-center bg-black/30 z-50 px-3'
      aria-modal={true}>
      <Alert className='flex flex-col gap-3 max-w-sm'>
        <AlertTitle className='text-xl'>Heads up!</AlertTitle>
        <AlertDescription>
          Are you sure you want to remove this item from your cart?
        </AlertDescription>
        <div className='flex gap-2 w-full'>
          <button
            onClick={handleClick}
            className='flex-1 p-2 bg-primary-two rounded text-white font-semibold tracking-wider hover:opacity-90'>
            Cancel
          </button>
          <button
            onClick={handleClick}
            className='flex-1 p-2 bg-red-600 rounded text-white font-semibold tracking-wider hover:opacity-90'>
            Delete
          </button>
        </div>
      </Alert>
    </div>
  );
};

export default CartAlert;
