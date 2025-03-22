import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({products}) {


  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.product_SKU} product={product} />
      ))}
    </section>
  );
}
