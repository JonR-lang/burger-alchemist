import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyDocument = () => (
  <div className='mx-auto my-12 w-full max-w-[800px] px-6'>
    <div>
      <h1 className='text-xl font-semibold'>Order Id: #9172963</h1>
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
          {Array(4)
            .fill(4)
            .map((item: any, i) => (
              <TableRow key={i}>
                <TableCell>{"Maple Crimson Burger"}</TableCell>
                <TableCell>{"$300"}</TableCell>
                <TableCell>{"2"}</TableCell>
                <TableCell className='text-right'>{"$500"}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div className='flex justify-between items-center mt-10'>
        <p>Fullname:</p>
        <p>{"Johnny Iroele"}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p>Fullname:</p>
        <p>{"Johnny Iroele"}</p>
      </div>
    </div>
  </div>
);

const PDFDownload = () => {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const input = pdfRef.current;
    if (!input) return;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className='flex flex-col gap-3'>
      <div
        aria-hidden={true}
        ref={pdfRef}
        className='fixed bottom-[999999] w-[8.27in]'>
        <MyDocument />
      </div>
      <Button onClick={downloadPDF} className='my-4 w-full max-w-md mx-auto'>
        Download PDF
      </Button>
    </div>
  );
};

export default PDFDownload;
