import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ShoppingCartTable from "../../components/ShoppingCartTable/ShoppingCartTable";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <>
      <h1 className={styles.checkoutTitle}>Kassan</h1>

      <ShoppingCartTable></ShoppingCartTable>
      <CheckoutForm></CheckoutForm>
    </>
  );
}

export default Checkout;
