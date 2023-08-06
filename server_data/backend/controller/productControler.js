const asyncHandler = require('express-async-handler')
const productModel = require('../models/productModel');


const addProduct = asyncHandler(async (req, res) => {
    console.log('productController=>', req.body);

    const { pname, catagory, price, color, size } = req.body
    // Hash the password using SHA256

    // const myuser = { email, password: upassword, uname, city }

    // console.log('My user for signup', myuser)

    const user = await productModel.create({
        pname,
        catagory,
        price,
        color,
        size
    })
    if (user) {
        res.status(200).json({ message: 'your product is addes' })
    } else {
        res.status(400).json({ message: 'something wrong in prod' })
    }


})

const getProduct = asyncHandler(async (req, res) => {
    try {
        const products = await productModel.find();
        console.log(products);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }


})


module.exports = {
    addProduct,
    getProduct

}