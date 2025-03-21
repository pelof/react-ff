import { Link } from "react-router-dom";
import styles from "./Spots.module.css";

export default function Spots({ products }) {
  const spotProducts = products.slice(25, 28);

  return (
    <>
      <section className={styles.spots}>
        {spotProducts.map((product) => (
          <div key={product.product_SKU}>
            <Link to={`/products/${product.product_slug}`}>
              <img src={product.product_image} alt={product.product_name} />
              <div className={styles.spotText}>{product.product_name}</div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
