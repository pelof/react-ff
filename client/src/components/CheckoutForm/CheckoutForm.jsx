import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  return (
    <>
      <h2 className={styles.formTitle}>Kunduppgifter</h2>
      <form action="" className={styles.checkoutForm}>
        <div className={styles.nameContainer}>
          <div>
            <label htmlFor="firstName">Förnamn</label>
            <input type="text" name="firstName" id="firstName" required />
          </div>
          <div>
            <label htmlFor="lastName">Efternamn</label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
          <div>
            <label htmlFor="email">E-post</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
        <fieldset className={styles.fieldsetCheckout}>
          <legend>Adress</legend>
          <div>
            <label htmlFor="street">Gata</label>
            <input
              className={styles.streetInput}
              type="text"
              name="street"
              id="street"
              required
            />
          </div>
          <div>
            <label htmlFor="postalcode">Postnummer</label>
            <input
              className={styles.postalInput}
              type="text"
              name="postalcode"
              id="postalcode"
              pattern="[0-9]{5}" 
              title="Postnummer ska vara 5 siffror"
              required
            />
          </div>
          <div>
            <label htmlFor="city">Stad</label>
            <input
              className={styles.cityInput}
              type="text"
              name="city"
              id="city"
              required
            />
          </div>
        </fieldset>
        <label className={styles.newsLetterLabel}>
          <input type="checkbox"
            name="newsletter"
            id="newsletter" />
          Jag vill ta emot nyhetsbrev
        </label>
        <button type="button" aria-label="Genomför köp">Köp</button>
      </form>
    </>
  );
}
