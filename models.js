const mongoose = require('mongoose');

const User = mongoose.model('User',
    new mongoose.Schema({ nick: String, email: String, password: String, adress: String })
);

const Product = mongoose.model('Product',
    new mongoose.Schema({ title: String, price: Number, description: String, stock: Number, image: String, dto: Number })
);

const Cart = mongoose.model('Cart',
    new mongoose.Schema({ userId: Number, productId: Number, amount: Number })
);

const Purchase = mongoose.model('Purchase',
    new mongoose.Schema({ cart: Array, payment: String, paid: Boolean })
);

module.exports = {
    Product,
    User,
    Cart,
    Purchase
}