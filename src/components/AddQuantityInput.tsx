import { useState } from "react";
import { useLocation } from "react-router-dom";

import CartAlert from "./CartAlert";
import AlertDialogTwo from "@/components/AlertDialogTwo";

type ClassProp = {
  className?: string;
};

const AddQuantityInput = ({ className }: ClassProp) => {
  const [value, setValue] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { pathname } = useLocation();

  const pathnames = ["/cart"];

  return (
    <>
      <div className={className}>
        <button
          className='size-8'
          onClick={() => {
            setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
            value <= 1 && pathnames.includes(pathname) && setShowAlert(true);
          }}>
          -
        </button>
        <input
          type='text'
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
        <AlertDialogTwo
          variant='remove'
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
    </>
  );
};

export default AddQuantityInput;
