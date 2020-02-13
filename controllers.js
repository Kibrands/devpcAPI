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
            dto: req.body.dto
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
        dto: req.body.dto
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
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock,
            image: req.body.image
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
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        image: req.body.image
    });
    user.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}