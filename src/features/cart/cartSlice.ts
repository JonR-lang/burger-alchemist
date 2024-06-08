import { createSlice } from "@reduxjs/toolkit";

//TYPES
export type CartItem = {
  product: string;
  name: string;
  price: number;
  image: string;
  totalRatings: number;
  quantity: number;
  subtotal: number;
  size?: string;
};

export type CartState = {
  items: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

////////
const cart: CartState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : {
      items: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
    };

const initialState: CartState = {
  items: cart.items,
  cartTotalQuantity: cart.cartTotalQuantity,
  cartTotalAmount: cart.cartTotalAmount,
};

const recalculateCartTotal = (state: CartState) => {
  state.cartTotalAmount = state.items.reduce(
    (total, item) => total + item.subtotal,
    0
  );
  localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex((i) => i.product === item.product);

      if (index < 0) {
        state.items.push(item);
        state.cartTotalAmount += item.subtotal;
        state.cartTotalQuantity++;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    modifyQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const index = state.items.findIndex((i) => i.product === product);
      //Always remember that if the index is not found, -1 is returned.
      if (index !== -1) {
        state.items[index].quantity = quantity;
        state.items[index].subtotal = quantity * state.items[index].price;
      }
      recalculateCartTotal(state);
    },

    removeFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((i) => i.product !== item.product);
      state.cartTotalAmount -= item.subtotal;
      state.cartTotalQuantity--;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.items = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, modifyQuantity, clearCart } =
  cartSlice.actions;
