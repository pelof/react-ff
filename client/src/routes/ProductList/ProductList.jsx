import { useEffect, useState } from "react";
import ProductListTable from "../../components/ProductListTable/ProductListTable";
import styles from "./ProductList.module.css"
import { Link } from "react-router-dom";


function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products") // API-endpoint för produkter
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>

      <header className={styles.adminHead}>
      <h1>Freaky Fashion inventariekontroll</h1>
    </header>
    <main className={styles.adminPage}>
      <aside className={styles.adminSidebar}>Produkter</aside>
      <section className={styles.adminContents}>
        <div>
          <h1>Produkter</h1>
          <div>
          <Link to="products/new" id="load-products-button" className={styles.loadProductButton}> Ladda produkter </Link>
          <Link to="../admin/products/new" className={styles.newProductButton}> Ny produkt </Link>       
          </div>
        </div>
        <ProductListTable products={products} setProducts={setProducts}></ProductListTable>
      </section>
    </main>
    </>
  );
}

export default ProductList;
