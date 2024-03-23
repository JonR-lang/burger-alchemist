import { useState } from "react";

const AddQuantityInput = () => {
  const [value, setValue] = useState(1);

  return (
    <div className='flex'>
      <button
        className='size-8'
        onClick={() =>
          setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1))
        }>
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
  );
};

export default AddQuantityInput;
