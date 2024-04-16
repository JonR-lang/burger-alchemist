import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type IngredientTableProp = {
  tableData: {
    name: string;
    type: string;
    _id: string;
  }[];
};

const IngredientTable = ({ tableData }: IngredientTableProp) => {
  return (
    <Table className='w-full text-xs'>
      <TableHeader>
        <TableRow>
          <TableHead className=''></TableHead>
          <TableHead className='text-right'>Top Ingredients</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell className='text-right'>{item.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IngredientTable;
