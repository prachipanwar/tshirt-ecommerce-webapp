import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageURL}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">{product.name}</h3>

          <p className="text-sm text-gray-500">{product.type}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">₹ {product.price}</p>

          <Button onClick={() => dispatch(addToCart(product))}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
