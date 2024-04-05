import { useState } from "react";

import ReviewForm from "./ReviewForm";

import { FiEdit3 } from "react-icons/fi";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";

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

const WriteReview = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className='uppercase flex gap-1 items-center mt-6 bg-accent-one'
            variant={"default"}>
            {"write a review"}
            <FiEdit3 fontSize={18} />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-lg'>
          <DialogHeader>
            <DialogTitle className='font-semibold'>Write a Review</DialogTitle>
            <DialogDescription>
              Please kindly leave a review. This helps us to know what you like,
              and what you don't, ultimately helping us serve you better.
            </DialogDescription>
          </DialogHeader>
          <ReviewForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className='uppercase flex gap-1 items-center text-sm border-none shadow-none underline text-neutral-500'
          variant={"outline"}>
          {"write a review"}
          <FiEdit3 fontSize={18} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle className='font-semibold'>Write a Review</DrawerTitle>
          <DrawerDescription>
            Please kindly leave a review. This helps us to know what you like,
            and what you don't, ultimately helping us serve you better.
          </DrawerDescription>
        </DrawerHeader>
        <ReviewForm className='px-4' />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default WriteReview;
