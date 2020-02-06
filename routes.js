const { User, Product, Cart, Purchase } = require("./models.js");
const express = require("express");
const router = express.Router();

// READ ALL PRODUCTS
router.get("/products", (req, res) => {
    Product.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;