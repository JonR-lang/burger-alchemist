import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

import { Rating } from "@smastrom/react-rating";
import { cn } from "@/lib/utils";
import { useRateProduct } from "@/hooks/queryhooks/useRateProduct";

const formSchema = z.object({
  star: z
    .number()
    .min(1, { message: "This field is required" })
    .max(5, { message: "Must not be more than 5" }),
  comment: z.string().min(5, {
    message: "Message must contain more than 5 characters.",
  }),
});

type ReviewFormProp = React.ComponentProps<"form"> & {
  productId: string;
  setOpen: (value: boolean) => void;
};

const ReviewForm = ({ className, productId, setOpen }: ReviewFormProp) => {
  const { toast } = useToast();
  const { mutate: rateProduct, isPending: isRating } =
    useRateProduct(productId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    rateProduct(
      { rating: values, productId },
      {
        onSuccess: () => {
          toast({
            description: "Review submitted successfully!",
            variant: "yellowBorder",
          });
        },
        onError: (error) => {
          toast({
            description: error.message,
            variant: "destructive",
          });
        },
        onSettled: () => {
          setOpen(false);
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid items-start gap-4", className)}>
      <div className='grid gap-2'>
        <Label htmlFor='star'>Score</Label>
        <Controller
          name='star'
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <Rating
              onChange={(rating: number) => field.onChange(rating)}
              value={field.value}
              style={{ maxWidth: 140 }}
              className='focus:outline outline-black outline-2'
            />
          )}
        />
        {errors.star?.message && (
          <p className='text-red-600 text-sm'>{errors.star?.message}</p>
        )}
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='review'>Review</Label>
        <textarea
          id='comment'
          {...register("comment")}
          className='border w-full h-40 p-1'></textarea>
        {errors.comment?.message && (
          <p className='text-red-600 text-sm'>{errors.comment?.message}</p>
        )}
      </div>

      <Button
        type='submit'
        className='bg-accent-one'
        disabled={isRating}
        aria-disabled={isRating}>
        Save changes
      </Button>
    </form>
  );
};

export default ReviewForm;
