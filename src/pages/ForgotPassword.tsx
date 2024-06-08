import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoIosCheckmarkCircleOutline, IoMdArrowBack } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { cn } from "@/lib/utils";
import { useForgotPasswordEmail } from "@/hooks/queryhooks/useForgotPasswordEmail";

const formSchema = z.object({
  email: z.string().email({ message: "Please put in a valid email address" }),
});

const ForgotPassword = ({ className }: React.ComponentProps<"form">) => {
  const [cardType, setCardType] = useState("input");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate, isPending } = useForgotPasswordEmail();

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: () => {
        setCardType("success");
      },
      onError: (error) => {
        console.log(error);
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }
  return (
    <div className='flex items-center justify-center w-full min-h-screen p-2 burger-pattern overflow-y-auto'>
      <div id='overlay' className='bg-white/80 fixed inset-0'></div>{" "}
      <button
        onClick={() => navigate(-1)}
        className='border border-primary-two rounded-full p-2 shadow fixed top-4 left-4 z-20 bg-white'>
        <IoMdArrowBack
          fontSize={30}
          aria-hidden={true}
          className='text-neutral-500'
        />
        <span className='sr-only'>Go Back to previous page.</span>
      </button>
      {cardType === "input" && (
        <Card className='pb-2 w-full max-w-md relative'>
          <CardHeader>
            <CardTitle>Forgot Password?</CardTitle>
            <CardDescription>
              Put in the email with which you used to create your account.
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
                  <p className='text-red-600 text-xs'>
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <br />
              <Button
                type='submit'
                className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm'
                disabled={isPending}>
                {" "}
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
      {cardType === "success" && (
        <Card className='w-full max-w-md relative'>
          <CardHeader>
            <CardTitle className='text-center'>Email Sent!</CardTitle>
          </CardHeader>
          <CardContent className='flex items-center justify-center flex-col gap-4'>
            <IoIosCheckmarkCircleOutline
              fontSize={70}
              className='text-green-600'
            />
            <CardDescription className='text-center'>
              Check your email and follow the instructions per the email
              received.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ForgotPassword;
