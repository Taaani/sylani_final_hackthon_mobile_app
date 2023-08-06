const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
