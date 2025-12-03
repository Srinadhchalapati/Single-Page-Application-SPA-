import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Select from "../components/Select.jsx";

const PRODUCTS_URL = "https://fakestoreapi.com/products";
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

export default function ProductsList() {
  const {
    data: products,
    loading,
    error,
  } = useFetch(PRODUCTS_URL);
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch(CATEGORIES_URL);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sort, setSort] = useState("");

  const processedProducts = useMemo(() => {
    if (!products) return [];

    let list = [...products];

    if (categoryFilter) {
      list = list.filter((p) => p.category === categoryFilter);
    }

    if (search) {
      const s = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(s));
    }

    if (sort === "priceLowHigh") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHighLow") {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === "titleAZ") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [products, search, categoryFilter, sort]);

  return (
    <section className="products-page">
      <div className="products-header">
        <h2>Products</h2>
        <div className="products-controls">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search products..."
          />
          <Select
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={categories || []}
            placeholder={
              categoriesLoading
                ? "Loading categories..."
                : categoriesError
                ? "Categories error"
                : "All categories"
            }
          />
          <Select
            value={sort}
            onChange={setSort}
            options={["priceLowHigh", "priceHighLow", "titleAZ"]}
            placeholder="Sort"
          />
        </div>
      </div>

      {(loading || categoriesLoading) && <Loader />}
      {(error || categoriesError) && (
        <ErrorMessage message={error || categoriesError} />
      )}

      {!loading && !error && processedProducts.length === 0 && (
        <p>No products found with current filters.</p>
      )}

      <div className="products-grid">
        {processedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
