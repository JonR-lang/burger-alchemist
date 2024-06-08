import html2canvas from "html2canvas";
import { format } from "date-fns";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order, OrderItem } from "@/types/Order.types";

type OrderProp = {
  order: Order;
};

const MyDocument = ({ order }: OrderProp) => (
  <div className='mx-auto my-12 w-full max-w-[800px] px-6'>
    <div>
      <h1 className='text-xl font-semibold'>Order Id: {order._id}</h1>
      <Table className='w-full text-sm border-b'>
        <TableHeader className='text-black border-b-2 border-b-black'>
          <TableRow className='text-black'>
            <TableHead className='text-black'>Product</TableHead>
            <TableHead className='text-black'>Price</TableHead>
            <TableHead className='text-black'>Qty</TableHead>
            <TableHead className='text-right text-black'>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.items.map((item: OrderItem, i: number) => (
            <TableRow key={i}>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>
                ${(item.subTotal / item.quantity).toFixed(2)}
              </TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className='text-right'>
                ${item.subTotal.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='flex justify-between items-center mt-10'>
        <p>Created</p>
        <p className='font-semibold'>{format(order.createdAt, "PPP")}</p>
      </div>

      <div className='flex justify-between items-center mt-10'>
        <p>Fullname:</p>
        <p>{`${order.orderedBy.firstName} ${order.orderedBy.lastName}`}</p>
      </div>

      <div className='flex justify-between items-center mt-10'>
        <p>Status</p>
        <p className='font-semibold'>{order.status}</p>
      </div>

      {order.status === "delivered" && (
        <div className='flex justify-between items-center mt-10'>
          <p>Delivered</p>
          <p className='font-semibold'>{format(order.updatedAt, "PPP")}</p>
        </div>
      )}

      <div className='flex justify-between items-center mt-10'>
        <p>
          Total <span>{"(incl. fees)"}</span>
        </p>
        <p className='font-semibold'>${order.totalAmount.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

const PDFDownload = ({ order }: OrderProp) => {
  const [isLoading, setIsLoading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    setIsLoading(true);
    const input = pdfRef.current;
    if (!input) return;
    const canvas = await html2canvas(input);

    const pdf = new jsPDF();
    const imgData = canvas.toDataURL("image/jpeg", 0.5);
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    pdf.save(`Order_${order._id}.pdf`);
    setIsLoading(false);
  };
  return (
    <div className='flex flex-col gap-3'>
      <div
        aria-hidden={true}
        ref={pdfRef}
        className='fixed bottom-[999999%] w-[8.27in]'>
        <MyDocument order={order} />
      </div>
      <Button
        onClick={downloadPDF}
        className='my-4 w-full max-w-md mx-auto'
        disabled={isLoading}
        aria-disabled={isLoading}>
        {isLoading ? "Downloading..." : "Download PDF"}
      </Button>
    </div>
  );
};

export default PDFDownload;
