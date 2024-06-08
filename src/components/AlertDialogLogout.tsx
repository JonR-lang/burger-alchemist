import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
import { useToast } from "./ui/use-toast";
import { useLogout } from "@/hooks/queryhooks/useLogout";
import { useDeleteAccount } from "@/hooks/queryhooks/useDeleteAccount";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/features/auth/authSlice";
import { RootState } from "@/store/store";

type ADCProp = {
  variant: string;
};

const AlertDialogComponent = ({ variant }: ADCProp) => {
  const savedUser = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const { mutate: deleteAccount, isPending: isDeletingAccount } =
    useDeleteAccount();

  const handleLogOut = () => {
    logout(undefined, {
      onSuccess: (data) => {
        toast({ description: data?.message });
        dispatch(logoutUser());
        navigate("/");
      },
      onError: (error) => {
        toast({
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  const handleDeleteAccount = () => {
    if (savedUser) {
      deleteAccount(savedUser?.id, {
        onSuccess: (data) => {
          toast({ description: data?.message });
        },
        onError: (error) => {
          toast({
            description: error.message,
            variant: "destructive",
          });
        },
      });
    }
  };
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
          {variant === "delete" && (
            <AlertDialogAction
              onClick={handleDeleteAccount}
              disabled={isDeletingAccount}
              aria-disabled={isDeletingAccount}
              className='bg-red-500'>
              Delete
            </AlertDialogAction>
          )}
          {variant === "logout" && (
            <AlertDialogAction
              onClick={handleLogOut}
              disabled={isLoggingOut}
              aria-disabled={isLoggingOut}>
              Log out
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
