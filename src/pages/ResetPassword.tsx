import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

const formSchema = z
  .object({
    password: z
      .string()
      .min(6, {
        message: "Password must be more than 6 characters",
      })
      .regex(
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/),
        {
          message:
            "Password must contain at least one uppercase letter, lowercase letter, number, and special symbol",
        }
      ),
    confirmPassword: z.string().min(1, { message: "This field is required!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ForgotPassword = ({ className }: React.ComponentProps<"form">) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='grid place-content-center w-full min-h-screen place-items-center p-2 burger-pattern overflow-y-auto'>
      <div id='overlay' className='bg-white/80 fixed inset-0'></div>
      <Card className='pb-2 w-full max-w-md relative'>
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Put in a new password. Password should should contain uppercase and
            lowercase letters, one number and one special character or symbol.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-2 flex flex-col", className)}>
            <div className='space-y-1'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' {...register("password")} />
              {errors.password?.message && (
                <p className='text-red-600 text-xs'>
                  {errors.password?.message}
                </p>
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
              className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
