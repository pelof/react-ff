import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import { useCart } from "../../context/CartContext";
import ProductDetailContent from "../../components/ProductDetailContent/ProductDetailContent";

function ProductDetails() {
  // Kan man flytta bort lite i egna komponenter?
  
  const { addToCart } = useCart();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//TODO fetchanrop skulle kunna sparas som egna komponenter, typ useFetchProduct
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
      <ProductDetailContent product={product} addToCart={addToCart}/>
      <SimilarProducts />
    </>
  );
}

export default ProductDetails;
