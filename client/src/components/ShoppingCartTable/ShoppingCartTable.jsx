import { Trash } from "react-bootstrap-icons";
import styles from "./ShoppingCartTable.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ShoppingCartTable() {
  
  //TODO från kassan, skapa kassa
// const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Svart T-shirt", quantity: 1, price: 199 },
//     { id: 2, name: "Vit T-shirt", quantity: 2, price: 199 },
//   ]);

  const {cartItems, updateQuantity, removeItem, getTotalPrice} = useCart();

  // const updateQuantity = (id, newQuantity) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
  //     )
  //   );
  // };
//TODO påverkar kassan
  // const removeItem = (id) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  return (
    <article>
      <ul className={styles.shoppingCartList}>
        {cartItems.map((item) => (
          <li key={item.product_SKU}>
            <div>
            <Link to={`/products/${item.product_slug}`}>
              {item.quantity} x {item.product_name}
            </Link>
            <p>{item.product_price}</p>
            </div>
            <div>
            <span>{item.product_price * item.quantity} SEK</span>
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
              <td>{item.product_price * item.quantity} SEK</td>
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
      <h3>Totalt: {getTotalPrice()} SEK</h3>
    </article>
  );
}
