import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@smastrom/react-rating";

type IndexProp = {
  index: number;
};

const ReviewComp = ({ index }: IndexProp) => {
  //When infusing logic into this app, smart johnny, remember that you should pass as a prop the length of the array from the parent, as a prop to this component, then you index with it!
  // console.log(index);

  return (
    <div className={`flex gap-2 md:gap-3 py-4 ${index < 2 && "border-b"}`}>
      <Avatar className='mt-1 '>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex-1 flex flex-col gap-1'>
        <h4 className='text-sm font-semibold'>Carly West</h4>
        <div className='w-[70px]'>
          <Rating style={{ width: "100%" }} value={4} readOnly={true} />
        </div>
        <p className='text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
          aperiam veniam. Inventore dolor saepe porro!
        </p>
      </div>
    </div>
  );
};

export default ReviewComp;
