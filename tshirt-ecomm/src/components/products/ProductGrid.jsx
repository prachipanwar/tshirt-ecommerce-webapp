import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const ProductGrid = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  if (!products.length) {
    return (
      <div className="flex h-60 items-center justify-center rounded-lg border bg-white">
        <p className="text-lg text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.slice(0, visibleCount).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {visibleCount < products.length && (
        <div className="mt-2 flex justify-center">
          <Button className="bg-rose-400" onClick={() => setVisibleCount((prev) => prev + 8)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
