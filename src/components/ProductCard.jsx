import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(product.id);

  return (
    <div className="product-card">
      <button
        className={`fav-badge ${fav ? "fav-badge-active" : ""}`}
        onClick={() => toggleFavorite(product)}
        title={fav ? "Remove from favorites" : "Add to favorites"}
      >
        {fav ? "★" : "☆"}
      </button>
      <div className="product-card-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <h3 className="product-title">
        {product.title.length > 60
          ? product.title.slice(0, 57) + "..."
          : product.title}
      </h3>
      <p className="product-price">${product.price}</p>
      <Link to={`/products/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}
