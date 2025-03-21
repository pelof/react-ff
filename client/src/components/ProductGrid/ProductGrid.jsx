import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({products}) {

  const gridProducts = products.slice(0, 8);

  return (
    <section className={styles.productGrid}>
      {gridProducts.map((product) => (
        <ProductCard key={product.product_SKU} product={product} />
      ))}
    </section>
  );
}
