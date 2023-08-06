const express = require('express');
const router = express.Router();

const { addProduct, getProduct } = require('../controller/productControler');

router.post('/', addProduct);
router.get('/getproduct', getProduct);



module.exports = router;