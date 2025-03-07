import express from "express";
import Database from 'better-sqlite3';
import cors from "cors";



const db = new Database('./db/freakyfashion.db', {
  verbose: console.log
});

// const express = require ("express"); //TODO: behövs den här raden?
const app = express();
const port = 8000;

app.use(cors()); // Aktivera CORS för alla domäner

//för grid och sök
app.get("/api/products", (req, res) => {
    // Hämta alla rader från students-tabellen
    const products = db.prepare('SELECT * FROM freakyfashion_stock').all();
  
    res.json(products);
  
  });

//för productDetails
  app.get("/api/products/:id", (req, res) => {

    const productId = req.params.id;

    const product = db.prepare('SELECT * FROM freakyfashion_stock WHERE id = ?').get(productId);

    if (!product) {
        res.status(404).send();
        return;
    }
    res.json(product);
  });

  

app.listen(port, () => {
    console.log(`Servern startad på port ${port}`)
});