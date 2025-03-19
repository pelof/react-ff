import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ShoppingCartTable from "../../components/ShoppingCart/ShoppingCartTable";

function Checkout() {
  return (
    <>
      <Header></Header>
      <ShoppingCartTable></ShoppingCartTable>
      <h1>Checkout</h1>
      <CheckoutForm></CheckoutForm>
      <Footer></Footer>
    </>
  );
}

export default Checkout;
