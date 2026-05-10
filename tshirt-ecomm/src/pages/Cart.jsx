import { useSelector,useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { increaseQuantity,decreaseQuantity,removeFromCart } from "@/features/cart/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleIncrease = (item) => {

    if (item.quantity >= item.stock) {
  
      toast.error("Maximum available quantity reached");
  
      return;
    }
  
    dispatch(increaseQuantity(item.id));
  };
  

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
                className="flex flex-col gap-4
                rounded-lg border bg-white p-4
                sm:flex-row sm:items-center"
              >
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="h-40 w-full rounded-md object-cover
                  sm:h-24 sm:w-24"
                />
                <div className="flex flex-1 flex-col gap-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>

                  <p className="text-gray-500">₹ {item.price}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <Button onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>

                    <span>{item.quantity}</span>

                    <Button onClick={() => handleIncrease(item)}>+</Button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                <Button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </Button>
                </div>
              </div>
            ))}
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
