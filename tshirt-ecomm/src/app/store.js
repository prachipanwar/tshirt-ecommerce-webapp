import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productSlice";
import filterReducer from "../features/filters/filterSlice";
import { saveCartToStorage } from "../utils/cartStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filters: filterReducer,
  },
});

store.subscribe(() => {

    saveCartToStorage(
      store.getState().cart.cartItems
    );
  });