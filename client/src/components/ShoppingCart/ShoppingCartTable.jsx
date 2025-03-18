import styles from "./ShoppingCartTable.module.css";


export default function ShoppingCartTable() {

  return (
// TODO gör dynamisk fixa layout
<article>
<ul className={styles.checkoutItems}>
  <div>
    <li>
      <a href="/products/svart-t-shirt">1 x Svart T-Shirt</a>
      <span>199 SEK</span>
    </li>
    199 SEK
  </div>
  <div>
    <li>
      <a href="/products/vit-t-shirt">2 x Vit T-Shirt</a>
      <span>398 SEK</span>
    </li>
    199 SEK
  </div>
</ul>
<table className={styles.checkoutProductTable}>
  <thead>
    <tr>
      <th>Produkt</th>
      <th>Antal</th>
      <th>Pris</th>
      <th>Totalt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Svart T-shirt</td>
      <td>1</td>
      <td>199 kr</td>
      <td>199 kr</td>
    </tr>
    <tr>
      <td>Vit T-shirt</td>
      <td>2</td>
      <td>199 kr</td>
      <td>398 kr</td>
    </tr>
  </tbody>
</table>
</article>

  )
}

