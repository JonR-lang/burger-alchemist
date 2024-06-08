import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useErrorBoundary } from "react-error-boundary";
import OrderItemComponent from "@/components/OrderItemComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PDFDownload from "@/components/PDFDownload";

import { format } from "date-fns";
import { useOrderData } from "@/hooks/queryhooks/useOrderData";
import { OrderItem } from "@/types/Order.types";
import scrollToTop from "@/utils/scrollToTop";
import OrderDetailSkeleton from "@/components/skeletonui/OrderDetailSkeleton";

const OrderDetails = () => {
  const { id } = useParams();
  const { showBoundary } = useErrorBoundary();

  if (!id) {
    return <div>No product ID provided</div>;
  }

  const { data, isLoading, isError, error } = useOrderData(id);

  useEffect(() => {
    scrollToTop();
  }, [id]);

  useEffect(() => {
    if (isError) {
      showBoundary(error);
    }
  }, [isError, error, showBoundary]);

  if (isLoading) return <OrderDetailSkeleton />;

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
              <TableHead className='text-right sm:hidden'>Qty</TableHead>
              <TableHead className='text-right'>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.items.map((item: OrderItem, i: number) => (
              <TableRow key={i} className='h-32 relative'>
                <TableCell>
                  <OrderItemComponent productId={item.product._id} />
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  ${(item.subTotal / item.quantity).toFixed(2)}
                </TableCell>
                <TableCell className='hidden sm:table-cell text-center'>
                  {item.quantity}
                </TableCell>
                <TableCell className='sm:hidden text-center'>
                  {item.quantity}
                </TableCell>
                <TableCell className='text-right'>
                  ${item.subTotal.toFixed(2)}
                </TableCell>
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
                {`${data.address?.street}, ${data.address?.city}, ${data.address?.state}`}
              </p>
              <p className='text-neutral-500 italic'>
                Landmark:
                {data.address.landmark
                  ? data.address.landmark
                  : "None provided"}
              </p>
            </div>
          </div>
        </div>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Created</p>
            <p className='font-semibold'>{format(data.createdAt, "PPP")}</p>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Ordered by</p>
            <p className='font-semibold'>{`${data.orderedBy.firstName} ${data.orderedBy.lastName}`}</p>
          </li>
          <li className='flex justify-between items-center'>
            <p className='text-sm text-neutral-500'>Status</p>
            <div className='flex gap-1 items-center'>
              <span
                className={`size-2 inline-block bg-neutral-700 ${
                  data.status === "pending" && "bg-orange-400"
                } ${data.status === "delivered" && "bg-green-500"} ${
                  data.status === "cancelled" && "bg-red-500"
                }  rounded-full`}></span>
              <p className='font-semibold'>{data.status}</p>
            </div>
          </li>
          {data.status === "delivered" && (
            <li className='flex justify-between items-center'>
              <p className='text-sm text-neutral-500'>Delivered</p>
              <p className='font-semibold'>{format(data.updatedAt, "PPP")}</p>
            </li>
          )}
          <li className='border-t flex justify-between items-center py-1'>
            <p className='text-sm text-neutral-500'>
              Total <span>{"(incl. fees)"}</span>
            </p>
            <p className='font-semibold'>${data.totalAmount.toFixed(2)}</p>
          </li>
        </ul>
      </div>
      <PDFDownload order={data} />
    </div>
  );
};

export default OrderDetails;
