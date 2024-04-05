import { useEffect, useState } from "react";

import { Controller, UseFormReturn, useWatch } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

import stateAndCities from "@/data/statesAndCites";

type AddressProp = {
  className?: string;
  form: UseFormReturn<
    {
      state: string;
      city: string;
      street: string;
      landmark?: string | undefined;
    },
    any,
    undefined
  >;
  useSavedAddress?: boolean;
};

const AddressForm = ({ className, form, useSavedAddress }: AddressProp) => {
  const [cities, setCities] = useState<string[] | undefined>();

  const {
    register,
    control,
    formState: { errors },
  } = form;

  const selectedState = useWatch({
    control,
    name: "state",
    // This will watch for changes in the "state" input value
  });

  useEffect(() => {
    // If a state is selected, populate the cities
    if (selectedState) {
      const found = stateAndCities.find(
        (state) => state.name === selectedState
      );
      setCities(found?.cities);
    }
  }, [selectedState]);

  return (
    <div className={className}>
      <div>
        <Label htmlFor='state'>State of Residence</Label>
        <Controller
          name='state'
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder='Select State' />
              </SelectTrigger>
              <SelectContent>
                {stateAndCities.map((item, i) => (
                  <SelectItem key={i} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.state?.message && (
          <p className='text-red-600 text-xs mt-1'>{errors.state?.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor='city'>City</Label>
        <Controller
          name='city'
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder='Select City' />
              </SelectTrigger>
              <SelectContent>
                {cities ? (
                  cities.map((item, i) => (
                    <SelectItem key={i} value={item}>
                      {item}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value='nil' disabled>
                    Please select a state
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          )}
        />
        {errors.city?.message && (
          <p className='text-red-600 text-xs mt-1'>{errors.city?.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor='street'>Street</Label>
        <Input id='street' {...register("street")} />
        {errors.street?.message && (
          <p className='text-red-600 text-xs mt-1'>{errors.street?.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <Label htmlFor='landmark'>Landmark</Label>
        <p className='text-xs text-neutral-500'>
          Is there any prominent or well known building around your area? This
          would help us identify your location much easier.
        </p>
        <Input id='landmark' {...register("landmark")} />
        {errors.landmark?.message && (
          <p className='text-red-600 text-xs mt-1'>
            {errors.landmark?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
