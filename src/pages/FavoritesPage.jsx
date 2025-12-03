import ProductCard from "../components/ProductCard.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section className="products-page">
      <div className="products-header">
        <h2>Favorites</h2>
      </div>

      {favorites.length === 0 ? (
        <p>You have no favorite products yet. Browse products and add some!</p>
      ) : (
        <div className="products-grid">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
