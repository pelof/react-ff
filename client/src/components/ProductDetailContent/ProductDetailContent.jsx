import { useState } from "react";
import styles from "./ProductDetailContent.module.css";
import { Heart, HeartFill } from "react-bootstrap-icons";

export default function ProductDetailContent({
  product,
  addToCart,
}) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorited(!isFavorited);
  };
//TODO heart kan vara knapp 
  return (
    <section className={styles.productDetailContent}>
      <div className={styles.productDetailContentImage}>
        <img src={product.product_image} alt="Svart T-shirt" />
        <div className={styles.heartIcon} onClick={toggleFavorite}>
          {isFavorited ? <HeartFill /> : <Heart />}
        </div>
      </div>
      <div className={styles.productDetailContentDescription}>
        <h2>{product.product_name}</h2>
        <div className={styles.brandname}>{product.product_brand}</div>
        <p>{product.product_description}</p>
        {product.product_price} SEK
        <div>
          <button type="button" onClick={() => addToCart(product)}>
            Lägg i varukorgen
          </button>
        </div>
      </div>
    </section>
  );
}
