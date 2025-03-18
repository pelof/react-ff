import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const db = new Database("./db/freakyfashion.db", {
  verbose: console.log,
});

// const express = require ("express"); //TODO: behövs den här raden?
const app = express();
const port = 8000;

app.use(cors()); // Aktivera CORS för alla domäner

//för grid och sök
app.get("/api/products", (req, res) => {
  // Hämta alla rader från students-tabellen
  const products = db.prepare("SELECT * FROM freakyfashion_stock").all();

  res.json(products);
});

//för productDetails
app.get("/api/products/:slug", (req, res) => {
  const productSlug = req.params.slug;

  const product = db
    .prepare("SELECT * FROM freakyfashion_stock WHERE product_slug = ?")
    .get(productSlug);

  if (!product) {
    res.status(404).send();
    return;
  }
  res.json(product);
});

// för lägga till en produkt


// för delete från produktlista
app.delete("/api/products/:sku", (req, res) => {
  const { sku } = req.params;

  const stmt = db.prepare("DELETE FROM freakyfashion_stock WHERE product_SKU = ?");
  const result = stmt.run(sku);

  if (result.changes > 0) {
    res.status(200).json({ message: "Produkt raderad"});
  } else {
    res.status(404).json({ message: "Produkt hittades inte" });
  }
});

app.listen(port, () => {
  console.log(`Servern startad på port ${port}`);
});
