const BASE_URL =
  "https://my-json-server.typicode.com/Gulzeesh/demo/products";

export const fetchProducts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};