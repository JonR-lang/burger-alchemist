import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@smastrom/react-rating";

const MobileReviewComp = () => {
  return (
    <div className='flex gap-2 py-4 border-b'>
      <Avatar className='mt-1'>
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

export default MobileReviewComp;
