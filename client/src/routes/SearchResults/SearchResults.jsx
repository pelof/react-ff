import { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchResults.module.css";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams(); //Hämtar query-parametrar från URL
  const query = searchParams.get("q") || ""; //Hämta sökterm från URL, annars tom sträng

  useEffect(() => {
    //ingen query inskickad i async
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?q=${query}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <>
      <h2 className={styles.searchResultsTitle}>
        {products.length > 0
          ? `Hittade ${products.length} produkter`
          : "Inga produkter hittades"}
      </h2>
      <ProductGrid products={products}></ProductGrid>
    </>
  );
}

export default SearchResults;

//TODO: extra visa nyheter först
//TODO: om tom query skriv "Skriv något i sökfältet", annars hämtas alla produkter då alla matchar tom sträng