import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-violet-400 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <Link to="/">
          <h1 className="text-xl font-bold tracking-tight">
            Comfy Tee's
          </h1>
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingCart className="h-7 w-7" />
          {totalCartItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
              {totalCartItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;