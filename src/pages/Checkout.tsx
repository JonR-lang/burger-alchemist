import { useState, useEffect } from "react";
import AddressForm from "@/components/AddressForm";
import OrderSummary from "@/components/OrderSummary";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { userAddress } from "@/data/mockUserData";

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  state: z.string().min(2, {
    message: "State must be at least 2 characters",
  }),
  city: z.string().min(1, {
    message: "This field is required",
  }),
  street: z.string().min(2, {
    message: "Street must be at least 2 characters long",
  }),
  landmark: z.string().optional(),
});

const Checkout = () => {
  const { toast } = useToast();
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [defaultFormValues, setDefaultFormValues] = useState({
    state: "",
    city: "",
    street: "",
    landmark: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (useSavedAddress) {
      reset(userAddress);
    } else {
      reset(defaultFormValues);
    }
  }, [useSavedAddress]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      description: "You are being redirected to a paystack cashout page",
    });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex gap-5 flex-col md:flex-row'>
        <div className='flex-1'>
          <div className='flex gap-2 flex-col'>
            <h2 className='font-semibold text-xl'>Shipping address</h2>
            <div className='border rounded-md p-2 flex flex-col'>
              <h3 className='text-sm font-semibold'>
                You have an address saved. Use it?
              </h3>
              <div className='py-2 text-xs text-neutral-500 italic '>
                Address: 11 Nkechi gbujie avenue, Abayi, Aba, Abia State.
              </div>
              <div className='flex items-center space-x-2 ml-auto'>
                <Checkbox
                  id='use-saved-address'
                  onCheckedChange={(value: boolean) =>
                    setUseSavedAddress(value)
                  }
                />
                <label
                  htmlFor='use-saved-address'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Use Saved Address
                </label>
              </div>
            </div>

            <AddressForm
              className='w-full flex flex-col gap-3'
              form={form}
              useSavedAddress={useSavedAddress}
            />
            <div className='flex items-center space-x-2 '>
              <Checkbox id='save-address' />
              <label
                htmlFor='save-address'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Save Address
              </label>
            </div>
          </div>
        </div>
        <div className='flex-1 w-full md:max-w-sm flex flex-col'>
          <OrderSummary className='w-full flex flex-col gap-2' />
          <Button type='submit' className='mt-4'>
            Pay
          </Button>
          <p className='text-xs text-center my-2 text-neutral-500'>
            Payment is done with paystack
          </p>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
