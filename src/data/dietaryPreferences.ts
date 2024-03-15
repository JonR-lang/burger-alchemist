import { LuMilkOff } from "react-icons/lu";
import { LiaPepperHotSolid } from "react-icons/lia";
import { LuWheatOff } from "react-icons/lu";
import { GiAvocado } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { LuMilk } from "react-icons/lu";
import { TbPlant2 } from "react-icons/tb";
import { TbBrandCarbon } from "react-icons/tb";

const dietaryPreferences = [
  { name: "Dairy-Free", Icon: LuMilkOff },
  { name: "Spicy", Icon: LiaPepperHotSolid },
  { name: "Gluten-Free", Icon: LuWheatOff },
  { name: "Keto-Friendly", Icon: GiAvocado },
  { name: "Vegan", Icon: LuVegan },
  { name: "Dairy", Icon: LuMilk },
  { name: "Organic", Icon: TbPlant2 },
  { name: "Low-Carb", Icon: TbBrandCarbon },
];

export default dietaryPreferences;
