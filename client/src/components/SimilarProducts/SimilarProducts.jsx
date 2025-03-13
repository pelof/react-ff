import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SimilarProducts.module.css"; 

export default function SimilarProducts() {
    const [slideIndex, setSlideIndex] = useState(0);


  // TODO Simulerade produkter (kan ersättas med data från API)
  const products = Array(8).fill({
    name: "Svart T-shirt",
    price: "199 SEK",
    brand: "Levis",
    image: "https://placehold.co/600x700",
    link: "/product_details",
  });

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
              <Link to={product.link} className={styles.link}>
                <img src={product.image} alt={product.name} />
                <div className={styles.liknandeProdukterInfo}>
                  <h2>{product.name}</h2>
                  <h2>{product.price}</h2>
                </div>
                <div className={styles.brandname}>{product.brand}</div>
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