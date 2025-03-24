import { Trash } from "react-bootstrap-icons";
import styles from "./ShoppingCartTable.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ShoppingCartTable() {
  
  const {cartItems, updateQuantity, removeItem, getTotalPrice} = useCart();
//TODO om inte det finns några saker i varukorgen visas "varukorgen är tom"
  return (
    <article>
      <ul className={styles.shoppingCartList}>
        {cartItems.map((item) => (
          <li key={item.product_SKU}>
            <div>
            <Link to={`/products/${item.product_slug}`}>
              {item.quantity} x {item.product_name}
            </Link>
            <p>{item.product_price} SEK</p>
            </div>
            <div className={styles.shoppingCartListRightSide}>
            <span>{(item.product_price * item.quantity).toFixed(2)} SEK</span> {/* toFixed så att det bara kan bli två decimaler */}
            <div>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.product_SKU, Number(e.target.value))}
              />
            <button onClick={() => removeItem(item.product_SKU)}>
              <Trash />
            </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <table className={styles.shoppingCartTable}>
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
            <tr key={item.product_SKU}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.product_price} SEK</td>
              <td>{(item.product_price * item.quantity).toFixed(2)} SEK</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.product_SKU, Number(e.target.value))
                  }
                />
                <button onClick={() => removeItem(item.product_SKU)}>
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className={styles.totalTitle}>Totalt: {getTotalPrice()} SEK</h3>
    </article>
  );
}
