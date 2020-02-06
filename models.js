const mongoose = require('mongoose');

const User = mongoose.model('User',
    new mongoose.Schema({ _id: Number, nick: String, email: String, password: String, adress: String })
);

const Product = mongoose.model('Product',
    new mongoose.Schema({ _id: Number, title: String, price: Number, description: String, stock: Number, image: String })
);

const Cart = mongoose.model('Cart',
    new mongoose.Schema({ userId: Number, productId: Number, amount: Number })
);

const Purchase = mongoose.model('Purchase',
    new mongoose.Schema({ cart: Array, payment: String })
);

module.exports = {
    Product,
    User,
    Cart,
    Purchase
}