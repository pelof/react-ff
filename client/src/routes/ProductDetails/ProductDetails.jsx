import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./ProductDetails.module.css";
import { Heart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

function ProductDetails() {

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


if (loading) return <p>Laddar produkt...</p>;
if (error) return <p>Fel: {error}</p>;

  return (
    <>
      <Header></Header>
      <section className={styles.productDetailContent}>
        <div className={styles.productDetailContentImage}>
          <img src="https://placehold.co/600x700" alt="Svart T-shirt" />
          <Heart className="bi bi-heart"></Heart>
        </div>
        <div className={styles.productDetailContentDescription}>
          <h2>{product.product_name}</h2>
          <div className={styles.brandname}>{product.product_brandname}</div>
          <p>
            {product.product_description}
          </p>
          {product.product_price} SEK
          <div>
            <button type="button">Lägg i varukorgen</button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ProductDetails;
