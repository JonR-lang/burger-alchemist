import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { Country } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

import CountrySelect from "./CountrySelect";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "./ui/use-toast";
import { useRegisterUser } from "@/hooks/queryhooks/useRegisterUser";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must not be less than 2 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name must not be less than 2 characters" }),
  email: z.string().email({ message: "Please put in a valid email address" }),
  mobile: z
    .string({
      invalid_type_error: "Did you fill in the correct phone number?",
      required_error: "This field is required.",
    })
    .min(10, { message: "Number should be greater than or equals to 10" }),
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
});

const RegisterForm = ({ className }: React.ComponentProps<"form">) => {
  const [country, setCountry] = useState<Country>("US");
  const [value, setValue] = useState();
  const [checkedTOS, setCheckedTOS] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState<boolean>(false);
  const { mutate: registerUser, isPending } = useRegisterUser();
  const { toast } = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShowCountryCode(true);
    }, 100);

    return () => {
      setShowCountryCode(false);
    };
  }, []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    registerUser(values, {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
      onError: (error) => {
        toast({
          title: error.message,
          variant: "destructive",
        });
      },
    });
    console.log(values);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("gap-[14px] flex flex-col", className)}>
      <div className='space-y-2 flex flex-col'>
        <div className='grid grid-cols-2 gap-2 w-full'>
          <div className='space-y-[2px]'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' type='text' {...register("firstName")} />
            {errors.firstName?.message && (
              <p className='text-red-600 text-xs'>
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className='space-y-[2px]'>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input id='lastName' type='text' {...register("lastName")} />
            {errors.lastName?.message && (
              <p className='text-red-600 text-xs'>{errors.lastName?.message}</p>
            )}
          </div>
        </div>
        <div className='space-y-[2px]'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...register("email")} />
          {errors.email?.message && (
            <p className='text-red-600 text-xs'>{errors.email?.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor='email'>Mobile</Label>
          <div className='flex gap-2 items-center'>
            {showCountryCode && (
              <CountrySelect
                labels={en}
                value={country}
                onChange={setCountry}
              />
            )}
            <PhoneInput
              name='mobile'
              id='mobile'
              value={value}
              onChange={setValue}
              control={control}
              defaultCountry={country}
              className='border pb-1 px-2 rounded-md w-full pt-2 text-sm'
              rules={{ required: true }}
            />
          </div>

          {errors.mobile?.message && (
            <p className='text-red-600 text-xs'>{errors.mobile?.message}</p>
          )}
        </div>
        <div className='space-y-[2px] mb-10'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' {...register("password")} />
          {errors.password?.message && (
            <p className='text-red-600 text-xs'>{errors.password?.message}</p>
          )}
        </div>
      </div>

      <div className='flex items-center space-x-2 mx-auto text-neutral-500 -mb-2'>
        <Checkbox
          id='save-address'
          className='block -mt-[6px]'
          onCheckedChange={(value: boolean) => setCheckedTOS(value)}
        />
        <label
          htmlFor='save-address'
          className='font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs block'>
          I agree to the{" "}
          <Link to='/terms-of-service' className='underline'>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to='/privacy-policy' className='underline'>
            Privacy Policy
          </Link>
        </label>
      </div>
      <Button
        type='submit'
        disabled={!checkedTOS || isPending}
        className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm mt-1'>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
