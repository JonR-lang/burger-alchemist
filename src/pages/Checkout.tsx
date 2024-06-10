import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AddressForm from "@/components/AddressForm";
import OrderSummary from "@/components/OrderSummary";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

import useLocalStorage from "@/hooks/utilityHooks/useLocalStorage";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useUserData } from "@/hooks/queryhooks/useUserData";
import { usePlaceOrder } from "@/hooks/queryhooks/usePlaceOrder";
import { useSaveAddress } from "@/hooks/queryhooks/useSaveAddress";

import { RootState } from "@/store/store";
import Coupon from "@/components/Coupon";
import { CouponType } from "@/types/Coupon.types";

type CheckoutProp = {
  newTab: any;
};

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

const Checkout = ({ newTab }: CheckoutProp) => {
  const [coupon, setCoupon] = useState<CouponType>(null);
  const savedUser = useSelector((state: RootState) => state.auth.user);
  const [defaultFormValues] = useState({
    state: "",
    city: "",
    street: "",
    landmark: "",
  });
  const [_, setIsOrderMade] = useLocalStorage("order", false);
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [isSaveAddressChecked, setIsSaveAddressChecked] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: user } = useUserData(savedUser ? savedUser.id : null);

  const { mutate: placeOrder, isPending: isPlacingOrder } = usePlaceOrder();
  const { mutate: saveAddress } = useSaveAddress();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    if (useSavedAddress && user && user.address) {
      reset(user.address);
    } else {
      reset(defaultFormValues);
    }
  }, [useSavedAddress]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    newTab.current = window.open("", "_blank");
    console.log(newTab);

    const items = cart.items.map((item) => ({
      product: item.product,
      quantity: item.quantity.toString(), //server expects string.
      size: item.size,
    }));
    const order = {
      items,
      address: values,
      coupon: coupon ? coupon.coupon.name : undefined,
    };
    placeOrder(order, {
      onSuccess: (data) => {
        setCoupon(null);
        toast({
          description: "You are being redirected to a paystack checkout page",
        });

        setTimeout(() => {
          // window.location.replace(data.authorizationUrl);
          if (newTab.current) {
            newTab.current.location.href = data.authorizationUrl;
          }
          navigate("/cart");
        }, 1000);

        setIsOrderMade(true);

        //If the user clicks on the save address checkbox, then save it to the database.
        if (isSaveAddressChecked) {
          saveAddress(values, {
            onSuccess: () => {
              toast({
                description: "Address saved",
              });
            },
            onError: () => {
              newTab.current.close();
              toast({
                description: "There was an error saving address",
              });
            },
          });
        }
      },
      onError: (error) => {
        console.log(error);
        toast({
          description: "An error occured while placing the order",
        });
      },
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

            {user && user.address && (
              <div className='border rounded-md p-2 flex flex-col'>
                <h3 className='text-sm font-semibold'>
                  You have an address saved. Use it?
                </h3>
                <div className='py-2 text-xs text-neutral-500 italic space-y-2'>
                  <p>
                    {`Address: ${user.address?.street}, ${user.address?.city}, ${user.address?.state}`}
                  </p>
                  <p>{`Landmark: ${user.address?.landmark}`}</p>
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
            )}

            <AddressForm
              className='w-full flex flex-col gap-3'
              form={form}
              useSavedAddress={useSavedAddress}
            />
            <div className='flex items-center space-x-2 '>
              <Checkbox
                id='save-address'
                onCheckedChange={(value: boolean) =>
                  setIsSaveAddressChecked(value)
                }
              />
              <label
                htmlFor='save-address'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Save Address
              </label>
            </div>
            <Coupon setCoupon={setCoupon} coupon={coupon} />
          </div>
        </div>
        <div className='flex-1 w-full md:max-w-sm flex flex-col'>
          <OrderSummary
            className='w-full flex flex-col gap-2'
            coupon={coupon}
          />
          <Button
            type='submit'
            className='mt-4 hover:bg-green-600'
            disabled={isPlacingOrder}
            aria-disabled={isPlacingOrder}>
            Pay
          </Button>
          <p className='text-xs text-center my-2 text-neutral-500'>
            Payment is done with paystack. You will be taken to a new tab to
            complete payment.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
