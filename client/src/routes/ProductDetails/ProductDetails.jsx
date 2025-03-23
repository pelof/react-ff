import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  // Kan man flytta bort lite i egna komponenter?
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorited(!isFavorited);
  };
  const { addToCart } = useCart();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av produkt");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]); //Kör  om slug ändras
  useEffect(() => {
    if (product) {
      document.title = `${product.product_name} - Freaky Fashion`;
    }
  }, [product]);

  if (loading) return <p>Laddar produkt...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <>
      {/* TODO: borde vara egen komponent? */}
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
            <button type="button" onClick={() => addToCart(product)}>Lägg i varukorgen</button>
          </div>
        </div>
      </section>
      <SimilarProducts />
    </>
  );
}

export default ProductDetails;
