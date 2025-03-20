import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SimilarProducts.module.css"; 

export default function SimilarProducts() {
    const [slideIndex, setSlideIndex] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products") // API-endpoint för produkter
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8))) // Begränsar till 8 produkter
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const totalSlides = products.length;
  
  // Hanterar slideförflyttning
  const changeSlide = (n) => {
      let newIndex = slideIndex + n;
      
      if (newIndex > totalSlides - 3) {
          newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = totalSlides - 3;
        }
        setSlideIndex(newIndex);
    };
    
    return(
        <section className={styles.liknandeProdukter}>
      <h2>Liknande produkter</h2>
      <div className={styles.slideshowContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${slideIndex * 33.33}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className={styles.slide}>
              <Link to={`/products/${product.product_slug}`} className={styles.link}>
                <img src={product.product_image} alt={product.product_name} />
                <div className={styles.liknandeProdukterInfo}>
                  <h2>{product.product_name}</h2>
                  <h2>{product.product_price} SEK</h2>
                </div>
                <div className={styles.brandname}>{product.product_brand}</div>
              </Link>
            </div>
          ))}
        </div>
      {/* Navigeringsknappar */}
      <button className={styles.prev} onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className={styles.next} onClick={() => changeSlide(1)}>
        &#10095;
      </button>
      </div>

    </section>
    );
}