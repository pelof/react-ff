import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products") // API-endpoint för produkter
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8))) // Begränsar till 8 produkter
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.product_SKU} product={product} />
      ))}
    </section>
  );
}
