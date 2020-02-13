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

module.exports = router;