import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../features/products/productSlice";

const Home = () => {
    const dispatch = useDispatch();

    const { items, loading } = useSelector((state) => state.products);
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    return (
      <div>
        <h1>Products</h1>
  
        {loading && <p>Loading...</p>}
  
        {items.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    );
  };
  
  export default Home;