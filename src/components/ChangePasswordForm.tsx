import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

import { useChangePassword } from "@/hooks/queryhooks/useChangePassword";

type CPFProp = {
  setOpen: (value: boolean) => void;
};

const formSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be more than 6 characters",
    }),
    confirmPassword: z.string().min(1, { message: "This field is required!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ChangePasswordForm = ({
  className,
  setOpen,
}: React.ComponentProps<"form"> & CPFProp) => {
  const { mutate: changePassword, isPending } = useChangePassword();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    changePassword(values, {
      onSuccess: () => {
        toast({
          description: "Password changed successfully!",
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
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-2 flex flex-col", className)}>
      <div className='space-y-1'>
        <Label htmlFor='password'>Password</Label>
        <Input id='password' type='password' {...register("password")} />
        {errors.password?.message && (
          <p className='text-red-600 text-xs'>{errors.password?.message}</p>
        )}
      </div>
      <div className='space-y-1'>
        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input
          id='confirmPassword'
          type='password'
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p className='text-red-600 text-xs'>
            {errors.confirmPassword?.message}
          </p>
        )}
      </div>

      <br />
      <Button
        type='submit'
        disabled={isPending}
        className='h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm'>
        Save
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
