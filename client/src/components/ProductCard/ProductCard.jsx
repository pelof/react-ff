import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Heart, HeartFill } from "react-bootstrap-icons";

export default function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorited(!isFavorited);
  }

  const publishedDate = new Date(product.product_published);
  const currentDate = new Date();
  const diffDays = (currentDate - publishedDate) / (1000 * 60 * 60 * 24); // Beräknar dagar sedan publicering

  return (
    <article className={styles.productCard}>
      <Link to={`/products/${product.product_slug}`}>
        <div className={styles.productImg}>
          <img src={product.product_image} alt={product.product_name}/>
          <div className={styles.heartIcon} onClick={toggleFavorite}>
            {isFavorited ? (
              <HeartFill/>
            ) : (
              <Heart/>
            )}
          </div>

          {diffDays <= 7 && <div className={styles.nyhet}>Nyhet</div>}
        </div>
        
        <div className={styles.productCardInfo}>
          <h2>{product.product_name}</h2>
          {product.product_price} kr
        </div>
        <div className={styles.brandname}>{product.product_brand}</div>
      </Link>
    </article>
  );
}
