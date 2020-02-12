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

// READ ONE PRODUCT
router.get("/products/:id", (req, res) => {
    Product.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// DELETE ONE PRODUCT
router.delete("/products/:id", (req, res) => {
    Product.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// UPDATE ONE PRODUCT
router.put("/products/:id",  (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { title: req.body.title, price: req.body.price, 
            description: req.body.description, stock: req.body.stock, image: req.body.image } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
});

// POST/CREATE ONE PRODUCT
router.post("/products", (req, res) => {
    const Product = new Product({ title: req.body.title, price: req.body.price,
         description: req.body.description, stock: req.body.stock, image: req.body.image });
    User.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// READ ALL USERS
router.get("/users", (req, res) => {
    User.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// READ ONE USER
router.get("/users/:id", (req, res) => {
    User.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// DELETE ONE USER
router.delete("/users/:id", (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// UPDATE ONE USER
router.put("/users/:id",  (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { title: req.body.title, price: req.body.price, 
            description: req.body.description, stock: req.body.stock, image: req.body.image } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
});

// POST/CREATE ONE USER
router.post("/users", (req, res) => {
    const User = new Product({ title: req.body.title, price: req.body.price,
         description: req.body.description, stock: req.body.stock, image: req.body.image });
         User.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;