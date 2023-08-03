const mongoose = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: Product }],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
