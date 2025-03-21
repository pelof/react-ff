import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero({ products, heroImage }) {
  const random = Math.floor(Math.random() * products.length);
  const heroProduct = products[random];

  return (
    <>
      <section className={styles.hero}>
        <Link to={`/products/${heroProduct.product_slug}`}>
          <img src={heroImage} alt={heroProduct.product_name} />
        </Link>
        <div>
          <h1>{heroProduct.product_name}</h1>
          <p>{heroProduct.product_description}</p>
        </div>
      </section>
    </>
  );
}
