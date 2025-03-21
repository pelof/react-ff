import { useEffect, useState } from "react";
import ProductListTable from "../../components/ProductListTable/ProductListTable";
import styles from "./ProductList.module.css"
import { Link } from "react-router-dom";


function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/admin/products") // API-endpoint för produkter
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
        <div>
          <h1>Produktlista</h1>
          <div>
          <Link to="products/new" id="load-products-button" className={styles.loadProductButton}> Ladda produkter </Link>
          <Link to="/admin/products/new" className={styles.newProductButton}> Ny produkt </Link>       
          </div>
        </div>
        <ProductListTable products={products} setProducts={setProducts}></ProductListTable>
    </>
  );
}

export default ProductList;
