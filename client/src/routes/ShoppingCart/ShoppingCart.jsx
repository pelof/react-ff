import { Link } from "react-router-dom";
import ShoppingCartTable from "../../components/ShoppingCartTable/ShoppingCartTable";
import styles from "./ShoppingCart.module.css"

function ShoppingCart() {
  return (
    <>
      <h1 className={styles.shoppingCartTitle}>Varukorgen</h1>
      <ShoppingCartTable />
      <div className={styles.toCheckoutContainer}>
      <Link to="/checkout" className={styles.toCheckout} >Till Kassan</Link>
      </div>
    </>
  );
}

export default ShoppingCart;
