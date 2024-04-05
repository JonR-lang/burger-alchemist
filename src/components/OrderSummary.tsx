import ProductSnippet from "@/components/ProductSnippet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ingredients = [
  { name: "Double Beef Patty", type: "Protein" },
  { name: "Artisanal Bun", type: "Bread" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Tomato", type: "Vegetable" },
  { name: "Special House Sauce", type: "Condiment" },
];

type ClassProp = {
  className?: string;
};

const OrderSummary = ({ className }: ClassProp) => {
  return (
    <div className={className}>
      <h2 className='font-semibold text-xl md:text-right'>Order Summary</h2>
      <div className='px-2 border rounded py-2'>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Subtotal</p>
            <p className='font-semibold'>{"$3000"}</p>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Freight</p>
            <p className='font-semibold'>{"$300"}</p>
          </li>
          <li className='border-t flex justify-between items-center py-2'>
            <p className='text-sm text-neutral-500'>Total</p>
            <p className='font-semibold'>{"$3000"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
