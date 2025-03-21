import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Spots from "../../components/Spots/Spots";

function Home() {

      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch("http://localhost:8000/api/products") // API-endpoint för produkter
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error fetching products:", error));
      }, []);
  
  return (
    <>
      <Hero></Hero>
      <Spots products={products}></Spots>
      <ProductGrid products={products}></ProductGrid>
    </>
  );
}

export default Home;
