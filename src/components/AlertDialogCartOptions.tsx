import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "@/features/cart/cartSlice";
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
  product?: {
    productId: string;
    subtotal: number;
  };
};
//RFC stands for Remove From Cart!

const AlertDialogCartOptions = ({
  variant,
  showAlert,
  setShowAlert,
  product,
}: RFCProp) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(
      removeFromCart({
        product: product?.productId,
        subtotal: product?.subtotal,
      })
    );
    setShowAlert(false);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowAlert(false);
  };

  return (
    <div className='' onClick={() => setShowAlert(false)}>
      <AlertDialog open={showAlert}>
        <AlertDialogContent
          className='w-[90%] rounded-lg max-w-md'
          onClick={(e) => e.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {variant === "reomve" ? "Remove item from cart?" : "Clear cart?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {variant === "remove"
                ? "Are you sure you want to remove this sumptous burger from your needing cart?"
                : "This action cannot be undone. This will clear all the items in your cart."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className={"bg-red-500"}
              onClick={
                variant === "remove" ? handleRemoveFromCart : handleClearCart
              }>
              {variant === "remove" && "Remove"}
              {variant === "clear" && "Clear"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogCartOptions;
