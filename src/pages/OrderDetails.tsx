import { FaLocationDot } from "react-icons/fa6";
import ProductSnippet from "@/components/ProductSnippet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PDFDownload from "@/components/PDFDownload";
const ingredients = [
  { name: "Double Beef Patty", type: "Protein" },
  { name: "Artisanal Bun", type: "Bread" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Tomato", type: "Vegetable" },
  { name: "Special House Sauce", type: "Condiment" },
];

const OrderDetails = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-3'>
        Order details
      </h1>
      <div>
        <Table className='w-full text-sm border-b'>
          <TableHeader>
            <TableRow className=''>
              <TableHead>Product</TableHead>
              <TableHead className='hidden sm:table-cell'>Price</TableHead>
              <TableHead className='text-center hidden sm:table-cell'>
                Qty
              </TableHead>
              <TableHead className='text-right'>Total</TableHead>
              <TableHead className='text-right sm:hidden'>Qty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ingredients.map((item, i) => (
              <TableRow key={i} className='h-32 relative'>
                <TableCell>
                  <ProductSnippet className='' />
                </TableCell>
                <TableCell className='hidden sm:table-cell'>{"$300"}</TableCell>
                <TableCell className='hidden sm:table-cell text-center'>
                  {"2"}
                </TableCell>
                <TableCell className='text-right'>{"$500"}</TableCell>
                <TableCell className='sm:hidden text-center'>{"2"} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='py-3 my-3'>
          <div className='px-3 py-5 border bg-neutral-100 rounded-lg flex items-center gap-3'>
            <FaLocationDot
              fontSize={25}
              aria-hidden={true}
              className='text-neutral-500'
            />
            <div>
              <p className='text-neutral-500 italic'>
                11 Nkechi Gbujie Avenue, Abayi, Aba, Abia State
              </p>
              <p className='text-neutral-500 italic'>
                Landmark: St. Bridget's College{" "}
              </p>
            </div>
          </div>
        </div>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Created</p>
            <p className='font-semibold'>{Date.now()}</p>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Ordered by</p>
            <p className='font-semibold'>{"Johnny Iroele"}</p>
          </li>{" "}
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Status</p>
            <div className='flex gap-1 items-center'>
              <span className='size-2 inline-block bg-green-500 rounded-full'></span>
              <p className='font-semibold'>Delivered</p>
            </div>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Delivered</p>
            <p className='font-semibold'>{Date.now()}</p>
          </li>
          <li className='border-t flex justify-between items-center py-1'>
            <p className='text-sm text-neutral-500'>
              Total <span>{"(incl. fees)"}</span>
            </p>
            <p className='font-semibold'>{"$3000"}</p>
          </li>
        </ul>
      </div>
      <PDFDownload />
    </div>
  );
};

export default OrderDetails;
