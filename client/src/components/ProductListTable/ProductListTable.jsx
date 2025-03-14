import { useState } from "react";
import styles from "./ProductListTable.module.css";
import { Trash } from "react-bootstrap-icons";

export default function ProductListTable({ products, setProducts }) {
  //TODO lägg till popup när man deletear
  // TODO hantera fel på UI-nivå
  // TODO loading state?
  const handleDelete = async (productSKU) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/${productSKU}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Misslyckades med att radera produkt");
      }

      // Optimistisk uppdatering av state - filtrerar bort den raderade produkten med callback-funktion
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.product_SKU !== productSKU)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <table className={styles.productList}>
      <thead>
        <tr>
          <th>Namn</th>
          <th>SKU</th>
          <th>Pris</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.product_SKU}>
            <td>{product.product_name}</td>
            <td>{product.product_SKU}</td>
            <td>{product.product_price} kr</td>
            <td>
              <Trash
                className={styles.trashIcon}
                onClick={() => handleDelete(product.product_SKU)}
              ></Trash>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
