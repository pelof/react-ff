import { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchResults.module.css";

function SearchResults() {
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams(); //Hämtar query-parametrar från URL
    const query = searchParams.get("q") || ""; //Hämta sökterm från URL, annars tom sträng

    useEffect(() => {

//ingen query inskickad i async
    const fetchProducts = async () => {
      try {
        if (query.length > 2) {
          const response = await fetch(`/api/products?search=${query}`);
          const data = await response.json();
          setProducts(data);
        } else {
          setProducts([]); //Rensa listan om söktermen är för kort.
        }
      } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
      }
    };

    fetchProducts();
    }, [query]);

  return (
    <>
      <h2 className={styles.searchResultsTitle}>{products.length > 0 ? `Hittade ${products.length} produkter` : "Inga produkter hittades"}</h2>
      <ProductGrid products={products}></ProductGrid>
    </>
  );
}

export default SearchResults;

//TODO: sökfunktionen ska ju finnas i header. söksidan ska ba visa resultat