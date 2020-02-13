const cors = require('cors');
const express = require("express");
const controller = require("./controllers.js");
const router = express.Router();

// READ ALL PRODUCTS
router.get("/products", cors(), controller.readProducts);

// READ ONE PRODUCT
router.get("/products/:id", cors(), controller.readProduct);

// DELETE ONE PRODUCT
router.delete("/products/:id", cors(), controller.deleteProduct);

// UPDATE ONE PRODUCT
router.put("/products/:id", cors(), controller.putProduct);

// CREATE ONE PRODUCT
router.post("/products", cors(), controller.postProduct);

// READ ALL USERS
router.get("/users", cors(), controller.readUsers);

// READ ONE USER
router.get("/users/:id", cors(), controller.readUser);

// DELETE ONE USER
router.delete("/users/:id", cors(), controller.deleteUser);

// UPDATE ONE USER
router.put("/users/:id", cors(), controller.putUser);

// CREATE ONE USER
router.post("/users", cors(), controller.postUser);

// READ ALL CARTS
router.get("/carts", cors(), controller.readCarts);

// READ ONE CART
router.get("/carts/:id", cors(), controller.readCart);

// DELETE ONE CART
router.delete("/carts/:id", cors(), controller.deleteCart);

// UPDATE ONE CART
router.put("/carts/:id", cors(), controller.putCart);

// CREATE ONE CART
router.post("/carts", cors(), controller.postCart);

// READ ALL PURCHASES
router.get("/purchases", cors(), controller.readPurchases);

// READ ONE PURCHASE
router.get("/purchases/:id", cors(), controller.readPurchase);

// DELETE ONE PURCHASE
router.delete("/purchases/:id", cors(), controller.deletePurchase);

// UPDATE ONE PURCHASE
router.put("/purchases/:id", cors(), controller.putPurchase);

// CREATE ONE PURCHASE
router.post("/purchases", cors(), controller.postPurchase);

module.exports = router;