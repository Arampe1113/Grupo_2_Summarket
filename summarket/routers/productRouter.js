const express = require('express');
const router = express.Router();
const productCont = require('../controllers/productController');

router.get('/productCart', productCont.productCart);

router.get('/productDetail', productCont.productDetail);

module.exports = router;
