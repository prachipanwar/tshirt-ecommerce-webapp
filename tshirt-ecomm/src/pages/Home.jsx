import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import Navbar from "@/components/layout/Navbar";
import SearchBar from "@/components/filters/SearchBar";
import FilterSidebar from "@/components/filters/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";


const Home = () => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.products);
  const {
    searchQuery,
    selectedGenders,
    selectedColors,
    selectedTypes,
    selectedPriceRanges,
  } = useSelector((state) => state.filters);
  const filteredProducts = items.filter((product) => {

    // SEARCH
    const searchableText = `
      ${product.name}
      ${product.color}
      ${product.type}
    `.toLowerCase();
  
    const matchesSearch =
      searchableText.includes(
        searchQuery.toLowerCase()
      );
  
    // GENDER
    const matchesGender =
      selectedGenders.length === 0 ||
      selectedGenders.includes(product.gender);
  
    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.includes(product.color);
    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type);
  
    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some((range) => {
  
        if (range === "0-250") {
          return product.price <= 250;
        }
  
        if (range === "251-450") {
          return (
            product.price >= 251 &&
            product.price <= 450
          );
        }
  
        if (range === "451+") {
          return product.price >= 451;
        }
  
        return false;
      });
  
    return (
      matchesSearch &&
      matchesGender &&
      matchesColor &&
      matchesType &&
      matchesPrice
    );
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          <section className="flex-1">
            <ProductGrid products={filteredProducts} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
