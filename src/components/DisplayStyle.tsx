import { FaList } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

export type GridProp = {
  grid: number;
  setGrid: (number: number) => void;
};

const DisplayStyle = ({ grid, setGrid }: GridProp) => {
  return (
    <div aria-hidden={true} className='flex items-center gap-2'>
      <div
        className={`hidden xl:block cursor-pointer  transition duration-200 hover:scale-110 ${
          grid === 4 ? "text-amber-500" : "text-neutral-600"
        }`}
        onClick={() => setGrid(4)}>
        <TfiLayoutGrid4Alt fontSize={20} />
      </div>
      <div
        className={`hidden lg:block cursor-pointer  transition duration-200 hover:scale-110  ${
          grid === 3 ? "text-amber-500" : "text-neutral-600"
        }`}
        onClick={() => setGrid(3)}>
        <BsGrid3X3GapFill fontSize={20} />
      </div>
      <div
        className={`cursor-pointer transition duration-200 hover:scale-110 ${
          grid === 2 ? "text-amber-500" : "text-neutral-600"
        }`}
        onClick={() => setGrid(2)}>
        <BiGridVertical fontSize={25} />
      </div>
      <div
        className={`cursor-pointer transition duration-200 hover:scale-110 ${
          grid === 1 ? "text-amber-500" : "text-neutral-600"
        }`}
        onClick={() => setGrid(1)}>
        <FaList fontSize={20} />
      </div>
    </div>
  );
};

export default DisplayStyle;
