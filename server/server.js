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
app.use(express.json());

//TODO se till att man inte kan se produkter som inte är published
//för grid och sök
app.get("/api/products", (req, res) => {
  try {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const searchQuery = req.query.q?.toLowerCase(); //Hämta sökterm från query om den finns

  let products;
  if (searchQuery) {
    products = db
      .prepare(
        "SELECT * FROM freakyfashion_stock WHERE LOWER(product_name) LIKE ? AND product_published <= ?" // Stoppa SQL-injection med LIKE
      )
      .all(`%${searchQuery}%`, today);

  } else {
    // Hämta alla rader från students-tabellen
    products = db.prepare("SELECT * FROM freakyfashion_stock WHERE product_published <= ?").all(today);

  }
  res.json(products || []); //Skicka tillbaks produkter eller tom sträng om products är null
} catch (error) {
  console.error("Fel vid hämtning av produkter:", error);
  res.status(500).json({ error: "Ett fel uppstod vid hämtning av produkter."});
}
});

//för productDetails
app.get("/api/products/:slug", (req, res) => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const productSlug = req.params.slug;

  const product = db
    .prepare("SELECT * FROM freakyfashion_stock WHERE product_slug = ? AND product_published <= ?")
    .get(productSlug, today);

  if (!product) {
    return res.status(404).json({ error: "Produkten finns inte eller är inte publicerad ännu" });
  }
  res.json(product);
});

// för lägga till en produkt
app.post("/api/products", (req, res) => {
  const { name, description, image, brand, SKU, price, published } = req.body;

  if (
    !name ||
    !description ||
    !image ||
    !brand ||
    !SKU ||
    !price ||
    !published
  ) {
    return res.status(400).json({ error: "Alla fält måste vara ifyllda" });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO freakyfashion_stock (product_name, product_description, product_image, product_brand, product_SKU, product_price, product_published, product_slug) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const slug = generateSlug(name)

    stmt.run(name, description, image, brand, SKU, price, published, slug);

    res.status(201).json({ message: "Produkt tillagd!" });
  } catch (error) {
    console.error("Fel vid tillägg av produkt:", error);
    res.status(500).json({ error: "Något gick fel vid sparandet" });
  }
});

function generateSlug(productName) {
  return productName
    .toLowerCase()
    .replace(/å/g,'a')
    .replace(/ä/g,'a')
    .replace(/ö/g,'o')
    .replace(/[^a-z0-9]+/g, '-') // Byt ut specialtecken mot "-"
    .replace(/^-|-$/g, ''); // Ta bort "-" i början eller slutet
}

// för delete från produktlista
app.delete("/api/products/:sku", (req, res) => {
  const { sku } = req.params;

  const stmt = db.prepare(
    "DELETE FROM freakyfashion_stock WHERE product_SKU = ?"
  );
  const result = stmt.run(sku);

  if (result.changes > 0) {
    res.status(200).json({ message: "Produkt raderad" });
  } else {
    res.status(404).json({ message: "Produkt hittades inte" });
  }
});

app.listen(port, () => {
  console.log(`Servern startad på port ${port}`);
});
