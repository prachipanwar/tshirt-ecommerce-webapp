export const getUniqueValues = (products, key) => {
    return [...new Set(products.map((product) => product[key]))];
  };