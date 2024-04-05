import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

type ADCProp = {
  variant: string;
};

const AlertDialogComponent = ({ variant }: ADCProp) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {variant == "logout" ? (
          <Button variant='outline' className='block max-w-sm'>
            Log Out
          </Button>
        ) : (
          <Button variant='destructive' className='block max-w-sm'>
            Delete Account
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className='w-[90%] rounded-lg max-w-md'>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {variant === "logout"
              ? "Are you sure you want to log out from this device or session?"
              : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={variant === "delete" ? "bg-red-500" : undefined}>
            {variant === "delete" ? "Delete" : "Log out"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
