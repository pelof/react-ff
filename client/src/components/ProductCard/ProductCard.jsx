import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const publishedDate = new Date(product.product_published);
  const currentDate = new Date();
  const diffDays = (currentDate - publishedDate) / (1000 * 60 * 60 * 24); // Beräknar dagar sedan publicering

  return (
    <article className={styles.productCard}>
      <Link to={`/products/${product.product_slug}`}>
        <div className={styles.produktImg}>
          <img src={product.product_image} alt={product.product_name} />
          <i className="bi bi-heart"></i>

          {diffDays <= 7 && <div className={styles.nyhet}>Nyhet</div>} 
        </div>
        <div>
          <h2>{product.product_name}</h2>
          {product.product_price} kr
        </div>
        <div className={styles.brandname}>{product.product_brand}</div>
      </Link>
    </article>
  );
}
