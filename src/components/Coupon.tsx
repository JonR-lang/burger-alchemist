import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useApplyCoupon } from "@/hooks/queryhooks/useApplyCoupon";
import { CouponType } from "@/types/Coupon.types";

type CouponProp = {
  coupon: CouponType;
  setCoupon: (value: CouponType | null) => void;
};
const Coupon = ({ setCoupon, coupon }: CouponProp) => {
  const [value, setValue] = useState("");
  const { toast } = useToast();
  const { mutate: applyCoupon, isPending } = useApplyCoupon();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    applyCoupon(value, {
      onSuccess: (data: CouponType) => {
        setCoupon(data);
      },
      onError: (error) => {
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  const handleRemoveCoupon = () => {
    setCoupon(null);
    setValue("");
  };

  if (coupon)
    return (
      <div className='flex flex-col my-2'>
        <Button
          className='bg-accent-one hover:bg-neutral-950'
          onClick={handleRemoveCoupon}>
          Remove Coupon
        </Button>
      </div>
    );

  return (
    <div className='flex flex-col gap-4 my-2'>
      <div>
        <h4 className='font-semibold'>Apply Coupon</h4>
        <p className='text-sm text-neutral-500'>
          Use a coupon to get mouth watering discounts for mouth watering
          burgers!
        </p>
      </div>
      <Input
        type='text'
        placeholder='Apply Coupon'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className='hover:bg-neutral-800'
        onClick={handleClick}
        disabled={!value || isPending}>
        Apply Coupon
      </Button>
    </div>
  );
};

export default Coupon;
