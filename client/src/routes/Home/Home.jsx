import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Spots from "../../components/Spots/Spots";

function Home() {

      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch("http://localhost:8000/api/products") // API-endpoint för produkter
          .then((response) => response.json())
          .then((data) => setProducts(data.slice(0, 8))) // Begränsar till 8 produkter
          .catch((error) => console.error("Error fetching products:", error));
      }, []);
  
  return (
    <>
      <Header></Header>
      <Spots></Spots>
      <Hero></Hero>
      <ProductGrid products={products}></ProductGrid>
      <Footer></Footer>
    </>
  );
}

export default Home;
