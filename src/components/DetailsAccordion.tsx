import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ingredients = [
  { name: "Double Beef Patty", type: "Protein" },
  { name: "Artisanal Bun", type: "Bread" },
  { name: "Lettuce", type: "Vegetable" },
  //   { name: "Tomato", type: "Vegetable" },
  //   { name: "Special House Sauce", type: "Condiment" },
];

const DetailsAccordion = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1' className='md:hidden'>
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>medium</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Top Ingredients</AccordionTrigger>
        <AccordionContent>
          <ul>
            {ingredients.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3' className='md:hidden'>
        <AccordionTrigger>Burger Type</AccordionTrigger>
        <AccordionContent>classic</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailsAccordion;
