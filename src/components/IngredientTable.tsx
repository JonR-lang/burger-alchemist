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
  //   { name: "Tomato", type: "Vegetable" },
  //   { name: "Special House Sauce", type: "Condiment" },
];

const IngredientTable = () => {
  return (
    <Table className='w-full text-xs'>
      <TableHeader>
        <TableRow>
          <TableHead className=''></TableHead>
          <TableHead className='text-right'>Top Ingredients</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ingredients.map((item, i) => (
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
