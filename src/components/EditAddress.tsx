import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AddressForm from "./AddressForm";

import { MdEdit } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";
import useMediaQuery from "@/hooks/utilityHooks/useMediaQuery";

import { useSaveAddress } from "@/hooks/queryhooks/useSaveAddress";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { UserAddress } from "@/types/User.types";

type EditAddressProp = {
  address: UserAddress;
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

const EditAddress = ({ address }: EditAddressProp) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { toast } = useToast();
  const { mutate: saveAddress, isPending } = useSaveAddress();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: address,
  });

  const { handleSubmit } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveAddress(values, {
      onSuccess: () => {
        toast({
          description: "Address saved!",
          variant: "yellowBorder",
        });
        setOpen(false);
      },
      onError: () => {
        toast({
          description: "An Error occured. Try again later.",
          variant: "destructive",
        });
      },
    });
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className='text-neutral-500'>
            <MdEdit fontSize={28} aria-hidden={true} />
            <span className='sr-only'>Edit Address</span>
          </button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
            <DialogDescription>
              Make changes to your address here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AddressForm form={form} className='w-full flex flex-col gap-3' />
            <Button
              type='submit'
              className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm mt-3 w-full'>
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className='text-neutral-500'>
          <MdEdit fontSize={28} aria-hidden={true} />
          <span className='sr-only'>Edit Address</span>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Edit Address</DrawerTitle>
          <DrawerDescription>
            Make changes to your Address here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <form onSubmit={handleSubmit(onSubmit)} className='px-3'>
          <AddressForm form={form} className='w-full flex flex-col gap-3' />
          <Button
            type='submit'
            disabled={isPending}
            aria-disabled={isPending}
            className='bg-accent-one h-11 sm:h-auto font-bold tracking-wider text-base md:text-sm mt-3 w-full'>
            Save Changes
          </Button>
        </form>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditAddress;
