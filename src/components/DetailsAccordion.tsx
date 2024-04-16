import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionProp = {
  size: string;
  burgerType: string;
  ingredients: {
    name: string;
    type: string;
    _id: string;
  }[];
};

const DetailsAccordion = ({ size, ingredients, burgerType }: AccordionProp) => {
  return (
    <Accordion type='single' collapsible className='lg:hidden'>
      <AccordionItem value='item-1' className='md:hidden'>
        <AccordionTrigger>Size</AccordionTrigger>
        <AccordionContent>{size}</AccordionContent>
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
        <AccordionContent>{burgerType}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailsAccordion;
