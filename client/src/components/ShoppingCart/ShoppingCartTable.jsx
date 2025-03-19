import { Trash } from "react-bootstrap-icons";
import styles from "./ShoppingCartTable.module.css";
import { useState } from "react";

export default function ShoppingCartTable() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Svart T-shirt", quantity: 1, price: 199 },
    { id: 2, name: "Vit T-shirt", quantity: 2, price: 199 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    // TODO gör dynamisk fixa layout. kanske ta bort div?
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
            <td>
              <input type="number" value={item.quantity} min="1" onChange={(e) => updateQuantity(item.id, Number(e.target.value))}/>{" "}
              <button onClick={() => removeItem(item.id)}>
                {" "}
                <Trash></Trash>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
