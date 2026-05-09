import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const product = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      // Product already in cart
      if (existingItem) {

        if (existingItem.quantity < product.quantity) {
          existingItem.quantity += 1;
        }

      } else {

        state.cartItems.push({
          id: product.id,
          name: product.name,
          imageURL: product.imageURL,
          price: product.price,
          quantity: 1,
          stock: product.quantity,
        });
      }
    },
    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity < item.stock) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;