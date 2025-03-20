import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ShoppingCartTable from "../../components/ShoppingCart/ShoppingCartTable";

function Checkout() {
  return (
    <>
      <ShoppingCartTable></ShoppingCartTable>
      <h1>Checkout</h1>
      <CheckoutForm></CheckoutForm>
    </>
  );
}

export default Checkout;
