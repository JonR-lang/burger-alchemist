import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type RFCProp = {
  variant: string;
  showAlert?: boolean;
  setShowAlert: (showAlert: boolean) => void;
};
//RFC stands for Remove From Cart!

const AlertDialogTwo = ({ variant, showAlert, setShowAlert }: RFCProp) => {
  const handleClick = () => {
    setShowAlert(false);
  };

  return (
    <div className='' onClick={() => setShowAlert(false)}>
      <AlertDialog open={showAlert}>
        <AlertDialogContent
          className='w-[90%] rounded-lg max-w-md'
          onClick={(e) => e.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Item from Cart?</AlertDialogTitle>
            <AlertDialogDescription>
              {variant === "remove"
                ? "Are you sure you want to remove this sumptous burger from your needing cart?"
                : "This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className={variant === "remove" ? "bg-red-500" : undefined}
              onClick={() => {
                handleClick();
              }}>
              {variant === "remove" && "Remove"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogTwo;
