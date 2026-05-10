export const loadCartFromStorage = () => {

    try {
  
      const cartData = localStorage.getItem("cartItems");
  
      if (!cartData) {
        return [];
      }
  
      return JSON.parse(cartData);
  
    } catch (error) {
  
      console.error("Failed to load cart", error);
  
      return [];
    }
  };
  
  export const saveCartToStorage = (cartItems) => {
  
    try {
  
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
      );
  
    } catch (error) {
  
      console.error("Failed to save cart", error);
    }
  };