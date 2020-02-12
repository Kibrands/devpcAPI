const { User, Product, Cart, Purchase } = require("./models.js");

exports.readProducts = (req, res) => {
    Product.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}