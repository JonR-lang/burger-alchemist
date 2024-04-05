import { useState, useEffect } from "react";

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

import { user } from "@/data/mockUserData";

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
});

const EditAccountForm = ({ className }: React.ComponentProps<"form">) => {
  const [country, setCountry] = useState<Country>("NG");
  const [value, setValue] = useState();
  const [showCountryCode, setShowCountryCode] = useState<boolean>(false);

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
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-2 flex flex-col", className)}>
      <div className='grid grid-cols-2 gap-2 w-full'>
        <div className='space-y-1'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input id='firstName' type='text' {...register("firstName")} />
          {errors.firstName?.message && (
            <p className='text-red-600 text-xs'>{errors.firstName?.message}</p>
          )}
        </div>
        <div className='space-y-1'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input id='lastName' type='text' {...register("lastName")} />
          {errors.lastName?.message && (
            <p className='text-red-600 text-xs'>{errors.lastName?.message}</p>
          )}
        </div>
      </div>
      <div className='space-y-1'>
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
            <CountrySelect labels={en} value={country} onChange={setCountry} />
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

      <br />
      <Button
        type='submit'
        className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm'>
        Save Changes
      </Button>
    </form>
  );
};

export default EditAccountForm;
