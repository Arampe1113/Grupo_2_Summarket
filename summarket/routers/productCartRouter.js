const express = require('express');
const router = express.Router();
const productCartCont = require('../controllers/productCartCont');

router.get('/productCart', productCartCont.productCart);

module.exports = router;
