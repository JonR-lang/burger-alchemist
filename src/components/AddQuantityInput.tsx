import { useState } from "react";
import { useLocation } from "react-router-dom";

import AlertDialogCartOptions from "@/components/AlertDialogCartOptions";

type Prop = {
  className?: string;
  value: number;
  setValue: (value: number | ((prevValue: number) => number)) => void;
  product?: {
    productId: string;
    subtotal: number;
  };
};

const AddQuantityInput = ({ className, value, setValue, product }: Prop) => {
  const [showAlert, setShowAlert] = useState(false);
  const { pathname } = useLocation();

  const pathnames = ["/cart"];

  return (
    <>
      <div className={className}>
        <button
          className='size-8'
          onClick={() => {
            setValue((prevValue: number) =>
              prevValue > 1 ? prevValue - 1 : 1
            );
            value <= 1 && pathnames.includes(pathname) && setShowAlert(true);
          }}>
          -
        </button>
        <input
          type='number'
          className='border size-8 focus:outline-none text-center'
          value={value}
          onChange={(e) =>
            setValue(e.target.value ? parseInt(e.target.value) : 0)
          }
        />
        <button
          className='size-8'
          onClick={() => setValue((prevValue) => prevValue + 1)}>
          +
        </button>
      </div>
      {showAlert && (
        <AlertDialogCartOptions
          product={product}
          variant='remove'
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
    </>
  );
};

export default AddQuantityInput;
