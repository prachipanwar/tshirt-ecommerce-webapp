import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const isOutOfStock = cartItem?.quantity >= product.quantity;
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-3">
        <div>
          <h3 className="line-clamp-1 text-base font-semibold">{product.name}</h3>

          <p className="text-sm text-gray-500">{product.type}</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="text-lg font-bold">₹ {product.price}</p>

          <Button
            className="cursor-pointer"
            disabled={isOutOfStock}
            onClick={() => dispatch(addToCart(product))}
          >
            {isOutOfStock ? "Out of Stock" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
