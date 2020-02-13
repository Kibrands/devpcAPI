const { User, Product, Cart, Purchase } = require("./models.js");

//PRODUCTOS
exports.readProducts = (req, res) => {
    Product.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readProduct = (req, res) => {
    Product.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteProduct = (req, res) => {
    Product.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.putProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                stock: req.body.stock,
                image: req.body.image,
                dto: req.body.dto,
                category: req.body.category
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.postProduct = (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        image: req.body.image,
        dto: req.body.dto,
        category: req.body.category
    });
    product.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

//USUARIOS
exports.readUsers = (req, res) => {
    User.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readUser = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteUser = (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.putUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                nick: req.body.nick,
                email: req.body.email,
                password: req.body.password,
                adress: req.body.adress
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.postUser = (req, res) => {
        const user = new User({
            nick: req.body.nick,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress
        });
        user.save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
    }
    //CART
exports.readCarts = (req, res) => {
    Cart.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCart = (req, res) => {
    Cart.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCart = (req, res) => {
    Cart.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.putCart = (req, res) => {
    Cart.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                userId: req.body.userId,
                productId: req.body.productId,
                amount: req.body.amount
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.postCart = (req, res) => {
        const cart = new Cart({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: req.body.amount
        });
        cart.save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
    }
    //PURCHASE
exports.readPurchases = (req, res) => {
    Purchase.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readPurchase = (req, res) => {
    Purchase.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deletePurchase = (req, res) => {
    Purchase.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.putPurchase = (req, res) => {
    Purchase.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                cart: req.body.cart,
                payment: req.body.payment,
                paid: req.body.paid
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.postPurchase = (req, res) => {
    const purchase = new Purchase({
        cart: req.body.cart,
        payment: req.body.payment,
        paid: req.body.paid
    });
    purchase.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}