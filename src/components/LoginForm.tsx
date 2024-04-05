import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Please put in a valid email address" }),
  password: z.string().min(1, {
    message: "This field is required",
  }),
});

const LoginForm = ({ className }: React.ComponentProps<"form">) => {
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
      <div className='space-y-1 mb-10'>
        <Label htmlFor='password'>Password</Label>
        <Input id='password' type='password' {...register("password")} />
        {errors.password?.message && (
          <p className='text-red-600 text-xs'>{errors.password?.message}</p>
        )}
      </div>
      <br />
      <Button
        type='submit'
        className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm'>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
