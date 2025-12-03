import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Button from "../components/Button.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const fav = product ? isFavorite(product.id) : false;

  return (
    <section className="product-detail-page">
      <div className="detail-header">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {product && (
        <div className="product-detail">
          <div className="product-detail-img-wrapper">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-info">
            <div className="detail-title-row">
              <h2>{product.title}</h2>
              <button
                className={`fav-badge fav-badge-large ${
                  fav ? "fav-badge-active" : ""
                }`}
                onClick={() => toggleFavorite(product)}
              >
                {fav ? "★ Favorite" : "☆ Add to favorites"}
              </button>
            </div>
            <p className="detail-price">${product.price}</p>
            <p className="detail-category">
              Category: <span>{product.category}</span>
            </p>
            <p className="detail-description">{product.description}</p>
            {product.rating && (
              <p className="detail-rating">
                Rating: <strong>{product.rating.rate}</strong> ⭐ (
                {product.rating.count} reviews)
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
