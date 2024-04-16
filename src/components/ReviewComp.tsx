import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@smastrom/react-rating";
import { getFirstLettersOfNames } from "@/utils/getFirstLettersofNames";

type ReviewCompProp = {
  index: number;
  rating: {
    _id: string;
    star: number;
    comment: string;
    postedBy: {
      _id: string;
      firstName: string;
      lastName: string;
      picturePath: string;
    };
  };
};

const ReviewComp = ({
  index,
  rating: {
    comment,
    star,
    postedBy: { firstName, lastName, picturePath },
  },
}: ReviewCompProp) => {
  const nameInitial = getFirstLettersOfNames(firstName, lastName);
  return (
    <div className={`flex gap-2 md:gap-3 py-4 ${index < 2 && "border-b"}`}>
      <Avatar className='mt-1 '>
        <AvatarImage src={picturePath} />
        <AvatarFallback>{nameInitial}</AvatarFallback>
      </Avatar>
      <div className='flex-1 flex flex-col gap-1'>
        <h4 className='text-sm font-semibold'>{firstName + " " + lastName}</h4>
        <div className='w-[70px]'>
          <Rating style={{ width: "100%" }} value={star} readOnly={true} />
        </div>
        <p className='text-sm'>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewComp;
