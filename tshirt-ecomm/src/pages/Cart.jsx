import { useSelector,useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { increaseQuantity,decreaseQuantity,removeFromCart } from "@/features/cart/cartSlice";

const Cart = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

        {!cartItems.length ? (
          <div className="rounded-lg border bg-white p-10 text-center">
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-lg border bg-white p-4"
              >
                {/* Image */}
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="h-24 w-24 rounded-md object-cover"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>

                  <p className="text-gray-500">₹ {item.price}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <Button onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>

                    <span>{item.quantity}</span>

                    <Button onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                  </div>
                </div>
                <Button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </Button>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-end">
              <div className="rounded-lg border bg-white p-6">
                <h2 className="text-xl font-bold">Total: ₹ {totalAmount}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div></>
   
  );
};

export default Cart;
