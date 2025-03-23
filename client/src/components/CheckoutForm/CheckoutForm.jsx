import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  return (
    <>
      <h2 className={styles.formTitle}>Kunduppgifter</h2>
      <form action="" className={styles.checkoutForm}>
        <div className={styles.nameContainer}>
          <div>
            <label htmlFor="firstName">Förnamn</label>
            <input type="text" name="firstName" id="" />
          </div>
          <div>
            <label htmlFor="lastName">Efternamn</label>
            <input type="text" name="firstName" id="" />
          </div>
          <div>
            <label htmlFor="email">E-post</label>
            <input type="text" name="firstName" id="" />
          </div>
        </div>
        <fieldset className={styles.fieldsetCheckout}>
          <legend>Adress</legend>
          <div>
            <label htmlFor="street">Gata</label>
            <input className={styles.streetInput} type="text" name="street" id=""/>
          </div>
          <div>
            <label htmlFor="postalcode">Postnummer</label>
            <input className={styles.postalInput} type="text" name="firstName" id="" />
          </div>
          <div>
            <label htmlFor="city">Stad</label>
            <input className={styles.cityInput} type="text" name="firstName" id="" />
          </div>
        </fieldset>
        <label >
          <input className={styles.newsletterCheckbox} type="checkbox" />
          Jag vill ta emot nyhetsbrev
        </label>
        <button>Köp</button>
      </form>
    </>
  );
}
