import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //Lägg till produkt i cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product_SKU === product.product_SKU);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product_SKU === product.product_SKU
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  //Uppdatera antal produkter
  const updateQuantity = (product_SKU, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_SKU === product_SKU ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  //Ta bort en produkt

  const removeItem = (product_SKU) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product_SKU !== product_SKU));
  };

  //TTotalt pris
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product_price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


//Custom hook för att använda varukorgen
export const useCart = () => {
    return useContext(CartContext);
}