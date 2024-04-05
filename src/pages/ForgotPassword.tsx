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

const formSchema = z.object({
  email: z.string().email({ message: "Please put in a valid email address" }),
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
          <CardTitle>Forgot Password?</CardTitle>
          <CardDescription>
            Put in the email which you used to create the accout, and follow the
            instructions per the email received.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-2 flex flex-col", className)}>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' {...register("email")} />
              {errors.email?.message && (
                <p className='text-red-600 text-xs'>{errors.email?.message}</p>
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
