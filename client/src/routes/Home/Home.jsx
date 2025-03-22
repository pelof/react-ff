import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Spots from "../../components/Spots/Spots";
import image from "../../assets/heroimage.svg";

function Home() {
  const heroImage = image;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/products") // API-endpoint för produkter
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const gridProducts = products.slice(0 , 8);

  //TODO styla
  // Om inte products har laddat klart visas Laddar... endast
  if (loading) {
    return <div>Laddar...</div>;
  }

  return (
    <>
      <Hero products={products} heroImage={heroImage}></Hero>
      <Spots products={products}></Spots>
      <ProductGrid products={gridProducts}></ProductGrid>
    </>
  );
}

export default Home;
