import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import styles from "./Search.module.css";

function Search() {
  return (
    <>
      <Header></Header>
      <h2>Hittade 4 produkter</h2>
      <ProductGrid></ProductGrid>
      <Footer></Footer>
    </>
  );
}

export default Search;
