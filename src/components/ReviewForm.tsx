import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Label } from "./ui/label";

import { Rating } from "@smastrom/react-rating";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  rating: z
    .number()
    .min(1, { message: "This field is required" })
    .max(5, { message: "Must not be more than 5" }),
  review: z.string().min(5, {
    message: "Message must contain more than 5 characters.",
  }),
});

const ReviewForm = ({ className }: React.ComponentProps<"form">) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid items-start gap-4", className)}>
      <div className='grid gap-2'>
        <Label htmlFor='rating'>Score</Label>
        <Controller
          name='rating'
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
        {errors.rating?.message && (
          <p className='text-red-600 text-sm'>{errors.rating?.message}</p>
        )}
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='review'>Review</Label>
        <textarea
          id='review'
          {...register("review")}
          className='border w-full h-40 p-1'></textarea>
        {errors.review?.message && (
          <p className='text-red-600 text-sm'>{errors.review?.message}</p>
        )}
      </div>

      <Button type='submit' className='bg-accent-one'>
        Save changes
      </Button>
    </form>
  );
};

export default ReviewForm;
